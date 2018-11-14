//Codes from Udacity.com

function Cat(name){
    this.lives = 9;
    this.name = name;

    this.sayName = function(){
        console.log(`Hello, My Nmae is ${this.name} `);
    };
    this.sayLives = function(){
        console.log(`I am ${this.lives} years old.`)
    }
}

let jCat = new Cat("Jangli");

console.log(jCat.sayName());
console.log(
    jCat.sayLives()
);



function Dalmatian (name) {
    this.name = name;
  
    this.bark = function() {
      console.log(`${this.name} barks!`);
    };
  }
  // (B)
  
  function Dalmatian (name) {
    this.name = name;
  }
  
  Dalmatian.prototype.bark = function() {
    console.log(`${this.name} barks!`);
  };




function Dog(name) {
  this.name = name;
}
Dog.prototype.numLegs = 4;


// Add your code above this line
let beagle = new Dog("Snoopy");


///Object Oriented Programming: Iterate Over All Properties
//You have now seen two kinds of properties: own properties and prototype properties. Own properties are defined directly on the object instance itself. And prototype properties are defined on the prototype.
////freecodecamp

function Dog(name) {
  this.name = name;
}

Dog.prototype.numLegs = 4;

let beagle = new Dog("Snoopy");

let ownProps = [];
let prototypeProps = [];

// Add your code below this line 
for(let property in beagle){
  if(beagle.hasOwnProperty(property)){
    ownProps.push(property);
  }else{
    prototypeProps.push(property);
  }
}

console.log(ownProps);
console.log(prototypeProps);



