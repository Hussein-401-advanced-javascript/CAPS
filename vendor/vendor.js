'use strict';
require('dotenv').config();
var faker = require('faker');
const net = require('net');

const client = new net.Socket();  

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

/**
 * to listining on port and  host 
 */
client.connect(port, host, ()=> {
    console.log("vendor Connecting ... ");
});

client.on('data', (data)=> {
  let jsonData = JSON.parse(data);
  // console.log('jsonData>>',jsonData);
  if(jsonData.event == 'delivered'){
        console.log(`VENDOR:  : thank you for delivering ${jsonData.payload.orderId}`);
  }

});

client.on('close', function () {
  clearInterval(interval);
  console.log("connection is closed!!");

});



/**
  * this function to have an object and use the fake data inside the obj and emit for events pickup
  */
function dataObj(){
    
  let obj = { storeCompany: process.env.STORE_NAME,
    orderId : faker.random.number() ,
    Customer: faker.name.findName() ,
    Address: faker.address.streetAddress(), 
  };    

  const msg = JSON.stringify({event: 'pickup' , payload: obj});
  client.write(msg);

}

let interval = setInterval(dataObj,5000);

