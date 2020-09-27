'use strict';

//  requir the events.js to use the eventsInstance
const events = require ('./moduler/events.js');

//  requir the caps file to use the pickup function
const pickup = require ('./moduler/caps.js').pickupOrder;

//  requir the caps file to use the orderInTransit function
const inTransit = require ('./moduler/caps.js').inTransitOrder;

//  requir the caps file to use the finaldelivery function
const delivered = require ('./moduler/caps.js').deliveredOrder;



events.on('pickup',pickup);
require('./moduler/driver.js');
require('./moduler/vendor.js');
events.on('in-transit',inTransit);
events.on('delivered',delivered);

