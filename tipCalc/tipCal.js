const billAmount = Number(prompt("Please Enter Your Bill Amount?"));
function calcTip(billAmount){
    let tip = [];
    let bill = [];
    if(billAmount < 0){
        return false;
    };

    if(billAmount > 0 && billAmount <=50){
        tip.push(billAmount * 0.2);
        bill.push((billAmount) + (billAmount * 0.2));
    } else if(billAmount >50){
        tip.push(billAmount * 0.15);
        bill.push((billAmount) + (billAmount * 0.15));
    }else if(billAmount > 200){
        tip.push(billAmount * 0.10);
        bill.push(billAmount + (billAmount * 0.10));
    };
    console.log(bill);
    if(billAmount!= null ){
        document.getElementById("tPercent").innerHTML = ("Bill Amount is : $ "+ billAmount +", Tip Ampount is $ " +tip + ". Total is: $ " + bill);
    }
}
calcTip(billAmount);