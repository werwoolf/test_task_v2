let arr = [1, 2, 3, 4, 5, 6, 7, 8];
let n = 3;

function chunkArray(arr, n) {
  let rezult = [];
  let l = Math.ceil(arr.length/n)
 for(i=0; i<l; i++){
   for(iArr=[], k=0; k<n; k++){
    let j = arr[k+i*n]
    if(j){
      iArr.push(j)
    }
   }
   rezult.push(iArr)
 }
  console.log(rezult);
  return rezult
}

let rez = chunkArray(arr, 3)





