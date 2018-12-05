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

let manager = (function(){
	let Name = "Jason";
	let SSN = 2515454;
	let DoB = 1995;
	let mAge = calcDate(DoB);
		function calcDate(DoB){
		    let date = new Date();
		    let currentYear = date.getFullYear();
		    let age = currentYear - DoB;
	    return age;
		};
		
	return {
		getName: function(){
			return Name;
		},
		getSSN: function(){
			return SSN;
		},
		getAge: function(){
			return mAge;
		},
		setName: function(newName){
			name = newName;
		},
		setSSN: function(newSSN){
			SSN = newSSN;
		}



	}
})();
console.log(manager.getName());
console.log(manager.getAge());
console.log(manager.getSSN());

console.log(manager.setName("Tina"));
// console.log(manager.getAge());
console.log(manager.setSSN(39748973));

console.log(manager.getName());
console.log(manager.getAge());
console.log(manager.getSSN());
