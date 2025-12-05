/*
 * ACTIVITY 4: Special Data Types and Values
 */

// ============================================================================
// Problem 1: NaN (Not a Number)
// ============================================================================

// typeof NaN
console.log(typeof NaN); // "number"

// NaN comparisons
console.log(NaN === NaN); // false — NaN is never equal to itself

// isNaN tests
console.log(isNaN(NaN));       // true
console.log(isNaN("text"));    // true (coerces to number, fails)
console.log(isNaN(123));       // false

// Number.isNaN is more accurate
console.log(Number.isNaN(NaN));       // true
console.log(Number.isNaN("text"));    // false

// Challenge: safeDivide
function safeDivide(a, b) {
    const result = a / b;
    if (!Number.isFinite(result)) return null; // handles NaN and Infinity
    return result;
}

console.log(safeDivide(10, 2));  // 5
console.log(safeDivide(0, 0));   // null
console.log(safeDivide(1, 0));   // null

// ============================================================================
// Problem 2: Infinity
// ============================================================================

console.log(typeof Infinity); // "number"

// Comparisons
console.log(Infinity > 1000);    // true
console.log(-Infinity < -1000);  // true
console.log(Infinity === Infinity); // true

// Number.isFinite
console.log(Number.isFinite(Infinity)); // false
console.log(Number.isFinite(123));      // true

// Challenge: safeNumber
function safeNumber(value) {
    return typeof value === "number" && Number.isFinite(value);
}

console.log(safeNumber(123));       // true
console.log(safeNumber(Infinity));  // false
console.log(safeNumber(NaN));       // false
console.log(safeNumber("123"));     // false

// ============================================================================
// Problem 3: Symbol Type
// ============================================================================

console.log(typeof sym1);      // "symbol"
console.log(sym1 === sym2);    // false — each Symbol is unique

// Symbol property
const obj = {};
obj[sym1] = "value";
console.log(obj[sym1]);        // "value"

// Challenge: createUniqueKey
function createUniqueKey(desc) {
    return Symbol(desc);
}

const privateKey = createUniqueKey("secret");
const myObj = {};
myObj[privateKey] = 42;
console.log(myObj[privateKey]); // 42

// ============================================================================
// Problem 4: BigInt Type
// ============================================================================

console.log(typeof bigNum1); // "bigint"

// Operations
console.log(bigNum1 + bigNum2); // 579n
console.log(bigNum1 * 2n);      // 246n

// Mixing BigInt and Number causes error
// console.log(bigNum1 + 5); // TypeError

// Challenge: safeBigInt
function safeBigInt(input) {
    try {
        return BigInt(input);
    } catch {
        return null;
    }
}

console.log(safeBigInt("123"));  // 123n
console.log(safeBigInt(456));    // 456n
console.log(safeBigInt("abc"));  // null
