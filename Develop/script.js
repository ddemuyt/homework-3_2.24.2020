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
var specialValue = "!@#$%^&*()_+".split("");
var numValue = "1234567890".split("");
var upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
var lowerValue = "abcdefghijklmnopqrstuvwxyz".split("");
var password = "";
var superArray = "";

prompt("How many characters would you like your password to contain?")

specialChar = confirm("Click OK to include special characters.")

numChar = confirm("Click OK to include numeric characters.")

upperChar = confirm("Click OK to include uppercase characters.")

lowerChar = confirm("Click OK to include lowercase characters.")

if (specialChar == true) {
  password += specialValue.charAt(Math.floor(Math.random() * (specialValue.length - 1)))
  superArray += 
}
if (numChar == true) {
  passwordArray += numChar.charAt(Math.floor(Math.random() * (numChar.length - 1)))
}
if (upperChar == true) {
  passwordArray += upperChar.charAt(Math.floor(Math.random() * (upperChar.length - 1)))
}
if (lowerChar == true) {
  passwordArray += lowerChar.charAt(Math.floor(Math.random() * (lowerChar.length - 1)))
}




for(var i = 0; i<= pasword; i++) {
//  passwordText = passwordText + specialValue.charAt(Math.floor(Math.random() * Math.floor(specialValue.length - 1)));
  passwordText = passwordText + specialValue.charAt(Math.floor(Math.random() * (specialValue.length - 1)));
}
for(var i = 0; i <= password; i++) {
  passwordText = passwordText + numValue.charAt(Math.floor(Math.random() * Math.floor(numValue.length - 1)));
}
for(var i = 0; i <= password; i++) {
  passwordText = passwordText + upperValue.charAt(Math.floor(Math.random() * Math.floor(upperValue.length - 1)));
}
for(var i = 0; i <= password; i++) {
  passwordText = passwordText + lowerValue.charAt(Math.floor(Math.random() * Math.floor(lowerValue.length - 1)));
}
