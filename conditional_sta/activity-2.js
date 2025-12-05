/*
 * ACTIVITY 2: Ternary Operator and Logical Operators
 * 
 * Problem 1: Ternary Operator
 * Use ternary operator for simple conditionals
 */

const status = age >= 18 ? "Adult" : "Minor";
const discountedPrice = price > 50 ? price * 0.9 : price;
const drinkMessage = age >= 21 ? "Can drink" : "Cannot drink";

const result = score >= 70 ? "Pass" : "Fail";

// ============================================================================
// Problem 2: Logical Operators in Conditionals
// Use &&, ||, ! in conditional statements
// ============================================================================

const canAccess = isLoggedIn && hasPermission;
const canDelete = isLoggedIn && (hasPermission || isAdmin);
const isBlocked = !isLoggedIn;

const checkAccess = (isLoggedIn, hasPermission, isAdmin, isBlocked) => {
    if (isLoggedIn && (hasPermission || isAdmin) && !isBlocked) return "Full access";
    else if (isLoggedIn && !isBlocked) return "Limited access";
    else return "No access";
};

// ============================================================================
// Problem 3: Short-Circuit Evaluation
// Understand how && and || work in conditionals
// ============================================================================

const userName = user && user.name;
const displayName = user.name || "Guest";
const emailOrFallback = (user && user.email) || "No email";

const getUserDisplayName = (user) => {
    return (user && user.name) || (user && user.email) || "Anonymous";
};

// ============================================================================
// Problem 4: Complex Conditional Logic
// Combine multiple conditional techniques
// ============================================================================

const passes = score >= 70 && attendance >= 80 && hasSubmittedAll;

let adjustedScore = score;
if (score >= 90 && attendance >= 95) adjustedScore += 5;
else if (score >= 80 && attendance >= 90) adjustedScore += 3;

const calculateFinalGrade = (score, attendance, hasSubmittedAll, hasExtraCredit) => {
    let final = score;
    if (attendance < 80 || !hasSubmittedAll) final -= 10;
    if (hasExtraCredit && attendance >= 95) final += 5;
    if (final > 100) final = 100;
    if (final < 0) final = 0;
    return final;
};
