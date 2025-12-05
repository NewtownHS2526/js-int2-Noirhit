/*
 * ACTIVITY 2: Type Conversion and Coercion
 */

// ============================================================================
// Problem 1: Explicit Type Conversion
// ============================================================================

// String to number
console.log(Number(numStr));      // 123
console.log(parseInt(numStr));    // 123
console.log(parseFloat("123.45"));// 123.45
console.log(+"123");              // 123

// Number to string
console.log(String(strNum));      // "456"
console.log((strNum).toString()); // "456"
console.log(strNum + "");         // "456"

// To boolean
console.log(Boolean(1));          // true
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean("text"));     // true

function smartConvert(value, targetType) {
    switch(targetType) {
        case "number":
            const num = Number(value);
            return Number.isNaN(num) ? null : num;
        case "string":
            return String(value);
        case "boolean":
            return Boolean(value);
        default:
            return value; // unknown type, return as is
    }
}

// Examples:
console.log(smartConvert("123", "number")); // 123
console.log(smartConvert("abc", "number")); // null
console.log(smartConvert(0, "boolean"));    // false

// ============================================================================
// Problem 2: Type Coercion
// ============================================================================

console.log("5" + 3);  // "53"   (string concatenation)
console.log(5 + "3");  // "53"   (string concatenation)
console.log("5" - 3);  // 2      (string converted to number)
console.log("5" * 3);  // 15
console.log("5" / 3);  // 1.666...

console.log("5" == 5);  // true   (loose equality, coercion)
console.log("5" === 5); // false  (strict equality)
console.log(0 == false);  // true
console.log(0 === false); // false

// Helpful coercion: "5" * 2 -> 10
// Problematic coercion: "5" + 2 -> "52"
// Avoid unwanted coercion: use explicit Number() or String() conversions

// ============================================================================
// Problem 3: Type Checking
// ============================================================================

console.log(typeof value1); // number
console.log(typeof value2); // string
console.log(typeof value3); // object (quirk: null)
console.log(typeof value4); // undefined
console.log(typeof value5); // object (array)
console.log(typeof value6); // object

console.log(Array.isArray(value5)); // true
console.log(value3 === null);       // true
console.log(value4 === undefined);  // true

function getType(val) {
    if (val === null) return "null";
    if (Array.isArray(val)) return "array";
    return typeof val; // returns "number", "string", "boolean", "object", "function", "undefined"
}

// Examples:
console.log(getType([]));     // array
console.log(getType({}));     // object
console.log(getType(null));   // null
console.log(getType(42));     // number

// ============================================================================
// Problem 4: Type Safety Practices
// ============================================================================

function addNumbers(a, b) {
    if (typeof a !== "number" || typeof b !== "number") {
        return "Error: both parameters must be numbers";
    }
    return a + b;
}

// Challenge: safeAdd
function safeAdd(a, b) {
    const numA = typeof a === "number" ? a : Number(a);
    const numB = typeof b === "number" ? b : Number(b);

    if (Number.isNaN(numA) || Number.isNaN(numB)) {
        return {success: false, error: "Invalid number input"};
    }

    return {success: true, result: numA + numB};
}

// Examples:
console.log(safeAdd(10, 20));       
console.log(safeAdd("10", "5"));    
console.log(safeAdd("abc", 5));     
console.log(safeAdd(null, 5));      
