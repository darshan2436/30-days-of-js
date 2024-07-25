let inputValue = document.getElementById("display");
let acButton = document.getElementById("ac");
function deleteValue(){
    let value = inputValue.value;
    inputValue.value = value.slice(0,-1);
}
function getValue(value){
    inputValue.value += value;
}
function calculate(){
    try {
        inputValue.value = parseFloat(eval(inputValue.value));
    } catch (err) {
        inputValue.value = `${err}`;
        inputValue.style = "font-size:16px;";
    }
    acButton.addEventListener("click",()=>{
        inputValue.style = "font-size:40px;";
    })
}