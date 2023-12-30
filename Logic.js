const ball = document.querySelector(".togglee-ball");
const items = document.querySelectorAll(".container,.songs-list-title,.topbar-container,.sidebar,.left-menu-icon,.toggle");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})