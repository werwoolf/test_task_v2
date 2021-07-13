let errEmail=document.createElement('p')
errEmail.innerHTML="неверный email"


let errFile=document.createElement('p')
errFile.innerHTML="слишком большой файл"


let errAge=document.createElement('p')
errAge.innerHTML="неверный возраст"


let errName=document.createElement('p')
errName.innerHTML="неверное имя"


let errLastName=document.createElement('p')
errLastName.innerHTML="неверная фамилия"


let errPassword=document.createElement('p')
errPassword.innerHTML="неверный пароль"




function trueEmail() {
  let valEmail = document.querySelector(".email").value;
  let inEmail = document.querySelector(".inEmail");
  let re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (re.test(String(valEmail).toLowerCase())) {
    errEmail.remove()
    return true;
  } else {
   
    inEmail.appendChild(errEmail)
    return false;
  }
}

function Filevalidation  ()  {
  let inAvatar = document.querySelector(".inAvatar")
  const fi = document.querySelector(".file");
  const fsize = fi.files.item(0).size;
  const file = Math.round(fsize / 1024);
  if (file <= 1024) {
    errFile.remove()
    return true
  }  else {
    inAvatar.appendChild(errFile)
    return false
  }
}


function ageValidation(){
  let age = document.querySelector(".age").value
  let inAge = document.querySelector(".inAge");
  let re = /^(\d){1,3}$/g
  if(re.test(String(age))){
    errAge.remove()
    return true
  }else{
    inAge.appendChild(errAge)
    return false
  }
  
}

function nameValidation(){
  let name = document.querySelector(".name").value
  let inName = document.querySelector(".inName");
  if(name.length >1 ){
    errName.remove()
    return true
  }else{
    inName.appendChild(errName)
    return false
  }
}


function lastNameValidation(){
  let lastName = document.querySelector(".lastName").value
  let inLastName = document.querySelector(".inLastName");
  if(lastName.length >1 ){
    errLastName.remove()
    return true
  }else{
    inLastName.appendChild(errLastName)
    return false
  }
}

function truePassword() {
  let valPassword = document.querySelector(".password").value;
  let inPassword = document.querySelector(".inPassword");
  let re =
  /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{8,}/
  if (re.test(String(valPassword))) {
    errPassword.remove()
    return true;
  } else {
    inPassword.appendChild(errPassword)

    return false;
  }
}


function validAll(){
  // console.log(trueEmail()&&Filevalidation ()&&ageValidation()&&nameValidation()&&lastNameValidation()&&truePassword())
  if(trueEmail()&&Filevalidation ()&&ageValidation()&&nameValidation()&&lastNameValidation()&&truePassword()){
    let but = document.querySelector(".subButton button")
    but.removeAttribute("disabled")
  }
}


