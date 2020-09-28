'use strict';
require('dotenv').config();
const { Socket } = require('dgram');
// requir the net module to  create a server
const net  = require ('net');

//  creating a server using the net module
const server = net.createServer();

// create a port to the server it will be either from the .env file or 3030
const PORT = process.env.PORT || 3030

// START THE SERVER AND RUN IT ON THE PORT
server.listen(PORT, ()=>{console.log(`server is runinig on ${PORT}`)});

// Creates a pool of connected clients
let socketPool = [];

let logger = (payload) =>{
  let event = JSON.parse(payload.toString());
  console.log('event>>>>>>>>', event);
  socketPool.forEach(socket => {
    socket.write(payload);
  });
  if (event.event === 'pickup') {
    console.log('pickup');
    console.log(event.customerOrder);
  }
  if (event.event === 'in-transit') {
    console.log('in-transit', event.order.orderId);

  }if (event.event === 'delivered') {
    console.log('delivered', event.customerOrder.orderId);
  }
  // if (event.event === 'fDelivered') {
  //   console.log('fDelivered', event.order.orderId);
  // }
   if (event.event === 'fDeliverd') 
  console.log('fDelivered', event.customerOrder.orderId);
  
}

server.on('connection', (socket)=>{
  socketPool.push(socket);
  socket.on('data', logger)
})









// // requir the faker module to get fake data
// const fakeData = require ('faker/locale/en');
// // const { Socket } = require('dgram');
// // using the faker to create a fake driverName
// const driverName = fakeData.name.findName();

// // using the faker to create a fake driverName
// const vendorName = fakeData.name.findName();
// // function to handel that the order if ready to pickup
// function pickupOrder (payload){
//   console.log('EVENT { event:  pickup');
//   console.log( payload.orderTime);
//   console.log('payload:');
//   console.log('{store Name: ', payload.storeName);
//   console.log('order ID: ', payload.orderId);
//   console.log('customer Name: ', payload.customerName );
//   console.log('customer Address: ', payload.customerAddress, '}}');
// }

// //function to give an alert that the order picked up by the driver
// function driverPickUp  (payload){
//   console.log(`DRIVER : The order with the: ${payload.orderId} has been picked up`);
// }


// //function to give an alert that the order in-transit by the driver
// function inTransitOrder  (payload){

//   console.log(`EVENT:'in-transit': The order with the ID: ${payload.orderId} is in the transit from the ${payload.storeName} to ${payload.customerAddress}.`); 
 
// }


// //function to give an alert that the order  delivered up  by the driver
// function driverDelivered (payload){
//   console.log(`The driver ${driverName}: delivered up The order with the ID ${payload.orderId}`);
// }


// // function to tahnks the driver by a log for the dilvery 
// function vendor (payload){
//   console.log(`the Vendor ${vendorName}: thank you ${driverName} for delivering the order that has the follwing ID ${payload.orderId}`);
// }

// // function to send a log that the order has been delivered
// function deliveredOrder(payload){
//   console.log(`EVENT { event: 'delivered'`);
//   console.log(payload.orderTime);
//   console.log('payload:');
//   console.log('{store Name: ', payload.storeName);
//   console.log('order ID: ', payload.orderId);
//   console.log('customer Name: ', payload.customerName );
//   console.log('customer Address: ', payload.customerAddress, '}}');
// }

// module.exports={
//   vendor,
//   driverPickUp,
//   driverDelivered,
//   pickupOrder,
//   inTransitOrder,
//   deliveredOrder,
// };