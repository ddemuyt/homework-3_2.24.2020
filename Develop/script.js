// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// What I need for this to work
var specialValue = "!@#$%^&*()_+";
var numValue = "1234567890";
var upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerValue = "abcdefghijklmnopqrstuvwxyz";
var password = "";
var superArray = "";

passwordLength = prompt("How many characters would you like your password to contain?")
specialChar = confirm("Click OK to include special characters.")
numChar = confirm("Click OK to include numeric characters.")
upperChar = confirm("Click OK to include uppercase characters.")
lowerChar = confirm("Click OK to include lowercase characters.")
var count = 0 


if (specialChar == true) {
  password += specialValue.charAt(Math.floor(Math.random() * (specialValue.length - 1)));
  superArray += specialValue;
}
if (numChar == true) {
  password += numValue.charAt(Math.floor(Math.random() * (numValue.length - 1)));
  superArray += numValue;
}
if (upperChar == true) {
  password += upperValue.charAt(Math.floor(Math.random() * (upperValue.length - 1)));
  superArray += upperValue;
}
if (lowerChar == true) {
  password += lowerValue.charAt(Math.floor(Math.random() * (lowerValue.length - 1)));
  superArray += lowerValue;
}
else {
  alert("Please select at least one set of characters to include.")
}

for(count; count <= passwordLength; count++) {
  typeChosen=Math.floor(Math.random(1-4));
  if(typeChosen == 1) {
    specialValue;
    count++;
  }
  else if (typeChosen == 2) {
    numValue;
    count++;
  }
  else if (typeChosen == 3) {
    upperValue;
    count++;
  }
  else if (typeChosen == 4) {
    lowerValue;
    count++;
  }

}

//  passwordText = passwordText + specialValue.charAt(Math.floor(Math.random() * Math.floor(specialValue.length - 1)));

// for(var i = 0; i <= password; i++) {
//   passwordText = passwordText + numValue.charAt(Math.floor(Math.random() * Math.floor(numValue.length - 1)));
// }
// for(var i = 0; i <= password; i++) {
//   passwordText = passwordText + upperValue.charAt(Math.floor(Math.random() * Math.floor(upperValue.length - 1)));
// }
// for(var i = 0; i <= password; i++) {
//   passwordText = passwordText + lowerValue.charAt(Math.floor(Math.random() * Math.floor(lowerValue.length - 1)));
// }
