let catPic = document.querySelector("#cat");
let counter = 0;
function countClicks(count){
  while(count >= 0){
    counter+= count;
    count--;
  }
}

catPic.addEventListener("click", event => {
    countClicks(1);
    // console.log(`You clicked  ${counter} times`)
    let counts = document.getElementById("h1Counter");
    counts.innerText = `Cat clicked ${counter} times`;
});

let button = document.getElementById("p1");
let countNum = 0;
button.onclick = function(){
  countNum+=1;
  button.innerHTML = "Clicked" + countNum + " Times";
}