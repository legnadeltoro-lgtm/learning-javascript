/**
 * ========================================
 * LOOPS IN JAVASCRIPT
 * ========================================
 *
 * What are loops?
 * Loops are used to repeat a block of code multiple times.
 * JavaScript provides several types of loops: for, while, do...while,
 * for...of, for...in, and forEach method.
 * Each loop type has different use cases.
 */

console.log("\n=== PART 1: TRADITIONAL FOR LOOP ===\n");

// Basic for loop syntax: for (initialization; condition; increment)
console.log("Basic for loop - count 0 to 4:");
for (let i = 0; i < 5; i++) {
  console.log(`  i = ${i}`);
}

// Counting down
console.log("\nCounting down from 5 to 1:");
for (let i = 5; i > 0; i--) {
  console.log(`  i = ${i}`);
}

// Looping through array
const fruits = ["apple", "banana", "orange"];
console.log("\nIterating through array with for loop:");
for (let i = 0; i < fruits.length; i++) {
  console.log(`  Index ${i}: ${fruits[i]}`);
}

// Multiple variables in for loop
console.log("\nMultiple loop variables:");
for (let i = 0, j = 10; i < 5; i++, j--) {
  console.log(`  i=${i}, j=${j}`);
}

// Empty loop (count with while pattern)
let count = 0;
for (; count < 3; ) {
  console.log(`Count: ${count}`);
  count++;
}

// Infinite for loop (use with break)
console.log("\nInfinite for loop with break:");
for (let i = 0; ; i++) {
  if (i >= 3) break;
  console.log(`  i = ${i}`);
}

console.log("\n=== PART 2: WHILE AND DO...WHILE LOOPS ===\n");

// While loop - checks condition before executing
console.log("While loop:");
let i = 0;
while (i < 3) {
  console.log(`  i = ${i}`);
  i++;
}

// While loop that might not execute
console.log("\nWhile loop with false condition (never executes):");
let j = 10;
while (j < 5) {
  console.log("This never prints");
}
console.log("Loop skipped because condition is false");

// Do...while loop - executes at least once
console.log("\nDo...while loop (executes at least once):");
let k = 0;
do {
  console.log(`  k = ${k}`);
  k++;
} while (k < 3);

// Do...while with false condition (still executes once)
console.log("\nDo...while with false condition:");
let m = 10;
do {
  console.log("This prints once even though m > 5");
} while (m < 5);

// While loop processing input
console.log("\nWhile loop example - process array:");
const numbers = [1, 2, 3, 4, 5];
let index = 0;
const result = [];
while (index < numbers.length) {
  result.push(numbers[index] * 2);
  index++;
}
console.log("Doubled numbers:", result); // [2, 4, 6, 8, 10]

console.log("\n=== PART 3: FOR...OF LOOP ===\n");

// for...of iterates over values (not indices)
console.log("for...of with array:");
const colors = ["red", "green", "blue"];
for (const color of colors) {
  console.log(`  Color: ${color}`);
}

// for...of with string
console.log("\nfor...of with string:");
for (const char of "hello") {
  console.log(`  Char: ${char}`);
}

// for...of with Set
const uniqueNumbers = new Set([1, 2, 3, 1, 2]);
console.log("\nfor...of with Set:");
for (const num of uniqueNumbers) {
  console.log(`  Number: ${num}`);
}

// for...of with Map (gets key-value pairs)
const user = new Map([
  ["name", "Alice"],
  ["age", 25],
]);
console.log("\nfor...of with Map entries:");
for (const [key, value] of user) {
  console.log(`  ${key}: ${value}`);
}

// for...of with destructuring array items
const pairs = [
  [1, "one"],
  [2, "two"],
  [3, "three"],
];
console.log("\nfor...of with destructuring:");
for (const [num, word] of pairs) {
  console.log(`  ${num} = ${word}`);
}

// for...of with entries() for arrays with index
console.log("\nfor...of with entries() to get index and value:");
for (const [index, value] of colors.entries()) {
  console.log(`  Index ${index}: ${value}`);
}

console.log("\n=== PART 4: FOR...IN LOOP ===\n");

