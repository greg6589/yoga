const burger = document.querySelector(".burger");
const menu= document.querySelector(".menu");

burger.addEventListener("click", function(){
    menu.classList.toggle("active")
} )

const hideMenu=()=>{
    console.log("działa");
    menu.classList.remove("active")
}

document.querySelectorAll(".menu li").forEach(item=>item.addEventListener("click", hideMenu))
