/*
 * ACTIVITY 4: Comparison Operators in Conditional Logic
 * 
 * Problem 1: Using Comparisons in if Statements
 */

const userAge = 20;
const userScore = 85;
const hasMembership = true;

// Your task:
// 1. Write an if statement to check if user is adult (age >= 18)
if (userAge >= 18) {
    console.log("User is an adult");
}

// 2. Write an if-else to check if score is passing (>= 70)
if (userScore >= 70) {
    console.log("Passing score");
} else {
    console.log("Failing score");
}

// 3. Write nested if statements to check:
if (userAge >= 18) {
    if (hasMembership) {
        console.log("Discount applied");
    } else {
        console.log("Membership available");
    }
} else {
    console.log("Age restricted");
}

// 4. Challenge: Create a 'calculateDiscount' function
function calculateDiscount(age, score, hasMembership) {
    let discount = 0;

    if (age >= 18 && hasMembership && score >= 90) {
        discount = 30;
    } else if (age >= 18 && hasMembership) {
        discount = 20;
    } else if (age >= 18 && score >= 80) {
        discount = 10;
    } else if (age < 18) {
        discount = 5;
    }

    return discount;
}

// ============================================================================
// Problem 2: Ternary Operator with Comparisons
// Use ternary operator for simple comparisons
// ============================================================================

const price = 100;
const isMember = true;

// Your task:
// 1. Use ternary to set discount: isMember ? 0.1 : 0
const discount = isMember ? 0.1 : 0;

// 2. Use ternary to set status: price > 50 ? "expensive" : "affordable"
const status = price > 50 ? "expensive" : "affordable";

// 3. Create nested ternary
const nestedDiscount = isMember
    ? 0.2
    : price > 100
    ? 0.1
    : 0;

// 4. Challenge: Convert if-else to ternary
const shipping =
    price > 200 ? "Free Shipping"
    : price > 100 ? "Half Shipping"
    : "Full Shipping";

// 5. Explain when to use ternary vs if-else
// Ternary is best for quick, simple conditions.
// If-else is better when logic is longer, more detailed, or multi-step.

// ============================================================================
// Problem 3: Comparison in Loops
// Use comparisons to control loop execution
// ============================================================================

const numbers = [5, 10, 15, 20, 25, 30];

// Your task:
// 1. Use for loop to find all numbers greater than 15
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 15) console.log(numbers[i]);
}

// 2. Use while loop to find first number greater than 20
let i = 0;
while (i < numbers.length) {
    if (numbers[i] > 20) {
        console.log("First >20:", numbers[i]);
        break;
    }
    i++;
}

// 3. Use forEach with comparison to count numbers between 10 and 25
let count = 0;
numbers.forEach(num => {
    if (num >= 10 && num <= 25) count++;
});
console.log("Count:", count);

// 4. Challenge: Create a 'filterByRange' function
function filterByRange(arr, min, max) {
    if (!arr || arr.length === 0) return [];
    if (min > max) [min, max] = [max, min];

    const result = [];
    for (let num of arr) {
        if (num >= min && num <= max) result.push(num);
    }
    return result;
}

// ============================================================================
// Problem 4: Comparison-Based Sorting
// Use comparisons to sort data
// ============================================================================

const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 78 },
    { name: "Diana", grade: 95 }
];

// Your task:
// 1. Sort students by grade (ascending)
const asc = [...students].sort((a, b) => a.grade - b.grade);

// 2. Sort students by grade (descending)
const desc = [...students].sort((a, b) => b.grade - a.grade);

// 3. Sort students by name alphabetically
const alpha = [...students].sort((a, b) => a.name.localeCompare(b.name));

// 4. Challenge: Create a 'multiSort' function
function multiSort(arr, ...criteria) {
    return [...arr].sort((a, b) => {
        for (let [field, order] of criteria) {
            if (a[field] === b[field]) continue;
            const comparison = a[field] > b[field] ? 1 : -1;
            return order === "desc" ? -comparison : comparison;
        }
        return 0;
    });
}
