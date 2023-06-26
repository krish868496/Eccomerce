let bar = document.getElementById("bar");
let navbar = document.getElementById("navbar");
let close = document.getElementById("close");


if(bar){
    bar.addEventListener("click", ()=>{
        navbar.classList.add("active");
    })
}
if(close){
    close.addEventListener("click", ()=>{
        navbar.classList.remove("active");
    })
}