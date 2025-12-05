/*
 * ACTIVITY 1: Primitive Data Types
 */

// ============================================================================
// Problem 1: Number Type
// ============================================================================

console.log(typeof num1); // "number"
console.log(typeof num2); // "number"
console.log(typeof num3); // "number"
console.log(typeof num4); // "number"

// Arithmetic
console.log(num1 + num2); // addition
console.log(num1 - num3); // subtraction
console.log(num2 * num3); // multiplication
console.log(num1 / num2); // division
console.log(num1 % num2); // modulo

// Special numbers
console.log(typeof Infinity); // "number"
console.log(typeof NaN);      // "number"
console.log(0 / 0);           // NaN
console.log(1 / 0);           // Infinity
console.log(-1 / 0);          // -Infinity

function numberInfo(n) {
    return {
        type: typeof n,
        isInteger: Number.isInteger(n),
        isPositive: typeof n === "number" && n > 0,
        isFinite: Number.isFinite(n),
        value: n
    };
}

// Example:
console.log(numberInfo(NaN));
console.log(numberInfo(Infinity));
console.log(numberInfo(-10));

// ============================================================================
// Problem 2: String Type
// ============================================================================

console.log(typeof str1); // "string"
console.log(typeof str2); // "string"
console.log(typeof str3); // "string"

// Concatenation
console.log(str1 + " " + str2);
console.log(`${str1} ${str2}!`);
console.log(str1.length);
console.log(str1[0], str1.charAt(0));

function stringAnalyzer(s) {
    return {
        length: s.length,
        firstChar: s.charAt(0) || null,
        lastChar: s.charAt(s.length - 1) || null,
        isEmpty: s.length === 0,
        type: typeof s
    };
}

// Example:
console.log(stringAnalyzer("Hello"));
console.log(stringAnalyzer(""));

// ============================================================================
// Problem 3: Boolean Type
// ============================================================================

console.log(typeof bool1); // "boolean"
console.log(typeof bool2); // "boolean"

// Truthy/falsy
console.log(Boolean(0), Boolean(""), Boolean(null), Boolean(undefined));
console.log(!!0, !!"", !!null);

// Logical operators
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

function isTruthy(value) {
    return !!value;
}

// Example:
console.log(isTruthy(0)); // false
console.log(isTruthy("text")); // true
console.log(isTruthy(null)); // false
console.log(isTruthy([])); // true

// ============================================================================
// Problem 4: Undefined and Null
// ============================================================================

console.log(typeof undefVar); // "undefined"
console.log(typeof nullVar);  // "object" (quirk of JS)

// Comparisons
console.log(undefined == null);  // true
console.log(undefined === null); // false
console.log(undefVar === undefined); // true
console.log(nullVar === null);       // true

function checkValue(val) {
    if (val === undefined) return "undefined";
    if (val === null) return "null";
    if (val === "") return "empty string";
    if (val === 0) return "zero";
    return "has value";
}

// Examples:
console.log(checkValue(undefined)); // "undefined"
console.log(checkValue(null));      // "null"
console.log(checkValue(""));        // "empty string"
console.log(checkValue(0));         // "zero"
console.log(checkValue("Hello"));   // "has value"
