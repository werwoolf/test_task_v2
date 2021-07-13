let x =
  "Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Int32 Double Double Double";

String.prototype.removeDuplicate = function () {
  let arrJ = this.split(" ");
  let rezult = [];
  for (i = 0; i < arrJ.length; i++) {
    if (rezult.indexOf(arrJ[i]) === -1) {
      rezult.push(arrJ[i]);
    }
  }
  rezult = rezult.join(" ");
  return rezult;
};

console.log(x.removeDuplicate());


