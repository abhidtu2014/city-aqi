 // Create socket instance.
 const socket = new WebSocket("ws://city-ws.herokuapp.com/");
 
 // Send data from socket to all open tabs.
 socket.onmessage = ({ data }) => {
   const message = JSON.parse(data);
   self.postMessage(message)
 }

 
 