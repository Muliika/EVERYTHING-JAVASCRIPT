// CHAPTER 2: PROGRAM STRUCTURE

// Bindings:
// To catch and hold values, Javascript provides something called a binding or variable.
// A binding is a named reference to a value.
// You create a binding with the let keyword, like this:
let caught = 5 * 5;
// This creates a binding named caught and assigns it the value of 5 * 5, which is 25.
// You can also create bindings with const and var, but let is the most common in modern JavaScript.
// The difference between let and const is that bindings created with const cannot be reassigned.
// The var keyword is older and has different scoping rules, so it's generally recommended to use let and const instead.
// You can also create multiple bindings in one statement by separating them with commas:
let x = 1, y = 2, z = 3;
// This creates three bindings: x, y, and z, with the values 1, 2, and 3 respectively.

// The value of a binding can be changed by assigning a new value to it:
let mood = "light";
mood = "dark";
// Now the value of mood is "dark".
// However, if you had created the binding with const, like this:
// const mood = "light";
// Then trying to reassign it would result in an error.
// You can also create bindings without initializing them, like this:
let age;
age = 25;
// Now the binding age has the value 25.
// If you try to use a binding that hasn't been initialized, you'll get the value undefined:
let height;
console.log(height); // undefined
// This indicates that the binding exists but hasn't been assigned a value yet.


// Binding Names:
// Binding names can contain letters, digits, underscores, and dollar signs.
// They must begin with a letter, underscore, or dollar sign.
// They cannot be the same as JavaScript reserved words (like let, const, if, else, etc.).
// JavaScript is case-sensitive, so mood and Mood would be considered different bindings.
// It's a common convention to use camelCase for binding names, where the first word is lowercase and subsequent words are capitalized, like this: myVariableName.
// You can also use underscores to separate words, like this: my_variable_name.
// However, using hyphens is not allowed, as they are interpreted as the subtraction operator.
// It's important to choose meaningful names for your bindings to make your code more readable and understandable.
// For example, instead of naming a binding x, you might name it totalPrice or userAge to indicate what the value represents.
// This practice is known as using descriptive or semantic names and is considered a good coding practice.
// Additionally, you can use Unicode characters in binding names, which allows for a wide range of characters from different languages.
// However, it's generally recommended to stick to standard ASCII characters for better compatibility and readability.
// Here are some examples of valid and invalid binding names:
let validName = 1; // Valid
let _validName = 2; // Valid
let $validName = 3; // Valid
// let 1invalidName = 4; // Invalid, cannot start with a digit
// let invalid-name = 5; // Invalid, hyphens are not allowed
// let if = 6; // Invalid, 'if' is a reserved word
// let myVariable = 7; // Valid, camelCase
// let my_variable = 8; // Valid, underscores
// let café = 9; // Valid, Unicode character
// let résumé = 10; // Valid, Unicode characters
// let var = 11; // Invalid, 'var' is a reserved word
// let function = 12; // Invalid, 'function' is a reserved word
// let myVar123 = 13; // Valid, can contain digits but not start with them
// let myVar$ = 14; // Valid, can contain dollar signs
// let myVar_ = 15; // Valid, can contain underscores
// let myVar! = 16; // Invalid, exclamation marks are not allowed
// let myVar@ = 17; // Invalid, at signs are not allowed
// let myVar# = 18; // Invalid, hash signs are not allowed
// let myVar% = 19; // Invalid, percent signs are not allowed
// let myVar^ = 20; // Invalid, caret signs are not allowed
// let myVar& = 21; // Invalid, ampersands are not allowed
// let myVar* = 22; // Invalid, asterisks are not allowed
// let myVar( = 23; // Invalid, parentheses are not allowed
// let myVar) = 24; // Invalid, parentheses are not allowed
// let myVar+ = 25; // Invalid, plus signs are not allowed

// Functions:
// Functions are a way to group code together to perform a specific task.
// For example, in a browser environment, the binding prompt is a function that shows a dialog box asking the user for input.
// You can call a function by writing its name followed by parentheses:
// prompt("Enter your name:");
// The text inside the parentheses is called an argument, which is a value you pass to the function.
// Some functions can take multiple arguments, separated by commas:
// console.log("Hello", "world");
// This calls the console.log function with two arguments, "Hello" and "world", which will print them to the console.
// Executing a function is called invoking, calling, or applying the function.
// You can call a function by writing its name followed by parentheses, and you can include arguments inside the parentheses if the function requires them.

// The rest of the chapter is almost summarizing the content of the whole book so ive stopped here.


