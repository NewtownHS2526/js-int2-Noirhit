/*
 * ACTIVITY 1: Function Basics
 */

// ============================================================================
// Problem 1: Function Declarations
// ============================================================================

function greet(name) {
    return `Hello, ${name}!`;
}

function add(a, b) {
    return a + b;
}

function multiply(a, b) {
    return a * b;
}

// Challenge: calculate function
function calculate(a, b, operation) {
    switch(operation) {
        case "add": return a + b;
        case "subtract": return a - b;
        case "multiply": return a * b;
        case "divide": 
            if (b === 0) return "Error: Division by zero";
            return a / b;
        default: return "Invalid operation";
    }
}

// Test
console.log(greet("Alice")); // Hello, Alice!
console.log(add(5, 7)); // 12
console.log(multiply(4, 6)); // 24
console.log(calculate(10, 2, "divide")); // 5
console.log(calculate(10, 0, "divide")); // Error: Division by zero

// ============================================================================
// Problem 2: Function Expressions
// ============================================================================

// Function expression
const sayGoodbye = function() {
    return "Goodbye!";
};

// Hoisting behavior
console.log(sayHello()); // Works: "Hello!"
// console.log(sayGoodbye()); // Error if uncommented: Cannot access before initialization

// Three versions
// Function declaration
function helloDecl() { return "Hi from declaration"; }
// Function expression
const helloExpr = function() { return "Hi from expression"; }
// Arrow function
const helloArrow = () => "Hi from arrow";

// ============================================================================
// Problem 3: Parameters and Arguments
// ============================================================================

function introduce(name, age) {
    return `I'm ${name} and I'm ${age} years old`;
}

function fullName(firstName, lastName) {
    return `${firstName || ""} ${lastName || ""}`.trim();
}

// Challenge: sumAll with rest parameters
function sumAll(...args) {
    if (args.length === 0) return 0;
    return args.reduce((sum, val) => typeof val === "number" ? sum + val : sum, 0);
}

// ============================================================================
// Problem 4: Return Values
// ============================================================================

function isEven(num) {
    return num % 2 === 0;
}

function getMax(a, b) {
    return a > b ? a : b;
}

function formatName(first, last) {
    return `${first} ${last}`;
}

// Challenge: analyzeNumber
function analyzeNumber(num) {
    return {
        value: num,
        isEven: isEven(num),
        isPositive: num > 0,
        square: num ** 2,
        double: num * 2
    };
}

// Test analyzeNumber
console.log(analyzeNumber(5));
/*
{
  value: 5,
  isEven: false,
  isPositive: true,
  square: 25,
  double: 10
}
*/
