//practice source: https://zellwk.com/blog/callbacks/

/*
const button = document.querySelector("button");
button.addEventListener("click", function(e){
    //adds clicked class to button
    this.classList.add("clicked");
});

*/

const button = document.querySelector("click");

function clicked(e){
    this.classList.add("clicked");
}
button.addEventListener("click", clicked);

const numbers = [1,2,3,5,10,20,40];
const lessThanFive = numbers.filter(num => num < 5);

