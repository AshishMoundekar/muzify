
const ball = document.querySelector(".toggle-ball");
const items = document.querySelectorAll(".topbar-container,.logo,.menu-list-item,.toggle,.toggle-ball,.sidebar,.left-menu-icon,.container,.featured-content,.featured-desc,.songs-list-title");

ball.addEventListener("click",()=>{
    items.forEach(item=>{
        item.classList.toggle("active")
    })
    ball.classList.toggle("active")
})

// const arrows = document.querySelectorAll(".arrow");
// const songs_list = document.querySelectorAll(".songs_list");

// arrows.forEach((arrow, i) => {
//   const itemNumber = songs_list[i].querySelectorAll("img").length;
//   let clickCounter = 0;
//   arrow.addEventListener("click", () => {
//     const ratio = Math.floor(window.innerWidth / 270);
//     clickCounter++;
//     if (itemNumber - (4 + clickCounter) + (4 - ratio) >= 0) {
//       songs_list[i].style.transform = `translateX(${
//         songs_list[i].computedStyleMap().get("transform")[0].x.value - 300
//       }px)`;
//     } else {
//       songs_list[i].style.transform = "translateX(0)";
//       clickCounter = 0;
//     }
//   });

//   console.log(Math.floor(window.innerWidth / 270));
// });

