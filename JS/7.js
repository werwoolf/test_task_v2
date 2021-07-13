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

  Object.entries(obj).forEach(([key, value]) =>
  rezult.push(key,value)
    // console.log(`${key}: ${value}`)
  );
}

objectToArray(obj);

console.log(Object.entries(obj));
