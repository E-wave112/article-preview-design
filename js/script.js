// the main js code

const shareBtn = document.querySelector(".share-button");
const mainFlex = document.querySelector(".social-share");
const Share = document.querySelector(".share");



shareBtn.addEventListener('click',function(){
    
    mainFlex.classList.toggle("open-social-share");
    mainFlex.classList.toggle("white");

})