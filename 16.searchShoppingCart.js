//search bar funtion for the 09.shopping cart.js
const search = ()=>{
    const searchBox = document.getElementById("search").value.toUpperCase();
    const product = document.querySelectorAll(".dessert-card");
    const pname = document.getElementsByTagName("h2");
  
    for(let i=0; i < pname.length ;i++){
      let match = (product[i].getElementsByTagName("h2")[0]);
      if(match){
        let textValue = match.textContent || match.innerHTML;
        if(textValue.toUpperCase().indexOf(searchBox) > -1){
          product[i].style.display = "";
        }
        else{
          product[i].style.display = "none";
        }
      }
    }
  }