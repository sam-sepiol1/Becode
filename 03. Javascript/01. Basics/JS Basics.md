# JavaScript Basics Guide

## Introduction
JavaScript is a versatile programming language commonly used in web development. This guide covers the fundamental concepts of JavaScript to get you started.

## Table of Contents
1. Variables
2. Data Types
3. Operators
4. Control Structures
5. Functions
6. Objects
7. Arrays

## 1. Variables
Variables are used to store data values. In JavaScript, you can declare variables using `var`, `let`, or `const`.

```javascript
let name = 'John';
const age = 30;
var isStudent = true;
```

## 2. Data Types
JavaScript supports various data types including:
- String
- Number
- Boolean
- Null
- Undefined
- Object
- Symbol

```javascript
let text = 'Hello';
let number = 123;
let isTrue = false;
let emptyValue = null;
let notDefined;
let person = { firstName: 'John', lastName: 'Doe' };
```

## 3. Operators
Operators are used to perform operations on variables and values. Common operators include:
- Arithmetic Operators: `+`, `-`, `*`, `/`, `%`
- Assignment Operators: `=`, `+=`, `-=`
- Comparison Operators: `==`, `===`, `!=`, `!==`, `>`, `<`
- Logical Operators: `&&`, `||`, `!`

```javascript
let sum = 10 + 5;
let isEqual = (10 === 10);
let isBothTrue = (true && false);
```

## 4. Control Structures
Control structures manage the flow of the program. Common structures include:
- Conditional Statements: `if`, `else if`, `else`, `switch`
- Loops: `for`, `while`, `do...while`

```javascript
if (age > 18) {
    console.log('Adult');
} else {
    console.log('Minor');
}

for (let i = 0; i < 5; i++) {
    console.log(i);
}
```

## 5. Functions
Functions are blocks of code designed to perform a particular task. They are defined using the `function` keyword.

```javascript
function greet(name) {
    return `Hello, ${name}`;
}

console.log(greet('Alice'));
```

## 6. Objects
Objects are collections of key-value pairs. They are used to store related data and functions.

```javascript
let car = {
    make: 'Toyota',
    model: 'Corolla',
    year: 2020,
    start: function() {
        console.log('Car started');
    }
};

console.log(car.make);
car.start();
```

## 7. Arrays
Arrays are used to store multiple values in a single variable. They are defined using square brackets `[]`.

```javascript
let fruits = ['Apple', 'Banana', 'Cherry'];
console.log(fruits[0]); // Output: Apple

fruits.push('Orange');
console.log(fruits); // Output: ['Apple', 'Banana', 'Cherry', 'Orange']
```

## Conclusion
This guide provides a brief overview of the basics of JavaScript. Practice and experimentation are key to mastering JavaScript.
