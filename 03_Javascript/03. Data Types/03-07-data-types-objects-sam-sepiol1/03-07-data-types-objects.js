// objectOperations.js

// Function 1
function createObject(key1, value1, key2, value2) {
  // Your code here
  const obj = new Object();

  obj[key1] = value1;
  obj[key2] = value2;

  return obj;
}

// Function 2
function accessPropertyValue(obj, property) {
  // Your code here

  return obj[property];

}

// Function 3
function checkProperty(obj, property) {
  // Your code here
  return property in obj;
}

// Function 4
function addProperty(obj, property, value) {
  // Your code here
  obj[property] = value;
  return obj; 
}

// Function 5
function removeProperty(obj, property) {
  // Your code here
  delete obj[property];
  return obj;
}

module.exports = {
  createObject,
  accessPropertyValue,
  checkProperty,
  addProperty,
  removeProperty,
};
