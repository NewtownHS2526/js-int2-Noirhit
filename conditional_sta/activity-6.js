/*
 * ACTIVITY 6: Conditional Statements - Integration Challenge
 */

// ============================================================================
// Problem 1: Building a Decision Tree
// ============================================================================

function calculateFinalPrice(user) {
    const { age, isMember, purchaseAmount, hasCoupon } = user;
    const discounts = [];

    let highestDiscount = 0;

    // Determine highest single discount
    const ageDiscount = age >= 65 ? 0.10 : 0;
    const couponDiscount = hasCoupon ? 0.15 : 0;
    const largePurchaseDiscount = purchaseAmount > 200 ? 0.10 : 0;

    highestDiscount = Math.max(ageDiscount, couponDiscount, largePurchaseDiscount);

    // Member discount always stacks with highest
    const memberDiscount = isMember ? 0.05 : 0;

    let totalDiscount = highestDiscount + memberDiscount;

    const savings = purchaseAmount * totalDiscount;
    const final = Math.max(10, purchaseAmount - savings); // minimum price $10

    // Build discount breakdown
    if (highestDiscount > 0) discounts.push({ type: "Highest Discount", percent: highestDiscount * 100 });
    if (memberDiscount > 0) discounts.push({ type: "Member Discount", percent: memberDiscount * 100 });

    return {
        original: purchaseAmount,
        discounts,
        final: final.toFixed(2),
        savings: savings.toFixed(2)
    };
}

// Example:
console.log(calculateFinalPrice(user));

// ============================================================================
// Problem 2: State Machine
// ============================================================================

function changeState(currentState) {
    switch (currentState) {
        case "red": return "green";
        case "green": return "yellow";
        case "yellow": return "red";
        default: return "invalid state";
    }
}

function canGo(currentState) {
    return currentState === "green";
}

// Example:
console.log(changeState("red")); // green
console.log(canGo("green")); // true
console.log(canGo("red")); // false

// ============================================================================
// Problem 3: Conditional-Based Routing
// ============================================================================

function getPage(path) {
    // Remove query params
    const cleanPath = path.split("?")[0];
    return routes[cleanPath] || "404 - Not Found";
}

// Example:
console.log(getPage("/")); // Home
console.log(getPage("/products?category=electronics")); // Products
console.log(getPage("/unknown")); // 404 - Not Found

// ============================================================================
// Problem 4: Complete Conditional System
// ============================================================================

const LibrarySystem = {
    findAvailableBooks: (genre, minRating = 0) => {
        return library.books.filter(book => 
            book.available &&
            (!genre || book.genre === genre) &&
            book.rating >= minRating
        );
    },

    canBorrowBook: (memberId, bookTitle) => {
        const member = library.members.find(m => m.id === memberId);
        if (!member) return { canBorrow: false, reason: "Member not found" };

        const book = library.books.find(b => b.title === bookTitle);
        if (!book) return { canBorrow: false, reason: "Book not found" };
        if (!book.available) return { canBorrow: false, reason: "Book not available" };

        const limit = member.type === "student" ? 3 : 10;
        if (member.booksBorrowed >= limit) return { canBorrow: false, reason: "Borrowing limit reached" };

        return { canBorrow: true, reason: "Eligible to borrow" };
    },

    recommendBooks: (memberId) => {
        const member = library.members.find(m => m.id === memberId);
        if (!member) return [];

        // Find genres member borrowed most (simulate with booksBorrowed as all same)
        const preferredGenre = library.books.find(b => b.available)?.genre;

        return library.books
            .filter(b => b.available && b.genre === preferredGenre)
            .sort((a, b) => b.rating - a.rating)
            .slice(0, 3);
    },

    borrowBook: (memberId, bookTitle) => {
        const canBorrowResult = LibrarySystem.canBorrowBook(memberId, bookTitle);
        if (!canBorrowResult.canBorrow) return { success: false, message: canBorrowResult.reason };

        const member = library.members.find(m => m.id === memberId);
        const book = library.books.find(b => b.title === bookTitle);

        book.available = false;
        member.booksBorrowed += 1;

        return { success: true, message: `Book "${bookTitle}" borrowed successfully by ${member.name}` };
    }
};

// Example usage:
console.log(LibrarySystem.findAvailableBooks("Fiction", 4.5));
console.log(LibrarySystem.canBorrowBook(1, "Book A"));
console.log(LibrarySystem.recommendBooks(1));
console.log(LibrarySystem.borrowBook(1, "Book C"));
console.log(LibrarySystem.borrowBook(1, "Book C")); // Already borrowed
