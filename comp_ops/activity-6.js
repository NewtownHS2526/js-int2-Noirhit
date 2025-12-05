/*
 * ACTIVITY 6: Comparison Operators - Integration Challenge
 * 
 * Problem 1: Building a Validation System
 * Create a comprehensive validation system using comparisons
 */

// Your task:
// Create a 'Validator' class/object with methods using comparison operators:
const Validator = {
    isEmail: (email) =>
        typeof email === "string" &&
        email.includes("@") &&
        email.includes("."),

    isAge: (age) => typeof age === "number" && age >= 0 && age <= 150,

    isScore: (score) => typeof score === "number" && score >= 0 && score <= 100,

    isStringLength: (str, min, max) =>
        typeof str === "string" && str.length >= min && str.length <= max,

    isPositive: (num) => typeof num === "number" && num > 0,

    isInRange: (num, min, max) =>
        typeof num === "number" && num >= min && num <= max,
};

// Challenge: validateForm
const validateForm = (data, rules) => {
    const errors = {};
    let valid = true;

    for (const field in rules) {
        const checks = rules[field];
        const value = data[field];
        errors[field] = [];

        for (const rule of checks) {
            if (typeof rule === "string") {
                if (!Validator[rule](value)) {
                    errors[field].push(`${rule} failed`);
                }
            } else if (Array.isArray(rule)) {
                const [min, max] = rule;
                if (!Validator.isInRange(value, min, max)) {
                    errors[field].push(`isInRange failed (${min}-${max})`);
                }
            }
        }

        if (errors[field].length > 0) valid = false;
    }

    return { valid, errors };
};

// ============================================================================
// Problem 2: Building a Search/Filter System
// Create a flexible filtering system
// ============================================================================

// Your task:
const filterProducts = (products, filters) => {
    return products.filter((p) => {
        let match = true;

        if (filters.price) {
            const [min, max] = filters.price;
            match = match && p.price >= min && p.price <= max;
        }
        if (filters.rating) {
            match = match && p.rating >= filters.rating;
        }
        if (filters.inStock !== undefined) {
            match = match && (filters.inStock ? p.stock > 0 : p.stock === 0);
        }
        if (filters.category) {
            match = match && p.category === filters.category;
        }

        return match;
    });
};

// Challenge: advanced filter + sorting
const advancedFilterProducts = (products, filters) => {
    let results = filterProducts(products, filters);

    results = results.sort((a, b) => a.price - b.price);

    return results;
};

// ============================================================================
// Problem 3: Building a Priority Queue
// Use comparisons to prioritize items
// ============================================================================

class PriorityQueue {
    constructor() {
        this.queue = [];
    }

    addItem(item, priority) {
        const entry = { item, priority, time: Date.now() };
        this.queue.push(entry);

        // sort by priority desc, then by earliest timestamp
        this.queue.sort((a, b) => {
            if (a.priority === b.priority) return a.time - b.time;
            return b.priority - a.priority;
        });
    }

    getHighestPriority() {
        return this.queue.length > 0 ? this.queue[0].item : null;
    }

    removeHighest() {
        return this.queue.shift()?.item || null;
    }

    isEmpty() {
        return this.queue.length === 0;
    }

    size() {
        return this.queue.length;
    }

    peek() {
        return this.queue.length > 0 ? this.queue[0] : null;
    }
}

// ============================================================================
// Problem 4: Complete Comparison Challenge
// Build a comprehensive comparison-based application
// ============================================================================

const StudentAnalyzer = {
    calculateAverage: (grades) =>
        grades.reduce((a, b) => a + b, 0) / grades.length,

    isPassing: (student, passingGrade) =>
        StudentAnalyzer.calculateAverage(student.grades) >= passingGrade,

    hasGoodAttendance: (student, threshold) =>
        student.attendance >= threshold,

    compareStudents: (a, b) =>
        StudentAnalyzer.calculateAverage(b.grades) -
        StudentAnalyzer.calculateAverage(a.grades),

    getTopPerformers: (students, count) =>
        [...students]
            .sort(StudentAnalyzer.compareStudents)
            .slice(0, count),

    getStudentsByCriteria: (students, criteria) =>
        students.filter((s) => {
            let match = true;

            if (criteria.minAvg !== undefined) {
                match =
                    match &&
                    StudentAnalyzer.calculateAverage(s.grades) >=
                        criteria.minAvg;
            }
            if (criteria.minAttendance !== undefined) {
                match = match && s.attendance >= criteria.minAttendance;
            }
            if (criteria.maxAge !== undefined) {
                match = match && s.age <= criteria.maxAge;
            }

            return match;
        }),
};

// Challenge: generateReport
const generateReport = (students) => {
    const averages = students.map((s) =>
        StudentAnalyzer.calculateAverage(s.grades)
    );
    const classAvg =
        averages.reduce((a, b) => a + b, 0) / averages.length;

    const top3 = StudentAnalyzer.getTopPerformers(students, 3);

    const passing = students.filter(
        (s) =>
            StudentAnalyzer.calculateAverage(s.grades) >= 70 &&
            s.attendance >= 90
    );

    const atRisk = students.filter(
        (s) =>
            StudentAnalyzer.calculateAverage(s.grades) < 70 ||
            s.attendance < 90
    );

    const byAge = {};
    for (const s of students) {
        if (!byAge[s.age]) byAge[s.age] = [];
        byAge[s.age].push(s);
    }

    return {
        passingStudents: passing,
        atRiskStudents: atRisk,
        topPerformers: top3,
        classAverage: classAvg,
        groupedByAge: byAge,
    };
};
