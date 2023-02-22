let kilogram = document.getElementById("kilogram");
let ounce = document.getElementById("ounce");

function kgToo(){
    let output = ( parseFloat(kilogram.value) )* 35.274  ;
    ounce.value = parseFloat(output.toFixed(6));
}

function oTokg(){
    let output = ( parseFloat(ounce.value) )/35.274;
    kilogram.value = parseFloat( output.toFixed(6));
    console.log(output);
}