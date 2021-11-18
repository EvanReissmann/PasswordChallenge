function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max-min+1)) + min;
}
function generatePassword(useLowerCase=false, useUpperCase=false, useDigits=false, useSpecialCharacters=false) {
  if (useLowerCase===false && useUpperCase===false && useDigits===false && useSpecialCharacters===false){
    throw "atleast one character type is required";
  }
  var passwordLength = getRandomInt( 8, 128);
   console.log(passwordLength);
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
  for (var i=0; i<=passwordLength; i++){
    var element=getRandomInt(0,allowed.length-1);
    password += allowed[element];
  }
  return password;
}

 //Get references to the #generate element
var generateBtn = document.querySelector("#generate");

 //Write password to the #password input
function writePassword() {
  var password = generatePassword(useLowerCase=true,useUpperCase=true,useDigits=true,useSpecialCharacters=true);
  console.log(password)
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

 //Add event listener to generate button
document.getElementById("generateBtn").addEventListener("click", writePassword);
