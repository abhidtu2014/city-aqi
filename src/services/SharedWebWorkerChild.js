/**
 * Array to store all the connected ports.
 */

console.log('Inside child')
 const connectedPorts = [];

 // Create socket instance.
 const socket = new WebSocket("ws://city-ws.herokuapp.com/");
 
 // Send data from socket to all open tabs.
 socket.onmessage = ({ data }) => {
   const message = JSON.parse(data);
   console.log('Received message', message);
   console.log({connectedPorts})
   connectedPorts.forEach(port => port.postMessage(message));
 }
 
 /**
  * When a new thread is connected to the shared worker,
  * start listening for messages from the new thread.
  */
 self.onconnect = ({ ports }) => {
   console.log('Connect', ports);
   const port = ports[0];
 
   // Add this new port to the list of connected ports.
   connectedPorts.push(port);
 
   /**
    * Receive data from main thread and determine which
    * actions it should take based on the received data.
    */
   port.onmessage = ({ data }) => {
     const { action } = data;
      if (action === 'unload') {
       const index = connectedPorts.indexOf(port);
       connectedPorts.splice(index, 1);
     }
   }
 
   // Start the port broadcasting.
   port.start();
 }
 