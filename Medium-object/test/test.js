/*
Medium: Create the tests below for a function that will take in a single object parameter with two properties, a string and a single character. 
• Write a test that will verify that the function returns the first indice where that character is found in the string.
• Write a test that will verify that the function returns false if the character is not found in the string.
• Write a test that will verify that the function returns false if the parameter passed into the function is invalid.
• Write a function that will make these tests succeed.
*/

var expect = require('chai').expect;

describe('Testing on object',function(){
  var objectTest = require('../index.js').objectTest;


  it('should return the first index of the letter in the string property',function(){
    var testObject = {
      prop1: 'hotdog',
      prop2: 't'
    }
    expect(objectTest(testObject)).to.be.equal(testObject.prop1.indexOf(testObject.prop2));
  });

  it('should return false if character is not found in the string',function(){
    var testObject = {
      prop1: 'hotdog',
      prop2: 'x'
    }
    expect(objectTest(testObject)).to.be.false;
  })

  it('should return false if an invalid parameter is passed',function(){
    var testObject = 'hotdog'
    expect(objectTest(testObject)).to.be.false;
  });

})
