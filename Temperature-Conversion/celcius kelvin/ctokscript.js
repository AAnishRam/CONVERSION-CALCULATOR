let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("kelvin");

function celToKel(){
    let output = ( parseFloat(celsius.value)  ) + 273.15;
    fahrenheit.value = parseFloat(output.toFixed(2));
}

function KelToCel(){
    let output = ( parseFloat(kelvin.value) )- 273.15;
    celsius.value = parseFloat( output.toFixed(2));
    console.log(output);
}