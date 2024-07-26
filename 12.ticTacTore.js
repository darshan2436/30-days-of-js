let printW = document.getElementById("winner");
let resetGame = document.getElementById("reset");
let turnElement = document.getElementById("turn");

//get the result of the game
function game(){
    const a1 = document.getElementById("a1").value;
    const a2 = document.getElementById("a2").value;
    const a3 = document.getElementById("a3").value;
    const a4 = document.getElementById("a4").value;
    const a5 = document.getElementById("a5").value;
    const a6 = document.getElementById("a6").value;
    const a7 = document.getElementById("a7").value;
    const a8 = document.getElementById("a8").value;
    const a9 = document.getElementById("a9").value;
    
    const a1Btn = document.getElementById("a1");
    const a2Btn = document.getElementById("a2");
    const a3Btn = document.getElementById("a3");
    const a4Btn = document.getElementById("a4");
    const a5Btn = document.getElementById("a5");
    const a6Btn = document.getElementById("a6");
    const a7Btn = document.getElementById("a7");
    const a8Btn = document.getElementById("a8");
    const a9Btn = document.getElementById("a9");

    if(!a1 == "" && !a2=="" && !a3=="" && !a4=="" && !a5=="" && !a6=="" && !a7=="" && !a8=="" && !a9==""){
        printW.innerHTML = "The Game ties !!";
        return;
    }
    //first row x
    if((a1 == 'x'||a1 =='X')&&(a2 == 'x'||a2 == 'X')&&(a3=='x'||a3=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a4Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a1Btn.style.color = "red";
        a2Btn.style.color = "red";
        a3Btn.style.color = "red";
    }
    //second row x
    else if((a4 == 'x'||a4 =='X')&&(a5 == 'x'||a5 == 'X')&&(a6=='x'||a6=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a1Btn.disabled = true;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a4Btn.style.color = "red";
        a5Btn.style.color = "red";
        a6Btn.style.color = "red";
    }
    //third row x
    else if((a7 == 'x'||a7 =='X')&&(a8 == 'x'||a8 == 'X')&&(a9=='x'||a9=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a1Btn.disabled = true;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a4Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;

        a7Btn.style.color = "red";
        a8Btn.style.color = "red";
        a9Btn.style.color = "red";
    }
    //first column x
    else if((a1 == 'x'||a1 =='X')&&(a4 == 'x'||a4 == 'X')&&(a7=='x'||a7=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a1Btn.style.color = "red";
        a4Btn.style.color = "red";
        a7Btn.style.color = "red";
    }
    //second column x
    else if((a2 == 'x'||a2 =='X')&&(a5 == 'x'||a5 == 'X')&&(a8=='x'||a8=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a1Btn.disabled = true;
        a3Btn.disabled = true;
        a4Btn.disabled = true;
        a6Btn.disabled = true;
        a7Btn.disabled = true;
        a9Btn.disabled = true;

        a2Btn.style.color = "red";
        a5Btn.style.color = "red";
        a8Btn.style.color = "red";
    }
    //third column x
    else if((a3 == 'x'||a3 =='X')&&(a6 == 'x'||a6 == 'X')&&(a9=='x'||a9=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a1Btn.disabled = true;
        a2Btn.disabled = true;
        a4Btn.disabled = true;
        a5Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;

        a3Btn.style.color = "red";
        a6Btn.style.color = "red";
        a9Btn.style.color = "red";
    }
    //first cross x
    else if((a1 == 'x'||a1 =='X')&&(a5 == 'x'||a5 == 'X')&&(a9=='x'||a9=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a4Btn.disabled = true;
        a6Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;

        a1Btn.style.color = "red";
        a5Btn.style.color = "red";
        a9Btn.style.color = "red";
    }
    //second cross x
    else if((a3 == 'x'||a3 =='X')&&(a5 == 'x'||a5 == 'X')&&(a7=='x'||a7=='X')){
        printW.innerHTML = `<b>Player X</b> won the game`;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a3Btn.style.color = "red";
        a5Btn.style.color = "red";
        a7Btn.style.color = "red";
    }
    //first row o
    else if((a1 == 'o'||a1 =='O')&&(a2 == 'o'||a2 == 'O')&&(a3=='o'||a3=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a4Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a1Btn.style.color = "red";
        a2Btn.style.color = "red";
        a3Btn.style.color = "red";
    }
    //second row o
    else if((a4 == 'o'||a4 =='O')&&(a5 == 'o'||a5 == 'O')&&(a6=='o'||a6=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a1Btn.disabled = true;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a4Btn.style.color = "red";
        a5Btn.style.color = "red";
        a6Btn.style.color = "red";
    }
    //third row o
    else if((a7 == 'o'||a7 =='O')&&(a8 == 'o'||a8 == 'O')&&(a9=='o'||a9=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a1Btn.disabled = true;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a4Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;

        a7Btn.style.color = "red";
        a8Btn.style.color = "red";
        a9Btn.style.color = "red";
    }
    //first column o
    else if((a1 == 'o'||a1 =='O')&&(a4 == 'o'||a4 == 'O')&&(a7=='o'||a7=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a1Btn.style.color = "red";
        a4Btn.style.color = "red";
        a7Btn.style.color = "red";
    }
    //second column o
    else if((a2 == 'o'||a2 =='O')&&(a5 == 'o'||a5 == 'O')&&(a8=='o'||a8=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a1Btn.disabled = true;
        a3Btn.disabled = true;
        a4Btn.disabled = true;
        a6Btn.disabled = true;
        a7Btn.disabled = true;
        a9Btn.disabled = true;

        a2Btn.style.color = "red";
        a5Btn.style.color = "red";
        a8Btn.style.color = "red";
    }
    //third column o
    else if((a3 == 'o'||a3 =='O')&&(a6 == 'o'||a6 == 'O')&&(a9=='o'||a9=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a1Btn.disabled = true;
        a2Btn.disabled = true;
        a4Btn.disabled = true;
        a5Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;

        a3Btn.style.color = "red";
        a6Btn.style.color = "red";
        a9Btn.style.color = "red";
    }
    //first cross o
    else if((a1 == 'o'||a1 =='O')&&(a5 == 'o'||a5 == 'O')&&(a9=='o'||a9=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a4Btn.disabled = true;
        a6Btn.disabled = true;
        a7Btn.disabled = true;
        a8Btn.disabled = true;

        a1Btn.style.color = "red";
        a5Btn.style.color = "red";
        a9Btn.style.color = "red";
    }
    //second cross o
    else if((a3 == 'o'||a3 =='O')&&(a5 == 'o'||a5 == 'O')&&(a7=='o'||a7=='O')){
        printW.innerHTML = `<b>Player O</b> won the game`;
        a2Btn.disabled = true;
        a3Btn.disabled = true;
        a5Btn.disabled = true;
        a6Btn.disabled = true;
        a8Btn.disabled = true;
        a9Btn.disabled = true;

        a3Btn.style.color = "red";
        a5Btn.style.color = "red";
        a7Btn.style.color = "red";
    }
    else{
        if(flag == 1 ){
            printW.innerText = "Player X turn";
        }
        else{
            printW.innerText = "player O turn";
        }
    }
}

function reset(){
    location.reload();
    a1=a2=a3=a4=a5=a6=a7=a8=a9="";
}

let flag = 1;
function change1(){
    if(flag === 1){
        document.getElementById("a1").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a1").value = "O";
        flag = 1;
    }
    document.getElementById("a1").disabled = true;
}
function change2(){
    if(flag === 1){
        document.getElementById("a2").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a2").value = "O";
        flag = 1;
    }
    document.getElementById("a2").disabled = true;
}
function change3(){
    if(flag === 1){
        document.getElementById("a3").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a3").value = "O";
        flag = 1;
    }
    document.getElementById("a3").disabled = true;
}
function change4(){
    if(flag === 1){
        document.getElementById("a4").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a4").value = "O";
        flag = 1;
    }
    document.getElementById("a4").disabled = true;
}
function change5(){
    if(flag === 1){
        document.getElementById("a5").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a5").value = "O";
        flag = 1;
    }
    document.getElementById("a5").disabled = true;
}
function change6(){
    if(flag === 1){
        document.getElementById("a6").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a6").value = "O";
        flag = 1;
    }
    document.getElementById("a6").disabled = true;
}
function change7(){
    if(flag == 1){
        document.getElementById("a7").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a7").value = "O";
        flag = 1;
    }
    document.getElementById("a7").disabled = true;
}
function change8(){
    if(flag == 1){
        document.getElementById("a8").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a8").value = "O";
        flag = 1;
    }
    document.getElementById("a8").disabled = true;
}
function change9(){
    if(flag == 1){
        document.getElementById("a9").value = "X";
        flag = 0;
    }
    else{
        document.getElementById("a9").value = "O";
        flag = 1;
    }
    document.getElementById("a9").disabled = true;
}

resetGame.addEventListener("click",reset);