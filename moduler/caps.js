'use strict';
// requir the faker module to get fake data
// const fakeData = require ('faker');

// function to handel that the order if ready to pickup
function readyToPickup(payload){
    console.log(`EVENT { event: 'pickup',`);
    console.log('time', payload.orderTime);
    console.log('store', payload.storeName);
    console.log('orderID', payload.orderID);
    console.log('customerName', payload.customerName );
    console.log('customerAddress', payload.customerAddress);
}

//function to give an alert that the order picked up by the driver
function orderReadyToPickupByThedriver  (payload){
    console.log(`The order with the: ${payload.orderID} has been picked up `);
}

//function to give an alert that the order in-transit by the driver
function orderInTransit  (payload){
    console.log(`EVENT:'in-transit'.The order with the ID: ${payload.orderID} is in the transit from the ${payload.storeName} to ${payload.customerAddress}.`);
}

//function to give an alert that the order  delivered up  by the driver
function orderDeliveredUpByThedriver (payload){
    console.log(`The driver${payload.driverName}: delivered up The order with the ID ${payload.orderID}`);
}
// function to tahnks the driver by a log for the dilvery 
function vendor (payload){
    console.log(`Vendor: thank you for delivering the order that has the follwing ID ${payload.orderID}`);
}

// function to send a log that the order has been delivered
function finaldelivery(payload){
    console.log(`EVENT { event: 'pickup',`);
    console.log('time', payload.orderTime);
    console.log('store', payload.storeName);
    console.log('orderID', payload.orderID);
    console.log('customerName', payload.customerName );
    console.log('customerAddress', payload.customerAddress);
}

// exporting the finction to use it in other files
module.exports= {
    readyToPickup,
    orderReadyToPickupByThedriver,
    orderInTransit,
    orderDeliveredUpByThedriver,
    vendor,
    finaldelivery
}