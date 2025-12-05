/*
 * ACTIVITY 1: Basic Conditional Statements
 * 
 * Problem 1: Simple if Statements
 * Practice basic conditional logic
 */

if (age >= 18) console.log("Adult");
if (temperature > 30) console.log("Hot day");
if (temperature < 0) console.log("Freezing");

const checkAgeStatus = (age) => {
    if (age < 13) return "Child";
    else if (age >= 13 && age < 18) return "Teen";
    else return "Adult";
};

// ============================================================================
// Problem 2: if-else Statements
// Practice decision-making with two outcomes
// ============================================================================

if (score >= 70) console.log("Pass");
else console.log("Fail");

if (isMember) console.log("Welcome back!");
else console.log("Join now!");

const checkDiscount = (price, isMember) => {
    if (isMember) return price * 0.9;
    return price;
};

const gradeAssignment = (score) => {
    if (score >= 90) return "A";
    else if (score >= 80) return "B";
    else if (score >= 70) return "C";
    else if (score >= 60) return "D";
    else return "F";
};

// ============================================================================
// Problem 3: if-else if-else Chains
// Handle multiple conditions
// ============================================================================

if (time >= 5 && time < 12) console.log("Morning");
else if (time >= 12 && time < 17) console.log("Afternoon");
else if (time >= 17 && time < 21) console.log("Evening");
else console.log("Night");

const getWeatherAdvice = (temp) => {
    if (temp < 10) return "Too cold";
    else if (temp <= 15) return "Cold";
    else if (temp <= 20) return "Cool";
    else if (temp <= 25) return "Warm";
    else if (temp <= 30) return "Hot";
    else return "Too hot";
};

const calculateShipping = (weight) => {
    if (weight < 1) return 5;
    else if (weight <= 5) return 10;
    else if (weight <= 10) return 20;
    else return 50;
};

// ============================================================================
// Problem 4: Nested Conditionals
// Use conditionals inside other conditionals
// ============================================================================

if (age2 >= 18) {
    if (hasLicense) {
        if (hasInsurance) console.log("Can drive safely");
        else console.log("Get insurance first");
    } else {
        console.log("Get a license first");
    }
} else {
    console.log("Too young to drive");
}

const canRentCar = (age, hasLicense, hasInsurance) => {
    if (age >= 21) {
        if (hasLicense) {
            if (hasInsurance) return true;
            else return false;
        } else return false;
    } else return false;
};

const evaluateStudent = (grade, attendance) => {
    if (grade >= 70) {
        if (attendance >= 90) return "Excellent";
        else if (attendance >= 80) return "Good";
        else return "Needs improvement";
    } else return "Failed";
};
