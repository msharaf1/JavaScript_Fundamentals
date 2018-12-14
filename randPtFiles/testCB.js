//practice source: https://zellwk.com/blog/callbacks/

/*
const button = document.querySelector("button");
button.addEventListener("click", function(e){
    //adds clicked class to button
    this.classList.add("clicked");
});

*/

// const button = document.querySelector("click");

// function clicked(e){
//     this.classList.add("clicked");
// }
// button.addEventListener("click", clicked);

// const numbers = [1,2,3,5,10,20,40];
// const lessThanFive = numbers.filter(num => num < 5);


let students = [
    {name:"Mary", score:90, school: "East"},
    {name: "Steve", score: 100 , school: "East"},
    {name: "James", score: 40, school: "East"},
    {name: "Gabe", score: 85 , school: "Wast"},
    {name: "Rochelle", score: 50 , school: "East"},
    {name: "Tony" , score: 100, school: "Wast"}
];


let processStudents = function(students, cb){
    for(let i=0; i < students.length; i++){
        // console.log(students[i]);
        if(students[i].school.toLowerCase()==="east"){
            if(typeof cb === "function"){
                cb(students[i]);
            }
        }
    }
    
}

processStudents(students, function(obj){
    if(obj.score > 60){
        console.log(obj.name, "passed");
    }
})
