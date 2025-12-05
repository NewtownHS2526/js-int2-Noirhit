/*
 * ACTIVITY 3: Advanced Arrow Function Patterns
 * 
 * Problem 1: Implicit vs Explicit Returns
 * For each scenario, determine whether to use implicit or explicit return
 */

// Your task:
// 1. A function that returns a single expression - write with implicit return
const addFive = num => num + 5;


const checkAge = age => {
    if (age >= 18) {
        return "Adult";
    }
    return "Minor";
};


const logAndReturn = value => {
    console.log("Logging:", value);
    return value * 2;
};


const createUserImplicit = (name, age) => ({ name, age });

const createUserExplicit = (name, age) => {
    return { name, age };
};

// Explanation:
// Implicit requires parentheses around the object.
// Without parentheses, JS thinks {} is a function block, not an object.

// ============================================================================
// Problem 2: Arrow Functions with Destructuring
// ============================================================================

const distanceFromOrigin = ({ x, y }) => Math.sqrt(x * x + y * y);
console.log(distanceFromOrigin({ x: 3, y: 4 })); // 5

const formatUser = ([firstName, lastName, age]) =>
    `First Name: ${firstName}, Last Name: ${lastName}, Age: ${age}`;
console.log(formatUser(["Noirhit", "Ghosh", 16]));

const extractUserInfo = ({ user: { name, email } }) =>
    `Name: ${name}, Email: ${email}`;
console.log(extractUserInfo({ user: { name: "Alex", email: "alex@test.com" }}));

const processData = (data) => {
    if (Array.isArray(data)) return formatUser(data);
    if (data.x !== undefined && data.y !== undefined) return distanceFromOrigin(data);
    if (data.user) return extractUserInfo(data);
    return "Unknown format";
};

console.log(processData({ x: 3, y: 4 }));
console.log(processData(["John", "Doe", 20]));
console.log(processData({ user: { name: "Maya", email: "maya@mail.com" }}));


// ============================================================================
// Problem 3: Arrow Functions and Event Handlers
// ============================================================================

const button = {
    text: "Click me",
    counter: 0,
    innerText: "Click me"
};

button.onClick = () => {
    button.counter++;
    console.log("Clicked:", button.counter);
};

button.onDoubleClick = () => {
    button.counter = 0;
    console.log("Counter reset to 0");
};

button.onMouseOver = () => {
    button.innerText = "Hovering!";
    console.log("Mouse over → text changed");
};


const createPersistentCounter = () => {
    let count = Number(localStorage.getItem("count")) || 0;

    return {
        increment: () => {
            count++;
            localStorage.setItem("count", count);
            return count;
        },
        reset: () => {
            count = 0;
            localStorage.setItem("count", 0);
            return count;
        },
        get: () => count
    };
};

const persistentCounter = createPersistentCounter();
// Usage example:
// persistentCounter.increment();
// persistentCounter.reset();
// console.log(persistentCounter.get());


// ============================================================================
// Problem 4: Functional Composition with Arrow Functions
// ============================================================================

const increment = x => x + 1;

const double = x => x * 2;

const square = x => x * x;

const pipe = (...fns) => value =>
    fns.reduce((acc, fn) => fn(acc), value);

const compose = (...fns) => value =>
    fns.reduceRight((acc, fn) => fn(acc), value);

const resultPipe = pipe(increment, double, square)(5);

const resultCompose = compose(increment, double, square)(5);

console.log("Pipe result:", resultPipe);       
console.log("Compose result:", resultCompose); 
