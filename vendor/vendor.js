'use strict';
require('dotenv').config();
var faker = require('faker');

const io = require('socket.io-client');
const caps = io.connect('http://localhost:3000/caps');

const storeName = process.env.STORE_NAME;
caps.emit('join', (storeName) );
  

caps.on('delivered', (payload) => {

    console.log(`VENDOR:  : thank you for delivering ${payload.orderId}`);

})


/**
  * this function to have an object and use the fake data inside the obj and emit for events pickup
  */
function dataObj(){
    
  let obj = { storeCompany: process.env.STORE_NAME,
    orderId : faker.random.number() ,
    Customer: faker.name.findName() ,
    Address: faker.address.streetAddress(), 
  };    

    caps.emit('pickup',obj);
}

 setInterval(dataObj,5000);