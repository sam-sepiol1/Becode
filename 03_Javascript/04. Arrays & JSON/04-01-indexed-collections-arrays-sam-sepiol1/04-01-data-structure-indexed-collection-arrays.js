// indexedArrays.js

// Function 1
function createArray(size) {
  // Your code here

  let array = new Array(size);
  return array;
}

// Function 2
function getArrayLength(arr) {
  // Your code here

  return arr.length;
}

// Function 3
function accessArrayElement(arr, index) {
  // Your code here

  return arr[index];
}

// Function 4
function updateArrayElement(arr, index, value) {
  // Your code here

  arr[index] = value;
  return arr;
}

// Function 5
function addArrayElement(arr, value) {
  // Your code here

  arr.push(value);
}

// Function 6
function removeArrayElement(arr, index) {
  // Your code here

  arr.splice(index, 1);
}

// Function 7
function getUniqueValues(arr) {
  // Your code here

  return [...new Set(arr)];
}

// Function 8

function reverseArray(arr) {
  // Your code here

  return arr.reverse();
}

// Function 9
function findMaxValue(arr) {
  // Your code here

  return Math.max(...arr);
}

// Function 10
function findMinValue(arr) {
  // Your code here

  return Math.min(...arr);
}

// Function 11
function sortArray(arr) {
  // Your code here

  return arr.sort(function (a, b) {
    return a - b;
  });
}

// Function 12
function flattenNestedArray(arr) {
  // Your code here

  return arr.flat(5);
}

// Function 13
function mergeArrays(arr1, arr2) {
  // Your code here

  let concat_array = arr1.concat(arr2);
  return [...new Set(concat_array)];
}

// Function 14
function rotateArray(arr, steps) {
  // Your code here
  const rotatedPart = arr.splice(-steps);
  arr.unshift(...rotatedPart);

  return arr;
}

// Function 15
function removeDuplicates(arr) {
  // Your code here

  return [...new Set(arr)];
}

// Function 16
function findCommonElements(arr1, arr2) {
  // Your code here

  const array1 = new Set(arr1);
  return arr2.filter((i) => array1.has(i));
}

module.exports = {
  createArray,
  getArrayLength,
  accessArrayElement,
  updateArrayElement,
  addArrayElement,
  removeArrayElement,
  getUniqueValues,
  reverseArray,
  findMaxValue,
  findMinValue,
  sortArray,
  flattenNestedArray,
  mergeArrays,
  rotateArray,
  removeDuplicates,
  findCommonElements,
};
