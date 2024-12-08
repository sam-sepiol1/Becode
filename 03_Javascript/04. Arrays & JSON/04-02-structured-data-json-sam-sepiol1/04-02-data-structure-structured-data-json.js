// structuredDataJSON.js

// Function 1
function parseJSON(json) {
  // Your code here
  // Parse the JSON string into a JavaScript object
  return JSON.parse(json);
}

// Function 2
function stringifyJSON(obj) {
  // Your code here
  // Convert the JavaScript object into a JSON string
  return JSON.stringify(obj);
}

// Function 3
function getValueFromJSON(obj, key) {
  // Your code here
  // Retrieve and return the value associated with the given key in the JSON object
  return obj[key];
}

// Function 4
function updateValueInJSON(obj, key, value) {
  // Your code here
  // Update the value associated with the given key in the JSON object
  return (obj[key] = value);
}

// Function 5
function removeKeyFromJSON(obj, key) {
  // Your code here
  // Remove the key-value pair from the JSON object
  delete obj[key];
}

// Function 6
function filterByAttribute(JSON, attr) {
  // Your code here
  // Filter the JSON object based on the provided attribute key
  // Return the filtered object

  const filteredJSON = {};
  filteredJSON.people = JSON.people.filter((people) => people[attr]);
  return filteredJSON;
}

// Function 7

function sortByAttribute(JSON, attr) {
  // Your code here
  // Sort the JSON object based on the provided attribute key
  // Return the sorted object
  if (Array.isArray(JSON.people)) {
    const sortedPeople = [...JSON.people].sort((a, b) => a[attr] - b[attr]);
    return {
      ...JSON,
      people: sortedPeople,
    };
  }
}

// Function 8
function countAttributes(JSON) {
  // Your code here
  // Count and return the number of attributes in the JSON object
  return Object.keys(JSON).length;
}

// Function 9
function findNestedValue(data, path) {
  // Your code here
  // Find and return the value at the given nested path in the JSON object
  return path
    .replaceAll("[", ".")
    .replaceAll("]", "")
    .split(".")
    .reduce((acc, key) => acc?.[key], data);
}

// Function 10
function flattenJSON(data, prefix = "") {
  // Your code here
  // Start with an empty object to store the flattened data
  const flattened = {};

  // Loop through each key in the data object
  for (const key of Object.keys(data)) {
    // Get the value associated with the current key
    const value = data[key];

    // If the value is an array, then we need to loop through it
    if (Array.isArray(value)) {
      // Loop through each item in the array
      value.forEach((item, i) => {
        // Create a nested prefix string to be used when flattening the nested object
        // The format is "prefix.key[i]" where "i" is the index of the item
        const nestedPrefix = `${prefix ? `${prefix}.` : ""}${key}[${i}]`;

        // Recursively call flattenJSON on the nested object
        // The results will be merged into the "flattened" object
        Object.assign(flattened, flattenJSON(item, nestedPrefix));
      });
    } else {
      // If the value is not an array, then we can simply add it to the flattened object
      // The key is the same as the original, but with the prefix added
      flattened[prefix ? `${prefix}.${key}` : key] = value;
    }
  }

  // Return the flattened object
  return flattened;
}

module.exports = {
  parseJSON,
  stringifyJSON,
  getValueFromJSON,
  updateValueInJSON,
  removeKeyFromJSON,
  filterByAttribute,
  sortByAttribute,
  countAttributes,
  findNestedValue,
  flattenJSON,
};
