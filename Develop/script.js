// Assignment Code
var generateBtn = document.querySelector("#generate");

//Send randomized password to writePassword function.
function generatePassword() {
  var specialValue = "!@#$%^&*()_+";
  var numValue = "1234567890";
  var upperValue = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowerValue = "abcdefghijklmnopqrstuvwxyz";
  var password = "";
  var count = 0

  //Sets up intial randomized numbers to adhere to clients' request.
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

  //Loop to ensure correct password length.
  do {
    passwordLength = prompt("Enter your desired password length between 8 - 128 characters:")
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Please select a value between 8 and 128");
    }
  }
  while (passwordLength < 8 || passwordLength > 128);

  //Loop to ensure at least one type of character is chosen.
  do {
    specialChar = confirm("Click OK to include special characters.")
    numChar = confirm("Click OK to include numeric characters.")
    upperChar = confirm("Click OK to include uppercase characters.")
    lowerChar = confirm("Click OK to include lowercase characters.")
    if (specialChar != true && numChar != true && upperChar != true && lowerValue != true) {
      alert("Please select at least one set of characters to include.");
    }
  }
  while (specialChar != true && numChar != true && upperChar != true && lowerValue != true);


  //If statements to call random character functions
  if (specialChar == true) {
    randomSpecial();
    count++;
  }
  if (numChar == true) {
    randomNum();
    count++;
  }
  if (upperChar == true) {
    randomUpper();
    count++;
  }
  if (lowerChar == true) {
    randomLower();
    count++;
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