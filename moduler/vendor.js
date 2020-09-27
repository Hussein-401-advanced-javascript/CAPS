'use strict';
// requir the faker module to get fake data
const fakeData = require ('faker/locale/en')

//  requir the caps file to use the vendor function
const vendor = require ('./caps.js').vendor;

//  requir the events.js to use the eventsInstance
const event = require ('./events.js');

// using the faker to create a fake company name
const storeName = fakeData.company.companyName();

// using the faker to create a fake orderID
const orderID = fakeData.random.uuid();

// using the faker to create a fake customerName
const customerName = fakeData.name.findName();

// using the faker to create a fake DRIVERName
const DRIVERName = fakeData.name.findName();

// using the faker to create a fake customerAddress1 (name of country)
const customerAddress1 = fakeData.address.country();

// using the faker to create a fake customerAddress2 (name of county)
const customerAddress2 = fakeData.address.county();

// using the faker to create a fake customerAddress3 (name of streetAddress)
const customerAddress3 = fakeData.address.streetAddress();
// concatenate all address
let customerAddress = `${customerAddress1}, ${customerAddress2}, ${customerAddress3}`;

// requesting time and consoling the info.
let Date1 = new Date().toDateString();
let timeInHours = new Date().getHours();
let timeInMinutes = new Date().getMinutes();
let timeInSeconds = new Date().getSeconds();
let orderTime = `order time:  ${Date1}, ${timeInHours}:${timeInMinutes}:${timeInSeconds}`

// declear the fake data we will use it in the order
// set a setInterval to simulate a new customer order
 setInterval(()=>{
console.log('>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<>>>>>>>>>>>>>>>>>>>>>>>>>');
const order = {
    storeName: storeName,
    orderID:orderID,
    customerName:customerName,
    customerAddress:customerAddress,
    orderTime: orderTime
    }
    
    event.emit('pickup', order)
// the Interval is five seconds
 },5000);

 event.on('delivered', vendor )
