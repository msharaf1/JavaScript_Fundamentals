let arr = [2,4,9];


function sqrNum(num){
    return (num * num);
};

let sqredNum = (num => num * num);

//
//let resultSqr = sqrNum(4);
//console.log(resultSqr);
//
//console.log(sqredNum(9));
function loopArr(arr){
    let sqrd = []
    for(let i = 0; i < arr.length; i++){
        sqrd.push(sqredNum(arr[i]));
    }
    return sqrd;

}
// console.log(loopArr(arr));


const studentList = [
    {firstName: "James", lastName: "Jackson", age: 38},
    {firstName: "Anderson", lastName: "Anderson", age: 29},
    {firstName: "Nancy", lastName: "Bush", age: 33}
]

let studentLastNames = studentList.map(name => name.lastName);
console.log(studentLastNames);

let studentAge = studentList.map(student => student.age);
console.log(studentAge)