/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) {
  if (!str) {
    return 0;
  } else {
    let vowels = ["e", "i", "o", "u", "a"];
    count = 0;
    let tempStr = str
      ?.toLowerCase()
      ?.replace(/[^a-z\s]/g, "")
      ?.split("");
    tempStr.forEach((ltr) => {
      let idx = vowels.findIndex((vwls) => vwls == ltr);
      console.log(vowels);
      if (idx != -1) {
        count = count + 1;
      }
    });

    return count;
  }
}

console.log(countVowels("EaSiEr"));

module.exports = countVowels;
