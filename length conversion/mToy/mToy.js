let meter = document.getElementById("meter");
let yard = document.getElementById("yard");

function mToy(){
    let output = ( parseFloat(meter.value) )* 1.09361  ;
    yard.value = parseFloat(output.toFixed(6));
}

function yTom(){
    let output = ( parseFloat(yard.value) )/1.09361;
    meter.value = parseFloat( output.toFixed(6));
    console.log(output);
}