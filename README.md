# 03 JavaScript: Password Generator

## Description
This project is a JavaScript focused application to create a randomly generated password with conditions set by the user. These conditions are what the length of the password is, if special characters are to be included, if numerical characters are to be included, if uppercase characters are to be included, and if lowercase characters are to be included.
The logic is to have two main functions: one to generate the randomized password and one to start the former function and write the password text value into the HTML file on a button click.
<br>
<img src="../Assets/03-javascript-homework-genBtnhighlight.png">
<br>
<img src="../Assets/03-javascript-homework-writepasswordfunction.png">
<br>
Once the "Generate Password" button is pressed, the writePassword function begins. This sequentially starts the generatePassword function, selects the textarea in HTML with the id "password", and adds the value generatePassword creates to the textarea.
The writePassword is the simpler of the two main functions, as it is only has a few moving parts.
<br>
The generatePassword function is where the bulk of the code is. To begin, I defined several variables for arrays containing the characters necessary for each condition, an empty array to propagate my password, and a count to make sure the password length was accurate.
I then set up several local functions to ensure if the user wanted one of the conditions to be met, they would generate in the password no matter what. These functions appended a random character from the designated array to the password array.
The next portion of code began my prompts and confirms. I decided to go with do/while loops through a suggestion by a colleague to prevent from shutting down the page each time certain conditions were not met. In my first do while loop, I am prompting the user to tell the application how long they wish the password to be. If it is outside the desired 8 - 128 characters, the code will alert the user to please select an appropriate value.
The next loop is to set up Boolean responses for the specific character conditions the user selects. If no conditions are confirmed (true), the code will alert the user to select at least one set of conditions.
Next, a set of four if statements to tell the code if the user has indicated they wish to use a certain character to run the correlating function and add one to the count variable. Again, this is to prevent the password length from being too long or short.
I added another loop which adds random characters of the chosen conditions until the count reaches the desired password length. I did this by creating another small, random, one-in-four generator and applied each potential character a number out of four. This gives each remaining character after the initial, static characters a truly randomized feel.
Once this function completes, it returns its value to the password variable in the writePassword function. This allows the array in the password variable to be transferred to the textarea (id=password) and seen in the HTML.

## License
MIT License

Copyright (c) [2020] [DrakeDeMuyt]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

## Credits
Lada Jerabek (https://github.com/mixicek)
Angela Stevenson
Danin Fluke (https://github.com/DaninFluke)
TechnicalCafe - Random Password Generator Tutorial (HTML, CSS, JavaScript) (https://www.youtube.com/watch?v=9sT03jEwcaw)