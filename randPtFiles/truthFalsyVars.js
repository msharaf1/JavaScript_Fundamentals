//In order to find out if the variable has been assigned value or not, run the following check;
//Falsy values are Undefined, null, 0, NaN. 
let firstName;
let email;
let age;

firstName = "James";

function checkFalseVals(firstName){
    if(firstName){
        console.log(`Var ${firstName} is defined`);
    }
    else {
        console.log(`${firstName} variable is undefined.`)
    }
}
checkFalseVals(firstName);

//email = "james@gmail.com"

function checkFalseVals(email){
    if(email){
        console.log(`Var ${email} is defined`);
    }
    else {
        console.log(`Variable is ${email}.`)
    }
}
checkFalseVals(email);

function checkFalseVals(age){
    if(age || age ===0){
        console.log("It is a defined variable.")
    }else{
        console.log("It is undefined variable.")
    }
}
checkFalseVals(age);

age = 0;
function checkFalseVals(age){
    if(age || age ===0){
        console.log("It is a defined variable.")
    }else{
        console.log("It is undefined variable.")
    }
}
checkFalseVals(age);

age = '';
function checkFalseVals(age){
    if(age || age ===0){
        console.log("It is a defined variable.")
    }else{
        console.log("It is undefined variable.")
    }
}
checkFalseVals(age);

age = '49';
function checkFalseVals(age){
    if(age || age ===0){
        console.log("It is a defined variable.")
    }else{
        console.log("It is undefined variable.")
    }
}
checkFalseVals(age);