let x = 'test task'

String.prototype.toTitleCase = function (){
let arrJ = this.split(' ')
let rezult = []
for(i=0; i<arrJ.length; i++){
  x =  arrJ[i][0].toUpperCase() + arrJ[i].slice(1)
rezult.push(x)
}
rezult = rezult.join(' ')
return rezult
}


console.log(x.toTitleCase());