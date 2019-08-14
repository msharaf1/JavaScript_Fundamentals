//function celsiusToFahrenheit(n){
//    //C × 1.8 + 32 = °F
//    return `The temperature is ${ Math.round((n * 1.8) + 32) } farenheit.`;
//}
//
//function farenheitToCelsius(n){
//    // (°F − 32) / 1.8 = °C
//    return `The temperature is ${ Math.round((n-32) / 1.8) }  celsius.`;
//}
//
//function temperatureConverter(n, str){
//    if(str.toLowerCase() === "farenheit" || str.toLowerCase() ==="f"){
//        return farenheitToCelsius(n);
//    }else if(str.toLowerCase() === "celsius" || str.toLowerCase() === "c"){
//        return celsiusToFahrenheit(n);
//    }else{
//        `Please either type farhenheit or celsius degrees`;
//    }
//}
//
//console.log(
//    `${temperatureConverter(100, "f")} ${temperatureConverter(65, "c")} `
//    );
//
//
//const cToF = (n => `The temperature is ${ Math.round((n * 1.8) + 32) } farenheit.`);
//const fToC = (n => `The temperature is ${ Math.round((n-32) / 1.8) }  celsius.`);
//
//const tempConverter = ((n, str) => {
//    if(str.toLowerCase() === "farenheit" || str.toLowerCase() ==="f"){
//        return cToF(n);
//    }else if(str.toLowerCase() === "celsius" || str.toLowerCase() === "c"){
//        return fToC(n);
//    }else{
//        `Please either type farhenheit or celsius degrees`;
//    }
//});
//
//console.log(`${tempConverter(10, "f")} `)


const power = ((base, exponent) => {
    let result = 1;
    for(let count = 0; count < exponent; count++){
        result *= base;
    }
    return result;
});
//console.log(power(10, 3));

function powerF(base, exponent){
    if(exponent == 0){
        return 1;
    }else{
        return base * power(base, exponent -1);
    }
}
console.log(`${power(2,3)}`);

const hummus = function (factor){
    const ingredient = function(amount, unit, name){
        let ingredientAmount  = amount * factor;
        if(ingredientAmount > 1){
            unit += "s";
        }
        console.log(`${ingredientAmount} ${unit} ${name}`)
    };
    ingredient(1, "can", "chickpeas");
    ingredient(0.25, "cup", "tahini");
    ingredient(0.25, "cup", "lemon juice");
    ingredient(1,"clove", "garlic");
    ingredient(2, "tablespoon", "olive oil");
    ingredient(0.5, "teaspoon", "cumin");
};

//console.log(hummus());

function wrapValue(n){
    let local = n;
    return () => local;
}

let wrap1 = wrapValue(1);
let wrap2 = wrapValue(2);
//console.log(` ${wrap1()}  ${wrap2()} `)

function multiplier(factor){
    return number => number * factor;
}
let twice = multiplier(2);
console.log(
    twice(5)
)

function findSolution(target) {
  function find(current, history) {
    if (current == target) {
      return history;
    } else if (current > target) {
      return null;
    } else {
      return find(current + 5, `(${history} + 5)`) ||
             find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}

//console.log(findSolution(24));
// → (((1 * 3) + 5) * 3)

function zeroPad(number, width) {
  let string = String(number);
  while (string.length < width) {
    string = "0" + string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs
    ***************`);
}

printFarmInventory(7, 16, 3);

let min =((n1, n2) => {
	return Math.min(n1,n2);
}) 

//console.log(min(0, 10));
//// → 0
//console.log(min(0, -10));
//// → -10

let evenNumbers = ((n1) => {
    if(n1 % 2 === 0){
        return true;
    }else if(n1 %2 ===1){
        return false;
    }else if(n1 < 0){
        return "??";
    }
});

//console.log(evenNumbers(20));
//console.log(evenNumbers(15));
//console.log(evenNumbers(-1));

//fix the code.
//function checkNums(number){
//    if(number % 2 === 0){
//        return true;
//    }
//    else if (checkNums(number) !== true){
//        return false;
//    }
//    
//}
//
//console.log(checkNums(20));
//console.log(checkNums(15));
//console.log(checkNums(-1));
//

function countBs(str){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() ==="B"){
            count +=1;
        }
    }
    return count;
}

//console.log(countBs("BBCB"));

function findStr(str, letter){
    let count = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === letter){
            count +=1;
        }else if(str[i] === letter){
            count +=1;
        }
    }
    return count;
}

//console.log(findStr("BBCBc", "c"));

function findStrWindex(str, letter){
    let count = 0;
    let index = 0;
    for(let i = 0; i < str.length; i++){
        if(str[i].toUpperCase() === letter){
            count +=1;
            index = i;
        }else if(str[i] === letter){
            count +=1;
            index = i;
        }
    }
    let newArry = [count, index]
    return newArry;
}

//console.log(findStrWindex("BBCBcBCB", "B"));

//function tableFor(event, journal) {
//  let table = [0, 0, 0, 0];
//  for (let i = 0; i < journal.length; i++) {
//    let entry = journal[i], index = 0;
//    if (entry.events.includes(event)) index += 1;
//    if (entry.squirrel) index += 2;
//    table[index] += 1;
//  }
//  return table;
//}
//
//console.log(tableFor("pizza", JOURNAL));
//// → [76, 9, 4, 1]
//
//function journalEvents(journal) {
//  let events = [];
//  for (let entry of journal) {
//    for (let event of entry.events) {
//      if (!events.includes(event)) {
//        events.push(event);
//      }
//    }
//  }
//  return events;
//}
//
//console.log(journalEvents(["carrot", "exercise", "weekend", "bread"]));
//// → ["carrot", "exercise", "weekend", "bread", …]

//let findRangeSum = ((start, end) =>{
//    let sum =0;
//    
//    let numbers = [];
//    while(start <= end){
//        numbers.push(start);
//        sum += start;
//        start++;
//    }
//    return sum;
//});
//console.log(findRangeSum(1, 2))

let findSumArray = ((arr)=>{
    let sumArray = 0;
    let count =0;
    while(count < arr.length){
        sumArray += (arr[count]);
        count++;
    }
    return sumArray;
 })


//console.log(findSumArray([1,2,3,4,5]));

