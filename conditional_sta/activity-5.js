/*
 * ACTIVITY 5: Error Handling and Edge Cases
 */

// ============================================================================
// Problem 1: Guard Clauses
// ============================================================================

function processUser(user) {
    if (!user) return "Error: No user provided";
    if (!user.name) return "Error: Name is missing";
    if (user.age < 0) return "Error: Invalid age";

    return "Processed: " + user.name;
}

// Example usage:
console.log(processUser(null)); // Error: No user provided
console.log(processUser({}));   // Error: Name is missing
console.log(processUser({name: "Alice", age: -5})); // Error: Invalid age
console.log(processUser({name: "Alice", age: 25})); // Processed: Alice

// ============================================================================
// Problem 2: Null/Undefined Checks
// ============================================================================

const safeGet = (obj, path) => {
    return path.reduce((acc, key) => (acc && acc[key] !== undefined ? acc[key] : undefined), obj);
};

// Example usage:
console.log(safeGet(data, ["user", "name"])); // Alice
console.log(safeGet(data, ["user", "address", "city"])); // New York
console.log(safeGet(data, ["user", "phone", "number"])); // undefined

const getUserCity = (data) => {
    const city = safeGet(data, ["user", "address", "city"]);
    return city !== undefined ? city : "Unknown";
};

console.log(getUserCity(data)); // New York
console.log(getUserCity({})); // Unknown

// ============================================================================
// Problem 3: Input Validation
// ============================================================================

function calculateDiscount(price, discountPercent) {
    if (typeof price !== "number" || price <= 0) return {success: false, error: "Invalid price"};
    if (typeof discountPercent !== "number" || discountPercent < 0 || discountPercent > 100) 
        return {success: false, error: "Invalid discount percent"};

    const discounted = price * (1 - discountPercent / 100);
    return {success: true, result: discounted};
}

// Example usage:
console.log(calculateDiscount(100, 10)); // {success: true, result: 90}
console.log(calculateDiscount(-50, 10)); // {success: false, error: "Invalid price"}
console.log(calculateDiscount(100, 150)); // {success: false, error: "Invalid discount percent"}

// ============================================================================
// Problem 4: Complex Error Handling
// ============================================================================

function validateOrder(order) {
    const errors = [];

    if (!order) errors.push("Order is missing");
    if (!order.items || !Array.isArray(order.items) || order.items.length === 0) 
        errors.push("Order must have at least one item");
    if (typeof order.total !== "number" || order.total < 0) 
        errors.push("Order total is invalid");
    if (!order.customer || !order.customer.name || !order.customer.email) 
        errors.push("Customer information is incomplete");

    return { valid: errors.length === 0, errors };
}

function processOrder(order) {
    const validation = validateOrder(order);
    if (!validation.valid) return validation;

    // Process order logic here
    return { valid: true, message: "Order processed successfully" };
}

// Example usage:
console.log(processOrder(null)); 
// {valid: false, errors: ["Order is missing", "Order must have at least one item", ...]}

console.log(processOrder({
    items: [{id:1, name:"Book"}],
    total: 20,
    customer: {name:"Alice", email:"alice@example.com"}
})); 
// {valid: true, message: "Order processed successfully"}
