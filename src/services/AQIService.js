// Deprecated: Now using worker-api instead
import store from '../store';

class AQIService {
  #socket;
  constructor () {
    this.#socket = new WebSocket('ws://city-ws.herokuapp.com/')
  }

  init() {
    this.mountOnMessage()
    this.mountOnError() 
  }

  mountOnMessage() {
    this.#socket.onmessage = event => {
      const data = JSON.parse(event.data);
      store.dispatch('updateCityAQI', data);
    };
  }

  mountOnError() {
    this.#socket.onerror = event => {
      console.error(JSON.parse(event.data));
    }
  }

  closeConnection () {
    this.#socket.close()
  }
}

export default new AQIService()