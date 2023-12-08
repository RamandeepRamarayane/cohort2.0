/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/

function isPalindrome(str) {
  if (!str?.length) {
    return true;
  } else {
    let orgStr = str.replace(/[^a-zA-Z\s]/g, "").toLowerCase();
    orgStr = orgStr?.toLowerCase()?.split(" ")?.join("");
    console.log(orgStr);
    let reverseStr = orgStr?.split("")?.reverse()?.join("");
    console.log(reverseStr);

    if (reverseStr == orgStr) {
      return true;
    } else {
      return false;
    }
  }
}

isPalindrome("Eva, can I see bees in a cave?");

module.exports = isPalindrome;
