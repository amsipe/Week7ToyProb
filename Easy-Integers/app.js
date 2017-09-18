/*
Easy: Create the tests below for a function that will take in two integer parameters.
• Write a test that will verify that the function returns the two integers multiplied together.
• Write a test that will verify that the function returns false if invalid parameters are passed in.
• Write a function that will make these tests succeed.
*/

var multiplyInts = function(a,b){
  if(a === parseInt(a) && b === parseInt(b)){
      return a*b;
  }else {
    return false;
  }

};

module.exports.multiplyInts = multiplyInts;
