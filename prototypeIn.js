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