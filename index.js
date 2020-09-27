'use strict';

//  requir the events.js to use the eventsInstance
const event = require ('./moduler/events.js');

//  requir the caps file to use the pickup function
const readyToPickup = require ('./moduler/caps.js').readyToPickup;

//  requir the caps file to use the orderInTransit function
const orderInTransit = require ('./moduler/caps.js').orderInTransit;

//  requir the caps file to use the orderInTransit function
const orderInTransit = require ('./moduler/caps.js').orderInTransit;

//  requir the caps file to use the finaldelivery function
const finaldelivery = require ('./moduler/caps.js').finaldelivery;

event.on('pickup', readyToPickup);

require('./moduler/driver.js');
require('./moduler/vendor.js');

event.on('in-transit', orderInTransit);
event.on('delivered', finaldelivery);

