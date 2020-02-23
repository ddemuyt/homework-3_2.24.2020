// Assignment Code
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var specialValue = "!@#$%^&*()_+";
  var numValue = "1234567890";
  var upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerValue = "abcdefghijklmnopqrstuvwxyz";
  var password = "";
  // var superArray = "";
  var count = 0
  
  function randomSpecial() {
    password += specialValue.charAt(Math.floor(Math.random() * (specialValue.length - 1)));
  }
  
  function randomNum() {
    password += numValue.charAt(Math.floor(Math.random() * (numValue.length - 1)));
  }
  
  function randomUpper() {
    password += upperValue.charAt(Math.floor(Math.random() * (upperValue.length - 1)));
  }
  
  function randomLower() {
    password += lowerValue.charAt(Math.floor(Math.random() * (lowerValue.length - 1)));
  }
  
  passwordLength = prompt("How many characters would you like your password to contain?")
  
  do {
    specialChar = confirm("Click OK to include special characters.")
    numChar = confirm("Click OK to include numeric characters.")
    upperChar = confirm("Click OK to include uppercase characters.")
    lowerChar = confirm("Click OK to include lowercase characters.")
    if (specialChar != true && numChar != true && upperChar != true && lowerValue != true) {
      alert("Please select at least one set of characters to include.")
    }
  }
  while (specialChar != true && numChar != true && upperChar != true && lowerValue != true);
  
  
  
  if (specialChar == true) {
    randomSpecial();
    count++;
    // superArray += specialValue;
  }
  if (numChar == true) {
    randomNum();
    count++;
    // superArray += numValue;
  }
  if (upperChar == true) {
    randomUpper();
    count++;
    // superArray += upperValue;
  }
  if (lowerChar == true) {
    randomLower();
    count++;
    // superArray += lowerValue;
  }
  
  //At least one type needs to be chosen before you can use while loop
  
  while (count < passwordLength) {
    typeChosen = Math.ceil(Math.random() * 4);
    if (specialChar == true && typeChosen == 1) {
      randomSpecial();
      count++;
    } else if (numChar == true && typeChosen == 2) {
      randomNum();
      count++;
    } else if (upperChar == true && typeChosen == 3) {
      randomUpper();
      count++;
    } else if (lowerChar == true && typeChosen == 4) {
      randomLower();
      count++;
    }
  
  }
  return password;
}  

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");



  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// What I need for this to work

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