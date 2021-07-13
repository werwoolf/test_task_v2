function asyncPlus(x, y, cb) {
  return setTimeout(() => cb * (x + y), 3000);
}
let numb = [1, 2];

function toPromise(fun, number) {
  return new Promise((resolve, reject) => {
    let x = number[0];
    let y = number[1];
    fun(x, y);
    resolve();
    reject("error");
  });
}

toPromise(asyncPlus, [1, 2]).then(() => console.log("apply"));
