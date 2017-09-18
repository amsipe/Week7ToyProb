

var objectTest = function(obj){

  if(typeof obj === 'object'){
    var index = obj.prop1.indexOf(obj.prop2);
    console.log(index);
    if(!(index === -1)){
      return index;
    }else{
      return false;
    }
  }else {
    return false;
  }
}

module.exports.objectTest = objectTest;
