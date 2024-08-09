let exchange = document.querySelector("#exchange");
let resultSpan = document.getElementById("result");
let from = document.getElementById("from");
let to = document.getElementById("to");
let result;

async function calculate(){
    let input = document.getElementById("number").value;
    let fromValue = from.value;
    let toValue = to.value;
    if(!(fromValue == toValue)){
        let response = await fetch(`https://networkcalc.com/api/binary/${input}?from=${fromValue}&to=${toValue}`);
        let result = await response.json();
        resultSpan.textContent = result.converted;
    }
    else{
        resultSpan.textContent = input;
    }
}

exchange.addEventListener("click",()=>{
    [from.value,to.value] = [to.value,from.value];
})