let result = document.getElementById("result");
let check =document.getElementById("check-btn");
check.addEventListener("click",()=>{
  let value = document.getElementById("text-input").value;
  if(value == null||value ===""){
    alert("Please input a value");
  }
  else if(value.length === 1||checkPalindrome(value)){
    result.innerText = `${value} is a palindrome`;
  }
  else{
    result.innerText = `${value} is not a palindrome`;
  }
})
function removeSpecial(values){
            return values.replace(/[_,'\s.()/:-]/g,'');
        }
  
function checkPalindrome(string){
            let value = removeSpecial(string);
            let revvalue = value.split("").reverse().join("");
            console.log( value.toLowerCase())
        return value.toLowerCase()=== revvalue.toLowerCase();
}
