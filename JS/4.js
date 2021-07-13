let arr = [1, 2, 3, 2, 1, 3, 4, 5, 5, 7];

function firstUnique(arr){
  let uniqVAl = [];
  arr=arr.sort()
  for(i=0; i<arr.length; i++){
    if (arr[i]!=arr[i+1] && arr[i]!=arr[i-1] ){
      uniqVAl.push(arr[i])
    }
  }
  return uniqVAl[0]
}



console.log(firstUnique(arr)) 










// function firstUnique(arr) {
//   let uniqAr = [];
//   arr.forEach((element, index) => {
//     let inAr = arr.slice(index + 1);
//     console.log(element);
//   });
// }


