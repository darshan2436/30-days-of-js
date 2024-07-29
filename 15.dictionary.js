const input = document.getElementById("word-search");
const search = document.getElementById("search-button");
const firstDefn = document.getElementById("first-defn");
const secondDefn = document.getElementById("second-defn");
const hideShow = document.getElementsByClassName("hide");

search.addEventListener("click",async ()=>{
    const val = input.value;
    if(val === ""){
        alert("Please enter a word");
    }
    else{
        const url = (`https://api.dictionaryapi.dev/api/v2/entries/en/${val}`);
        let meaning = await fetch(url);
        meaning = await meaning.json();
        hideShow[0].style.display = "block";
        let meanings = [];
        for(let i=0; i<2 ;i++){
            try {
                meanings[i] = meaning[0]['meanings'][i]['definitions'][0]['definition'];
            } catch (error) {
                meanings[i] = `error in loading ...`;
            }
        }
        firstDefn.innerText = meanings[0];
        secondDefn.innerText = meanings[1];
    }
})