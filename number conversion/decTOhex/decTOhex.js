//Initial References
let decInp = document.getElementById("dec-inp");
let binInp = document.getElementById("bin-inp");
let errorMsg = document.getElementById("error-msg");

//Convert decimal to hexadecimal when user inputs in the decimal field
decInp.addEventListener("input", () => {
  let decValue = parseInt(decInp.value);
  //Converts the decimal value to hexadecimal
  binInp.value = decValue.toString(16);
});

//Convert hexadecimal to decimal when user inputs in the hexadecimal field
binInp.addEventListener("input", () => {
  let binValue = binInp.value;
  //If the binary number is valid convert it to decimal
  if (binValidator(binValue)) {
    decInp.value = parseInt(binValue, 16);
    errorMsg.textContent = "";
  }
  //Else display an error message
  else {
    errorMsg.textContent = "Please Enter An Valid Hexadecimal Input";
  }

  //Function to check if the binary number is valid i.e it does not contain any number other than 0 and 1
  function binValidator(num) {
    for (let i = 0; i < num.length; i++) {
      if (num[i] != "0" && num[i] != "1" && num[i] != "2" && num[i] != "3" && num[i] != "4" && num[i] != "5" && num[i] != "6" && num[i] != "7" && num[i] != "7" && num[i] != "8" && num[i] != "9"  && num[i] != "A" && num[i] != "a" && num[i] != "B" && num[i] != "b" && num[i] != "C" && num[i] != "c" && num[i] != "D" && num[i] != "d" && num[i] != "E" && num[i] != "e" && num[i] != "F" && num[i] != "f" ) {
        return false;
      }
    }
    return true;
  }
});