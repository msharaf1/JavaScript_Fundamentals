function pT(){
const employee = {
	firstName: "John",
	lastName: "Smith",
	isMarried: false,
	jobHistory: ["Teacher", "Deputy Manager", "Trainer"],
	fullName: function(){return this.firstName +" "+ this.lastName},
	age: function(DoB){
		return 2019 - DoB;
	

}
// console.log(employee);
console.log(employee.fullName());
};

// pT();

function testPt(){
    class Trainner{
	constructor(firstName, lastName, isMarried, jobHistory){
	        this.firstName = firstName,
			this.lastName = lastName,
			this.isMarried = isMarried,
			this.jobHistory = jobHistory,
			this.fullName = function(){
			return this.firstName +" " + this.lastName;
			}
	};
    


}//trainner

let John = new Trainner("Johnathon", "Smith", true, ["teacher", "trainner", "PTA"]);

// console.log(John);
// console.log(John.fullName())

let Smith =  John;
console.log(Smith);
Smith.firstName = "Jason";
Smith.lastName = "Kingi";
console.log(Smith.fullName());







}//testPt
testPt();

