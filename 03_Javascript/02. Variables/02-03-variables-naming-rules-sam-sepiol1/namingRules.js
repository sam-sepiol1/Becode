// namingRules.js

// Function 1
function validVariableName() {
  // Your code here
  let validVariableName;
  return validVariableName;
}

// Function 2
function invalidVariableName() {
  // Your code here

  let ú = 'seb'; 

  return ú;
}

// Function 3
function camelCaseVariableName() {
  // Your code here

  let camelCaseVariable; 
  return camelCaseVariable;
}

// Function 4
function snake_caseVariableName() {
  // Your code here
  let snake_case_variable_name;
  return snake_case_variable_name;
  
}

// Function 5
function PascalCaseVariableName() {
  // Your code here
let PascalCase; 
return PascalCase;

}

module.exports = {
  validVariableName,
  invalidVariableName,
  camelCaseVariableName,
  snake_caseVariableName,
  PascalCaseVariableName,
};
