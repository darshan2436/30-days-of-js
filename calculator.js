let inputValue = document.getElementById("display");
function deleteValue(){
    let value = inputValue.value;
    inputValue.value = value.slice(0,-1);
}
function getValue(value){
    inputValue.value += value;
}