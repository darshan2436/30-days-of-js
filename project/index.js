let link1 = document.querySelectorAll(".college a");
let link2 = document.querySelectorAll(".about a");
const college = document.querySelector("#college");
const about = document.querySelector("#about");
let timerId;

function showLinks(links){
    clearInterval(timerId);
    links.forEach((link) =>{
        link.style.display = "block";
    })
}
function hideLinks(links,event){
    timerId = setTimeout(()=>{
        if(!event.relatedTarget || (!about.contains(event.relatedTarget) && !college.contains(event.relatedTarget))){
            links.forEach((link) =>{
                link.style.display = "none";    
            })
        }
    },100)
}

about.addEventListener("mouseover",()=> showLinks(link2));
about.addEventListener("mouseout",(event)=> hideLinks(link2,event));
college.addEventListener("mouseover",()=> showLinks(link1));
college.addEventListener("mouseout",(event)=>hideLinks(link1,event));

link2.forEach((link)=>{
    link.addEventListener("mouseover",()=> showLinks(link2));
    link.addEventListener("mouseout",(event)=> hideLinks(link2,event));
})

link1.forEach((link)=>{
    link.addEventListener("mouseover",()=> showLinks(link1));
    link.addEventListener("mouseout",(event)=> hideLinks(link1,event));
})