// stringManipulation.js

// Function 1
function createString() {
  // Your code here
  
  let string = 'Seb';

  return string;
}

// Function 2
function stringLength(str) {
  // Your code here

  return str.length;
}

// Function 3
function stringConcat(str1, str2) {
  // Your code here

  return str1 + str2;
}

// Function 4
function stringUpperCase(str) {
  // Your code here

  return str.toUpperCase();
}

// Function 5
function stringLowerCase(str) {
  // Your code here

  return str.toLowerCase();
}

// Function 6
function stringSubstring(str, start, end) {
  // Your code here
  return str.substring(start, end);

}

module.exports = {
  createString,
  stringLength,
  stringConcat,
  stringUpperCase,
  stringLowerCase,
  stringSubstring,
};



