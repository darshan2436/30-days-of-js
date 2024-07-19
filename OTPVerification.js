const inputs = document.querySelectorAll("input"),
buttons = document.querySelector("button");

inputs.forEach((input, index1) => {
    input.addEventListener("keyup", (e) => {
        const currentInput = input,
            nextInput = input.nextElementSibling,
            previousInput = input.previousElementSibling;

        if(currentInput.value.length > 1){
            currentInput.value = "";
            return;
        }
        
        if(nextInput && nextInput.hasAttribute("disabled") && currentInput.value !== ""){
            nextInput.removeAttribute("disabled");
            nextInput.focus();
        }
    
        if(e.key === "Backspace"){
            inputs.forEach((input , index2) =>{
                if(index1 <= index2 && previousInput){
                    input.setAttribute("disabled", true);
                    currentInput.value = "";
                    previousInput.focus();
                }
            })
        }

        if(inputs[3].value !== ""){
            buttons.removeAttribute("disabled");
        }

    })
})

window.addEventListener("load", () => inputs[0].focus());