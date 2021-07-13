let url ="https://lh3.googleusercontent.com/i7cTyGnCwLIJhT1t2YpLW-zHt8ZKalgQiqfrYnZQl975-ygD_0mOXaYZMzekfKW_ydHRutDbNzeqpWoLkFR4Yx2Z2bgNj2XskKJrfw8"


function getBase64FromUrl(url) {
  return new Promise((resolve,reject)=>{
    var img = new Image();
  img.setAttribute("crossOrigin", "anonymous");
  img.src = url;
  img.onload = function () {
    var canvas = document.createElement("canvas");
    var ctx = canvas.getContext("2d");
    ctx.drawImage(this, 0, 0);
    var dataURL = canvas.toDataURL();
    resolve (dataURL);
    reject ("error")
  };
  })
} 


getBase64FromUrl(url)
  .then((k) => {
    console.log(k);
  })
  .catch((err) => {
    console.log(err);
  });
