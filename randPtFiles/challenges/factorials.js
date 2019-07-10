
// function factorialTest(num){
//     let newNum=1;
//     for(let i =1; i <= num; i++){
//         newNum  = newNum * i;
//     }
//     num = newNum;
//     return num;
//     // console.log(num);
// }
// console.log(factorialTest(5));

/*
function largestNumber(n){
    let list = [9,99,999,9999,99999,999999, 9999999, 99999999, 999999999];
    let listNames = ["ones", "tens", "hunreds", "thousands", "hundredThousands", "oneMillion"]
    
    let onesList = [];
    let tensList = [];
    let hundredesList = [];
    let thousandsList = [];
    let otherList = []
    
    let ones = 9;
    let tens = 99;
    let hundereds = 999
    let thousands = 9999;
    let others = 99999;
    

    let min = 0;
    let max = 0;

    for(let i = 0; i < list.length; i++){
        if(list[i] <= ones){
            onesList.push(list[i]);
        } else if(list[i] > ones && list[i] <= tens){
            tensList.push(list[i]);

        }else if(list[i] > tens && list[i] <= hundereds){
            hundredesList.push(list[i]);
        }else if(list[i] > hundereds && list[i] <= thousands){
            thousandsList.push(list[i]);
        }
        else if(list[i] > thousands){
            otherList.push(list[i]);
        }
    }
    if(n <= 1){
        for(let i =0; i < onesList.length; i++){
            if(max < onesList[i]){
                max = onesList[i];
            }
        }
    }
    else if(n > 1 && n <= 2){
        for(let i = 0; i < tensList.length; i++){
            if(max < tensList[i]){
                max = tensList[i];
            }
        }
    }
    else if(n > 2 && n <= 3){
        for(let i=0; i < hundredesList.length; i ++){
            if(max < hundredesList[i]){
                max = hundredesList[i];
            }
        }
    }
    else if(n > 3 && n <= 4){
        for(let i =0; i < thousandsList.length; i++){
            if(max < thousandsList[i]){
                max = thousandsList[i];
            }
        }
    }
    else if(n > 4 && n <= 5){
        for(let i=0; i < otherList.length; i++){
            if(max < otherList[i]){
                max = otherList[i];
            }
        }
    }
    return max;
    }
// console.log(largestNumber(1));

// function largestNumber(n) {
//     return Math.pow(10, n) - 1;
//     // return Math.pow(10, n);
// }
// let a = largestNumber(3);
// console.log(a);

function candies(n, m){
    let c = Math.floor(m/n);
    let result = n * c;
    return result;
    }
let b = candies(3,10);
console.log(b);

function tCan(n, m){
    let result = m - (m%n);
                    // 10 - [(10/3 = r 1)]
    console.log(result);
}
// tCan(3,10);
*/
/*
function findLongestWordLength(str) {
    // let shortString = "";
    // let longString = "";
    // let newString = "";
    // let strList = [];
    // for(let i =0; i < str.length; i++){
    //     shortString += str[i];
    //         if(str[i] === " "){
    //             shortString += ",";
    //         }
    // }
    // let a = str.split(' ');
    // console.log("Long: " +longString);
    // console.log("short: " +shortString);
    // console.log("newString: " +newString);
    // console.log("A: " + a)

    // let test = str.split(" ");
    let newString = "";
    let arrayStr = str.split(" ");
    let strSize = 0;
    for(let i =0; i < str.length; i++){
        if(str[i] === " "){
            newString+= ",";
        }else{
            newString += str[i];

            }
        }
    arrayStr.forEach(function(str2){
        if(str2.length > strSize){
            strSize = str2.length;
        }
    })

    // newString.forEach(function(str2){
    //     if(str2.length > strSize){
    //         strSize = str2.length;
    //     }
    // })
    
    console.log("New String: " +newString)
    console.log("Array List: "+ arrayStr)
    console.log(strSize);
    
    // return newString;
    // console.log(newString)
}
  
  console.log(findLongestWordLength("The quick brown fox jumped over the lazy dog"))
*/

function largestOfFour(arr) {
    let max1 = null;
    let max2 = null;
    let max3 = null;
    let max4 = null;
    let maxNumbers = [];
    
    // for(let i=0; i < arr.length; i++){
    //     // console.log(arr[i])
        
    //     for(let k=0; k < arr[i].length; k++){
    //         console.log(arr[i][k])
    //         if(max1 < arr[i][k]){
    //             max1 = arr[i][k];
    //         }
    //     }
    // }

    for(let i = 0; i < arr[0].length; i++){
        console.log(arr[0][i]);
        if(max1 == null || max1 < arr[0][i]){
            max1 = arr[0][i];
        }
    }

    for(let i = 0; i < arr[1].length; i++){
        console.log(arr[1][i]);
        if(max2 == null || max2 < arr[1][i]){
            max2 = arr[1][i];
        }
    }

    for(let i = 0; i < arr[2].length; i++){
        console.log(arr[2][i]);
        if(max3 == null || max3 < arr[2][i]){
            max3 = arr[2][i];
        }
    }

    for(let i = 0; i < arr[3].length; i++){
        console.log(arr[3][i]);
        if(max4 == null || max4 < arr[3][i]){
            max4 = arr[3][i];
        }
    }
    maxNumbers.push(max1);
    maxNumbers.push(max2);
    maxNumbers.push(max3);
    maxNumbers.push(max4);
    // console.log("Max value Max1: " + max1 +" | Max2: " + max2 +" | Max3: " +max3 +" | Max4: " +max4);
    // console.log(maxNumbers);
    return maxNumbers;
    
  }
  
// let test = largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1,-1]]);
// console.log(test);

//https://www.freecodecamp.org/news/three-ways-to-return-largest-numbers-in-arrays-in-javascript-5d977baa80a1/

/// the following functions fails due to 0 based value rather than index based.
// function largestOfFour1(arr) {
//     var largestNumber = [0,0,0,0];
//     for(var arrayIndex = 0; arrayIndex < arr.length; arrayIndex++) {
//      for(var subArrayIndex = 0; subArrayIndex < arr[arrayIndex].length; subArrayIndex++) {
//         if(arr[arrayIndex][subArrayIndex] > largestNumber[arrayIndex]) {         
//            largestNumber[arrayIndex] = arr[arrayIndex][subArrayIndex];
//          }
//      }
//   }
//   return largestNumber;
//  }
//  let b = largestOfFour1([[-11,-25,-10,-5], [13, 27, 18, 26], [32, -14, 37, 39], [1000, 1001, 857, -33]]);
//  console.log(b);

 function largestOfFour2(mainArray) {
    return mainArray.map(function (subArray){
      return subArray.reduce(function (previousLargestNumber, currentLargestNumber) {
        return (currentLargestNumber > previousLargestNumber) ? currentLargestNumber : previousLargestNumber;
      }, 0);
    });
  }
//   console.log(largestOfFour2([[-11,-25,-10,-5], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));

function confirmEnding(str, target) {
    // "Never give up and good luck will find you."
    // -- Falcor
    
    let nString = str.slice(str.length - target.length)
        console.log(nString);    
    for(let i=0; i < nString.length; i++){
        if(nString === target){
            return true;
        }else{
            return false;
        }
    }
  }
  
  let test = confirmEnding("Bastian", "tian");
  console.log(test);