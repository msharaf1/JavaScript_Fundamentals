let years = [1990, 1965, 1937, 2005, 1998];

function ArrayCalc (arr, fn){
    let arrRes = [];
    for(let i =0; i<arr.length; i++){
        arrRes.push(fn(arr[i]));
    }
    return arrRes;
}

function calcAge(el){
    return 2019 - el;
}
let ages = ArrayCalc(years, calcAge);
// console.log(ages);

function isOver18(el){
    return el >= 18;
}
let adults = ArrayCalc(ages, isOver18);
// console.log(adults);

function maxHeartRate(el){
    if(el >=18 && el <= 81){
        return Math.round(206.9 - (0.67 * el));
    }else {
        return -1;
    }
}

let htRate = ArrayCalc(ages, maxHeartRate);
console.log(htRate);