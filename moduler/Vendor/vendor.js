'use strict';
require('dotenv').config();

// requir the net module to  create a server
const net  = require ('net');
const socket = new net.Socket()
/************************************************************************ */
// requir the faker module to get fake data
const fakeData = require ('faker/locale/en');

// using the .env file we will get  STORE_NAMEE, HOST AND PORT
// STORE_NAMEE
const STORE_NAME = process.env.STORE_NAME || 'Asura-Store';
// HOST
const HOST = process.env.HOST || 'localhost';
//PORT
const PORT = process.env.PORT || 3030
socket.connect(PORT, HOST, ()=>{
  console.log('the Vendor is connected......');
})
//  requir the caps file to use the vendor function
// const vendor = require ('./caps.js').vendor;

// //  requir the events.js to use the eventsInstance
// const events = require ('../events.js');
/*************************************************************************************************** */

// using the faker to create a fake company name
// const storeName = fakeData.company.companyName();

// using the faker to create a fake orderID
const orderId = fakeData.random.uuid();

// using the faker to create a fake customerName
const customerName = fakeData.name.findName();

// using the faker to create a fake customerAddress1 (name of country)
const customerAddress1 = fakeData.address.country();

// using the faker to create a fake customerAddress2 (name of county)
const customerAddress2 = fakeData.address.county();

// using the faker to create a fake customerAddress3 (name of streetAddress)
const customerAddress3 = fakeData.address.streetAddress();
// concatenate all addresses
let customerAddress = `${customerAddress1}, ${customerAddress2}, ${customerAddress3}`;

// requesting time and consoling the info.
let Date1 = new Date().toDateString();
let timeInHours = new Date().getHours();
let timeInMinutes = new Date().getMinutes();
let timeInSeconds = new Date().getSeconds();
let orderTime = `order time:  ${Date1}, ${timeInHours}:${timeInMinutes}:${timeInSeconds}`;
/*************************************************************************************************************************** */


// declear the fake data we will use it in the order
// set a setInterval to simulate a new customer order
setInterval(()=>{
  console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>');
  const order = {
    STORE_NAME: process.env.STORE_NAME ||'Asura-Store' ,
    orderId: orderId,
    customerName:customerName,
    customerAddress:customerAddress,
    orderTime: orderTime,
  };
    socket.write(JSON.stringify({event:'pickup', customerOrder: order}))
  // events.emit('pickup', order);
// the Interval is five seconds
},5000);

socket.on('data', (payload)=>{
  let event = JSON.parse(payload.toString())
  if (event.event === 'fDeliverd') 
    socket.write(JSON.stringify({event:'fDeliverd', order: event.customerOrder}))

})

// events.on('delivered', vendor );
socket.on('close', ()=> console.log('the Vendor connction is closed'));
socket.on('error', (err)=> console.log('the Vendor socket error', err.message));




// events.on('delivered', handler);