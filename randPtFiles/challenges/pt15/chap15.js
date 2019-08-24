console.log("This is Chapter 15!");

// window.addEventListener("click", ()=>{
//     console.log("You kicked?")
// });

// let test = function(){
//     return console.log("Hello You have clicked!")
// }
// window.addEventListener("click", test);

    // let button = document.querySelector("button");
    // function once(){
    //     console.log("Done.");
    //     button.removeEventListener("click", once);
    // }
    // button.addEventListener("click", once);

// let button = document.querySelector("button");
// button.addEventListener("mousedown", event =>{
//     if(event.button == 0){
//         console.log("Left button");
//     }else if(event.button ==1){
//         console.log("Midle button");
//     }else if(event.button ==2){
//         console.log("Right button");
//     }
// });

// let para = document.querySelector("p");
// let button = document.querySelector("button");
// para.addEventListener("mousedown", ()=>{
//     console.log("Handler for Paragraph.");
// });
// button.addEventListener("mousedown", event=>{
//     console.log("Handler for button.");
//     if(event.button == 2) event.stopPropagation();
// });

// document.body.addEventListener("click", event => {
//     if(event.target.nodeName == "BUTTON"){
//         console.log("Clicked", event.target.textContent);
//     }
// });

// let link = document.querySelector("a");
// link.addEventListener("click", event => {
//     console.log("Nope, link event is disable.");
//     event.preventDefault();
// });

// window.addEventListener("keydown", event => {
//     if(event.key == "v"){
//         document.body.style.background = "violet";
//     }
// });
// window.addEventListener("keyup", event =>{
//     if(event.key == "v"){
//         document.body.style.background="";
//     }
// });

// window.addEventListener("keydown", event => {
//     if(event.key == " " && event.ctrlKey){
//         console.log("Continuing!!!");
//     }
// });

// window.addEventListener("click", event =>{
//     let dot = document.createElement("div");
//     dot.className="dot";
//     dot.style.left = (event.pageX - 4) + "px";
//     dot.style.top = (event.pageY - 4) + "px";
//     document.body.appendChild(dot);
// });

let lastX; // Tracks the last observed mouse X position
  let bar = document.querySelector("div");
  bar.addEventListener("mousedown", event => {
    if (event.button == 0) {
      lastX = event.clientX;
      window.addEventListener("mousemove", moved);
      event.preventDefault(); // Prevent selection
    }
  });

  function moved(event) {
    if (event.buttons == 0) {
      window.removeEventListener("mousemove", moved);
    } else {
      let dist = event.clientX - lastX;
      let newWidth = Math.max(10, bar.offsetWidth + dist);
      bar.style.width = newWidth + "px";
      lastX = event.clientX;
    }
  }