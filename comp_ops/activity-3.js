/*
 * ACTIVITY 3: Advanced Comparison Techniques
 * 
 * Problem 1: Comparing Arrays and Objects
 * Understand how objects and arrays are compared
 */

const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
const arr3 = arr1;

const obj1 = { name: "Alice", age: 30 };
const obj2 = { name: "Alice", age: 30 };
const obj3 = obj1;

// Your task:
// 1. Test: arr1 === arr2 (what does this return and why?)
console.log(arr1 === arr2); // false – different memory references

// 2. Test: arr1 === arr3 (what does this return and why?)
console.log(arr1 === arr3); // true – same reference in memory

// 3. Test: obj1 === obj2 (what does this return and why?)
console.log(obj1 === obj2); // false – different objects with same values

// 4. Test: obj1 === obj3 (what does this return and why?)
console.log(obj1 === obj3); // true – same reference

// 5. Challenge: Write a function 'deepEqual'
function deepEqual(a, b) {
    if (a === b) return true;
    if (typeof a !== "object" || typeof b !== "object" || a === null || b === null) {
        return false;
    }

    const keysA = Object.keys(a);
    const keysB = Object.keys(b);
    if (keysA.length !== keysB.length) return false;

    for (let key of keysA) {
        if (!deepEqual(a[key], b[key])) return false;
    }
    return true;
}

// 6. Challenge: Write a function 'compareArrays'
function compareArrays(a, b) {
    if (a.length !== b.length) return false;
    for (let i = 0; i < a.length; i++) {
        if (a[i] !== b[i]) return false;
    }
    return true;
}

// ============================================================================
// Problem 2: Chaining Comparison Operators
// Use comparison operator chaining effectively
// ============================================================================

const score = 85;
const age = 25;

// Your task:
// 1. Check if score is between 80 and 90: 80 <= score && score <= 90
console.log(80 <= score && score <= 90);

// 2. Check if age is between 18 and 65: Use chaining
console.log(18 <= age && age <= 65);

// 3. Check if score is NOT between 0 and 100 (invalid score)
console.log(score < 0 || score > 100);

// 4. Challenge: Create a function 'isInRange'
function isInRange(value, min, max) {
    if (min > max) [min, max] = [max, min];
    return value >= min && value <= max;
}

// 5. Challenge: Create a function 'validateInput'
function validateInput(input) {
    const result = {};

    if (typeof input === "number") {
        result.valid = input >= 0 && input <= 100;
        result.message = result.valid ? "Valid number" : "Number out of range";
    } else if (typeof input === "string") {
        result.valid = input.length >= 1 && input.length <= 50;
        result.message = result.valid ? "Valid string" : "String length invalid";
    } else {
        result.valid = false;
        result.message = "Unsupported type";
    }

    return result;
}

// ============================================================================
// Problem 3: Comparison with Null and Undefined
// Handle edge cases in comparisons
// ============================================================================

let value1;
let value2 = null;
let value3 = 0;
let value4 = "";

// Your task:
// 1. Compare each value with: null, undefined, 0, ""
console.log(value1 == null, value1 === null, value1 == 0, value1 == "");
console.log(value2 == null, value2 === null, value2 == 0, value2 == "");
console.log(value3 == null, value3 === null, value3 == 0, value3 == "");
console.log(value4 == null, value4 === null, value4 == 0, value4 == "");

// 2. Predict: value1 == null, value1 === null, value2 == undefined
console.log(value1 == null);     // true
console.log(value1 === null);    // false
console.log(value2 == undefined); // true

// 3. Create checks
const isDefined = v => v !== undefined;
const hasValue = v => v !== undefined && v !== null;
const isFalsy = v => !v;

// 4. Challenge: safeCompare
function safeCompare(a, b) {
    const nullishA = a === null || a === undefined;
    const nullishB = b === null || b === undefined;

    if (nullishA && nullishB) return true;
    if (nullishA || nullishB) return false;
    return a === b;
}

// ============================================================================
// Problem 4: Performance Considerations
// Optimize comparison operations
// ============================================================================

const largeArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Your task:
// 1. Compare: largeArray.length > 0 vs largeArray.length !== 0
console.log(largeArray.length > 0); 
console.log(largeArray.length !== 0);

// 2. Compare: value == null vs value === null || value === undefined
// Preferred: value == null — shorter and safe for nullish checking

// 3. Challenge: findMax
function findMax(arr) {
    if (!arr || arr.length === 0) return null;
    let max = arr[0];
    for (let num of arr) {
        if (num > max) max = num;
    }
    return max;
}

// 4. Challenge: binarySearch
function binarySearch(sortedArr, target) {
    if (!sortedArr) return -1;

    let left = 0;
    let right = sortedArr.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const value = sortedArr[mid];

        if (value === target) return mid;
        if (value < target) left = mid + 1;
        else right = mid - 1;
    }
    return -1;
}
