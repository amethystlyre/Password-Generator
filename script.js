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

//Create an object to store the character options that users can chose from when generating random password
var passwordOptions = {
  "lower case letters": "abcdefghijklmnopqrstuvwxyz",
  "upper case letters": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
  "numeric values": "1234567890",
  "special characters": " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~"
}

//Main function for generating passwords
function generatePassword() {
  //Set local variable for storing password lenght, user selected character types and generated random password
  let userPwLength = 8; //default = 8 chars
  let userSelectionRange = '';
  let generatedPassword = '';

  //check that the user has enter a valid password length and assign to variable "userPwLength"
  userPwLength = checkPasswordLength(userPasswordLengthPrompt());

  //Ask user whether to include each charater types stored in the object passwordOptions below
  if (userPwLength !== 0) {
    for (const option in passwordOptions) {
      userSelectionRange += userCriteriaSelection(passwordOptions[option], option);
    }
  } else {
    return "";
  }

  //check that the user has chosen at least one of the four character types.
  if (!userSelectionRange) {
    window.alert("You need to include at least one character type. Please choose again.");
  }
  else {
    //generate password based on the length requested by user
    for (let i = 0; i < userPwLength; i++) {
      generatedPassword += userSelectionRange.charAt(Math.floor(Math.random() * userSelectionRange.length));
    }
  }
  //return password generated or empty string if user didn't make any valid selection
  return generatedPassword;
}

//Function for requesting user input on password length
function userPasswordLengthPrompt() {
  return window.prompt("How many characters do you require in the random password? Minimum characters is 8 and maximum characters is 128. \nPlease enter a number between 8 to 128.");
}

//Function for requesting user input on character type options
function userCriteriaSelection(options, nameOfOption) {
  if (window.confirm(`Would you like to include ${nameOfOption}? If not, click Cancel.`)) {
    return options;
  } else {
    return "";
  }
}

//A helper function to check if the password length given by the user is a valid number between 8 to 128 and not empty.
function checkPasswordLength(userResponse) {
  if (isNaN(parseInt(userResponse, 10)) || userResponse == null) {
    window.alert("You have not provided a number. You must enter a number between 8 and 128.");
    return 0;
  } else if (parseInt(userResponse, 10) < 8 || parseInt(userResponse, 10) > 128) {
    window.alert("The number you have entered is outside the acceptable range of 8 to 128. You must enter a number between 8 and 128.");
    return 0;
  }
  else {
    return parseInt(userResponse, 10);
  }
}