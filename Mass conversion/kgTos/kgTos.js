let kilogram = document.getElementById("kilogram");
let stone = document.getElementById("stone");

function kgTos(){
    let output = ( parseFloat(kilogram.value) )* 0.157473 ;
    stone.value = parseFloat(output.toFixed(6));
}

function sTokg(){
    let output = ( parseFloat(stone.value) )/0.157473;
    kilogram.value = parseFloat( output.toFixed(6));
    console.log(output);
}