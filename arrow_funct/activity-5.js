/*
 * ACTIVITY 5: Complex Arrow Function Patterns
 * 
 * Problem 1: Arrow Functions with Default Parameters
 * Create arrow functions with default parameter values
 */

// 1. Create an arrow function 'greet' with default name parameter ("Guest")
const greet = (name = "Guest") => `Hello, ${name}!`;

// 2. Create an arrow function 'calculatePrice' with default tax (0.1) and discount (0)
const calculatePrice = (price, tax = 0.1, discount = 0) => price + price * tax - discount;

// 3. Create an arrow function 'formatDate' with default format parameter ("YYYY-MM-DD")
const formatDate = (date, format = "YYYY-MM-DD") => {
    const d = new Date(date);
    const y = d.getFullYear();
    const m = String(d.getMonth() + 1).padStart(2, "0");
    const day = String(d.getDate()).padStart(2, "0");
    return format.replace("YYYY", y).replace("MM", m).replace("DD", day);
};

// 4. Test each function with and without parameters
greet();
greet("Alex");
calculatePrice(100);
calculatePrice(100, 0.2, 5);
formatDate("2025-05-15");
formatDate("2025-05-15", "MM/DD/YYYY");

// ============================================================================
// Problem 2: Arrow Functions with Rest Parameters
// Use arrow functions with rest parameters to handle variable arguments
// ============================================================================

// 1. Create an arrow function 'sumAll' that takes any number of arguments and returns their sum
const sumAll = (...nums) => nums.reduce((a, b) => a + b, 0);

// 2. Create an arrow function 'findMax' that finds the maximum value
const findMax = (...nums) => Math.max(...nums);

// 3. Create an arrow function 'combineStrings'
const combineStrings = (sep, ...strings) => strings.join(sep);

// 4. Challenge: createLogger
const createLogger = () => (...args) =>
    console.log(`[${new Date().toISOString()}]`, ...args);

// ============================================================================
// Problem 3: Currying with Arrow Functions
// Implement function currying using arrow functions
// ============================================================================

// 1. Curried add
const add = a => b => a + b;

// 2. Curried multiply
const multiply = a => b => c => a * b * c;

// 3. Generic curry function
const curry = fn => {
    const curried = (...args) =>
        args.length >= fn.length
            ? fn(...args)
            : (...next) => curried(...args, ...next);
    return curried;
};

// ============================================================================
// Problem 4: Arrow Functions with Closures
// Use arrow functions to create closures that maintain state
// ============================================================================

// 1. createCounter
const createCounter = () => {
    let value = 0;
    return {
        increment: () => value++,
        decrement: () => value--,
        getValue: () => value,
        reset: () => value = 0
    };
};

// 2. createBankAccount
const createBankAccount = () => {
    let balance = 0;
    return {
        deposit: amount => balance += amount,
        withdraw: amount => balance = Math.max(0, balance - amount),
        getBalance: () => balance
    };
};

// 3. createGameScore
const createGameScore = () => {
    const scores = {};
    return {
        addScore: (player, points) => scores[player] = (scores[player] || 0) + points,
        getScore: player => scores[player] || 0,
        getLeader: () => {
            let leader = null;
            let max = -Infinity;
            for (const p in scores) {
                if (scores[p] > max) {
                    max = scores[p];
                    leader = p;
                }
            }
            return leader;
        }
    };
};
