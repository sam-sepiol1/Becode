// whileStatement.js

// Function 1
function sumOfSquares(n) {
  // Your code here
  let sum = 0;
  let i = 0;

  while (i <= n) {
    sum += i ** 2;
    i++;
  }

  return sum;
}

// Function 2
function printReverseArray(arr) {
  // Your code here
  let i = arr.length - 1;

  while (i >= 0) {
    console.log(arr[i]);
    i--;
  }
}

// Function 3
function reverseString(str) {
  // Your code here
  let reversed = "";
  let i = str.length - 1;

  while (i >= 0) {
    reversed += str[i];
    i--;
  }

  return reversed;
}

// Function 4
function findMax(arr) {
  // Your code here
  let max_value = arr[0];
  let i = 0;

  while (i <= arr.length) {
    if (arr[i] > max_value ) {
      max_value = arr[i];
    }
      i++;
  }

  return max_value;
}

module.exports = {
  sumOfSquares,
  printReverseArray,
  reverseString,
  findMax,
};
