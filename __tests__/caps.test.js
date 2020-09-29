'use strict';
const event = require('../event.js');
require('../server/caps.js');
let server = require('../server/caps.js')


afterAll(done => {
    server.close();
    done();
});

describe('Events Handler' , ()=>{
  let consoleSpy;

  consoleSpy = jest.spyOn(console, 'log').mockImplementation();


  // let payload = {storeCompany:'laithStore' ,
  //   orderId:123 ,
  //   Customer: 'laith',
  //   Address: 'jordan-al Azraq'};

  console.log('consoleSpy',consoleSpy);

  it('pickup', () => {
    event.emit('pickup',{});
    expect(consoleSpy).toHaveBeenCalled();
  });
  

  it('in-transit', () => {
    event.emit('in-transit',{});
    expect(consoleSpy).toHaveBeenCalled();
  });
  
  it('delivered', () => {
    event.emit('delivered',{});
    expect(consoleSpy).toHaveBeenCalled();
  });

});