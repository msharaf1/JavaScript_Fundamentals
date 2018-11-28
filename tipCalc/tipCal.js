const billAmount = Number(prompt("Please Enter Your Bill Amount?"));
function calcTip(billAmount){
    let tip = [];
    let bill = [];
    if(billAmount < 0){
        return false;
    };

    if(billAmount > 0 && billAmount <=50){
        tip.push(parseFloat(billAmount * 0.2));
        bill.push((billAmount) + (billAmount * 0.2));
    } else if(billAmount >50 && billAmount <=100){
        tip.push(parseFloat(billAmount * 0.15));
        bill.push((billAmount) + (billAmount * 0.15));
    } else if(billAmount >100 && billAmount <=200){
        tip.push(parseFloat(billAmount * 0.10));
        bill.push((billAmount) + (billAmount * 0.15));
    }else if(billAmount > 200 && billAmount <=1000){
        tip.push(parseFloat(billAmount * 0.10));
        bill.push(billAmount + (billAmount * 0.10));
    } else if(billAmount > 1000){
        tip.push(parseFloat(billAmount * 0.05));
        bill.push(billAmount + (billAmount * 0.05));
    }
    console.log(bill);
    if(billAmount!= null ){
        document.getElementById("tPercent").innerHTML = ("Your Bill Amount is : $ "+ billAmount +", Tip Ampount is $ " +tip + ". Total is: $ " + bill);
    }

    if(billAmount!= null && billAmount !=NaN){
        document.getElementById("bAmount").innerHTML = (billAmount);
        document.getElementById("pAmount").innerHTML = (tip);
        document.getElementById("tAmount").innerHTML = (bill);
    }

}
calcTip(billAmount);