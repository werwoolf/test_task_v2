function trueEmail() {
  let valEmail = document.querySelector(".email").value;
  let inEmail = document.querySelector(".inEmail");
  let re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(valEmail).toLowerCase())) {
    inEmail.style.color = "black";
    return true;
  } else {
    inEmail.style.color = "red";
    return false;
  }
}

function Filevalidation  ()  {
  let inAvatar = document.querySelector(".inAvatar")
  const fi = document.querySelector(".file");
  const fsize = fi.files.item(0).size;
  const file = Math.round(fsize / 1024);
  if (file <= 1024) {
  
    return true
  }  else {
    inAvatar.style.color = "red";
    alert("слишком большой файл");
    return false
  }
}


function ageValidation(){
  let age = document.querySelector(".age").value
  let inAge = document.querySelector(".inAge");
  let re = /^(\d){1,3}$/g
  if(re.test(String(age))){
    inAge.style.color = "black";
    return true
  }else{
    inAge.style.color = "red";
    return false
  }
  
}

function nameValidation(){
  let name = document.querySelector(".name").value
  let inName = document.querySelector(".inName");
  if(name.length >1 ){
    inName.style.color = "black";
    return true
  }else{
    inName.style.color = "red";
    return false
  }
}


function lastNameValidation(){
  let lastName = document.querySelector(".lastName").value
  let inLastName = document.querySelector(".inLastName");
  if(lastName.length >1 ){
   
    inLastName.style.color = "black";
    return true
  }else{
    inLastName.style.color = "red";
    return false
  }
}

function truePassword() {
  let valPassword = document.querySelector(".password").value;
  let inPassword = document.querySelector(".inPassword");
  let re =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
  if (re.test(String(valPassword))) {
    inPassword.style.color = "black";
    return true;
  } else {
    inPassword.style.color = "red";

    return false;
  }
}


function validAll(){
  // console.log(trueEmail()&&Filevalidation ()&&ageValidation()&&nameValidation()&&lastNameValidation()&&truePassword())
  if(trueEmail()&&Filevalidation ()&&ageValidation()&&nameValidation()&&lastNameValidation()&&truePassword()){
    let but = document.querySelector(".subButton button")
    console.log("but")
    but.removeAttribute("disabled")
  }
}


