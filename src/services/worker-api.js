import store from "../store";
import Worker from "worker-loader!./socketWorker.js";

const initWebWorkerService = function() {
    const webSocketWorker = new Worker();

    webSocketWorker.onmessage = ({data}) => {
      store.dispatch("updateCityAQI", data);
    }
    webSocketWorker.onerror = (err) => {
      console.log('error occured', err)
    }
};

export default initWebWorkerService;
