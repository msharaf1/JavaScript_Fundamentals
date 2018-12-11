// (function(){
//     let a = b = 5;
// })();
// console.log(b);

function multiply(num){
    return function(num1){
        return num * num1;
    };
}
// console.log(
//     multiply(5)(5)
// );
// function findAvg(arr){
//     let sum =0;
//     for(let i =0; i < arr.length; i++){
//         sum += arr[i];
//     }
//     let avg = sum/arr.length;
//     return avg;
// }
// console.log(findAvg([1,2,3,4,5]));

// (function(){
//     console.log("Welcome to CSS, after a second you will see the callback function.");
// })();

// let alarm = function(){
//     console.log("Hello, you are time is up.")
// };
// setTimeout(alarm, 1000);

setTimeout(function(){
    console.log("cb is on its way.");
}, 1000);
