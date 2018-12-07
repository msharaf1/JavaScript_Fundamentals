// function TestA(){
// 	let employee = (function(){
// 	let name = "Jessica";
// 	let date = new Date();
// 	let currentYear = date.getFullYear();
// 	let age = currentYear - 1990;
// 	return {
// 		getName: function(){return name},
// 		getAge: function(){return age},
// 		setName: function(newName){ name = newName}

// 	};
// })();

// // console.log(employee.getName());
// // employee.setName("Jina");
// // console.log(employee.getName());
// // console.log(employee.getAge());
// };

// let manager = (function(){
// 	let Name = "Jason";
// 	let SSN = 2515454;
// 	let DoB = 1995;
// 	let mAge = calcDate(DoB);
// 		function calcDate(DoB){
// 		    let date = new Date();
// 		    let currentYear = date.getFullYear();
// 		    let age = currentYear - DoB;
// 	    return age;
// 		};
		
// 	return {
// 		getName: function(){
// 			return Name;
// 		},
// 		getSSN: function(){
// 			return SSN;
// 		},
// 		getAge: function(){
// 			return mAge;
// 		},
// 		setName: function(newName){
// 			name = newName;
// 		},
// 		setSSN: function(newSSN){
// 			SSN = newSSN;
// 		}



// 	}
// })();
// console.log(manager.getName());
// console.log(manager.getAge());
// console.log(manager.getSSN());

// console.log(manager.setName("Tina"));
// // console.log(manager.getAge());
// console.log(manager.setSSN(39748973));

// console.log(manager.getName());
// console.log(manager.getAge());
// console.log(manager.getSSN());

/** Udacity 
Keep in mind, however, that you generally use the Module Pattern when you just want one "version" of an object. If you're looking to instantiate unique objects that follow a certain blueprint, you can always still write and invoke a constructor function
*/



////reveal Pattern

// let myModulePt = (function(){
//     function privateMethod(message){
//         console.log(message);
//     };
//     function publicMethod(message){
//         privateMethod(message); 
//     };
//     return {
//         publicMethod: publicMethod
//     };
// })();

// console.log(myModelPt.publicMethod("Hello is a private message from public domain."));

// // Module Pttern
// let reveModulePt = function(){
//     function privateMethod(message){
//         console.log(message);
//     };

//     return {
//         publicMethod:     function(message){
//             privateMethod(message);
//         }
//     };
// }

// console.log(reveModulePt.publicMethod("Hello is a private message from public domain2."));
let person = (function(){
    let privateAge = 0;
    let privateName= "Andrew";

    function privateAgeOneYear(){
        privateAge += 1;
        console.log("You age is: ", privateAge);
    }
    function displayName(){
        console.log("Name: ", privateName);
    }

    function ageOneyear(){
        privateAgeOneYear();
    }

    return {
        name: displayName,
        age: ageOneyear


    };
})();

console.log(person.name(), person.age());