// for...in iterates over enumerable properties (keys)
const person = { name: "John", age: 30, city: "NYC" };
console.log("for...in with object:");
for (const key in person) {
  console.log(`  ${key}: ${person[key]}`);
}

// for...in with array (gets indices as strings!)
const arr = ["a", "b", "c"];
console.log("\nfor...in with array (returns indices):");
for (const index in arr) {
  console.log(`  Index: ${index}, Value: ${arr[index]}, Type: ${typeof index}`);
}

// Adding custom property to array
const animals = ["dog", "cat", "bird"];
animals.owner = "Zoo";
console.log("\nfor...in includes custom properties:");
for (const key in animals) {
  console.log(`  ${key}: ${animals[key]}`);
}

// Comparing for...in vs for...of
console.log("\nComparison: for...in vs for...of");
const items = ["apple", "banana", "cherry"];
console.log("for...in:");
for (const item in items) {
  console.log(`  ${item}`); // Prints: 0, 1, 2 (indices as strings)
}
console.log("for...of:");
for (const item of items) {
  console.log(`  ${item}`); // Prints: apple, banana, cherry (values)
}

console.log("\n=== PART 5: FOREACH METHOD ===\n");

// forEach executes function for each element
const numbers2 = [10, 20, 30];
console.log("forEach with array:");
numbers2.forEach((value, index, array) => {
  console.log(`  Index ${index}: ${value}`);
});

// forEach with object array
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
console.log("\nforEach with object array:");
users.forEach((user) => {
  console.log(`  User ${user.id}: ${user.name}`);
});

// forEach with Map
const settings = new Map([
  ["theme", "dark"],
  ["lang", "en"],
]);
console.log("\nforEach with Map:");
settings.forEach((value, key) => {
  console.log(`  ${key}: ${value}`);
});

// forEach with Set
const tags = new Set(["javascript", "learning", "tutorial"]);
console.log("\nforEach with Set:");
tags.forEach((tag) => {
  console.log(`  Tag: ${tag}`);
});

// forEach with this context
const context = {
  name: "Counter",
  count: 0,
  increment: function (arr) {
    arr.forEach(function () {
      this.count++;
    });
  },
};
context.increment([1, 2, 3]);
console.log("\nforEach with this context:", context.count); // 3

console.log("\n=== PART 6: BREAK AND CONTINUE ===\n");

// break - exits loop immediately
console.log("break statement:");
for (let i = 0; i < 10; i++) {
  if (i === 3) break;
  console.log(`  i = ${i}`);
}

// continue - skips to next iteration
console.log("\ncontinue statement:");
for (let i = 0; i < 5; i++) {
  if (i === 2) continue;
  console.log(`  i = ${i}`);
}

// break with nested loops
console.log("\nbreak in nested loop:");
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (j === 1) break; // breaks inner loop only
    console.log(`  i=${i}, j=${j}`);
  }
}

// Labeled break (breaks outer loop)
console.log("\nLabeled break (advanced):");
outerLoop: for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    if (i === 1 && j === 1) break outerLoop;
    console.log(`  i=${i}, j=${j}`);
  }
}

console.log("\n=== PART 7: WHEN TO USE EACH LOOP ===\n");

console.log("Loop type recommendations:");
console.log("for:         When you need index control and precise iteration");
console.log(
  "while:       When condition is complex or iteration count unknown"
);
console.log("do...while:  When loop must execute at least once");
console.log(
  "for...of:    When iterating array/string values (modern, preferred)"
);
console.log("for...in:    When iterating object properties");
console.log("forEach:     When you don't need break/continue, cleaner syntax");

console.log("\n=== COMMON MISTAKES ===\n");

// MISTAKE 1: Infinite loop
console.log("MISTAKE: Infinite loop (commented out to prevent hang)");
console.log("// let i = 0;");
console.log("// while (i < 10) {  // Missing i++ in loop body!");
console.log("//   console.log(i);");
console.log("// }");

