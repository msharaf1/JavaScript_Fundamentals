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

///
// The advantage of the constructor property is that it's possible to check for this property to find out what kind of object it is. Here's an example of how this could be used:

function joinBirdFraternity(candidate) {
  if (candidate.constructor === Bird) {
    return true;
  } else {
    return false;
  }
}


function Dog(name) {
  this.name = name;
}

// Add your code below this line
function joinDogFraternity(candidate) {
  if(candidate.constructor === Dog){return true} else{ return false}
  
}
// Note
// Since the constructor property can be overwritten (which will be covered in the next two challenges) it’s generally better to use the instanceof method to check the type of an object.
// Write a joinDogFraternity function that takes a candidate parameter and, using the constructor property, return true if the candidate is a Dog, otherwise return false.

function Dog(name) {
  this.name = name; 
}

Dog.prototype = {
  // Add your code below this line
  numLegs: 4,
  eat: function(){
    console.log("eating food");
  },
  describe: function(){console.log("My name is "+ this.name);}
  
};

// Up until now you have been adding properties to the prototype individually:

Bird.prototype.numLegs = 2;
// This becomes tedious after more than a few properties.

Bird.prototype.eat = function() {
  console.log("nom nom nom");
}

Bird.prototype.describe = function() {
  console.log("My name is " + this.name);
}
// A more efficient way is to set the prototype to a new object that already contains the properties. This way, the properties are added all at once:

Bird.prototype = {
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom");
  },
  describe: function() {
    console.log("My name is " + this.name);
  }
};

// Add the property numLegs and the two methods eat() and describe() to the prototype of Dog by setting the prototype to a new object.


function Dog(name) {
  this.name = name; 
}

//To fix this, whenever a prototype is manually set to a new object, remember to define the //constructor property:
// Modify the code below this line

Dog.prototype = {
  constructor: Dog,//
  numLegs: 2, 
  eat: function() {
    console.log("nom nom nom"); 
  }, 
  describe: function() {
    console.log("My name is " + this.name); 
  }
};