// CHAPTER 3
// FUNCTIONS
// The concept of wrapping a piece of program in a value has many uses.
// The most basic is to create a function value, which represents a piece of program that can be called by other code.
// A function value contains a list of parameters (also called formal parameters) and a body (a sequence of statements).
// When a function is called, the arguments (also called actual parameters) are evaluated and assigned to the corresponding parameters.
// The body of the function is then executed, and the value of the last statement in the body is returned as the result of the function call.
// If the function does not have a return statement, it returns undefined by default.
// Here is an example of a simple function that takes two parameters and returns their sum:
function add(a, b) {
  return a + b;
}
// You can call this function by passing two arguments:
let sum = add(2, 3);
console.log(sum); // 5
// In this example, the function add takes two parameters, a and b, and returns their sum.
// When we call the function with the arguments 2 and 3, the parameters a and b are assigned the values 2 and 3 respectively, and the function returns 5.
// You can also define functions using function expressions, which allow you to create anonymous functions (functions without a name) and assign them to variables:
let multiply = function(x, y) {
  return x * y;
}
// You can call this function with the same arguments as before:
let product = multiply(4, 5);
console.log(product); // 20
// In this example, we define an anonymous function that takes two parameters, x and y, and returns their product.
// We assign this function to the variable multiply, which we can then call like a regular function.
// Another way to define functions is using arrow functions, which provide a more concise syntax:
let divide = (m, n) => {
  return m / n;
}
// You can call this function with two arguments:
let quotient = divide(10, 2);
console.log(quotient); // 5
// In this example, we define an arrow function that takes two parameters, m and n, and returns their quotient.
// We assign this function to the variable divide, which we can then call like a regular function.
// Arrow functions can also have an implicit return if the body consists of a single expression:
let square = x => x * x;
let squaredValue = square(6);
console.log(squaredValue); // 36
// In this example, the arrow function takes a single parameter x and returns its square.
// Since the body of the function is a single expression, we can omit the curly braces and the return keyword.
// Functions can also have default parameters, which are used if no argument is provided for that parameter when the function is called:
function greet(name = "Guest") {
  return `Hello, ${name}!`;
}
let greeting1 = greet("Alice");
let greeting2 = greet();
console.log(greeting1);
console.log(greeting2); // "Hello, Guest!"
// In this example, the function greet takes a single parameter name with a default value of "Guest".
// If we call the function without an argument, it uses the default value.
// Functions can also be nested, meaning you can define a function inside another function:
function outerFunction(x) {
  function innerFunction(y) {
    return y * 2;
  }
    return innerFunction(x) + 1;
}
let result = outerFunction(5);
console.log(result); // 11
// In this example, the function outerFunction defines an inner function innerFunction that takes a parameter y and returns its double.
// The outer function calls the inner function with the argument x and adds 1 to the result.
// This demonstrates how functions can be composed and organized in a hierarchical manner.
// Overall, functions are a powerful way to encapsulate code, promote reusability, and organize logic in JavaScript programs.
// CLOSURE
// A closure is a function that "closes over" its surrounding state, capturing variables from its outer scope.
// This allows the function to access those variables even when it is executed outside of their original scope.
// Closures are created whenever a function is defined inside another function, and the inner function references variables from the outer function.
function makeCounter() {
  let count = 0;
    return function() {
    count++;
    return count;
  }
}
let counter = makeCounter();
console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3
// In this example, the function makeCounter defines a variable count and returns an inner function that increments and returns the value of count.
// The inner function forms a closure over the variable count, allowing it to access and modify count even after makeCounter has finished executing.
// Each time we call the returned function (counter), it increments and returns the value of count, preserving its state between calls.
// Closures are commonly used for data encapsulation, creating private variables, and implementing function factories.
// They are a fundamental concept in JavaScript and are widely used in various programming patterns and techniques.
// RECURSION
// Recursion is a programming technique where a function calls itself in order to solve a problem.
// A recursive function typically has a base case that stops the recursion and one or more recursive cases that break the problem down into smaller subproblems.
// Here is an example of a simple recursive function that calculates the factorial of a number:
function factorial(n) {
    if (n === 0) {
    return 1; // Base case: factorial of 0 is 1
  }
    return n * factorial(n - 1); // Recursive case
}
let fact5 = factorial(5);
console.log(fact5); // 120
// In this example, the function factorial takes a single parameter n.
// If n is 0, it returns 1 (the base case). Otherwise, it returns n multiplied by the factorial of n - 1 (the recursive case).
// This process continues until the base case is reached, at which point the recursion unwinds and the final result is computed.
// Recursion can be a powerful tool for solving problems that can be broken down into smaller, similar subproblems.
// However, it's important to ensure that the base case is reachable to avoid infinite recursion, which can lead to stack overflow errors.
// Additionally, some problems may be more efficiently solved using iterative approaches rather than recursion, depending on the specific use case and constraints.
// Overall, recursion is a fundamental concept in computer science and is widely used in various algorithms and data structures.
// GROWING FUNCTIONS
// As you write more complex functions, you may find that they need to do more than one thing.
// In such cases, you can break the function into smaller helper functions that each handle a specific task.
// This approach promotes code reuse, improves readability, and makes it easier to maintain and test your code.
function printFarmInventory(cows, chickens, pigs) {
  function printAnimalCount(animal, count) {
    console.log(`You have ${count} ${animal}`);
  }
    printAnimalCount("cows", cows);
    printAnimalCount("chickens", chickens);
    printAnimalCount("pigs", pigs);
}
printFarmInventory(5, 10, 2);
// In this example, the function printFarmInventory takes three parameters: cows, chickens, and pigs.
// It defines a helper function printAnimalCount that takes an animal type and its count as parameters and prints the information to the console.
// The main function then calls the helper function for each type of animal, passing the appropriate arguments.
// By breaking the functionality into smaller functions, we make the code more modular and easier to understand.
// Each helper function has a single responsibility, which makes it easier to test and debug individual parts of the code.
// This approach also allows for better organization of code, especially as functions grow in complexity and size.
// Overall, growing functions by adding helper functions is a common practice in software development that enhances code quality and maintainability.
