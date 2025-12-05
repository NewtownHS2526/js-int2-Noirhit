/*
 * ACTIVITY 1: Understanding Comparison Operators
 * 
 * Problem 1: Equality Operators (== vs ===)
 * Understand the difference between loose and strict equality
 */

// 1. Predict the output of each comparison, then test:
console.log(5 == "5");            // true
console.log(5 === "5");           // false
console.log(0 == false);          // true
console.log(0 === false);         // false
console.log(null == undefined);   // true
console.log(null === undefined);  // false

// 2. Create 5 examples where == returns true but === returns false
console.log("0" == 0);            // true
console.log("" == 0);             // true
console.log(true == 1);           // true
console.log(false == 0);          // true
console.log(" \n" == 0);          // true

// 3. Explain when you would use == vs === in real code
// Use == rarely; use === for accurate, safe comparisons to avoid coercion.

// ============================================================================
// Problem 2: Relational Operators
// Work with <, >, <=, >= operators
// ============================================================================

const age1 = 18;
const age2 = 21;
const score1 = 85;
const score2 = 90;

// 1. Compare ages
console.log(age1 < age2);
console.log(age1 >= 18);

// 2. Compare scores
console.log(score1 > 80);
console.log(score2 >= 90);

// 3. Eligibility checks
const canVote = age1 >= 18;
const canDrive = age1 >= 16;
const canDrink = age1 >= 21;
const senior = age1 >= 65;

// 4. checkEligibility
const checkEligibility = age => ({
    canVote: age >= 18,
    canDrive: age >= 16,
    canDrink: age >= 21,
    senior: age >= 65
});

// ============================================================================
// Problem 3: String Comparisons
// Understand how strings are compared
// ============================================================================

const name1 = "Alice";
const name2 = "Bob";
const name3 = "alice";

// 1. name1 < name2
console.log(name1 < name2);

// 2. Case-sensitive comparison
console.log(name1 === name3);

// 3. Case-insensitive comparison
const caseInsensitiveEqual = (a, b) => a.toLowerCase() === b.toLowerCase();

// 4. sortNames
const sortNames = arr =>
    arr.sort((a, b) => a.toLowerCase().localeCompare(b.toLowerCase()));

// ============================================================================
// Problem 4: Comparison with Different Data Types
// Understand type coercion in comparisons
// ============================================================================

// 1. Predict + test:
console.log("10" > 9);        // true
console.log("10" < 20);       // true
console.log("apple" > "banana"); // false
console.log(true > false);    // true
console.log(null < 1);        // true
console.log(undefined == null); // true

// 2. Unexpected coercion examples
console.log([] == 0);          // true
console.log([1,2] == "1,2");   // true
console.log("5" - 2);          // 3

// 3. Avoid issues by always using === and converting types manually.

// 4. safeCompare
const safeCompare = (a, b) => {
    if (typeof a !== typeof b) return false;
    if (a === null && b === null) return true;
    return a === b;
};
