// forStatement.js

// Function 1
function sumOfNumbers(start, end) {
  // Your code here
  let sum = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
  }
  return sum;
}

// Function 2
function generatePattern(rows) {
  // Your code here
  // Pattern:
  // if rows = 5 -> "*\n **\n ***\n ****\n *****\n"

  let pattern = "";
  for (let i = 1; i <= rows; i++) {
    pattern += "*".repeat(i) + "\n";
  }
  return pattern;
}

generatePattern(2);

// Function 3
function reverseString(str) {
  // Your code here
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

// Function 4
function filterOddNumbers(arr) {
  // Your code here
  let odd_numbers = [];

  arr.forEach((number) => {
    if (number % 2 === 0) {
      odd_numbers.push(number);
    }
  });
  return odd_numbers;
}

module.exports = {
  sumOfNumbers,
  generatePattern,
  reverseString,
  filterOddNumbers,
};
