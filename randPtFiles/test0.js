// (function(){
//     let a = b = 5;
// })();
// console.log(b);

// function multiply(num){
//     return function(num1){
//         return num * num1;
//     };
// }
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

// setTimeout(function(){
//     console.log("cb is on its way.");
// }, 1000);

/*
if under 18 call back dental coverage 
*/

// let eleg18 = () => {
//     return `You have dential coverge. `;
// };

// function calcAge(year,name){
//     if(year < 18){
//         eleg18();
//     }else{
//             console.log( "You are not convered ");
//     };
// }
// console.log(calcAge(17, "John"));


// let updates = function(){
//     console.log("Web Devs are in demand now.!");
// }

// setTimeout(updates, 3000);

// setTimeout(function(){
//     console.log("You are a callback functions.");
// }, 4000);