// MISTAKE 2: Using for...in on arrays
console.log("\n\nMISTAKE: Using for...in on arrays");
const arr2 = ["a", "b", "c"];
arr2.customProp = "extra";
console.log("Array with custom property:", arr2);
console.log("Using for...in:");
for (const key in arr2) {
  console.log(`  ${key}: ${arr2[key]}`); // Also prints 'customProp'
}

console.log("\nCORRECT: Use for...of for arrays");
for (const value of arr2) {
  console.log(`  ${value}`); // Only prints values
}

// MISTAKE 3: Off-by-one error
console.log("\n\nMISTAKE: Off-by-one error");
const list = ["a", "b", "c"];
console.log("Array:", list);
console.log("Loop with i <= list.length (WRONG):");
for (let i = 0; i <= list.length; i++) {
  console.log(`  i=${i}, list[i]=${list[i]}`); // Last is undefined
}

console.log("\nCORRECT: Use i < list.length");
for (let i = 0; i < list.length; i++) {
  console.log(`  i=${i}, list[i]=${list[i]}`);
}

// MISTAKE 4: Modifying array while looping
console.log("\n\nMISTAKE: Modifying array during for...of loop");
const arr3 = [1, 2, 3, 4, 5];
console.log("Original:", arr3);
let count2 = 0;
for (const value of arr3) {
  if (value === 3) {
    arr3.splice(arr3.indexOf(3), 1); // Removing element
    count2++;
  }
  count2++;
}
console.log("Modified array:", arr3);
console.log("Loop count:", count2); // Unexpected count

console.log("\nCORRECT: Use filter() instead");
const arr4 = [1, 2, 3, 4, 5];
const filtered = arr4.filter((v) => v !== 3);
console.log("Filtered array:", filtered);

// MISTAKE 5: forEach cannot be broken
console.log("\n\nMISTAKE: Trying to break from forEach");
console.log("forEach does NOT support break:");
console.log("[1, 2, 3, 4, 5].forEach(x => {");
console.log("  if (x === 3) break;  // SyntaxError!");
console.log("})");

console.log("\nCORRECT: Use for loop if you need break");
for (const x of [1, 2, 3, 4, 5]) {
  if (x === 3) break; // Works!
  console.log(`  x = ${x}`);
}

console.log("\n=== JAVASCRIPT QUIRKS ===\n");

// QUIRK 1: for...in iterates over inherited properties
console.log("QUIRK 1: for...in includes inherited properties");
const parent = { a: 1 };
const child = Object.create(parent);
child.b = 2;
console.log("child object:", child);
console.log("for...in on child (includes inherited property a):");
for (const key in child) {
  console.log(`  ${key}`); // Prints: b, a
}

console.log("\nUsing hasOwnProperty to filter:");
for (const key in child) {
  if (child.hasOwnProperty(key)) {
    console.log(`  ${key}`); // Only prints: b
  }
}

// QUIRK 2: for...of not working on plain objects
console.log("\n\nQUIRK 2: for...of doesn't work on plain objects");
const obj = { x: 10, y: 20 };
console.log("Trying for...of on object: (error)");
// for (const value of obj) {  // TypeError: obj is not iterable
//   console.log(value);
// }

console.log("\nCORRECT: Use Object.values() with for...of");
for (const value of Object.values(obj)) {
  console.log(`  ${value}`);
}

// QUIRK 3: Async/await doesn't work inside forEach
console.log("\n\nQUIRK 3: forEach doesn't wait for async functions");
const simulateAsync = (val) =>
  new Promise((r) => setTimeout(() => r(val), 100));

console.log("Using forEach (doesn't wait):");
console.log("forEach will complete immediately, then promises resolve later");

console.log("\nUsing for...of with async (waits):");
console.log("for...of awaits each iteration before moving to next");

// QUIRK 4: Loop variable scope
console.log("\n\nQUIRK 4: Loop variable scope differences");
console.log("var in for loop (function-scoped):");
for (var a = 0; a < 3; a++) {}
console.log("a after loop:", a); // 3 (escapes loop!)

console.log("\nlet in for loop (block-scoped):");
for (let b = 0; b < 3; b++) {}
// console.log('b after loop:', b);  // ReferenceError: b not defined

