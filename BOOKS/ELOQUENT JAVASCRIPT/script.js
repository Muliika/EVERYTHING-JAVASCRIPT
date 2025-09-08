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
