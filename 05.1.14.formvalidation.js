function validate(){
    return (validatePassword()&& validateEmail())? true: false;
}
function validatePassword(){
    var password = document.getElementById("password").value;
    const passPtrn = "(?=^.{8,}$)((?=.*\d)|(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*";
    if(password === ""|| password == null){
        document.getElementById("password-valid").innerText = "Please Enter a password";
        return false;
    }
    else if(password.length<8){
        document.getElementById("password-valid").innerText = "password must be at least 8 letters";
        return false;
    }
    else if(password.search(passPtrn)<0){
        document.getElementById("password-valid").innerText = "password must contain one uppercase/lowercaase and a special character";
        return false;
    }
    else{
        document.getElementById("password-valid").innerText = "";
        return true;
    }
}
function validateEmail(){
    var Email = document.getElementById("email").value;
    const emailPtrn = "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
    if(Email === ""|| Email == null){
        document.getElementById("email-valid").innerText = "Please Enter your email or phone";
        return false;
    }
    else if(Email.search(emailPtrn)<0){
        document.getElementById("email-valid").innerText = "It should be in format youremail@gmail.com";
        return false;
    }
    else{
        document.getElementById("email-valid").innerText = "";
        return true;
    }
}