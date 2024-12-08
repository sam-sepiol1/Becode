// typeofOperations.js

// Function 1
function getType(value) {
  // Your code here
  return typeof value;
}

// Function 2
function checkTypes(...values) {
  // Your code here

  return values.map(value => typeof value);
}

// Function 3
function compareTypes(value1, value2) {
  // Your code here

  return typeof value1 === typeof value2;
}

module.exports = {
  getType,
  checkTypes,
  compareTypes,
};
