//calculate tax amount.
function singleFiler(income){
    // let taxRate = 0;
    let totalTaxAmount = 1;//set it to 1 because of multiplication
    if(income <0){
        return false;
    }//income must be greater than 1.
    if (income > 0 && income <= 9525){
        totalTaxAmount = (income * 10) /100;//10%
    } else if(income >= 9526 && income <= 38700){
        totalTaxAmount = (income * 12) /100;//12% tax;
    } else if(income >= 38701 && income <= 82500){
        totalTaxAmount = (income * 22) /100; //22% tax;
    } else if(income >= 82501 && income <= 157500){
        totalTaxAmount = (income * 24) /100; //24%
    } else if(income >= 157501 && income <= 200000){
        totalTaxAmount = (income * 32) /100;
    } else if(income >= 200001 && income <= 500000){
        totalTaxAmount = (income * 35) /100;//35%
    } else if(income >= 500001){
        totalTaxAmount = (income * 37) /100;//37%
    }
    return "$ "+ totalTaxAmount;
}//singleFiler bracket

let JohnTaxAmount = singleFiler(10000);
console.log(JohnTaxAmount);


//Joint filers

function jointlyFiling(income){
    // let taxRate = 0;
    let totalTaxAmount = 1;//set it to 1 because of multiplication
    if(income <0){
        return false;
    }//income must be greater than 1.
    if (income > 0 && income <= 19050){
        totalTaxAmount = (income * 10) /100;//10%
    } else if(income >= 19051 && income <= 77400){
        totalTaxAmount = (income * 12) /100;//12% tax;
    } else if(income >= 77401  && income <= 165000){
        totalTaxAmount = (income * 22) /100; //22% tax;
    } else if(income >= 165001 && income <= 315000){
        totalTaxAmount = (income * 24) /100; //24%
    } else if(income >= 315001  && income <= 400000){
        totalTaxAmount = (income * 32) /100;
    } else if(income >= 400001 && income <= 600000){
        totalTaxAmount = (income * 35) /100;//35%
    } else if(income >= 600001){
        totalTaxAmount = (income * 37) /100;//37%
    }
    return "$ "+ totalTaxAmount;
}//jointlyFilling bracket
let Sams = jointlyFiling(10000);
console.log(Sams);
