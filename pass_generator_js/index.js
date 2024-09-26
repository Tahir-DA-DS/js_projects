function generatePassword(length, includeLowerCase, includeUpperCase, includeNumbers, includeSymbols){

    const lowerCaseChars ="abcdefghijklmnopqrstuvwxyz";
    const upperCaseChars ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const numberChars = "0123456789";
    const symbolsChars= "&%$#_+@";

    let allowedChars =""
    let password = ""

    allowedChars += includeLowerCase ? lowerCaseChars : ""
    allowedChars += includeUpperCase ? upperCaseChars : ""
    allowedChars += includeNumbers ? numberChars : ""
    allowedChars += includeSymbols ? symbolsChars : "" 
    
    console.log(allowedChars);
    
}

const passwordLength = 12
const includeLowerCase =false
const includeUpperCase =false
const includeNumbers =false
const includeSymbols =true

const password = generatePassword(includeLowerCase, includeUpperCase, includeNumbers, includeSymbols)