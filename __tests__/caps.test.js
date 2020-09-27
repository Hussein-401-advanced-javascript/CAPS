const handler = require('../moduler/caps.js');
let driverName;
let vendorName;
let consoleSpy = jest.spyOn(console, 'log');
describe('Handler', () => {
  it('pickup log', () => {
    let payload = {
      time: '27/09/2020',
      store: 'Asura store',
      orderId: 1234,
      customer: 'Asura',
      address: 'Aleppo',
      driverName: 'jojo rabite',
    };
    handler.driverPickUp(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`DRIVER : The order with the: ${payload.orderId} has been picked up`);
  });
  it('in-transit', () => {
    let payload = {
      time: '27/09/2020',
      store: 'Asura store',
      orderId: 1234,
      customer: 'Asura',
      address: 'Aleppo',
      driverName: 'jojo rabite',
    };
    handler.driverDelivered(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(`The driver ${driverName}: delivered up The order with the ID ${payload.orderId}`);
    }, 3000);
  });
  it('vendor', () => {
    let payload = {
      time: '27/09/2020',
      store: 'Asura store',
      orderId: 1234,
      customer: 'Asura',
      address: 'Aleppo',
      vendorName: 'jojo rabite1',
      driverName: 'jojo rabite2',
    };
    handler.driverDelivered(payload);
    setTimeout(() => {
      expect(consoleSpy).toHaveBeenCalledWith(`the Vendor ${vendorName}: thank you ${driverName} for delivering the order that has the follwing ID ${payload.orderId}`);
    }, 5000);
  });
  it('transit', () => {
    let payload = {
      time: '27/09/2020',
      store: 'Asura store',
      orderId: 1234,
      customer: 'Asura',
      address: 'Aleppo',
    };
    handler.inTransitOrder(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`EVENT:'in-transit': The order with the ID: ${payload.orderId} is in the transit from the ${payload.storeName} to ${payload.customerAddress}.`);
  });
  it('delivered order', () => {
    let payload = {
      time: '27/09/2020',
      store: 'Asura store',
      orderId: 1234,
      customer: 'Asura',
      address: 'Aleppo',
    };
    handler.deliveredOrder(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`EVENT { event: 'delivered'`);
    expect(consoleSpy).toHaveBeenCalledWith(payload.orderTime);
    expect(consoleSpy).toHaveBeenCalledWith('payload:');
    expect(consoleSpy).toHaveBeenCalledWith('{store Name: ', payload.storeName);
    expect(consoleSpy).toHaveBeenCalledWith('order ID: ', payload.orderId);
    expect(consoleSpy).toHaveBeenCalledWith('customer Name: ', payload.customerName);
    expect(consoleSpy).toHaveBeenCalledWith('customer Address: ', payload.customerAddress, '}}');
  });
  
  it('pickup order', () => {
    let payload = {
      time: '27/09/2020',
      store: 'Asura store',
      orderId: 1234,
      customer: 'Asura',
      address: 'Aleppo',
    };
       
    handler.pickupOrder(payload);
    expect(consoleSpy).toHaveBeenCalledWith(`EVENT { event:  pickup`);
    expect(consoleSpy).toHaveBeenCalledWith(payload.orderTime);
    expect(consoleSpy).toHaveBeenCalledWith('payload:');
    expect(consoleSpy).toHaveBeenCalledWith('{store Name: ', payload.storeName);
    expect(consoleSpy).toHaveBeenCalledWith('order ID: ', payload.orderId);
    expect(consoleSpy).toHaveBeenCalledWith('customer Name: ', payload.customerName);
    expect(consoleSpy).toHaveBeenCalledWith('customer Address: ', payload.customerAddress, '}}');
  });
});