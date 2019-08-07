// class Plane {
//     constructor(numEngines){
//         this.numEngines = numEngines;
//         this.enginesActive = false;
//     }

//     startEngines(){
//         console.log("Engine is starting");
//         this.enginesActive = true;
//     }
// }
// console.log(typeof Plane);

// // let t1 = new Plane(1);
// // t1.startEngines();

// class Tree {
//     constructor(size = '10', leaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null}) {
//       this.size = size;
//       this.leaves = leaves;
//       this.leafColor = null;
//     }
  
//     changeSeason(season) {
//       this.leafColor = this.leaves[season];
//       if (season === 'spring') {
//         this.size += 1;
//       }
//     }
//   }
  
//   class Maple extends Tree {
//     constructor(syrupQty = 15, size, leaves) {
//       super(size, leaves);
//       this.syrupQty = syrupQty;
//     }
  
//     changeSeason(season) {
//       super.changeSeason(season);
//       if (season === 'spring') {
//         this.syrupQty += 1;
//       }
//     }
  
//     gatherSyrup() {
//       this.syrupQty -= 3;
//     }
//   }
  
//   const myMaple = new Maple(15, 5);
//   myMaple.changeSeason('fall');
//   myMaple.gatherSyrup();
//   myMaple.changeSeason('spring');


//   unction Tree(size, leaves) {
//     this.size = (typeof size === "undefined")? 10 : size;
//     const defaultLeaves = {spring: 'green', summer: 'green', fall: 'orange', winter: null};
//     this.leaves = (typeof leaves === "undefined")?  defaultLeaves : leaves;
//     this.leafColor;
//   }
  
//   Tree.prototype.changeSeason = function(season) {
//     this.leafColor = this.leaves[season];
//     if (season === 'spring') {
//       this.size += 1;
//     }
//   }
  
//   function Maple (syrupQty, size, leaves) {
//     Tree.call(this, size, leaves);
//     this.syrupQty = (typeof syrupQty === "undefined")? 15 : syrupQty;
//   }
  
//   Maple.prototype = Object.create(Tree.prototype);
//   Maple.prototype.constructor = Maple;
  
//   Maple.prototype.changeSeason = function(season) {
//     Tree.prototype.changeSeason.call(this, season);
//     if (season === 'spring') {
//       this.syrupQty += 1;
//     }
//   }
  
//   Maple.prototype.gatherSyrup = function() {
//     this.syrupQty -= 3;
//   }
  
//   const myMaple = new Maple(15, 5);
//   myMaple.changeSeason('fall');
//   myMaple.gatherSyrup();
//   myMaple.changeSeason('spring');


//   /*
//  * Programming Quiz: Building Classes and Subclasses (2-3)
//  */

// class Vehicle {
// 	constructor(color = 'blue', wheels = 4, horn = 'beep beep') {
// 		this.color = color;
// 		this.wheels = wheels;
// 		this.horn = horn;
// 	}

// 	honkHorn() {
// 		console.log(this.horn);
// 	}
// }

// // your code goes here
// class Bicycle extends Vehicle {
//     constructor(color = 'blue', wheels = 2, horn = 'honk honk'){
//         super(color, wheels, horn);
//     }
// }


// const myVehicle = new Vehicle();
// myVehicle.honkHorn(); // beep beep
// const myBike = new Bicycle();
// myBike.honkHorn(); // honk honk

// const digits = [0,1,2,3,4,5,6,7,8,9];
// const arrayIterator = digits[Symbol.iterator]();

// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());
// console.log(arrayIterator.next());

// const games = new Set(["Super Mario Bros.", "Banjo-Kazooie", "Mario Kart", "Super Mario Bros."]);
// console.log(games);
// // Set { 'Super Mario Bros.', 'Banjo-Kazooie', 'Mario Kart' }

// let test = new Set();
// console.log(test);
// test.add("Hello");
// test.add("Hi");
// console.log(test)
// test.delete("Hi");
// console.log(test);
// const months = new Set(['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']);
// console.log(months.size);
// console.log(months.has("March"));
// console.log( months.values());
// for(const month of months){
//     console.log(month);
// }

