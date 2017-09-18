var modifyObject = function(obj){

if(typeof obj === 'object'){
  for (var i in obj){
    if('Age' in obj[i]){
      obj[i].Age = (parseInt(obj[i].Age) + 5).toString();
    }else{
      return false;
    }

  }
  return obj;
}else {
  return false;
}

}

module.exports.modifyObject = modifyObject;
