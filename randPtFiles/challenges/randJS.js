function celsiusToFahrenheit(n){
    //C × 1.8 + 32 = °F
    return `The temperature is ${ Math.round((n * 1.8) + 32) } farenheit.`;
}

function farenheitToCelsius(n){
    // (°F − 32) / 1.8 = °C
    return `The temperature is ${ Math.round((n-32) / 1.8) }  celsius.`;
}

function temperatureConverter(n, str){
    if(str.toLowerCase() === "farenheit" || str.toLowerCase() ==="f"){
        return farenheitToCelsius(n);
    }else if(str.toLowerCase() === "celsius" || str.toLowerCase() === "c"){
        return celsiusToFahrenheit(n);
    }else{
        `Please either type farhenheit or celsius degrees`;
    }
}

console.log(
    `${temperatureConverter(100, "f")} ${temperatureConverter(65, "c")} `
    );


const cToF = (n => `The temperature is ${ Math.round((n * 1.8) + 32) } farenheit.`);
const fToC = (n => `The temperature is ${ Math.round((n-32) / 1.8) }  celsius.`);

const tempConverter = ((n, str) => {
    if(str.toLowerCase() === "farenheit" || str.toLowerCase() ==="f"){
        return cToF(n);
    }else if(str.toLowerCase() === "celsius" || str.toLowerCase() === "c"){
        return fToC(n);
    }else{
        `Please either type farhenheit or celsius degrees`;
    }
});

console.log(`${tempConverter(10, "f")} `)
