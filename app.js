const share=document.querySelector(".share-icon");
const popup=document.querySelector(".popup");

const myFunction=function(){
  
  popup.classList.toggle("popup-active");
  console.log("wow");

}
share.addEventListener("click",myFunction);
