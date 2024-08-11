const buttons = document.querySelectorAll("button");
const text = document.querySelector("#editor");

text.addEventListener("click",(e)=>{
    if(e.keyCode ===  13){
        e.preventDefault();
    }
})

buttons.forEach((button)=>{
    button.addEventListener("click",(e)=>{
        e.preventDefault();
        let textVal = text.innerText;
        
        if(button.classList.contains("embedded")){
            text.innerHTML = textVal;
        }
        let cmd = button.getAttribute("data-cmd");
        if(button.classList.contains("style")){
            applyStyle(cmd);
        }
        else if(button.classList.contains("type")){
            if(cmd === "upper"){
                text.innerText = textVal.toUpperCase();
            }
            else{
                text.innerText = textVal.toLowerCase();
            }
        }
        else{
            align(cmd);
        }
    })
})

function applyStyle(type){
    const selection = window.getSelection();
    if(!selection.rangeCount) return;

    const range = selection.getRangeAt(0);
    const seletedText = range.extractContents();
    const style = document.createElement(type);
    style.appendChild(seletedText);
    range.insertNode(style);
    seletedText.removeAllRanges();
}

function align(cmd){
    text.style.textAlign = cmd;
}