/*
 * ACTIVITY 3: Switch Statements
 * 
 * Problem 1: Basic Switch Statement
 * Use switch for multiple value comparisons
 */

switch (dayOfWeek) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}

let message;
switch (status) {
    case "pending":
        message = "Please wait";
        break;
    case "approved":
        message = "Success!";
        break;
    case "rejected":
        message = "Sorry";
        break;
    default:
        message = "Unknown status";
}

const getDayType = (dayOfWeek) => {
    switch (dayOfWeek) {
        case 1: case 2: case 3: case 4: case 5:
            return "Weekday";
        case 6: case 7:
            return "Weekend";
        default:
            return "Invalid";
    }
};

// ============================================================================
// Problem 2: Switch with Multiple Cases
// Use fall-through and multiple case values
// ============================================================================

switch (month) {
    case 12: case 1: case 2:
        console.log("Winter");
        break;
    case 3: case 4: case 5:
        console.log("Spring");
        break;
    case 6: case 7: case 8:
        console.log("Summer");
        break;
    case 9: case 10: case 11:
        console.log("Fall");
        break;
    default:
        console.log("Invalid month");
}

const getDaysInMonth = (month) => {
    switch(month) {
        case 1: case 3: case 5: case 7: case 8: case 10: case 12:
            return 31;
        case 4: case 6: case 9: case 11:
            return 30;
        case 2:
            return 28;
        default:
            return 0;
    }
};

const getGradeRange = (grade) => {
    switch(grade.toUpperCase()) {
        case "A":
            return "90-100";
        case "B":
            return "80-89";
        case "C":
            return "70-79";
        case "D":
            return "60-69";
        case "F":
            return "0-59";
        default:
            return "Invalid grade";
    }
};

// ============================================================================
// Problem 3: Switch vs if-else
// Understand when to use switch vs if-else
// ============================================================================

let grade;
switch (true) {
    case score >= 90:
        grade = "A";
        break;
    case score >= 80:
        grade = "B";
        break;
    case score >= 70:
        grade = "C";
        break;
    default:
        grade = "F";
}

const compareValues = (type, a, b) => {
    switch(type) {
        case "equals":
            return a === b;
        case "greater":
            return a > b;
        case "less":
            return a < b;
        default:
            return false;
    }
};

// ============================================================================
// Problem 4: Advanced Switch Patterns
// Use switch in complex scenarios
// ============================================================================

const checkPermission = (userRole, action) => {
    switch(userRole) {
        case "admin":
            switch(action) {
                case "read": case "write": case "delete": case "manage":
                    return true;
                default:
                    return false;
            }
        case "editor":
            switch(action) {
                case "read": case "write":
                    return true;
                default:
                    return false;
            }
        case "viewer":
            return action === "read";
        default:
            return false;
    }
};

const calculator = (operator, a, b) => {
    switch(operator) {
        case "+":
            return a + b;
        case "-":
            return a - b;
        case "*":
            return a * b;
        case "/":
            return b !== 0 ? a / b : null;
        default:
            return null;
    }
};
