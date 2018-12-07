let a = 10;
let b = a;
a = 100;
// console.log(a, b);
let objA= {
    firstName: "James",
    lastName: "Krutus",
    age: 30
};

let objB = objA;
// console.log(objA, objB);

objA.age = 31;
// console.log(objB);

//Function
let age = 27;
let obj = {
    firstname: "James",
    lastName: "Bond",
    age: 34,
    city: "Frankfort"
};

function makeChange(a, b){
    a = 40;
    b.city = "District of Columbia";
};

makeChange(age, obj);
console.log("Age: ", age, "ObjectCity: ", obj.city);