
function reverseString(str) {
  let newStr = "";
  for (let i = str.length-1; i >= 0; i--) {
    newStr += str[i];
  }
  return newStr
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: 'ih'");
  console.log("=>", reverseString("hi"));
  
  console.log("");
  
  console.log("Expecting: 'ybabtac'");
  console.log("=>", reverseString("catbaby"));
}

module.exports = reverseString;

// Please add your pseudocode to this file
/*************************************** 
 * create new variable that contains result
 * 
 * iterate through the length of the original string minus 1, to start with the last character and go backwards until the first character is reached
 *
 * store each character back into our new variable, with every single index that we encounter
 * 
 * result stored in the new variable that gets returned
 * 
 *******************************************/



//   And a written explanation of your solution
/**********************************************
Second Solution: 
function reverseString(str) {
  return str.split("").reverse().join("")
}
 
 * ********************************************/