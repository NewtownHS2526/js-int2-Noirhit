/*
 * ACTIVITY 2: Arrow Functions vs Regular Functions
 * 
 * Problem 1: Function Declaration Analysis
 * Compare and contrast these two implementations:
 */

// Version 1
function doubleV1(x) {
    return x * 2;

}
// Version 2
const doubleV2 = (x) => x * 2;

// Your task:
// 1. Can you call 'double' before it's declared in each version? Test your hypothesis.

// Version 1: Works (hoisted)
console.log("V1 before declaration:", doubleV1(5)); 

// Version 2: Fails if called before declaration (NOT hoisted the same way)
// Uncommenting the following will cause an error:
// console.log("V2 before declaration:", doubleV2(5));

// 2. Can you reassign 'double' in each version? Why or why not?
// doubleV1 (function declaration) → can be reassigned
let testDouble1 = doubleV1;
console.log("Reassigned V1:", testDouble1(10));

// doubleV2 (const) → cannot be reassigned
// Uncomment to see error:
// doubleV2 = 50;

// 3. Which would you use in different scenarios and why?
// - Use function declaration when you need hoisting or traditional 'this' behavior
// - Use arrow function for short callbacks, array methods, or when lexical 'this' is required

// 4. Create test cases for each scenario
console.log("doubleV1 test:", doubleV1(7));
console.log("doubleV2 test:", doubleV2(7));


// ============================================================================
// Problem 2: Arrow Function with Callbacks
// You need to process a list of students' grades. Write arrow functions to:
// ============================================================================
const scores = [95, 82, 73, 88, 67, 91, 55, 78];


const above75 = scores.filter(score => score > 75);
console.log("Above 75:", above75);


const toLetter = score => {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
};
const letterGrades = scores.map(toLetter);
console.log("Letter Grades:", letterGrades);

// 3. Calculate the average score of all students
const avgScore =
    scores.reduce((total, score) => total + score, 0) / scores.length;
console.log("Average Score:", avgScore);

// 4. Challenge: chain operations → passing students (75+), convert to letters, average
const passingAvg =
    scores
    .filter(score => score > 75)
    .map(score => score)
    .reduce((sum, s, _, arr) => sum + s / arr.length, 0);
console.log("Passing Avg (75+):", passingAvg);


// ============================================================================
// Problem 3: Nested Arrow Functions
// Create a function 'createMultiplier'
// ============================================================================
const createMultiplier = num => other => num * other;


const double = createMultiplier(2);
console.log("Double 5 =", double(5)); 


const triple = createMultiplier(3);
console.log("Triple 5 =", triple(5)); 


const createCalculator = (n) => ({
    add: x => n + x,
    subtract: x => n - x,
    multiply: x => n * x,
    divide: x => x === 0 ? "Error: divide by zero" : n / x
});

const calc = createCalculator(10);
console.log("Calc add:", calc.add(5));
console.log("Calc subtract:", calc.subtract(3));
console.log("Calc multiply:", calc.multiply(4));
console.log("Calc divide:", calc.divide(2));


// ============================================================================
// Problem 4: Debugging Arrow Functions
// The following code has errors. Identify and fix them:
// ============================================================================



const processData = (data) => {
    if (!Array.isArray(data)) return [];
    
    return data
        .filter(item => typeof item === "number")             
        .map(item => {
            if (item > 10) return item * 2;
            return item;
        })
        .filter(item => item > 5);
};

const numbers = [3, 8, 15, 22, 5];

console.log("Processed:", processData(numbers));


console.log("Empty:", processData([]));
console.log("Mixed:", processData([null, undefined, 12, "hello", 4]));
console.log("Invalid:", processData("not an array"));
