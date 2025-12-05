/*
 * ACTIVITY 4: Arrow Functions in Real-World Scenarios
 * 
 * Problem 1: Data Processing Pipeline
 * You're building a data processing system for an e-commerce site.
 */

const cart = [
    { name: "Book", price: 12.99, quantity: 2 },
    { name: "Pen", price: 1.50, quantity: 10 },
    { name: "Notebook", price: 5.99, quantity: 3 },
    { name: "Eraser", price: 0.99, quantity: 1 }
];

// 1. Create an arrow function to calculate total price (price * quantity) for each item
const calcTotal = item => ({ ...item, total: item.price * item.quantity });

// 2. Create an arrow function to apply a discount of 15% if quantity is 5 or more
const applyDiscount = item => item.quantity >= 5 ? { ...item, total: item.total * 0.85 } : item;

// 3. Create an arrow function to add tax of 8.5% to the final price
const addTax = item => ({ ...item, total: item.total * 1.085 });

// 4. Create an arrow function to filter out items with total less than $10
const filterSmall = item => item.total >= 10;

// 5. Challenge: Chain all operations together to get the final processed cart array. 
//    Then calculate the grand total of all items after all transformations
const processedCart = cart
    .map(calcTotal)
    .map(applyDiscount)
    .map(addTax)
    .filter(filterSmall);

const grandTotal = processedCart.reduce((sum, item) => sum + item.total, 0);

// ============================================================================
// Problem 2: Arrow Functions in Object Methods
// Create a 'ShoppingCart' object using arrow functions for methods
// ============================================================================

const ShoppingCart = {
    items: [],
    addItem: (name, price) => ShoppingCart.items.push({ name, price }),
    removeItem: name => ShoppingCart.items = ShoppingCart.items.filter(item => item.name !== name),
    getTotal: () => ShoppingCart.items.reduce((sum, item) => sum + item.price, 0),
    applyCoupon: percent => ShoppingCart.items = ShoppingCart.items.map(i => ({ ...i, price: i.price * (1 - percent/100) }))
};

const ShoppingCartFixed = {
    items: [],
    addItem(name, price) { this.items.push({ name, price }); },
    removeItem(name) { this.items = this.items.filter(item => item.name !== name); },
    getTotal() { return this.items.reduce((sum, item) => sum + item.price, 0); },
    applyCoupon(percent) { this.items = this.items.map(i => ({ ...i, price: i.price * (1 - percent/100) })); }
};

// ============================================================================
// Problem 3: Async Operations with Arrow Functions
// Convert Promise-based code to use arrow functions throughout
// ============================================================================

fetch('https://api.example.com/data')
    .then(res => res.json())
    .then(data => data.filter(item => item.status === 'active'))
    .then(activeItems => console.log(activeItems))
    .catch(error => console.error(error));

const fetchData = async () => {
    try {
        const res = await fetch("https://api.example.com/data");
        const data = await res.json();
        const active = data.filter(item => item.status === "active");
        console.log(active);
    } catch (error) {
        console.error(error);
    }
};

// ============================================================================
// Problem 4: Arrow Functions in Higher-Order Functions
// Create a 'createValidator' function that returns an arrow function
// ============================================================================

const createValidator = rule => value => rule(value);

const validatorFactory = (...rules) => value => rules.every(rule => rule(value));

const isValidEmail = createValidator(v => /.+@.+\..+/.test(v));
const isValidPassword = createValidator(v => /^(?=.*[0-9])(?=.*[a-zA-Z]).{8,}$/.test(v));
const isValidPhoneNumber = createValidator(v => /^\d{3}-\d{3}-\d{4}$/.test(v));
