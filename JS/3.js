function asyncPlus(x, y, cb) {
  return setTimeout(() => cb * (x + y), 1000);
}
let numb = [1, 2];

function toPromise(fun, number) {
  return new Promise((resolve, reject) => {
    let x = number[0];
    let y = number[1];
	let res = fun(x, y)
	console.log(x,y)
    resolve(res);
	reject('error')
  });
}

toPromise(asyncPlus, [1,2])
.then((k) => console.log(k))


