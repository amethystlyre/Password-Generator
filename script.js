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

//Set constant values for the character options that users can chose from when generating random password
const LOWER_CASE_OPTIONS = "abcdefghijklmnopqrstuvwxyz";
const UPPER_CASE_OPTIONS = LOWER_CASE_OPTIONS.toUpperCase();
const NUMBER_OPTIONS = "1234567890";
const SPECIAL_CHAR_OPTIONS = " !\"#$%&'()*+,-./:;<=>?@[\\]^_`{|}~";


//Main function for generating passwords
function generatePassword() {
  //Set local variable for storing password lenght, user selected character types and generated random password
  let userPwLength = 8; //default = 8 chars
  let userSelectionRange = '';
  let generatedPassword = '';

  //check that the user has enter a valid password length and assign to variable "userPwLength"
  userPwLength = checkPasswordLength(userPasswordLengthPrompt());

  //Ask user if whether to include each charater types below
  userSelectionRange += userCriteriaSelection(LOWER_CASE_OPTIONS, "lower case letters");

  userSelectionRange += userCriteriaSelection(UPPER_CASE_OPTIONS, "upper case letters");

  userSelectionRange += userCriteriaSelection(NUMBER_OPTIONS, "numeric values");

  userSelectionRange += userCriteriaSelection(SPECIAL_CHAR_OPTIONS, "special characters");

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
//If input response is invalid, then set password length as 8 chars by default.
function checkPasswordLength(userResponse) {
  if (isNaN(parseInt(userResponse, 10)) || userResponse == null) {
    window.alert("You have not provided a number. Setting password length as 8 characters by default.");
    return 8;
  } else if (parseInt(userResponse, 10) < 8 || parseInt(userResponse, 10) > 128) {
    window.alert("The number you have entered is outside the acceptable range of 8 to 128. Setting password length as 8 characters by default.");
    return 8;
  }
  else {
    return parseInt(userResponse, 10);
  }
}