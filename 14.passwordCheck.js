let eyeicon = document.getElementById("eyeicon");
let password = document.getElementById("password");

eyeicon.onclick = function(){
    if(password.type === "password"){
        password.type = "text";
        eyeicon.className = "fa-solid fa-eye";
    }
    else{
        password.type = "password";
        eyeicon.className = "fa-solid fa-eye-slash";
    }
}