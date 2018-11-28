function calcAge(DoB){
    return 2018 - DoB;
}

let ageOfJason = calcAge(1985);
let agOfTim = calcAge(1990);
let ageOfMason = calcAge(2000);

// console.log("Jason is : "+ ageOfJason +" years old.");
// console.log("Tim is : "+ agOfTim +" years old.");
// console.log("Jason is : "+ ageOfMason +" years old.");

function yrsUntilRetirement(year, name){
    let age = calcAge(year);
    let retirement = 65 - age;

    if(retirement > 0){
        return (`${name} retires in ${retirement} years.`);
    } else {
        return (`${name} is already retired.`);
    }
}

// console.log(yrsUntilRetirement(1980, "Tina"));

//Function Expression

const jobSurvey = function (job, name){
    switch (job){
        case "teacher":
            return (name +" teaching at elementary school");
        case "designer":
            return (name +" is a graphic designer at MDDX.");
        default:
            return (name + " is an out of state resident.")
    }
}

// console.log(jobSurvey("teacher", "Kamal"));

let Khan = jobSurvey("desinger", "Rashid Khan");
// console.log(Khan);

const interJob = function(job, name){
    if(job ==="teacher"){
        return name + " teaches coding at coding plus.";

    } else if(job ==="soccer"){
        return name + " " + "plays soccer";
    } else {
        name +" "+ "doesn't live in the city.";
    }
}
// console.log(interJob("teacher", "John"));
// console.log(interJob("soccer", "Kamal"));





function tipCal(bill){
    let percentage;
    if(bill < 50){
        percentage = 0.2;//20%
    } else if(bill >= 50 && bill <= 200){
        percentage = 0.15;//15%
    } else {
        percentage = 0.1;
    }
    return bill * percentage;
}//tipCall function bracket

const bill = [124,45, 300];
const tips = [tipCal(bill[0]), tipCal(bill[1]), tipCal(bill[2])];
console.log(tips);
const totalAmount = [bill[0] + tips[0], bill[1]+tips[1]];
console.log(totalAmount);

