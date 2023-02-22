let kilogram = document.getElementById("kilogram");
let pound = document.getElementById("pound");

function kgTop(){
    let output = ( parseFloat(kilogram.value) )* 2.20462  ;
    pound.value = parseFloat(output.toFixed(6));
}

function pTokg(){
    let output = ( parseFloat(pound.value) )/2.20462;
    kilogram.value = parseFloat( output.toFixed(6));
    console.log(output);
}