
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
    if(n % m == 0){
        return 
    }
}