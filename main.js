const burger = document.querySelector(".burger");
const menu= document.querySelector(".menu");
const menuList=document.querySelector(".menu");



burger.addEventListener("click", function(){
    menu.classList.toggle("active")
} )

menuList.addEventListener("click", function(){
    menu.classList.remove("active")
} )





