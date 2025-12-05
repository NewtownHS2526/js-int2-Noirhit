/*
 * ACTIVITY 5: Edge Cases and Special Comparisons
 * 
 * Problem 1: NaN Comparisons
 * Handle NaN in comparisons (Not a Number)
 */

const result1 = 0 / 0; // NaN
const result2 = Math.sqrt(-1); // NaN
const result3 = parseInt("not a number"); // NaN

// Your task:
// 1. Test: result1 === NaN (what happens?)
console.log(result1 === NaN); // false

// 2. Test: result1 == NaN (what happens?)
console.log(result1 == NaN); // false

// 3. Find the correct way to check if a value is NaN
console.log(Number.isNaN(result1)); // true

// 4. Create a function 'isValidNumber'
const isValidNumber = (value) =>
    typeof value === "number" &&
    !Number.isNaN(value) &&
    Number.isFinite(value);

// 5. Challenge: Write a 'safeCalculation' function
const safeCalculation = (a, b, op) => {
    let result;

    switch (op) {
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = b === 0 ? NaN : a / b;
            break;
        default:
            return null;
    }

    return isValidNumber(result) ? result : null;
};

// ============================================================================
// Problem 2: Infinity Comparisons
// Handle Infinity in comparisons
// ============================================================================

const positiveInf = Infinity;
const negativeInf = -Infinity;
const largeNum = 1e308 * 2;

// Your task:
// 1. Compare: positiveInf > 1000
console.log(positiveInf > 1000); // true

// 2. Compare: negativeInf < -1000
console.log(negativeInf < -1000); // true

// 3. Compare: positiveInf === Infinity
console.log(positiveInf === Infinity); // true

// 4. Compare: largeNum (what is it? Is it Infinity?)
console.log(largeNum); // Infinity
console.log(largeNum === Infinity); // true

// 5. Challenge: Create 'isFiniteNumber'
const isFiniteNumber = (value) =>
    typeof value === "number" &&
    !Number.isNaN(value) &&
    value !== Infinity &&
    value !== -Infinity;

// 6. Challenge: Create 'clamp' function
const clamp = (value, min, max) => {
    if (!isFiniteNumber(value)) return min;
    if (value < min) return min;
    if (value > max) return max;
    return value;
};

// ============================================================================
// Problem 3: Date Comparisons
// Compare dates and times
// ============================================================================

const date1 = new Date("2024-01-15");
const date2 = new Date("2024-02-15");
const date3 = new Date("2024-01-15");

// Your task:
// 1. Compare: date1 < date2
console.log(date1 < date2); // true

// 2. Compare: date1 === date3 (what happens? why?)
console.log(date1 === date3); // false (different objects)

// 3. How do you properly compare if two dates are the same?
console.log(date1.getTime() === date3.getTime()); // true

// 4. Create checks:
const now = new Date();

const isPast = (d) => d.getTime() < now.getTime();
const isFuture = (d) => d.getTime() > now.getTime();
const isToday = (d) => {
    const today = new Date();
    return (
        d.getFullYear() === today.getFullYear() &&
        d.getMonth() === today.getMonth() &&
        d.getDate() === today.getDate()
    );
};

// 5. Challenge: 'compareDates'
const compareDates = (a, b) => {
    const t1 = a.getTime();
    const t2 = b.getTime();
    if (t1 < t2) return -1;
    if (t1 > t2) return 1;
    return 0;
};

// ============================================================================
// Problem 4: Complex Real-World Comparison Problem
// Build a comprehensive comparison system
// ============================================================================

const event = {
    name: "Conference",
    date: new Date("2024-12-15"),
    price: 150,
    capacity: 100,
    registered: 85,
    isCancelled: false
};

// Your task:
//
// Challenge: Create 'checkEventStatus'
const checkEventStatus = (event) => {
    const today = new Date();

    const past = event.date < today;
    const full = event.registered >= event.capacity;
    const almostFull = event.registered >= event.capacity * 0.9;
    const expensive = event.price > 100;
    const cancelled = event.isCancelled;

    let status = "available";
    let canRegister = true;
    let urgency = "low";
    let recommendation = "You can register normally.";

    if (cancelled) {
        status = "cancelled";
        canRegister = false;
        urgency = "low";
        recommendation = "Event is cancelled.";
    } else if (past) {
        status = "past";
        canRegister = false;
        urgency = "low";
        recommendation = "Event already happened.";
    } else if (full) {
        status = "full";
        canRegister = false;
        urgency = "high";
        recommendation = "No seats left.";
    } else if (almostFull) {
        status = "available";
        canRegister = true;
        urgency = "high";
        recommendation = "Hurry — seats almost gone!";
    } else if (expensive) {
        urgency = "medium";
        recommendation = "Price is high, consider your budget.";
    }

    return {
        status,
        canRegister,
        urgency,
        recommendation
    };
};