console.log("let is safer - use let by default");

// QUIRK 5: Closure in loops
console.log("\n\nQUIRK 5: Closure behavior in loops");
const functions = [];
for (var i = 0; i < 3; i++) {
  functions.push(() => i);
}
console.log("Created 3 functions with var:");
console.log("functions[0]():", functions[0]()); // 3
console.log("functions[1]():", functions[1]()); // 3
console.log("functions[2]():", functions[2]()); // 3 (all reference same i!)

const functions2 = [];
for (let j = 0; j < 3; j++) {
  functions2.push(() => j);
}
console.log("\nCreated 3 functions with let:");
console.log("functions2[0]():", functions2[0]()); // 0
console.log("functions2[1]():", functions2[1]()); // 1
console.log("functions2[2]():", functions2[2]()); // 2 (each has own j!)

console.log("\n=== PRACTICE EXERCISES ===\n");

console.log("--- EXERCISE 1: For Loop ---");
console.log("Problem: Find sum of numbers in range and count even numbers.\n");

function analyzeNumberRange(start, end) {
  let sum = 0;
  let evenCount = 0;

  for (let i = start; i <= end; i++) {
    sum += i;
    if (i % 2 === 0) {
      evenCount++;
    }
  }

  return {
    sum: sum,
    evenCount: evenCount,
    oddCount: end - start + 1 - evenCount,
  };
}

console.log("Solution:");
const result1 = analyzeNumberRange(1, 10);
console.log("Range 1-10:", result1);
// { sum: 55, evenCount: 5, oddCount: 5 }

console.log("\nExplanation:");
console.log("- Traditional for loop with i++ increment");
console.log("- sum += i accumulates total");
console.log("- i % 2 === 0 checks if even (remainder is 0)");
console.log("- Total count = (end - start + 1)\n");

console.log("--- EXERCISE 2: While Loop ---");
console.log(
  "Problem: Process array values until finding a target or reaching end.\n"
);

function findInArray(array, target) {
  let index = 0;
  let found = false;
  let itemsChecked = 0;

  while (index < array.length) {
    itemsChecked++;
    if (array[index] === target) {
      found = true;
      break;
    }
    index++;
  }

  return {
    found: found,
    index: found ? index : -1,
    itemsChecked: itemsChecked,
  };
}

console.log("Solution:");
const data = [5, 12, 8, 23, 15, 9];
console.log("Array:", data);
console.log("Find 23:", findInArray(data, 23)); // { found: true, index: 3, itemsChecked: 4 }
console.log("Find 100:", findInArray(data, 100)); // { found: false, index: -1, itemsChecked: 6 }

console.log("\nExplanation:");
console.log("- while loop checks condition at start");
console.log("- break exits immediately when target found");
console.log("- itemsChecked tracks search efficiency\n");

console.log("--- EXERCISE 3: for...of and forEach ---");
console.log("Problem: Transform student data and calculate statistics.\n");

function gradeStudents(students) {
  const results = [];

  for (const student of students) {
    const avgScore =
      student.scores.reduce((a, b) => a + b, 0) / student.scores.length;
    results.push({
      name: student.name,
      average: parseFloat(avgScore.toFixed(2)),
      grade:
        avgScore >= 90
          ? "A"
          : avgScore >= 80
            ? "B"
            : avgScore >= 70
              ? "C"
              : "F",
    });
  }

  return results;
}

console.log("Solution:");
const studentData = [
  { name: "Alice", scores: [95, 92, 88] },
  { name: "Bob", scores: [78, 82, 75] },
  { name: "Charlie", scores: [100, 98, 97] },
];
const graded = gradeStudents(studentData);
console.log("Graded students:");
graded.forEach((student) => {
  console.log(`  ${student.name}: ${student.average} (${student.grade})`);
});

console.log("\nExplanation:");
console.log("- for...of iterates over students (values)");
console.log("- reduce() calculates average of scores");
console.log(
  "- toFixed(2) rounds to 2 decimals, parseFloat converts back to number"
);
console.log("- Nested ternary assigns letter grade based on average");
console.log("- Final forEach displays results cleanly");
