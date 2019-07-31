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

console.log(members.has("Liam"));
let Liam = members.get("Liam");
console.log(Liam);