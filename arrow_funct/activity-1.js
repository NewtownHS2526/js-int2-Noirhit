

function greet(name) {
    return "Hello, " + name + "!";
}
const greet2 = (name)=> "Name " + name + " hi!";
console.log(greet2("Noirhit"));

// Your task:
// 1. Convert the above function to an arrow function (one-liner with implicit return)
// 2. Write it as a multi-line arrow function with explicit return
const greetMultiLine = (name) => {
    return "Hello, " + name + "!";
};
console.log(greetMultiLine("Noirhit"));

// 3. Write it without parentheses for the single parameter
const greetNo = name => "Hello, " + name + "!";
console.log(greetNo("Noirhit"));

// ============================================================================
// Problem 2: Arrow Function with Multiple Parameters
// Create an arrow function called 'calculateArea' that takes two parameters 
// (length and width) and returns the area of a rectangle.
// ============================================================================
const Area =(num,num2) => "area of rectangle " + num * num2;
console.log(Area(2,5))

function Area2 (num,num2){
    return num * num2;
}
console.log(Area2(2,3));

// Your task:
// 1. Write calculateArea as a one-liner with implicit return
const AreaOne = (length, width) => length * width;
console.log(AreaOne(5, 10));

// 2. Write calculateArea with explicit return statement
const AreaEx = (length, width) => {
    return length * width;
};
console.log(AreaEx(5, 10));

// 4. Explain when you would use each version
// One-liner: simple operations, clean & short
// Explicit return: when you need more steps or extra logic before returning

// ============================================================================
// Problem 3: Arrow Function in Array Methods
// Given the array [1, 2, 3, 4, 5], use arrow functions to:
// ============================================================================
const numbers = [1, 2, 3, 4, 5];


const squared = numbers.map(num => num * num);
console.log("Squared:", squared);

const filtered = numbers.filter(num => num <= 3);
console.log("Filtered:", filtered);

const sum = numbers.reduce((total, num) => total + num, 0);
console.log("Sum:", sum);

const chainedResult = numbers
    .map(num => num * num)
    .filter(num => num <= 10)
    .reduce((total, num) => total + num, 0);
console.log("Chained Result:", chainedResult);


// ============================================================================
// Problem 4: Understanding 'this' in Arrow Functions
// Study the following code and predict the output. Then explain why.
// ============================================================================
const person = {
    name: "Alice",
    traditional: function() {
        console.log(this.name);
    },
    arrow: () => {
        console.log(this.name);
    }
};

// Your task:
// 1. Run person.traditional() and person.arrow() - what happens?
person.traditional();   
person.arrow();       

// 2. Explain why they behave differently
// traditional(): has its own "this" → refers to person
// arrow(): does NOT have its own "this", it uses global this → undefined

// 3. How would you fix the arrow function to correctly access person.name?
// Solution A: Use a normal function instead of arrow
const personFixedA = {
    name: "Alice",
    arrow: function() {
        console.log(this.name);
    }
};

// Solution B: Still use arrow but wrap inside another function
const personFixedB = {
    name: "Alice",
    arrow: function() {
        const showName = () => console.log(this.name);
        showName();
    }
};

