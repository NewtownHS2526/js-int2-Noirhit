/*
 * ACTIVITY 4: Conditional Statements in Loops
 */

// Problem 1: Conditionals Inside Loops

// 1. Log only even numbers
for (let num of numbers) {
    if (num % 2 === 0) console.log(num);
}

// 2. Log numbers greater than 10
for (let num of numbers) {
    if (num > 10) console.log(num);
}

// 3. Sum of positive numbers
let sum = 0;
for (let num of numbers) {
    if (num > 0) sum += num;
}
console.log("Sum of positive numbers:", sum);

// 4. Challenge: filterAndTransform
const filterAndTransform = (arr) => {
    const result = [];
    for (let num of arr) {
        if (num > 10) result.push(num * 2);
    }
    return result;
};
console.log(filterAndTransform(numbers));

// ============================================================================
// Problem 2: Break and Continue
// ============================================================================

// 1. Stop loop when score < 70
for (let score of scores) {
    if (score < 70) break;
    console.log(score);
}

// 2. Skip scores < 80
for (let score of scores) {
    if (score < 80) continue;
    console.log(score);
}

// 3. Find first score >= 90 and log index
for (let i = 0; i < scores.length; i++) {
    if (scores[i] >= 90) {
        console.log("First score >= 90 at index:", i);
        break;
    }
}

// 4. Challenge: findFirstPassingScore
const findFirstPassingScore = (arr, passing) => {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= passing) return i;
    }
    return -1;
};
console.log(findFirstPassingScore(scores, 80));

// ============================================================================
// Problem 3: Nested Loops with Conditionals
// ============================================================================

// 1. Log even numbers in matrix
for (let row of matrix) {
    for (let num of row) {
        if (num % 2 === 0) console.log(num);
    }
}

// 2. Sum of all numbers
let matrixSum = 0;
for (let row of matrix) {
    for (let num of row) matrixSum += num;
}
console.log("Sum of matrix:", matrixSum);

// 3. Maximum value in matrix
let maxVal = -Infinity;
for (let row of matrix) {
    for (let num of row) {
        if (num > maxVal) maxVal = num;
    }
}
console.log("Max value in matrix:", maxVal);

// 4. Challenge: findInMatrix
const findInMatrix = (matrix, target) => {
    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[r].length; c++) {
            if (matrix[r][c] === target) return { row: r, col: c };
        }
    }
    return null;
};
console.log(findInMatrix(matrix, 5));

// ============================================================================
// Problem 4: Conditional Loop Control
// ============================================================================

// 1. Names of students who passed
for (let s of students) {
    if (s.grade >= 70) console.log(s.name);
}

// 2. Count perfect attendance
let perfectCount = 0;
for (let s of students) {
    if (s.attendance === 100) perfectCount++;
}
console.log("Perfect attendance count:", perfectCount);

// 3. First student with grade < 70
for (let s of students) {
    if (s.grade < 70) {
        console.log("First failing student:", s.name);
        break;
    }
}

// 4. Challenge: analyzeStudents
const analyzeStudents = (students) => {
    const passed = [];
    const failed = [];
    const excellent = [];

    for (let s of students) {
        if (s.grade >= 70) passed.push(s);
        else failed.push(s);
        if (s.grade >= 90 && s.attendance >= 95) excellent.push(s);
    }

    return { passed, failed, excellent };
};

console.log(analyzeStudents(students));
