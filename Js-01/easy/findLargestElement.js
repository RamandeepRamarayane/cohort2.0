/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
  let bigNum;

  if (numbers.length == 0) {
    return bigNum;
  } else {
    bigNum = 0;
    numbers.sort((a, b) => a - b);
    bigNum = numbers[0] > numbers.at(-1) ? number[0] : numbers.at(-1);
  }
  return bigNum;
}

console.log(findLargestElement([3, 7, 2, 9, 1]));

module.exports = findLargestElement;
