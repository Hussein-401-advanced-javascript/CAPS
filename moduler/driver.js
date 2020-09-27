// 'use strict';

// //  requir the events.js to use the eventsInstance
const events = require ('./events.js');

//  requir the caps file to use the pickup function
const pickup = require ('./caps.js').driverPickUp;

//  requir the caps file to use the delivery function
const delivery = require ('./caps.js').driverDelivered;


function gotDelivered(payload){
    events.emit('in-transit', payload)
    setTimeout(()=>{
        events.emit('delivered', payload)
    },3000);
};
events.on('pickup', pickup );
events.on('pickup', gotDelivered );
events.on('delivered', delivery );
