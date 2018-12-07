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
let result = ArrayCalc(years, calcAge);
// console.log(result);

function isOver18(el){
    return el >= 18;
}
let adults = ArrayCalc(result, isOver18);
console.log(adults);