'use strict';
require('dotenv').config();
const uuid = require('uuid-random');


const net = require('net');
const server = net.createServer();

const port = process.env.PORT || 4000;
server.listen(port, () => console.log(`server runing on ${port}`));

let socketPool = {};


server.on('connection', (socket) => {
  console.log(' user is online !!!');

  let id = uuid();
  socketPool[id] = socket;

  socket.on('data', buffer => {
    // encoded buffer
    // console.log("buffer >>>> ", buffer);
    // parse buffer
    let msg = JSON.parse(buffer.toString());
    console.log('msg >>> ', msg);

    if (msg.event == 'pickup' || msg.event == 'in-transit' || msg.event == 'delivered') {
      broadcast(msg);
    }else {
      console.log('nothing');
    }

  });

  server.on('error', (e) => {
    console.log('ERROR !!!!!!! ', e);
  });

  server.on('close', () => {
    delete socketPool[id];
  });

});

/**
 * this function send the payload to the driver and vendor
 * @param {*} msg 
 */
function broadcast(msg) {
  let payload = JSON.stringify(msg);
  for (let id in socketPool) {
    socketPool[id].write(payload);
  }
}


module.exports = server