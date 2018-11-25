//check income limit:
function testElegibility(householdSize, maxIncomeLevePerYear){
// let householdSize = 0;
// let maxIncomeLevePerYear = 0;

let elegibility;
if(householdSize === 1 && maxIncomeLevePerYear <=16146 ){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 2 && maxIncomeLevePerYear <= 21892){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 3 && maxIncomeLevePerYear <= 27637){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 4 && maxIncomeLevePerYear <= 33383){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 5 && maxIncomeLevePerYear <= 39129){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 6 && maxIncomeLevePerYear <= 44874){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 7 && maxIncomeLevePerYear <= 50620){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize === 8 && maxIncomeLevePerYear <= 56365){
    console.log(elegibility = "You are elegible for Medicaid");
} else if(householdSize >= 9){
    function famiOver8(householdSize, maxIncomeLevePerYear){
        let maxNumberOfFamiliy = 8;// for each extra person add 5746 to 56365
        let maxLimitAmount = 56365;//Maximum limit amount for family of 8 determind by VA.
        let count=0;//keep count of the extra people.
        let extraMemCost = 5746;
        let elegLimit = 0;//store number of extra person times by 5746
        let endResult;//print the result.
        // let result = count * extraMemCost + maxIncomeLevePerYear;
            for( let i = householdSize; i > maxNumberOfFamiliy; i--){
                count++;
            };
                let extraAmount = (count * extraMemCost);
                elegLimit = extraAmount + maxLimitAmount;

                if(maxIncomeLevePerYear <= elegLimit){
                    endResult = "You are elegible";
                } else {
                    endResult = "You are not eligible";
                }
                console.log(endResult);
                return endResult;
            }
        
        famiOver8(householdSize, maxIncomeLevePerYear);
} else{
    console.log(elegibility = "You are Not elegible for Medicaid");
}

}
testElegibility(1, 50000);