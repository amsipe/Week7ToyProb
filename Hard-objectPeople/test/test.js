/*
Hard: Create the tests below for a function that will take in an object of N people. Each person will have a string age property and a string location property.  The function will return an entire original object with each person’s age + 5 years. Note that the properties should be returned as a string since they were passed in as a string.
• Write a test that will verify that the function returns an object with a single person’s age modified correctly.
• Write a test that will verify that the function returns an object with 5 people with their ages modified correctly.
• Write a test that will verify that the function returns false if an invalid parameter is passed in.
• Write a function that will make these tests succeed.
Example Parameter --
{
    Chris: {
        Age: ’26’,
        Location: ‘Charlotte',
    },
    Jonathan: {
        Age: ’32’,
        Location: ‘Atlanta’,
    },
}
Example Returned Object —
{
    Chris: {
        Age: ’31’,
        Location: ‘Charlotte',
    },
    Jonathan: {
        Age: ’37’,
        Location: ‘Atlanta’,
    },
}
*/

var expect = require('chai').expect;

describe('Returning correct object responses',function(){
  var modifyObject = require('../app.js').modifyObject;
  it('should return an object with persons age\'s increased by 5',function(){
    var person = {
      Timmy: {
        Age: '21',
        Location: 'Atlanta'
      }
    }

    expect(modifyObject(person)).to.deep.equal({
      Timmy: {
        Age: '26',
        Location: 'Atlanta'
      }
    });

  });

  it('should return all objects passed with correct age modified ',function(){
    var persons = {
      Timmy: {
        Age: '21',
        Location: 'Atlanta'
      },
      Donald: {
        Age: '74',
        Location: 'Neverland'
      },
      Ralph: {
        Age: '45',
        Location: 'Charlotte'
      },
      Harry: {
        Age: '18',
        Location: 'Hogwarts'
      },
      Andy: {
        Age: '32',
        Location: 'Party Town'
      }
    }
    modifyObject(persons);
    expect(persons.Timmy.Age).to.be.equal('26');
    expect(persons.Donald.Age).to.be.equal('79');
    expect(persons.Ralph.Age).to.be.equal('50');
    expect(persons.Harry.Age).to.be.equal('23');
    expect(persons.Andy.Age).to.be.equal('37');

  });

  it('should return false if invalid parameter is passed',function(){
    var person = {
      Daniel: {
        Location: 'Nowhere'
      }
    }
    var personString = 'Andy is 32 years old';

    expect(modifyObject(person)).to.be.false;
    expect(modifyObject(personString)).to.be.false;

  });
})
