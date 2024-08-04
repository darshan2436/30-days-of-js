const loadMoreBtn =document.getElementById("load-more");
let input =document.querySelector('.news-feed');
let startingIndex = 0;
let endingIndex = 9;
let items = [];

fetch('https://rss.nytimes.com/services/xml/rss/nyt/Politics.xml')
    .then(res => res.text())
    .then(res => new window.DOMParser().parseFromString(res,"text/xml"))
    .then(data =>{
        try {
            const items = data.querySelectorAll("item");
            itemsArray = Array.from(items);
            display(itemsArray.slice(startingIndex,endingIndex));
        } catch (error) {
            alert(error);
        }
})

function display(items){
    items.forEach((item)=>{
        const date = item.querySelector("pubDate").textContent;
        const link = item.querySelector("link").textContent;
        const title = item.querySelector("title").textContent;
        const image = item.getElementsByTagName("media:content")[0]; 
        let imageURL;
        if(image){
            imageURL = image.getAttribute("url");
        }
        const description = item.querySelector("description").textContent;
        input.innerHTML += `
        <div class="news">
        <h2><a href="${link}">${title}</a></h2>
        <img src="${imageURL}" alt="${title}'s image"></img>
        <p class="description">${description}</p>
        <p> Published Date: <span class="date">${date}</span></p>
        </div>`
    });
}

function loadMoreFeed(){
    startingIndex += 9;
    endingIndex += 9;
    display(itemsArray.slice(startingIndex,endingIndex));
    if(endingIndex >= itemsArray.length){
        loadMoreBtn.disabled = true;
        alert("No more news feed to load ")
    }
}

loadMoreBtn.addEventListener("click",loadMoreFeed);