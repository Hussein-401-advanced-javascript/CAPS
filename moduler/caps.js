'use strict';

// function to handel that the order if ready to pickup
function pickupOrder (payload){
    console.log('EVENT { event:  pickup');
    console.log( payload.orderTime);
    console.log('payload:');
    console.log('{store Name:', payload.storeName);
    console.log('order ID:', payload.orderId);
    console.log('customer Name:', payload.customerName );
    console.log('customer Address:', payload.customerAddress, '}}');
}

//function to give an alert that the order picked up by the driver
function driverPickUp  (payload){
    console.log(`DRIVER: The order with the: ${payload.orderId} has been picked up `);
}


//function to give an alert that the order in-transit by the driver
function inTransitOrder  (payload){
    console.log(`EVENT:'in-transit': The order with the ID: ${payload.orderId} is in the transit from the ${payload.storeName} to ${payload.customerAddress}.`); 
    // not accsseing the concatenate??????/
}


//function to give an alert that the order  delivered up  by the driver
function driverDelivered (payload){
    console.log(`The driver: delivered up The order with the ID ${payload.orderId}`);
}


// function to tahnks the driver by a log for the dilvery 
function vendor (payload){
    console.log(`Vendor: thank you for delivering the order that has the follwing ID ${payload.orderId}`);
}

// function to send a log that the order has been delivered
function deliveredOrder(payload){
    console.log(`EVENT { event: 'delivered',`);
    console.log(payload.orderTime);
    console.log('payload:');
    console.log('{store Name: ', payload.storeName);
    console.log('order ID: ', payload.orderId);
    console.log('customer Name: ', payload.customerName );
    console.log('customer Address: ', payload.customerAddress, '}}');
}

module.exports={
    vendor,
    driverPickUp,
    driverDelivered,
    pickupOrder,
    inTransitOrder,
    deliveredOrder,
};