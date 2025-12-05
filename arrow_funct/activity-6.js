/*
 * ACTIVITY 6: Arrow Functions - Integration and Problem Solving
 * 
 * Problem 1: Building a Data Transformer
 * Create a flexible data transformation system using arrow functions
 */

const employees = [
    { id: 1, name: "John Doe", age: 30, salary: 50000, department: "IT" },
    { id: 2, name: "Jane Smith", age: 25, salary: 60000, department: "HR" },
    { id: 3, name: "Bob Johnson", age: 35, salary: 55000, department: "IT" },
    { id: 4, name: "Alice Brown", age: 28, salary: 65000, department: "Finance" }
];

// 1. Arrow functions
const filterByDept = dept => employees.filter(e => e.department === dept);
const avgSalary = dept => {
    const list = filterByDept(dept);
    return list.reduce((sum, e) => sum + e.salary, 0) / list.length;
};
const raiseByAge = age => employees.map(e => e.age > age ? {...e, salary: e.salary * 1.1} : e);
const formatNames = () => employees.map(e => {
    const [first, last] = e.name.split(" ");
    return `${last}, ${first}`;
});

// 2. analyzeDepartment
const analyzeDepartment = dept => {
    const list = filterByDept(dept);
    const employeeCount = list.length;
    const avg = employeeCount > 0 ? list.reduce((a,b)=>a+b.salary,0)/employeeCount : 0;
    const totalBudget = list.reduce((a,b)=>a+b.salary,0);
    return { dept, employeeCount, avgSalary: avg, totalBudget, employees: list };
};

// ============================================================================
// Problem 2: Arrow Functions for Data Validation
// Build a validation system using arrow functions
// ============================================================================

const isRequired = v => !!v;
const minLength = (s, len) => s.length >= len;
const isEmail = s => /\S+@\S+\.\S+/.test(s);
const isNumber = v => typeof v === "number";
const isPositive = n => n > 0;

const validateForm = (data, rules) => {
    const errors = {};
    let valid = true;

    for (const field in rules) {
        const validators = rules[field];
        validators.forEach(v => {
            const result = v(data[field]);
            if (!result) {
                valid = false;
                errors[field] = errors[field] || [];
                errors[field].push("Invalid " + field);
            }
        });
    }
    return { valid, errors };
};

// ============================================================================
// Problem 3: Arrow Functions in Sorting and Filtering
// Implement complex sorting and filtering using arrow functions
// ============================================================================

const products = [
    { name: "Laptop", price: 999, category: "Electronics", stock: 15 },
    { name: "Phone", price: 699, category: "Electronics", stock: 8 },
    { name: "Book", price: 15, category: "Education", stock: 50 },
    { name: "Chair", price: 150, category: "Furniture", stock: 20 }
];

// 1. Sorting and filtering arrow functions
const sortPriceAsc = arr => [...arr].sort((a,b) => a.price - b.price);
const sortPriceDesc = arr => [...arr].sort((a,b) => b.price - a.price);
const sortCategoryPrice = arr => [...arr].sort((a,b) =>
    a.category.localeCompare(b.category) || a.price - b.price
);
const filterByCategory = cat => products.filter(p => p.category === cat);
const filterLowStock = () => products.filter(p => p.stock < 10);

// 2. smartFilter
const smartFilter = (arr, criteria) =>
    arr.filter(p =>
        (!criteria.category || p.category === criteria.category) &&
        (!criteria.maxPrice || p.price <= criteria.maxPrice) &&
        (!criteria.minStock || p.stock >= criteria.minStock)
    );

// ============================================================================
// Problem 4: Building a Utility Library
// Create a collection of useful arrow function utilities
// ============================================================================

const utilities = {
    debounce: (func, delay) => {
        let timeout;
        return (...args) => {
            clearTimeout(timeout);
            timeout = setTimeout(() => func(...args), delay);
        };
    },

    throttle: (func, limit) => {
        let last = 0;
        return (...args) => {
            const now = Date.now();
            if (now - last >= limit) {
                last = now;
                func(...args);
            }
        };
    },

    memoize: func => {
        const cache = {};
        return (...args) => {
            const key = JSON.stringify(args);
            if (cache[key]) return cache[key];
            const result = func(...args);
            cache[key] = result;
            return result;
        };
    },

    pipe: (...fns) => input =>
        fns.reduce((val, fn) => fn(val), input),

    compose: (...fns) => input =>
        fns.reduceRight((val, fn) => fn(val), input)
};
