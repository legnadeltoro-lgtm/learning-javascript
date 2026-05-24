/**
 * ========================================
 * OPERATORS IN JAVASCRIPT
 * ========================================
 *
 * What are operators?
 * Operators are symbols that perform operations on variables and values.
 * They are used to manipulate data, compare values, and create complex expressions.
 * JavaScript has several types of operators: arithmetic, assignment, comparison,
 * logical, ternary, typeof, and spread operators.
 */

console.log("\n=== PART 1: ARITHMETIC OPERATORS ===\n");

// Arithmetic operators perform mathematical calculations
const num1 = 10;
const num2 = 3;

console.log("Addition (+): 10 + 3 =", num1 + num2); // 13
console.log("Subtraction (-): 10 - 3 =", num1 - num2); // 7
console.log("Multiplication (*): 10 * 3 =", num1 * num2); // 30
console.log("Division (/): 10 / 3 =", num1 / num2); // 3.3333...
console.log("Modulus (%): 10 % 3 =", num1 % num2); // 1 (remainder)
console.log("Exponentiation (**): 2 ** 3 =", 2 ** 3); // 8 (2 to the power of 3)

// Increment and Decrement
let counter = 5;
console.log("Initial counter: ", counter); // 5
console.log("counter++: ", counter++); // 5 (returns old value)
console.log("After counter++, counter is: ", counter); // 6
console.log("++counter: ", ++counter); // 7 (returns new value)
console.log("counter--: ", counter--); // 7 (returns old value)
console.log("After counter--, counter is: ", counter); // 6

console.log("\n=== PART 2: ASSIGNMENT OPERATORS ===\n");

// Assignment operators assign values to variables
let x = 5;
console.log("x = 5:", x);

x += 3; // x = x + 3
console.log("After x += 3:", x); // 8

x -= 2; // x = x - 2
console.log("After x -= 2:", x); // 6

x *= 2; // x = x * 2
console.log("After x *= 2:", x); // 12

x /= 4; // x = x / 4
console.log("After x /= 4:", x); // 3

x %= 2; // x = x % 2
console.log("After x %= 2:", x); // 1

console.log("\n=== PART 3: COMPARISON OPERATORS ===\n");

// Comparison operators compare two values and return true or false
const a = 5;
const b = "5";
const c = 10;

console.log('Equality (==): 5 == "5" is', a == b); // true (loose - type coercion)
console.log('Strict Equality (===): 5 === "5" is', a === b); // false (strict - no coercion)
console.log('Not Equal (!=): 5 != "5" is', a != b); // false (loose)
console.log('Strict Not Equal (!==): 5 !== "5" is', a !== b); // true (strict)

console.log("Greater Than (>): 5 > 10 is", a > c); // false
console.log("Less Than (<): 5 < 10 is", a < c); // true
console.log("Greater or Equal (>=): 5 >= 5 is", a >= a); // true
console.log("Less or Equal (<=): 5 <= 10 is", a <= c); // true

console.log("\n=== PART 4: LOGICAL OPERATORS ===\n");

// Logical operators combine multiple conditions
const isRaining = true;
const isWindy = false;
const temperature = 15;

console.log("AND (&&): Both conditions must be true");
console.log("isRaining && isWindy:", isRaining && isWindy); // false
console.log("isRaining && true:", isRaining && true); // true

console.log("\nOR (||): At least one condition must be true");
console.log("isRaining || isWindy:", isRaining || isWindy); // true
console.log("isWindy || false:", isWindy || false); // false

console.log("\nNOT (!): Reverses boolean value");
console.log("!isRaining:", !isRaining); // false
console.log("!isWindy:", !isWindy); // true

// De Morgan's Law demonstration
console.log("\nDe Morgan's Law:");
console.log(
  "!(a && b) equals !a || !b:",
  !(true && false) === (!true || !false)
); // true
console.log(
  "!(a || b) equals !a && !b:",
  !(true || false) === (!true && !false)
); // true

console.log("\n=== PART 5: TERNARY OPERATOR ===\n");

// Ternary operator is a shorthand for if-else
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote (age 18):", canVote); // Yes

const score = 75;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log("Grade for score 75:", grade); // C (nested ternary)

// Ternary with function calls
const getStatus = (isOnline) =>
  isOnline ? "User is online" : "User is offline";
console.log(getStatus(true)); // User is online
console.log(getStatus(false)); // User is offline

console.log("\n=== PART 6: TYPEOF OPERATOR ===\n");

// typeof returns the data type of a value
console.log("typeof 42:", typeof 42); // number
console.log('typeof "hello":', typeof "hello"); // string
console.log("typeof true:", typeof true); // boolean
console.log("typeof undefined:", typeof undefined); // undefined
console.log("typeof {}:", typeof {}); // object
console.log("typeof []:", typeof []); // object (arrays are objects)
console.log("typeof function(){}:", typeof function () {}); // function
console.log('typeof Symbol("id"):', typeof Symbol("id")); // symbol

