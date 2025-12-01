/*
 * ACTIVITY 1: Understanding Arrow Function Syntax
 * 
 * Problem 1: Basic Arrow Function Conversion
 * Convert the following traditional function to an arrow function:
 */

function greet(name) {
    return "Hello, " + name + "!";
}

// Your task:
// 1. Convert the above function to an arrow function (one-liner with implicit return)
// 2. Write it as a multi-line arrow function with explicit return
// 3. Write it without parentheses for the single parameter
// 4. Test all three versions with your name

 const greet2 = (name) => "Name: " + name + "!";
 console.log(greet2("Noirhit"));

// ============================================================================
// Problem 2: Arrow Function with Multiple Parameters
// Create an arrow function called 'calculateArea' that takes two parameters 
// (length and width) and returns the area of a rectangle.
// ============================================================================

const exp = (num) => num * num;
console.log(exp(5))

// Your task:
// 1. Write calculateArea as a one-liner with implicit return
// 2. Write calculateArea with explicit return statement
// 3. Test both with length=5, width=10
// 4. Explain when you would use each version

// ============================================================================
// Problem 3: Arrow Function in Array Methods
// Given the array [1, 2, 3, 4, 5], use arrow functions to:
// ============================================================================
const calcArea = (width, length) => "area of a rectangle:" + width*length;
console.log(calcArea(5,6));

function calcArea2(width2, length2){
    return "area of a rectangle: " + width2*length2;
}
console.log(calcArea2(5,6));

const numbers = [1, 2, 3, 4, 5];





// Your task:
// 1. Square each number (map)
// 2. Filter out numbers greater than 3
// 3. Find the sum of all numbers (reduce)
// 4. Chain all three operations together - what is the final result?

// ============================================================================
// Problem 4: Understanding 'this' in Arrow Functions
// Study the following code and predict the output. Then explain why.
// ============================================================================

const person = {
    name: "Alice",
    traditional: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};

// Your task:
// 1. Run person.traditional() and person.arrow() - what happens?
// 2. Explain why they behave differently
// 3. How would you fix the arrow function to correctly access person.name?
// 4. Provide at least two different solutions

