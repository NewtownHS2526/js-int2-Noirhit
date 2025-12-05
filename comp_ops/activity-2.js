/*
 * ACTIVITY 2: Logical Operators in Comparisons
 * 
 * Problem 1: Combining Comparisons with &&, ||, !
 */

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// 1. Check if a person can drive
console.log(age >= 18 && hasLicense);

// 2. Check if a person needs insurance
console.log(hasLicense && !hasInsurance);

// 3. Check if a person can rent a car
console.log(age >= 21 && hasLicense && hasInsurance);

// 4. canDrive function
const canDrive = (age, hasLicense, hasInsurance) => {
    return {
        canDrive: age >= 18 && hasLicense,
        needsInsurance: hasLicense && !hasInsurance,
        canRent: age >= 21 && hasLicense && hasInsurance
    };
};

// ============================================================================
// Problem 2: Complex Logical Expressions
// Build complex comparison logic
// ============================================================================

const temperature = 75;
const isSunny = true;
const isWeekend = false;

// 1. Good day for picnic
console.log(temperature >= 70 && temperature <= 85 && isSunny && isWeekend);

// 2. Good for indoor activities
console.log(temperature < 60 || temperature > 90 || !isSunny);

// 3. recommendActivity
const recommendActivity = (temp, sun, weekend) => {
    if (temp >= 70 && temp <= 85 && sun && weekend) return "Picnic";
    if (temp < 60 || temp > 90 || !sun) return "Indoor Activities";
    return "Regular Day";
};

// ============================================================================
// Problem 3: Comparison Operator Precedence
// Understand operator precedence in complex expressions
// ============================================================================

const x = 5;
const y = 10;
const z = 15;

// 1. x < y && y < z
console.log(x < y && y < z);

// 2. x < y || y > z
console.log(x < y || y > z);

// 3. !(x > y) && z > x
console.log(!(x > y) && z > x);

// 4. x === 5 && y !== 10 || z > 20
console.log(x === 5 && y !== 10 || z > 20);

// 5. Parentheses version
console.log((x === 5 && y !== 10) || (z > 20));

// 6. Precedence matters because && is evaluated before ||.

// ============================================================================
// Problem 4: Real-World Comparison Scenarios
// Apply comparisons to practical problems
// ============================================================================

const product = {
    price: 50,
    stock: 5,
    rating: 4.5,
    onSale: false
};

// 1. Affordable
console.log(product.price < 100);

// 2. In stock
console.log(product.stock > 0);

// 3. Highly rated
console.log(product.rating >= 4.0);

// 4. Good deal
console.log((product.onSale === true || product.price < 75) && product.rating >= 4.0);

// 5. evaluateProduct
const evaluateProduct = product => {
    if (product.stock <= 0) return "Skip";
    if ((product.onSale || product.price < 75) && product.rating >= 4) return "Buy";
    if (product.rating >= 3) return "Consider";
    return "Skip";
};
