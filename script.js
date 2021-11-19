function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}
function generatePassword(passwordLength, useLowerCase=false, useUpperCase=false, useDigits=false, useSpecialCharacters=false) {
  if (useLowerCase===false && useUpperCase===false && useDigits===false && useSpecialCharacters===false){
    throw "atleast one character type is required";
  }
  var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  var digits = ["0","1","2","3","4","5","6","7","8","9"];
  var specialCharacters = ["!","@","#","$","%","^","&","*","(",")"];
  var allowed= [];
  var password="";

  if (useLowerCase===true){
    allowed=allowed.concat(lowerCase);
  }
  if (useUpperCase===true){
    allowed=allowed.concat(upperCase);
  }
  if (useDigits===true){
    allowed=allowed.concat(digits);
  }
  if (useSpecialCharacters===true){
    allowed=allowed.concat(specialCharacters);
  }
  for (var i=0; i<passwordLength; i++){
    var element=getRandomInt(0,allowed.length-1);
    password += allowed[element];
  }
  return password;
}

 //Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 //Write password to the #password input
function writePassword() {
  var passwordLength=window.prompt("select a number between 8 and 128");
  var useLowerCase=window.confirm("use lowercase letters");
  var useUpperCase=window.confirm("use uppercase letters");
  var useDigits=window.confirm("use digits");
  var useSpecialCharacters=window.confirm("use special characters");
  var password = generatePassword(passwordLength=passwordLength,useLowerCase=useLowerCase,useUpperCase=useUpperCase,useDigits=useDigits,useSpecialCharacters=useSpecialCharacters);
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 //Add event listener to generate button
document.getElementById("generateBtn").addEventListener("click", writePassword);
