let fahrenheit = document.getElementById("fahrenheit");
let kelvin = document.getElementById("kelvin");

function farTokel(){
    let output = ( parseFloat(fahrenheit.value) -32 ) * (5/9) + 273.15;
    kelvin.value = parseFloat(output.toFixed(2));
}

function kelTofar(){
    let output = ( parseFloat(kelvin.value) - 273.15) * (9/5) + 32;
    fahrenheit.value = parseFloat( output.toFixed(2));
    console.log(output);
}