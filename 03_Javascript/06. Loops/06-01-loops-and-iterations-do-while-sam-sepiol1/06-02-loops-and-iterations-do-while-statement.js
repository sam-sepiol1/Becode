// doWhileStatement.js

// Function 1
function sumEvenNumbers(limit) {
  // Your code here
  let sum = 0;
  let i = 2;

  do {
    sum += i;
    i += 2;
  } while (i <= limit);

  return sum;
}

// Function 2
function printNumbersBackwards(n) {
  // Your code here
  do {
    console.log(n);
    n--;
  } while (n > 0);
}



// Function 3
function reverseString(str) {
  // Your code here
  let reversed = '';
  let i = str.length - 1;

  do {
    reversed += str[i];
    i--;
  } while (i >= 0);

  return reversed;
}

// Function 4
function countOccurrences(arr, val) {
  // Your code here
  let occurrences = 0;
  let i = 0;

  do {
    arr[i] === val ? (occurrences++, i++) : i++;
  } while (i <= arr.length);

  return occurrences;
}



module.exports = {
  sumEvenNumbers,
  printNumbersBackwards,
  reverseString,
  countOccurrences,
};
