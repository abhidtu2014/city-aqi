import store from "../../store";
import Worker from "worker-loader!./worker.js";

const initWebWorkerService = function() {
    const webSocketWorker = new Worker();

    webSocketWorker.onmessage = ({data}) => {
      store.dispatch("updateCityAQI", data);
    }
    webSocketWorker.onerror = (err) => {
      console.log('Some error Occurred in Web Worker', err)
    }
};

export default initWebWorkerService;
