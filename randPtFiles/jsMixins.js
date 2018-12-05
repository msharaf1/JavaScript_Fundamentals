const target = {letter: "H", number: 20};
const source = {number: 40};
// console.log(target);
Object.assign(target, source);
// console.log(target);

let duck = {hasBill: true};
let beaver = {hasTail: true};
let otter = {hasFur: true, feet: "webbed"};

const platypus = Object.assign({} ,duck, beaver, otter);
// console.log(platypus);

// console.log(
// platypus.constructor,
// // Object()
// platypus.isPrototypeOf(duck),
// // false
// duck.isPrototypeOf(platypus),
// // false
// platypus.isPrototypeOf(beaver),
// // false
// beaver.isPrototypeOf(duck),
// // false
// platypus.isPrototypeOf(otter),
// // false
// otter.isPrototypeOf(platypus)
// // false
// );
//*********************************** */

function City(name, population){
    this.name = name;
    this.population = population;
    this.identify = function(){
        return (` ${this.name}'s population is ${this.population} `);
    };
}

let districtOfColumbia = new City("DC", 28000);
// console.log(districtOfColumbia);
// console.log( districtOfColumbia.population);

// Factory Functions
// A factory function is a function that returns an object, but isn't itself a class or constructor.

function Basketballl(color){
    return{
        color: color,
        numDots: 35000
    };
}

const orangeBasketball = Basketballl("Orange");
// console.log(orangeBasketball);

function Country(countryName, countryPopulation, highestTemp, lowestTemp){
    return {
        countryName: countryName,
        countryPopulation: countryPopulation,
        highestTemp: 39,
        lowestTemp: -32
    };
}

let afghanistan = Country("Afghanistan", 35000000);
console.log(afghanistan.countryName, afghanistan.countryPopulation, afghanistan.highestTemp);

