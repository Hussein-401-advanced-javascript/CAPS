'use strict';

/**
 * to have the events instance and export it to another file 
 */
const events = require('events');

const newEvent = new events();

// exporting the same instance 
// same events pool is exported 
module.exports = newEvent ;