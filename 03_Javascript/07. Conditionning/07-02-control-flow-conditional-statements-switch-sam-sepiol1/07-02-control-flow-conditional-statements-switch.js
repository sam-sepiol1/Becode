// switchStatements.js

// Function 1
function getDayName(dayNumber) {
  // Your code here
  switch (dayNumber) {
    case 1:
      return "Sunday";
      break;
    case 2:
      return "Monday";
      break;
    case 3:
      return "Tuesday";
      break;
    case 4:
      return "Wednesday";
      break;
    case 5:
      return "Thursday";
      break;
    case 6:
      return "Friday";
      break;
    case 7:
      return "Saturday";
      break;
    default:
      break;
  }
}

// Function 2
function calculateDiscount(itemType) {
  // Your code here
  switch (itemType) {
    case "Electronics":
      return "20% Discount";
      break;

    case "Clothing":
      return "15% Discount";
      break;

    case "Other":
      return "No Discount";
      break;

    default:
      break;
  }
}

// Function 3
function getSeason(month) {
  // Your code here
  switch (month) {
    case 1:
    case 2:
    case 12:
      return "Winter";
      break;

    case 3:
    case 4:
    case 5:
      return "Spring";
      break;

    case 6:
    case 7:
    case 8:
      return "Summer";
      break;

    case 9:
    case 10:
    case 11:
      return "Fall";
      break;

    default:
      break;
  }
}

// Function 4
function convertGrade(grade) {
  // Your code here
  switch (true) {
    case grade >= 90:
      return "A";
      break;
    case grade > 80 && grade <= 90:
      return "B";
      break;
    case grade >= 70 && grade < 80:
      return "C";
      break;
    case grade >= 60 && grade < 70:
      return "D";
      break;
    case grade < 59:
      return "F";
      break;

    default:
      break;
  }
}


// Function 5
function getShippingCost(weight, type) {
  // Your code here
    switch (type) {
      case 'standard':
        return 5 + weight;
        break;

      case 'express': 
        return 15 + weight;
        break;

      case 'overnight': 
      return 20 + weight;
    
      default:
        break;
    }
}

// Function 6
function calculateTax(amount, state) {
  // Find the tax percentage based on the state
  switch (state) {
    case 'NY':      
      return amount * 0.0825;
      break;

    
    case 'CA':      
      return amount * 0.1;
      break;
  
    case 'TX':      
      return amount * 0;
      break;

    default:
      break;
  }
  
}

calculateTax(1, 'NY')

// Function 8
function getTrafficSignalColor(code) {
  // Your code here
  switch (code) {
    case 1:
      return 'Red'
      break;

    case 2:
      return 'Yellow'
      break;
    
    case 3: 
      return 'Green'
      break;
      
    default:
      break;
  }
}

module.exports = {
  getDayName,
  calculateDiscount,
  getSeason,
  convertGrade,
  getShippingCost,
  calculateTax,
  getTrafficSignalColor,
};
