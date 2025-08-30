// Experimenting with javascript 101
// Variables:
// Variables are used to store data values. In JavaScript, you can declare variables using var, let, or const.
let name = "John"; // Using let to declare a variable
const age = 30; // Using const to declare a constant variable
var isStudent = false; // Using var to declare a variable
// Differences between let, const and var:
// let: Block-scoped, can be reassigned
// const: Block-scoped, cannot be reassigned
// var: Function-scoped, can be reassigned, but has some quirks with hoisting
// Data Types:
// JavaScript has several data types including:
// 1. Primitive types: string, number, boolean, null, undefined, symbol, bigint (ECMAScript 2020)
let str = "Hello, World!"; // String
let num = 42; // Number
let bool = true; // Boolean
let n = null; // Null
let u; // Undefined
let sym = Symbol("unique"); // Symbol
let bigIntNum = 9007199254740991n; // BigInt
// 2. Non-primitive types: object, array, function
let obj = { name: "Alice", age: 25 }; // Object
let arr = [1, 2, 3, 4, 5]; // Array
function greet() {
  return "Hello!";
} // Function
// Operators:
// JavaScript supports various operators including:
// Arithmetic operators: +, -, *, /, %, ++, --
let sum = 5 + 3; // Addition
let difference = 5 - 3; // Subtraction
let product = 5 * 3; // Multiplication
let quotient = 5 / 3; // Division
let remainder = 5 % 3; // Modulus
let increment = ++sum; // Increment
let decrement = --difference; // Decrement
// Assignment operators: =, +=, -=, *=, /=
let x = 10; // Assignment
x += 5; // x = x + 5
x -= 3; // x = x - 3
x *= 2; // x = x * 2
x /= 4; // x = x / 4
// Comparison operators: ==, ===, !=, !==, >, <, >=, <=
let isEqual = (5 == "5"); // true (loose equality)
let isStrictEqual = (5 === "5"); // false (strict equality)
let isNotEqual = (5 != "5"); // false (loose inequality)
let isStrictNotEqual = (5 !== "5"); // true (strict inequality)
let isGreater = (5 > 3); // true
let isLess = (5 < 3); // false
let isGreaterOrEqual = (5 >= 5); // true
let isLessOrEqual = (5 <= 3); // false
// Logical operators: &&, ||, !
let andOperator = (true && false); // false
let orOperator = (true || false); // true
let notOperator = !true; // false
// Control Structures:
// JavaScript provides various control structures including:
// Conditional statements: if, else if, else, switch
