'use strict';

const io = require('socket.io')(3000);


const caps = io.of('/caps');

caps.on('connection', (socket) => {
  console.log(new Date().toLocaleTimeString(), 'Connected : ', socket.id);

  let currentRoom = '';

  socket.on('join', (room) => {

    socket.join(room);
    currentRoom = room;

    console.log({ currentRoom });

  });

  socket.on('pickup', (payload) => {
    caps.emit('pickup', payload);
    broadcast('pickup',payload);
  });

  socket.on('in-transit', (payload) => {
    caps.emit('in-transit', payload);
    broadcast('in-transit',payload);
    
  });
  
  socket.on('delivered', (payload) => {
    caps.emit('delivered', payload);
    broadcast('delivered',payload);
    
  });
  
});

/**
 * this function to brodcast and send the event and payload 
 * @param {*} event 
 * @param {*} payload 
 */
function broadcast(event , payload){
  console.log({event,payload});
}

module.exports = caps;