let uninitialized;
console.log("typeof uninitialized:", typeof uninitialized); // undefined

console.log("\n=== PART 7: SPREAD OPERATOR ===\n");

// Spread operator (...) expands arrays or objects
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

console.log("Spreading arrays: [...arr1, ...arr2]:", [...arr1, ...arr2]); // [1, 2, 3, 4, 5, 6]

const combined = [0, ...arr1, 3.5, ...arr2, 7];
console.log("Combined with values in between:", combined); // [0, 1, 2, 3, 3.5, 4, 5, 6, 7]

// Copying arrays
const original = [1, 2, 3];
const copy = [...original];
copy[0] = 99;
console.log("Original array:", original); // [1, 2, 3] - not affected
console.log("Modified copy:", copy); // [99, 2, 3]

// Spread with objects
const obj1 = { name: "John", age: 30 };
const obj2 = { age: 25, city: "NYC" };
const mergedObj = { ...obj1, ...obj2 };
console.log("Merged objects:", mergedObj); // { name: 'John', age: 25, city: 'NYC' }

// Rest parameters in functions
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log("sum(1, 2, 3, 4, 5):", sum(1, 2, 3, 4, 5)); // 15

console.log("\n=== COMMON MISTAKES ===\n");

// MISTAKE 1: Confusing = (assignment) with == or ===
console.log("MISTAKE: Using = instead of ==");
let value = 5;
if ((value = 10)) {
  // This assigns 10 to value, doesn't compare!
  console.log(
    "  WRONG - This always runs because assignment returns 10 (truthy)"
  );
}
console.log("  value is now:", value); // 10

console.log("\nCORRECT: Using == or ===");
let value2 = 5;
if (value2 === 10) {
  // This properly compares
  console.log("  This will not run");
} else {
  console.log("  CORRECT - value2 is still:", value2); // 5
}

// MISTAKE 2: Loose equality (==) causes unexpected type coercion
console.log("\nMISTAKE: Using == with different types");
console.log("  0 == false:", 0 == false); // true (type coercion!)
console.log('  "" == false:', "" == false); // true (type coercion!)
console.log("  null == undefined:", null == undefined); // true (special case)

console.log("\nCORRECT: Using === (strict equality)");
console.log("  0 === false:", 0 === false); // false (no type coercion)
console.log('  "" === false:', "" === false); // false
console.log("  null === undefined:", null === undefined); // false

// MISTAKE 3: Operator precedence confusion
console.log("\nMISTAKE: Operator precedence");
console.log("  5 + 2 * 3 (multiplies first):", 5 + 2 * 3); // 11, not 21

console.log("\nCORRECT: Using parentheses for clarity");
console.log("  (5 + 2) * 3:", (5 + 2) * 3); // 21

// MISTAKE 4: Misunderstanding increment/decrement timing
console.log("\nMISTAKE: Pre vs Post increment");
let n1 = 5;
let n2 = 5;
console.log("  Result of n1++:", n1++); // Returns 5, then increments
console.log("  n1 is now:", n1); // 6
console.log("  Result of ++n2:", ++n2); // Increments first, returns 6
console.log("  n2 is now:", n2); // 6

console.log("\n=== JAVASCRIPT QUIRKS ===\n");

// QUIRK 1: The infamous floating-point precision issue
console.log("QUIRK 1: Floating-point precision");
console.log("0.1 + 0.2 =", 0.1 + 0.2); // 0.30000000000000004
console.log("0.1 + 0.2 === 0.3:", 0.1 + 0.2 === 0.3); // false!
console.log("Solution: Use toFixed() or small epsilon:");
const epsilon = 0.0001;
console.log(
  "Math.abs((0.1 + 0.2) - 0.3) < epsilon:",
  Math.abs(0.1 + 0.2 - 0.3) < epsilon
);

// QUIRK 2: Type coercion with the + operator
console.log("\nQUIRK 2: Type coercion with +");
console.log('"5" + 3 =', "5" + 3); // "53" (string concatenation)
console.log('5 + "3" =', 5 + "3"); // "53" (string concatenation)
console.log("5 + 3 =", 5 + 3); // 8 (numeric addition)
console.log('"5" + 3 + 2 =', "5" + 3 + 2); // "532" (left-to-right evaluation)
console.log('5 + 3 + "2" =', 5 + 3 + "2"); // "82" (left-to-right evaluation)

