let obj = {
  name: "developer",
  age: 5,
  skills: {
    html: 4,
    css: 5,
    js: 5,
  },
};

function objectToArray(obj) {
  let rezult = [];
  for (key in obj) {
    let subArr = [];
    if(typeof obj[key]=='object'){
      subArr.push(key, objectToArray(obj[key]))
    }else{
      subArr.push(key, obj[key]);
    }
    
    rezult.push(subArr);
  }
  return rezult;
}
console.log(objectToArray(obj))

