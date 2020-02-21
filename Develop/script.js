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

prompt("How many characters would you like your password to contain?")

specialChar = confirm("Click OK to include special characters.")

numChar = confirm("Click OK to include numeric characters.")

upperChar = confirm("Click OK to include uppercase characters.")

lowerChar = confirm("Click OK to include lowercase characters.")

// if (specialChar = true && numChar = true && upperChar = true && lowerChar = true) {}


var specialValue = "!@#$%^&*()_+";
var numValue = "1234567890";
var upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lowerValue = "abcdefghijklmnopqrstuvwxyz";

for(var i = 0; i <= password; i++) {
  passwordText = passwordText + specialValue.charAt(Math.floor(Math.random() * Math.floor(specialValue.length - 1)));
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
