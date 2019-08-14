let test = "hello world.com";

let total = 0, count = 1;
while (count <= 10) {
  total += count;
  count += 1;
}
//console.log(total);
//console.log(sum(range(1, 10)));


//Abstraction
/*
As an analogy, compare these two recipes for pea soup. The first one goes like this:

    Put 1 cup of dried peas per person into a container. Add water until the peas are well covered. Leave the peas in water for at least 12 hours. Take the peas out of the water and put them in a cooking pan. Add 4 cups of water per person. Cover the pan and keep the peas simmering for two hours. Take half an onion per person. Cut it into pieces with a knife. Add it to the peas. Take a stalk of celery per person. Cut it into pieces with a knife. Add it to the peas. Take a carrot per person. Cut it into pieces. With a knife! Add it to the peas. Cook for 10 more minutes.

And this is the second recipe:

    Per person: 1 cup dried split peas, half a chopped onion, a stalk of celery, and a carrot.

    Soak peas for 12 hours. Simmer for 2 hours in 4 cups of water (per person). Chop and add vegetables. Cook for 10 more minutes.

    */


//Abstracting repetition
//
//for (let i = 0; i < 10; i++) {
//  console.log(i);
//}

function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}

function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i);
  }
}

repeat(3, console.log);

let labels = [];
repeat(5, i => {
  labels.push(`Unit ${i + 1}`);
});
console.log(labels);





function greaterThan(n) {
  return m => m > n;
}
let graterThan10 = greaterThan(10);
// console.log(graterThan10(11));

function noisy(f) {
  return (...args) => {
      console.log("Calling with", args);
      let result = f(...args);
      console.log("Called with", args, ", returnd", result);
  };
}

//noisy(Math.min)(3,2,1);

function unless(test, then){
    if(!test) then();
}
repeat(3,n => {
    unless(n %2 == 1, ()=>{
        console.log(n, " is even");
    });
});

// ["A", "B", "C"].forEach(l => console.log(l));

let myShoppingCategory = ["Groceries", "Computers"];
let myShoppingList = ["bread", "tomato", "monitor", "laptop"];
let priceList = [[1, 2, 3], [4, 5], [6],7];


let myArr = [];
priceList.forEach(function(value){
    if(Array.isArray(value)){
        value.forEach(function(newVal){
            // console.log(newVal);
            myArr.push(newVal);
            // console.log("arr has now: "+myArr);
        });
    }else{
            // console.log(value);
            myArr.push(value);
            // console.log("arr has now: "+myArr);
        }
});
// console.log(myArr);



//   name: "Coptic",
//   ranges: [[994, 1008], [11392, 11508], [11513, 11520]],
//   direction: "ltr",
//   year: -200,
//   living: false,
//   link: "https://en.wikipedia.org/wiki/Coptic_alphabet"
// }

//Filtering arrays

// function filter(array, test){
//     let passed = [];
//     for(let element of array){
//         if(test(element)){
//             passed.push(element)
//         }
//     }
//     return passed;
// }
//console.log(
////    filter(SCRITPS, script => scrip.living)
//);




function loopArray(arr){
    let newArray = []
    for(let i = 0; i < arr.length; i++){
        // console.log(`Value of i: arr[i] ${arr[i]}`);
        if(Array.isArray(arr[i])){
            for(let k =0; k < arr[i].length; k++){
                newArray.push(arr[i][k]);
                // console.log(`Value of i: arr[i] ${arr[i][k]}`);
            }
        }else{
            newArray.push(arr[i]);
        }
    }
    return newArray.sort();
    console.log(`new Array values: ${newArray}`);
}

// console.log(
//     loopArray([3,[1, 2, 3], [4, 5], [6],7])
// )

function findSolution(target){
  function find(current, history){
    if(current == target){
      return history;
    }else if(current > target){
      return null;
    }else {
      return find(current +5, `(${history} +5)`) || find(current * 3, `(${history} * 3)`);
    }
  }
  return find(1, "1");
}
// console.log(findSolution(24));

function zeroPad(number, width){
  let string = String(number);
  while (string.length < width){
    string = "0" +string;
  }
  return string;
}

function printFarmInventory(cows, chickens, pigs) {
  console.log(`${zeroPad(cows, 3)} Cows`);
  console.log(`${zeroPad(chickens, 3)} Chickens`);
  console.log(`${zeroPad(pigs, 3)} Pigs`);
}

printFarmInventory(7, 16, 3);
















