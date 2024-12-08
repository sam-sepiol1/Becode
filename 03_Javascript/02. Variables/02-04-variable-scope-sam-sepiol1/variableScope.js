// variableScope.js
let globalVar = true;

// Function 1
function localScopeExample() {
  // Your code here

  var localVar; 
  return localVar;
}

// Function 2
function globalScopeExample() {
  // Your code here

  return globalVar;
}

// Function 3
function blockScopeExample() {
  // Your code here
  let blockVar = 20;
  {
    let blockVar = 30;
  }

  return blockVar;
}

module.exports = {
  localScopeExample,
  globalScopeExample,
  blockScopeExample,
  globalVar
};