// QUIRK 3: Array addition creates empty string
console.log("\nQUIRK 3: Array and object concatenation");
console.log("[] + [] =", [] + []); // "" (empty string)
console.log("[] + {} =", [] + {}); // "[object Object]"
console.log("{} + [] =", {} + []); // 0 (context dependent!)

// QUIRK 4: NaN (Not a Number) is a number
console.log("\nQUIRK 4: NaN quirks");
console.log("typeof NaN:", typeof NaN); // "number" (confusing!)
console.log("NaN === NaN:", NaN === NaN); // false (NaN is never equal to anything)
console.log("isNaN(NaN):", isNaN(NaN)); // true (correct way to check)

// QUIRK 5: Unary plus forces number conversion
console.log("\nQUIRK 5: Unary plus operator");
console.log("+true =", +true); // 1
console.log("+false =", +false); // 0
console.log("+null =", +null); // 0
console.log('+"123" =', +"123"); // 123 (converts string to number)
console.log('+"hello" =', +"hello"); // NaN (cannot convert)

console.log("\n=== PRACTICE EXERCISES ===\n");

console.log("--- EXERCISE 1: Arithmetic Operations ---");
console.log(
  "Problem: Write a function that calculates the area of a circle given radius."
);
console.log("Bonus: Handle the radius being negative or zero.\n");

function calculateCircleArea(radius) {
  if (radius <= 0) {
    return "Error: Radius must be positive";
  }
  const area = Math.PI * radius ** 2;
  return area;
}

console.log("Solution:");
console.log("calculateCircleArea(5) =", calculateCircleArea(5).toFixed(2)); // 78.54
console.log("calculateCircleArea(0) =", calculateCircleArea(0)); // Error message
console.log("calculateCircleArea(-3) =", calculateCircleArea(-3)); // Error message

console.log("\nExplanation:");
console.log("- We use the ** operator for exponentiation (radius squared)");
console.log("- We multiply by Math.PI for the circle area formula (π * r²)");
console.log("- We validate input first using comparison operators (<=)");
console.log("- We use toFixed(2) to show 2 decimal places\n");

console.log("--- EXERCISE 2: Logical Operations ---");
console.log("Problem: Check if a student is eligible for a scholarship.");
console.log(
  "Criteria: GPA >= 3.5 AND attendance >= 90% OR special achievement"
);
console.log("         AND not already receiving full scholarship\n");

function isEligibleForScholarship(
  gpa,
  attendance,
  hasSpecialAchievement,
  hasFullScholarship
) {
  const meetsAcademicRequirement = gpa >= 3.5 && attendance >= 90;
  const hasSpecialStatus = hasSpecialAchievement;
  const isAvailable = !hasFullScholarship;

  return (meetsAcademicRequirement || hasSpecialStatus) && isAvailable;
}

console.log("Solution:");
console.log(
  "Scenario 1 - High GPA, good attendance, no scholarship:",
  isEligibleForScholarship(3.6, 92, false, false)
); // true

console.log(
  "Scenario 2 - Special achievement, but already has full scholarship:",
  isEligibleForScholarship(3.0, 85, true, true)
); // false

console.log(
  "Scenario 3 - Low GPA but special achievement and available:",
  isEligibleForScholarship(2.8, 88, true, false)
); // true

console.log("\nExplanation:");
console.log("- We break complex logic into readable variables");
console.log("- We use && for AND operations (both conditions must be true)");
console.log("- We use || for OR operations (at least one must be true)");
console.log("- We use ! to negate the full scholarship check");
console.log(
  "- Order: (A AND B) OR C AND D is evaluated as: ((A AND B) OR C) AND D\n"
);

console.log("--- EXERCISE 3: Comparison and Conditional ---");
console.log("Problem: Create a grade calculator that returns letter grade.");
console.log("90-100: A, 80-89: B, 70-79: C, 60-69: D, Below 60: F\n");

function getLetterGrade(score) {
  // Input validation
  if (typeof score !== "number" || score < 0 || score > 100) {
    return "Invalid score";
  }

  // Using nested ternary operator
  return score >= 90
    ? "A"
    : score >= 80
      ? "B"
      : score >= 70
        ? "C"
        : score >= 60
          ? "D"
          : "F";
}

console.log("Solution:");
console.log("getLetterGrade(95) =", getLetterGrade(95)); // A
console.log("getLetterGrade(87) =", getLetterGrade(87)); // B
console.log("getLetterGrade(72) =", getLetterGrade(72)); // C
console.log("getLetterGrade(150) =", getLetterGrade(150)); // Invalid score

console.log("\nExplanation:");
console.log("- We validate input using typeof and comparison operators");
console.log("- We use nested ternary operators for concise if-else logic");
console.log(
  "- Evaluation is left-to-right: once one condition is true, returns that value"
);
console.log(
  "- This is more readable than multiple if-else statements for simple cases"
);
