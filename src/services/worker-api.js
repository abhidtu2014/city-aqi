import store from "../store";
// import AQIService from "./AQIService";
import PromiseWorker from 'promise-worker'

import SharedWorker from "worker-loader!./SharedWebWorkerChild.js";

const initWebWorkerService = function() {
  try {
    if (window.SharedWorker) {
      console.log("Inside Web worker");
      // Create shared worker.
      const webSocketWorker = new PromiseWorker(new SharedWorker());
      console.log(
        "🚀 ~ file: SharedWebWorkerParent.js ~ line 8 ~ initWebWorkerService ~ webSocketWorker",
        webSocketWorker
      );

      /**
       * Sends a message to the worker and passes that to the Web Socket.
       * @param {any} message 
       */
      // const sendMessageToSocket = message => {
      //   webSocketWorker.port.postMessage({ 
      //     action: 'send', 
      //     value: message,
      //   });
      // };

      // Event to listen for incoming data from the worker and update the DOM.
      webSocketWorker.port.onmessage = ({data}) => {
        console.log('SharedWebWorker Listener', data)
        requestAnimationFrame(() => {
          store.dispatch("updateCityAQI", data);
        });
      }

      // Initialize the port connection.
      // webSocketWorker.start();

      // Remove the current worker port from the connected ports list
      window.addEventListener("beforeunload", () => {
        console.log("Unloading");
        webSocketWorker.port.postMessage({
          action: "unload",
          value: null
        });
        webSocketWorker.port.close();
      });
    } else {
      console.log("Web worker not available");
      // AQIService.init();
    }
  } catch (error) {
    console.error("Error Spawning Web Worker", error);
  }
};

export default initWebWorkerService;
