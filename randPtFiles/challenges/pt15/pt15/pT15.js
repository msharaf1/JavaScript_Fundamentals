
// function increaseSize(){
//     let bal = document.getElementById("balloon");
//     bal.style.fontSize = 6 +"rem";
//     return bal;
// }
// console.log(increaseSize());


let bal = document.getElementById("balloon");
let size = 1;
window.addEventListener("keyup", event =>{
    bal.style.fontSize = size +"rem";
    let calcSize = (n)=>{ return size+=n};
    if(event.key =="ArrowUp"){
        calcSize(1);

    };
    event.preventDefault();
});
window.addEventListener("keydown", event =>{
    bal.style.fontSize = size +"rem";
    let calcSize = (n)=>{ return size-=n};
    if(event.key =="ArrowDown"){
        calcSize(1);

    }
    event.preventDefault();
});

//from the author:
// let p = document.querySelector("p");
// let size;
// function setSize(newSize) {
//   size = newSize;
//   p.style.fontSize = size + "px";
// }
// setSize(20);

// function handleArrow(event) {
//   if (event.key == "ArrowUp") {
//     if (size > 70) {
//       p.textContent = "💥";
//       document.body.removeEventListener("keydown", handleArrow);
//     } else {
//       setSize(size * 1.1);
//       event.preventDefault();
//     }
//   } else if (event.key == "ArrowDown") {
//     setSize(size * 0.9);
//     event.preventDefault();
//   }
// }
// document.body.addEventListener("keydown", handleArrow);