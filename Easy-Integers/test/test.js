/*
Easy: Create the tests below for a function that will take in two integer parameters.
• Write a test that will verify that the function returns the two integers multiplied together.
• Write a test that will verify that the function returns false if invalid parameters are passed in.
• Write a function that will make these tests succeed.
*/

var expect = require('chai').expect;

// describe('testing the tester',function(){
//
//   it('should validate',function(){
//     expect(true).to.be.ok;
//   });
//
// });

describe('multiply integers',function(){
  var multiplyInts = require('../app.js').multiplyInts;
  it('should return result if parameters are valid',function(){
    var a = 5,b = 10;
    expect(multiplyInts(a,b)).to.be.equal(a*b);

  });
  it('should return false if non-integers are passed',function(){
    var a = 'dog',b = 10;
    expect(multiplyInts(a,b)).to.be.false;
  })
})
