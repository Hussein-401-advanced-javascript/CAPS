'use strict';

//  requir the events.js to use the eventsInstance
const event = require ('./events.js');

//  requir the caps file to use the pickup function
const pickup = require ('./caps.js').readyToPickup;

//  requir the caps file to use the delivery function
const delivery = require ('./caps.js').orderDeliveredUpByThedriver;


function gotDelivered(payload){
    event.emit('in-transit', payload.orderID)
    setTimeout(()=>{
        event.emit('Delivered', payload)
    },1000);
};
event.on('pickup', pickup );
event.on('pickup', gotDelivered );
event.on('delivered', delivery );