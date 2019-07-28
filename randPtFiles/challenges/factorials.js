
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
  
//   let test = confirmEnding("Bastian", "tian");
//   console.log(test);

function repeatStringNumTimes(str, num) {
    let newStr = "";
    if(num < 0){
        return "";
    }else {
        for(let i=0; i < num; i++){
            newStr += str;
        }    
        return newStr;

    }
  }
  
//   let test = repeatStringNumTimes("abc", -3);
//   console.log(test);

function truncateString(str, num) {
    // Clear out that junk in your trunk
    let nString = "";
    if(str.length > num){
        for(let i =0; i < num; i++){ nString += str[i]; }
        return nString += "..."
    }else{
        return str;
    }
    // return nString;
    // console.log(nString);
  }
  
//   let test = truncateString("A-tisket a-tasket A green and yellow basket", 8);

//   console.log(test);

function findElement(arr, func) {
    let num = 0;

    for(let i =0; i <arr.length; i++){
        num = arr[i];
        // if(func(num)){
        //     return num;
        // }
        if(testNum(num)){
            return num;
        }
    }
    return undefined;
  }
  function testNum(num){
      return num % 2 === 0;
  }
//   console.log(testNum(8)); //returns true;

//   let test = findElement([1, 2, 3, 4], num => num % 2 === 0);
// let test = findElement([1,2,3,4], testNum(9))
//   console.log(test);



  function booWho(bool) {
    // What is the new fad diet for ghost developers? The Boolean.
    return (typeof bool === "boolean");
  }
  
//   console.log(booWho(true));

// function titleCase(str) {
//     let stringArrays = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M","N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//     var nString = str.toLowerCase().split(" ")
//     let finalStr ="";
//     for(let i=0; i<nString.length; i++){
//         finalStr = str.replace
//         finalStr += nString[i].charAt(0).toUpperCase() + nString[i].slice(1 );
//         console.log(finalStr);
//     }
//     console.log(nString); console.log(finalStr)
    
//   }
//   titleCase("I'm a little tea pot");
  




  var toTitleCase = function (str) {
	str = str.toLowerCase().split(' ');
	for (var i = 0; i < str.length; i++) {
		str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
	}
	return str.join(' ');
};
//   console.log(toTitleCase("I'm a little tea pot"));
//   console.log(titleCase("sHoRt AnD sToUt"));

// function frankenSplice(arr1, arr2, n) {
//     // It's alive. It's alive!
//     // arr1.splice(n,0, arr2);
//     let nArr = arr2.slice();
//     console.log(nArr)
//     for(let i= arr1.length-1; i >= 0; i--){
//         nArr.splice(n,0, arr1[i]);
        
//     }
    
//     return nArr;
    
//   }

  /*
  function frankenSplice(arr1, arr2, n) {
    // It's alive. It's alive!
    let localArray = arr2.slice();
    for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);
      n++;
    }
    return localArray;
  }
  */
//   let testF = frankenSplice([1, 2, 3], [4, 5, 6], 1);
//   console.log(testF);

function nullCheck(arr){
    
    for(let i=0; i < arr.length; i++){
        if(arr[i] === false || arr[i] === null || arr[i] === undefined || Number.isNaN(arr[i]) || arr[i] < 1 ||arr[i] === ""){
            arr.splice(i,1);
            i--;
        }
    }
    return arr;
}
// let testnullCheck = nullCheck( ["test",false, null, 0, "", undefined, NaN, true,1, "Hello"]);
// console.log(testnullCheck)

function sortArrays(arr){
    arr.sort(function(a, b){
        return a - b;
    });
    return arr;
}
function getIndexToIns(arr, num) {
    sortArrays(arr);
    // let newNum = 0;
    for(let i = 0; i < arr.length; i++){
        if( arr[i]>= num ){
            // newNum = i;
            return i;
            // console.log(i +",  " +arr[i]);
        }
    }
    // console.log(newNum);
    return num;
    
  }
  
//  let testGetIndex =  getIndexToIns([3,6,5,-9,7], 5);
// console.log(testGetIndex)

/*
function getIndexToInsFCC(arr, num) {
    arr.sort(function(a, b) {
      return a - b;
    });
  
    for (var a = 0; a < arr.length; a++) {
      if (arr[a] >= num)
        return a;
    }
    console.log("Arrya's length: "+arr.length)
    return arr.length; 
  }
  console.log(getIndexToInsFCC([3,6,5,-9,7], 5));
*/

function mutation(arr) {

    let a = arr[0]
    let b = arr[1];    
    for(let i =0; i < arr.length; i++){
        console.log(a[i]);
        console.log(b[i]);
        // if(){

        // }
    }
    
    return arr;
  }
  
  mutation(["hello", "hey"]);