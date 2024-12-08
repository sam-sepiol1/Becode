// forOfStatement.js

const { log } = require("console");

// Function 1
function sumArray(arr) {
  // Your code here
  let sum = 0;

  for (const number of arr) {
    sum += number;
  }
  return sum;
}

sumArray([1, 2, 3, 4, 5]);

// Function 2
function concatenateStrings(arr) {
  // Your code here
  let concat_string = "";

  for ( const string of arr) { 
    concat_string += string;
  }
  return concat_string;
}

// Function 3
function findAverage(arr) {
  // Your code here
  let average = 0;

  for (const number of arr){ 
    average += (number/arr.length)
  }
  return average;
}

// Function 4 
function getVowels(str) {
  // Your code here
  let vowels = [];

  for ( const vowel of str){ 
    if ('aeiou'.includes(vowel.toLowerCase()) && !vowels.includes(vowel.toLowerCase())) {
      vowels.push(vowel.toLowerCase())
    }
  }  
  return vowels
}



module.exports = {
  sumArray,
  concatenateStrings,
  findAverage,
  getVowels,
};
