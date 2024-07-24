const loadMoreBtn = document.getElementById("load-more-btn");
const authorConatiner = document.getElementById("author-container");

let startingIndex=0;
let endingIndex=8;
let authorDataArr=[];

fetch('https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json')
    .then((res)=>(res.json()))
    .then((data)=>{
        authorDataArr = data;
        console.log(authorDataArr);
        displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
    })
    .catch((err)=>{
        authorConatiner.innerHTML = `<p> There was an error '${err}' loading the data</p>`
    })

const loadMoreAuthor = ()=>{
    startingIndex+=8;
    endingIndex+=8;
    displayAuthors(authorDataArr.slice(startingIndex,endingIndex));
    if(authorDataArr.length<=endingIndex){
        loadMoreBtn.disabled = true;
        loadMoreBtn.innerText ="No more data to load"; 
    }
}

const displayAuthors = (authors)=>{
    authors.forEach(({author,image,url,bio},index) => {
        authorConatiner.innerHTML += `
        <div id=${index} class="author-card">
            <h2 class="author">${author}</h2>
            <img src="${image}" class="image" alt="${author}'s Image>
            <p class="bio">${bio.length > 100? bio.slice(0,50)+"..." : bio}</p>
            <a href="${url}" class="link" target="_blank">${author}'s Page</a>
        </div>`;
    });
};

loadMoreBtn.addEventListener("click",loadMoreAuthor);