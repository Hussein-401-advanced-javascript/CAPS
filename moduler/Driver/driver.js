'use strict';

// // //  requir the events.js to use the eventsInstance
// const events = require ('../events.js');

// //  requir the caps file to use the pickup function
// const pickup = require ('./caps.js').driverPickUp;

// //  requir the caps file to use the delivery function
// const delivery = require ('./caps.js').driverDelivered;
require('dotenv').config();

// requir the net module to  create a server
const net  = require ('net');
const socket = new net.Socket()
/************************************************************************ */
// using the .env file we will get  STORE_NAMEE, HOST AND PORT
// STORE_NAMEE
const STORE_NAME = process.env.STORE_NAME || 'Asura-Store';
// HOST
const HOST = process.env.HOST || 'localhost';
//PORT
const PORT = process.env.PORT || 3030
socket.connect(PORT, HOST, ()=>{
  console.log('the Driver is connected......');
})
/************************************************************************/
socket.on('data', (payload)=>{

  let event = JSON.parse(payload.toString())
  if (event.event === 'pickup') {
    setTimeout(()=>{
      let newEvent = {event: 'in-transit', order: event.customerOrder};
      console.log('picked', event.customerOrder.orderId);
      socket.write(JSON.stringify(newEvent))
    },1000);
  } 
  if (event.event === 'delivered') {
    setTimeout(()=>{
      let newEvent = {event: 'delivered', order: event.customerOrder};
      console.log('picked', event.order.orderId);
      socket.write(JSON.stringify(newEvent))
    },3000);
  }
})
socket.on('close', ()=> console.log('the Driver connction is closed'));
socket.on('error', (err)=> console.log('the Driver socket error', err.message));

// function gotDelivered(payload){
//   events.emit('in-transit', payload);
//   setTimeout(()=>{
//     events.emit('delivered', payload);
//   },3000);
// }
// events.on('pickup', pickup );
// events.on('pickup', gotDelivered );
// events.on('delivered', delivery );
