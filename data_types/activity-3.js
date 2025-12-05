/*
 * ACTIVITY 3: Objects and Arrays
 */

// ============================================================================
// Problem 1: Object Basics
// ============================================================================

// Access properties
console.log(person.name);      // Alice
console.log(person["age"]);    // 30

// Add new property
person.email = "alice@example.com";
console.log(person.email);     // alice@example.com

// Modify property
person.age = 31;
console.log(person.age);       // 31

// Check if property exists
console.log("name" in person);             // true
console.log(person.hasOwnProperty("name"));// true

// Challenge: objectInfo
function objectInfo(obj) {
    const keys = Object.keys(obj);
    const values = Object.values(obj);
    const size = keys.length;
    const isEmpty = size === 0;
    return {keys, values, size, isEmpty};
}

console.log(objectInfo(person));

// ============================================================================
// Problem 2: Array Basics
// ============================================================================

// Access elements
console.log(fruits[0]);                 // apple
console.log(fruits[fruits.length - 1]); // orange

// Add elements
fruits.push("grape");   // ["apple","banana","orange","grape"]
fruits.unshift("mango");// ["mango","apple","banana","orange","grape"]

// Remove elements
fruits.pop();   // removes "grape"
fruits.shift(); // removes "mango"

// Check if array
console.log(Array.isArray(fruits)); // true

// Challenge: arrayInfo
function arrayInfo(arr) {
    return {
        length: arr.length,
        first: arr[0] ?? null,
        last: arr[arr.length - 1] ?? null,
        isEmpty: arr.length === 0,
        type: "array"
    };
}

console.log(arrayInfo(fruits));

// ============================================================================
// Problem 3: Nested Data Structures
// ============================================================================

// Access nested properties
console.log(library.books[0].title); // Book A

// Add new book
library.books.push({ title: "Book C", author: "Author 3", pages: 300 });
console.log(library.books);

// Access nested object
console.log(library.location.city); // Boston

// Challenge: deepAccess
function deepAccess(obj, path) {
    const keys = path.split(".");
    let current = obj;
    for (let key of keys) {
        if (current && (key in current || !isNaN(key))) {
            current = current[key];
        } else {
            return null;
        }
    }
    return current;
}

console.log(deepAccess(library, "books.0.title")); // Book A
console.log(deepAccess(library, "books.5.title")); // null
console.log(deepAccess(library, "location.street")); // Main St

// ============================================================================
// Problem 4: Reference vs Value
// ============================================================================

arr1.push(4);
console.log(arr2); // [1,2,3,4] — arr2 also changed because arrays are reference types

obj1.b = 2;
console.log(obj2); // {a:1,b:2} — obj2 also changed because objects are reference types

// Copies
const arr3 = [...arr1];
const obj3 = {...obj1};

// Modify copies
arr3.push(5);
obj3.c = 3;

console.log(arr1); // [1,2,3,4] unchanged
console.log(obj1); // {a:1,b:2} unchanged
console.log(arr3); // [1,2,3,4,5]
console.log(obj3); // {a:1,b:2,c:3}

// Challenge: deepCopy
function deepCopy(value) {
    if (Array.isArray(value)) {
        return value.map(item => deepCopy(item));
    } else if (value && typeof value === "object") {
        const copy = {};
        for (let key in value) {
            if (value.hasOwnProperty(key)) {
                copy[key] = deepCopy(value[key]);
            }
        }
        return copy;
    } else {
        return value;
    }
}

// Test deepCopy
const original = {a:1, b:[1,2,{c:3}]};
const copy = deepCopy(original);
copy.b[2].c = 99;
console.log(original.b[2].c); // 3 — original not affected
console.log(copy.b[2].c);     // 99