/*
 * Programming Quiz: Using Sets (3-1)
 *
 * Create a Set object and store it in a variable named `myFavoriteFlavors`. Add the following strings to the set:
 *     - chocolate chip
 *     - cookies and cream
 *     - strawberry
 *     - vanilla
 *
 * Then use the `.delete()` method to remove "strawberry" from the set.
 */
// const myFavoriteFlavors = new Set(["chocolate chip", "cookies and cream","strawberry", "vanilla"]);
// myFavoriteFlavors.delete("strawberry");
// console.log(myFavoriteFlavors);
// myFavoriteFlavors.clear();

/*
 * Programming Quiz: Using Sets (3-2)
 *
 * Create the following variables:
 *     - uniqueFlavors and set it to a new WeakSet object
 *     - flavor1 and set it equal to `{ flavor: 'chocolate' }`
 *     - flavor2 and set it equal to an object with property 'flavor' and value of your choice!
 *
 * Use the `.add()` method to add the objects `flavor1` and `flavor2` to `uniqueFlavors`
 * Use the `.add()` method to add the `flavor1` object (again!) to the `uniqueFlavors` set
 */
// const uniqueFlavors = new WeakSet();
//     const flavor1 = {flavor:"chocolate"};
//     const flavor2 = {flavor:"vanila"};
// uniqueFlavors.add(flavor1);
// uniqueFlavors.add(flavor2);
// uniqueFlavors.add(flavor1);

// let student1 = { name: 'James', age: 26, gender: 'male' };
// let student2 = { name: 'Julia', age: 27, gender: 'female' };
// let student3 = { name: 'Richard', age: 31, gender: 'male' };

// const roster = new WeakSet([student1, student2, student3]);
// console.log(roster);

// const employees = new Map();

// employees.set("james.parkes@udacity.com", {
//     firstName: "James",
//     lastName: "Parkes", 
//     role: "Content Developer"
// });
// employees.set('julia@udacity.com', {
//     firstName: 'Julia',
//     lastName: 'Van Cleve',
//     role: 'Content Developer'
// });
// employees.set('richard@udacity.com', {
//     firstName: 'Richard',
//     lastName: 'Kalehoff',
//     role: 'Content Developer'
// });

// console.log(employees);

// employees.delete('julia@udacity.com');
// employees.delete('richard@udacity.com');
// console.log(employees);

// employees.clear()
// console.log(employees);

const members = new Map();

members.set("Evelyn", 75.68);
members.set("Liam", 20.16);
members.set("Sophia", 0);
members.set("Marcus", 10.25);

// // console.log(members.has("Liam"));
// let Liam = members.get("Liam");
// // console.log(Liam);

// let iteratorObjForKeys = members.keys();
// iteratorObjForKeys.next()
// iteratorObjForKeys.next();

// let iteratorObjForValues = members.values();
// iteratorObjForValues.next();

// for(let key of members.keys()){
//     console.log(key);
// }
// for(let value of members.values()){
//     console.log(value);
// }

// for(let member of members){
//     console.log(member);
// }


//fix it.
// for(let member of members){
//     // console.log(member);
//     let key = member.keys();
//     let value = member.values();
//         console.log(member.reduce()
//     // // console.log(key, value);
//     // console.log("It is Key: " +key);
// }


// members.forEach((value, key) => console.log(key, value));

// let shoppingList = ["James", "King", "Queen", "Jinny"];
//     let [a,b,c] = shoppingList;
//     console.log(`${ a} ${ b} ${ c } of London`);

// let studentInfo = {
//     firstName: "James",
//     lastName: "King",
//     spouseName: "Queen",
//     age: 55
// }

// let {firstName, age} = studentInfo;
// console.log(firstName +" " +age);

//********************************************* */

const book1 = { title: 'Pride and Prejudice', author: 'Jane Austen' };
const book2 = { title: 'The Catcher in the Rye', author: 'J.D. Salinger' };
const book3 = { title: 'Gulliver’s Travels', author: 'Jonathan Swift' };

const library = new WeakMap();
library.set(book1, true);
library.set(book2, false);
library.set(book3, true);
//use let to review book1 = null.
// console.log(library);

