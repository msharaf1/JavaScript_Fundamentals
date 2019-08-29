// //find factorials:
// function factorialsN(n){
//     let newNum = 1;
//     for(let i=n; i >= 1; i--){
//         newNum = newNum * i;
//     }
// //    console.log(newNum);
//     return newNum;
// }
// //console.log(factorialsN(5));
//
// function factN(n){
//     newNum = n-1;
// //    console.log(newNum)
//     if(n ===1){
//         return n;
//     }
// //    console.log(n, newNum);
//     return n * factN(newNum);
//
// }
// //console.log(factN(5));
// function iterFac(n){
//     if(n < 0){
//         throw new error("Negative result");
//     }
//     let result = 1;
//     while(n > 1){
//         result *= n;
//         n--
//     }
//     return result;
// }
// let neg4=iterFac(4);
// console.log(neg4);
//
//

// function countDown(n){
//     let finish = 1;
//     while(n >= finish){
//         console.log(n);
//         n--;
//     }
// }
// console.log(
//     countDown(10)
// )

function countDown(n){
    if(n <= 1){
        return n;
    }
    console.log(n);
    return countDown(n-1)
}
// let count4 = countDown(10);
// console.log(count4);

function  fact(n) {
    if(n==1){
        return n;
    }else {
        return n * fact(n-1);
    }
}
// console.log(fact(5));

// function reverStr(str){
//     let len = str.length;
//     let nStr = "";
//     if(len ===0){
//         return;
//     }else{
//         return nStr.push(reverStr(str -1));
//     }
//     console.log(nStr);
// }
// reverStr("Hello")

let revStr = (str => {
    let newStr = "";
    // console.log(str.length)
    for(let i = str.length-1; i>=0; i--) {
        newStr = newStr + str[i];
    }
    return newStr;
});
// console.log(revStr("Hello"));

let reverseStr = (str => {
    let newStr = "";
    // console.log(str.length)
    // for(let i = str.length-1; i>=0; i--) {
    //     newStr = newStr + str[i];
    // }
    let counter = str.length -1;
    while(counter >= 0){
        newStr+= str[counter];
        counter--;
    }
    return newStr;
});
// console.log(reverseStr("Nike"));

//function revString(str){
//    let newStr = "";
//    let len = str.length-1;
//    if(len === 0){
//        return;
//    }else{
//        
//    }
//}


//work to fix the code.
//function checkPalindrome(str){
//    let testStr1 ="";
//    for(let i = 0; i< str.length; i++){
//        for(let k = (str.length-1) /2; k>=i; k--){
//            if(str[i] === str[k]){
//                console.log(`I is ${str[i]} and K is ${str[k]}`)
////                return true;
//                testStr1+= str[i] +"-"+str[k];
//            }
//        }
//    }
//    return testStr1;
//}
//
//console.log(checkPalindrome("level"));

function checkPal(str){
    let flag = true;
    let j = 0;
    for(let i = str.length-1; i > str.length/2; i--){
        if(str[i] != str[j]){
//            return false;
            flag = false;
            break;
        }
        j++;
    }
    if(flag){
        console.log("It is a palindrom");
    }else{
        console.log("It is not a palindrom");
    }
}

checkPal("level");