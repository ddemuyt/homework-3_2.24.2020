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
var count = 0
var randomSpecial = password += specialValue.charAt(Math.floor(Math.random() * (specialValue.length - 1)));
var randomNum = password += numValue.charAt(Math.floor(Math.random() * (numValue.length - 1)));
var randomUpper = password += upperValue.charAt(Math.floor(Math.random() * (upperValue.length - 1)));
var randomLower = password += lowerValue.charAt(Math.floor(Math.random() * (lowerValue.length - 1)));

passwordLength = prompt("How many characters would you like your password to contain?")
specialChar = confirm("Click OK to include special characters.")
numChar = confirm("Click OK to include numeric characters.")
upperChar = confirm("Click OK to include uppercase characters.")
lowerChar = confirm("Click OK to include lowercase characters.")



if (specialChar == true) {
  randomSpecial;
  superArray += specialValue;
}
if (numChar == true) {
  randomNum;
  superArray += numValue;
}
if (upperChar == true) {
  randomUpper;
  superArray += upperValue;
}
if (lowerChar == true) {
  randomLower;
  superArray += lowerValue;
}
else {
  alert("Please select at least one set of characters to include.")
}

for(count; count <= passwordLength; count++) {
  typeChosen=Math.floor(Math.random(1-4));
  if(typeChosen == 1) {
    password += randomSpecial;
    count++;
  }
  else if (typeChosen == 2) {
    password += randomNum;
    count++;
  }
  else if (typeChosen == 3) {
    password += randomUpper;
    count++;
  }
  else if (typeChosen == 4) {
    password += randomLower;
    count++;
  }

}
 alert(password)
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
