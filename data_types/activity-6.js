/*
 * ACTIVITY 6: Data Types - Integration Challenge
 */

// ============================================================================
// Problem 1: Type-Safe Data Processing
// ============================================================================

function categorizeData(arr) {
    const categories = {
        numbers: [],
        strings: [],
        booleans: [],
        arrays: [],
        objects: [],
        nulls: [],
        undefined: [],
        invalid: []
    };

    for (const item of arr) {
        if (item === null) {
            categories.nulls.push(item);
        } else if (item === undefined) {
            categories.undefined.push(item);
        } else if (Array.isArray(item)) {
            categories.arrays.push(item);
        } else if (typeof item === "number") {
            if (Number.isFinite(item)) {
                categories.numbers.push(item);
            } else {
                categories.invalid.push(item); // NaN, Infinity
            }
        } else if (typeof item === "string") {
            categories.strings.push(item);
        } else if (typeof item === "boolean") {
            categories.booleans.push(item);
        } else if (typeof item === "object") {
            categories.objects.push(item);
        } else {
            categories.invalid.push(item);
        }
    }

    return categories;
}

console.log(categorizeData(mixedData));

// ============================================================================
// Problem 2: Data Type Converter Utility
// ============================================================================

const TypeConverter = {
    toNumber(value) {
        const num = Number(value);
        return Number.isFinite(num) ? num : null;
    },
    toString(value) {
        return String(value);
    },
    toBoolean(value) {
        return Boolean(value);
    },
    toArray(value) {
        if (Array.isArray(value)) return value;
        if (value === null || value === undefined) return null;
        if (typeof value === "object") return Object.values(value);
        return [value];
    },
    toObject(value) {
        if (typeof value === "object" && value !== null) return value;
        return null;
    },
    smartConvert(value, targetType) {
        try {
            switch (targetType) {
                case "number": return {success: true, result: this.toNumber(value)};
                case "string": return {success: true, result: this.toString(value)};
                case "boolean": return {success: true, result: this.toBoolean(value)};
                case "array": return {success: true, result: this.toArray(value)};
                case "object": return {success: true, result: this.toObject(value)};
                default: return {success: false, error: "Unknown target type"};
            }
        } catch (e) {
            return {success: false, error: e.message};
        }
    }
};

console.log(TypeConverter.smartConvert("123", "number"));

// ============================================================================
// Problem 3: Data Validation System
// ============================================================================

function validateAndConvert(formData) {
    const errors = [];
    const data = {};

    // Name: string, min 2 chars
    if (typeof formData.name !== "string" || formData.name.trim().length < 2) {
        errors.push("Name must be at least 2 characters");
    } else data.name = formData.name.trim();

    // Age: number 0-150
    const age = Number(formData.age);
    if (!Number.isFinite(age) || age < 0 || age > 150) errors.push("Age must be 0-150");
    else data.age = age;

    // Email: basic check
    if (!/\S+@\S+\.\S+/.test(formData.email)) errors.push("Invalid email");
    else data.email = formData.email;

    // Score: number 0-100
    const score = Number(formData.score);
    if (!Number.isFinite(score) || score < 0 || score > 100) errors.push("Score must be 0-100");
    else data.score = score;

    // isActive: boolean
    if (formData.isActive === "true" || formData.isActive === true) data.isActive = true;
    else if (formData.isActive === "false" || formData.isActive === false) data.isActive = false;
    else errors.push("isActive must be boolean");

    return { valid: errors.length === 0, data, errors };
}

console.log(validateAndConvert(formData));

// ============================================================================
// Problem 4: Complete Data Type System
// ============================================================================

const DataProcessor = {
    cleanData(rawData) {
        const cleaned = [];
        for (const student of rawData) {
            const validated = validateAndConvert({
                name: student.name,
                age: student.age,
                score: Array.isArray(student.grades) ? (student.grades.reduce((a,b)=>a+b,0)/student.grades.length) : "invalid",
                isActive: student.active
            });
            if (validated.valid) {
                cleaned.push({
                    name: validated.data.name,
                    age: validated.data.age,
                    grades: Array.isArray(student.grades) ? student.grades : [],
                    active: validated.data.isActive
                });
            }
        }
        return cleaned;
    },

    analyzeData(cleanedData) {
        const stats = {
            averageAge: 0,
            averageGrades: {},
            activeCount: 0,
            gradeDistribution: {}
        };
        let ageSum = 0;
        for (const student of cleanedData) {
            ageSum += student.age;
            const avgGrade = student.grades.reduce((a,b)=>a+b,0)/student.grades.length || 0;
            stats.averageGrades[student.name] = avgGrade;

            for (const grade of student.grades) {
                stats.gradeDistribution[grade] = (stats.gradeDistribution[grade] || 0) + 1;
            }

            if (student.active) stats.activeCount++;
        }
        stats.averageAge = cleanedData.length ? ageSum/cleanedData.length : 0;
        return stats;
    },

    generateReport(analyzedData) {
        return `
Data Analysis Report
--------------------
Average Age: ${analyzedData.averageAge} (number)
Active Students: ${analyzedData.activeCount} (number)
Average Grades Per Student: ${JSON.stringify(analyzedData.averageGrades, null, 2)}
Grade Distribution: ${JSON.stringify(analyzedData.gradeDistribution, null, 2)}
        `;
    }
};

const cleanedStudents = DataProcessor.cleanData(studentData);
const analyzed = DataProcessor.analyzeData(cleanedStudents);
console.log(DataProcessor.generateReport(analyzed));
