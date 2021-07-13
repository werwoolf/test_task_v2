function asyncPlus(x, y, cb) {
 
  return setTimeout(() => console.log(x + y), 1000);
}
let numb = [1, 2];





let toPromise = function(fun, number){
  return new Promise((resolve, reject)=>{
    let x = number[0];
    let y = number[1];
    let f = fun(x,y)
    if(f){
      resolve(f)
    }
    
  })
}

toPromise(asyncPlus, [1, 2]).then(f => console.log(f))



