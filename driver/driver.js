'use strict';
require('dotenv').config();
const net = require('net');
const client = new net.Socket();  

const host = process.env.HOST || 'localhost';
const port = process.env.PORT || 4000;

/**
 * to listining on 
 */
client.connect(port, host, ()=> {
  console.log('Driver Connecting ... ');
});


let time1 , time2 ;
client.on('data', (data)=> {

  let jsonData = JSON.parse(data);
  // console.log('jsonData>>',jsonData);

  if(jsonData.event == 'pickup'){
    time1 = setTimeout(()=>{
      console.log(`DRIVER : picked up ${jsonData.payload.orderId}`);

      let msg = JSON.stringify({event: 'in-transit' , payload: jsonData.payload});
      client.write(msg);

    },1000);

    time2 =  setTimeout(()=>{
      console.log(`DRIVER : delivered up ${jsonData.payload.orderId}`);

      let msg = JSON.stringify({event: 'delivered' , payload: jsonData.payload});
      client.write(msg);
    },3000);

  }

});

/**
 * to close the connection
 */
client.on('close', function () {
  clearTimeout(time1);
  clearTimeout(time2);
  console.log('connection is closed!!');

});


