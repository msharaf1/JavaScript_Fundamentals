let developer = {
    name: "Christina", 
    getName: function(){
        return this.name;
    }
};

// console.log(developer.name);
// console.log(developer.getName());

function instantiateDeveloper(){
    return {
        name: "Tina",
        getName: function(){
            return this.name;
        }
    };
}

let webDev = instantiateDeveloper();
// console.log(webDev.getName());
// console.log(webDev.name);


function myCounter(){
    let count =0;
    return function(){
        count +=1;
        return count;
    };
}

let counter = myCounter();
// console.log(counter());//first Time
// console.log(counter());//second time
// console.log(counter.count);

//Module Pattern/IIFs

let person = (function(){
    let name = "Jason";
    return {
        getName: function(){
            return name;
        },
        setName: function(inputName){
            name = inputName;
        }
    }
})();
// console.log(person.name, "not accessible");
// console.log(person.getName());
// console.log("set name", person.setName("Timber"));
// console.log(person.getName());