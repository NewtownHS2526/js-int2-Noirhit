/*
 * ACTIVITY 5: Working with Strings
 */

// ============================================================================
// Problem 1: String Methods and Operations
// ============================================================================

console.log(text.toUpperCase());           // "HELLO WORLD"
console.log(text.toLowerCase());           // "hello world"
console.log(text.indexOf("World"));        // 6
console.log(text.includes("Hello"));       // true
console.log(text.slice(0, 5));             // "Hello"
console.log(text.substring(0, 5));         // "Hello"
console.log(text.replace("World", "JavaScript")); // "Hello JavaScript"

// Challenge: analyzeString
function analyzeString(str) {
    return {
        length: str.length,
        wordCount: str.trim().split(/\s+/).length,
        hasNumbers: /\d/.test(str),
        hasLetters: /[a-zA-Z]/.test(str),
        uppercase: str.toUpperCase(),
        lowercase: str.toLowerCase()
    };
}

console.log(analyzeString("Hello 123")); 
// {length: 9, wordCount: 2, hasNumbers: true, hasLetters: true, uppercase: "HELLO 123", lowercase: "hello 123"}

// ============================================================================
// Problem 2: Template Literals
// ============================================================================

console.log(`My name is ${name}`);                     // "My name is Alice"
console.log(`I live in ${city}
Next year I'll be ${age + 1}`);
// Multi-line string
console.log(`Next year I'll be ${age + 1}`);          // "Next year I'll be 31"

// Challenge: formatEmail
function formatEmail(user) {
    return `${user.firstName.toLowerCase()}.${user.lastName.toLowerCase()}@${user.domain.toLowerCase()}.com`;
}

console.log(formatEmail({firstName: "Alice", lastName: "Smith", domain: "Example"})); 
// "alice.smith@example.com"

// ============================================================================
// Problem 3: String Conversion and Parsing
// ============================================================================

console.log(parseInt(numStr));  // 123
console.log(parseFloat(numStr));// 123.45
console.log(Number(numStr));    // 123.45
console.log(+numStr);           // 123.45

console.log(csvLine.split(",")); // ["apple", "banana", "orange"]

// Challenge: parseCSV
function parseCSV(line) {
    // Simple CSV parser (handles quoted values)
    const regex = /(".*?"|[^",\s]+)(?=\s*,|\s*$)/g;
    const result = [];
    let match;
    while ((match = regex.exec(line)) !== null) {
        let value = match[0];
        // Remove quotes
        if (value.startsWith('"') && value.endsWith('"')) {
            value = value.slice(1, -1);
        }
        // Convert numbers
        if (!isNaN(value) && value.trim() !== "") {
            value = Number(value);
        }
        result.push(value);
    }
    return result;
}

console.log(parseCSV('apple,"banana, yellow",42')); // ["apple", "banana, yellow", 42]

// ============================================================================
// Problem 4: String Validation
// ============================================================================

const str = "hello";

// Empty string check
console.log(str.length === 0, str === "");

// Only letters
console.log(/^[a-zA-Z]+$/.test(str)); // true

// Basic email check
console.log(/\S+@\S+\.\S+/.test(email)); // true

// Challenge: validateString
function validateString(str, type) {
    const errors = [];
    let valid = true;

    if (!str || str.trim() === "") {
        errors.push("String is empty");
        valid = false;
    }

    switch(type) {
        case "email":
            if (!/\S+@\S+\.\S+/.test(str)) {
                errors.push("Invalid email format");
                valid = false;
            }
            break;
        case "phone":
            if (!/^\+?\d{10,15}$/.test(str)) {
                errors.push("Invalid phone number format");
                valid = false;
            }
            break;
        case "password":
            if (str.length < 8) {
                errors.push("Password too short");
                valid = false;
            }
            if (!/[A-Z]/.test(str)) {
                errors.push("Password must contain uppercase");
                valid = false;
            }
            if (!/[a-z]/.test(str)) {
                errors.push("Password must contain lowercase");
                valid = false;
            }
            if (!/\d/.test(str)) {
                errors.push("Password must contain a number");
                valid = false;
            }
            break;
        default:
            errors.push("Unknown validation type");
            valid = false;
    }

    return { valid, errors };
}

console.log(validateString("Test1234", "password"));
// {valid: true, errors: []}
console.log(validateString("test", "password"));
// {valid: false, errors: ["Password too short", "Password must contain uppercase", "Password must contain a number"]}