// new Promise(function(){
//     window.setTimeout(function createSundae(flavor = "chocloate"){
//         const sundae = {};
//     }, Math.random() * 2000);
// });

// new Promise(function(resolve, reject){
//     window.setTimeout(function createSundae(flavor = "Vanila"){
//         const sundae = {};
//     }, Math.random() * 100);
// });



// function zeroArray(m, n) {
//     // Creates a 2-D array with m rows and n columns of zeroes
//     let newArray = [];
//     for (let i = 0; i < m; i++) {
//         // Adds the m-th row into newArray
//         let row = [];
      
//       for (let j = 0; j < n; j++) {
//         // Pushes n zeroes into the current row to create the columns
//         row.push("rows");
//       }
//       // Pushes the current row, which now has n zeroes in it, to the array
//       newArray.push(row);
//     //   console.log(row)
//     }
//     // console.log(newArray);
//     return newArray;
//   }
  
//   let matrix = zeroArray(3, 2);
//   console.log(matrix);
/*
We'll pass you an array of two numbers. Return the sum of those two numbers-
plus the sum of all the numbers between them.
The lowest number will not always come first.
*/
function sumAll(arr) {
    let sum = 0;
    // for(let i = 0; i < arr.length; i++){
    //   sum += arr[i];
    // }
    if(arr[0] < arr[1]){
        let i = arr[0];
        while(i <= arr[1]){
            sum += i;
            console.log(i);
            i++;
        }
    }
    else if(arr[0] > arr[1]){
        let i = arr[0];
        while(i >= arr[1]){
            sum += i;
            console.log(i);
            i--;
        }
    }
 
    // console.log(sum);
    return sum;
  }
  
//   console.log(sumAll([1, 4]));

//   console.log(sumAll([4, 1]));

function findSumAll(arr){
    let maxNum = Math.max(...arr);
    let minNum = Math.min(...arr);
    let sum = 0;
    let i = minNum;
    while(i <= maxNum){
        sum += i;
        i++
        console.log(i);
    }
    console.log(sum);

}
// findSumAll([4,1]);
function sumAll(arr) {
    var max = Math.max(arr[0], arr[1]);
    var min = Math.min(arr[0], arr[1]);
    var temp = 0;
    for (var i=min; i <= max; i++){
        temp += i;
    }
  return(temp);
}

// sumAll([1, 4]);
function sumAll(arr) {
    // Buckle up everything to one!
  
    // Using ES6 arrow function (one-liner)
    var sortedArr = arr.sort((a,b) => a-b);
    var firstNum = arr[0];
    var lastNum = arr[1];
    // Using Arithmetic Progression summing formula
  
    var sum = (lastNum - firstNum + 1) * (firstNum + lastNum) / 2;
    return sum;
  }

  function sumAll(arr) {
    var sum = 0;
    for (var i = Math.min(...arr); i <= Math.max(...arr); i++){
        sum += i;
    }
  return sum;
}

sumAll([1, 4]);

/*
Compare two arrays and return a new array with any items only found in one of 
the two given arrays, but not both. In other words, return the symmetric 
difference of the two arrays.
*/

function diffArray(arr1, arr2) {
    var newArr = [];
    // Same, same; but different.
    for(let i=0; i < arr2.length; i++){
        for(let j=i; j < arr1[i]; j++){
            if(arr2[i] !== arr1[j]){
                if(arr1[j] === null || arr1[j] ===undefined){
                    // break;
                    console.log(`From arr[j] ${arr2[j]} arr[i] ${arr1[i]}`);
                }
                newArr.push(arr1[i]);
            }
            else if(arr1[j] !== arr2[i]){
                    if(arr2[i] === null || arr2[i] ===undefined){
                        break;
                        console.log(`From arr[j] ${arr2[j]}`);
                }
                newArr.push(arr2[i]);
            }
            // if(arr1[i] !== arr2[j]){
            //     newArr.push(arr1[i])
            // }
            // else if(arr2[j] !== arr1[i]){
            //     newArr.push(arr2[j]);
            // }
            console.log(`I: ${arr1[i]} J: ${arr2[j]}`)
        }
    }
    return newArr;
  }
  
  console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));