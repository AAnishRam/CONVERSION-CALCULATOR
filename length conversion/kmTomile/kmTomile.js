let kilometer = document.getElementById("kilometer");
let mile = document.getElementById("mile");

function kmTomile(){
    let output = ( parseFloat(kilometer.value) )* 0.621371  ;
    mile.value = parseFloat(output.toFixed(6));
}

function mileTokm(){
    let output = ( parseFloat(mile.value) )/0.621371;
    kilometer.value = parseFloat( output.toFixed(6));
    console.log(output);
}