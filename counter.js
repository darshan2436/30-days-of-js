const countSpanElement = document.getElementById("count");
        let countNumber=0;
        function changeCounter(event){
            (event == "reset")? countNumber = 0 : (event == "increase")? countNumber++ : countNumber--;
            countSpanElement.innerText = countNumber;
        }

        const increasebtn  = document.getElementById("increase");
        const decreasebtn = document.getElementById("decrease");
        const resetbtn = document.getElementById("reset");

        increasebtn.addEventListener("click" ,function(){
            changeCounter("increase");
        });
        decreasebtn.addEventListener("click" ,function(){
            changeCounter("decrease");
        })
        resetbtn.addEventListener("click" ,function(){
            changeCounter("reset");
        })