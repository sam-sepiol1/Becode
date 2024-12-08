// breakContinue.js

// Function 1
function findElement(arr, val) {
  // Your code here
  let i = 0;
  let elem = -1;
  while (i < arr.length) {
    if (arr[i] === val) {
      elem = i;
      break
    }
    i++;
  }
  return elem
}

// Function 2
function sumUntilStop(arr) {
  // Your code here
  let i = 0;
  let sum =0;

  while (i < arr.length) {
    if (arr[i] === 0) {
      break
    }

    sum += arr[i];
    i++;
  }

  return sum;
}

// Function 3
function skipStrings(arr) {
  // Your code here
  let i = 0;
  let sum = 0;

  for (const elem of arr){ 
    if(typeof arr[i] === 'string'){
      i++;
      continue;
    }
    sum += elem;
    i++;
  }
  return sum;
  
}

skipStrings([1, 'apple', 2, 'orange', 3])

// Function 4
function countVowels(str) {
  // Your code here
  let count = 0; 

  for ( const letter of str){ 
    if (!'aeiou'.includes(letter.toLowerCase())) {
      continue
    }
    count++;
  }
  console.log(count);
  
  return count;
}

countVowels('Javascript')

module.exports = {
  findElement,
  sumUntilStop,
  skipStrings,
  countVowels,
};
