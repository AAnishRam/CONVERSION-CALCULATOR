let foot = document.getElementById("foot");
let inch = document.getElementById("inch");

function fToi(){
    let output = ( parseFloat(foot.value) )* 12  ;
    inch.value = parseFloat(output.toFixed(6));
}

function iTof(){
    let output = ( parseFloat(inch.value) )/12;
    foot.value = parseFloat( output.toFixed(6));
    console.log(output);
}