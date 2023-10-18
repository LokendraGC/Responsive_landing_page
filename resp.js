const boton = document.querySelector(".mobilebtn");
const header = document.querySelector(".main");

const toggleNav = ()=>{
    header.classList.toggle("active")
}

boton.addEventListener("click",()=>{toggleNav()})