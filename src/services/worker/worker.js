function setupWebSocket(){
  // Create socket instance.
  this.ws = new WebSocket('ws://city-ws.herokuapp.com/');
  this.currentRetryAttempts
  this.maxRetryAttempts = 60

  this.ws.onerror = (err) => {
    console.error('Some error occurred in socket connection', err)
  };

  this.ws.onopen = () => {
    this.currentRetryAttempts = 0;
  };

  this.ws.onmessage = ({ data }) => {
    const message = JSON.parse(data);
    // Send data to Web worker Instance
    self.postMessage(message)
  }

  this.ws.onclose = function() {
    if (this.currentRetryAttempts <= this.maxRetryAttempts) {
      this.currentRetryAttempts++;
      setTimeout(() => {
        setupWebSocket
      }, 1000);
    }
  };
}

setupWebSocket();