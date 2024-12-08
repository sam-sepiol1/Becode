// numberOperations.js

// Function 1
function addNumbers(num1, num2) {
  // Your code here
  return num1 + num2;
}

// Function 2
function subtractNumbers(num1, num2) {
  // Your code here
  return num1 - num2;

}

// Function 3
function multiplyNumbers(num1, num2) {
  // Your code here
  return num1* num2;
}

// Function 4
function divideNumbers(num1, num2) {
  // Your code here

  if (num2 != 0) { 
    return num1 / num2;
  }
  else { 
    return 'num2 can\'t be 0'; 
  }
}

// Function 5
function powerOfNumber(base, exponent) {
  // Your code here
    return base ** exponent;
}

module.exports = {
  addNumbers,
  subtractNumbers,
  multiplyNumbers,
  divideNumbers,
  powerOfNumber,
};
