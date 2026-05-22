/**
 * ========================================
 * ARRAYS IN JAVASCRIPT
 * ========================================
 *
 * What are arrays?
 * Arrays are ordered collections of elements that can hold any type of data.
 * Arrays are objects with a length property and methods for manipulation.
 * Arrays are zero-indexed, meaning the first element is at index 0.
 */

console.log("\n=== PART 1: ARRAY CREATION AND BASICS ===\n");

// Creating arrays with literals
const fruits = ["apple", "banana", "orange"];
console.log("Array literal:", fruits);
console.log("Length:", fruits.length); // 3

// Creating arrays with constructor
const numbers = new Array(1, 2, 3, 4);
console.log("Array constructor:", numbers);

// Creating array with specific size
const emptyArray = new Array(5);
console.log("Array with size 5:", emptyArray); // [ <5 empty items> ]

// Array.of() vs new Array()
console.log("Array.of(5):", Array.of(5)); // [5] (creates array with element 5)
console.log("new Array(5):", new Array(5)); // [<5 empty items>] (creates empty array of size 5)

// Mixed data types in arrays
const mixed = [1, "hello", true, null, undefined, { name: "John" }, [1, 2]];
console.log("Mixed array:", mixed);

// Accessing elements
console.log("First element (index 0):", fruits[0]); // apple
console.log("Last element:", fruits[fruits.length - 1]); // orange
console.log("Out of bounds:", fruits[10]); // undefined

// Modifying elements
fruits[1] = "blueberry";
console.log("After modifying index 1:", fruits); // ['apple', 'blueberry', 'orange']

console.log("\n=== PART 2: MUTATING ARRAY METHODS ===\n");

// push() - adds to end
let arr1 = [1, 2, 3];
const newLength = arr1.push(4, 5);
console.log("After push(4, 5):", arr1); // [1, 2, 3, 4, 5]
console.log("Returns new length:", newLength); // 5

// pop() - removes from end
const popped = arr1.pop();
console.log("After pop():", arr1); // [1, 2, 3, 4]
console.log("Returns removed element:", popped); // 5

// unshift() - adds to beginning
arr1.unshift(0);
console.log("After unshift(0):", arr1); // [0, 1, 2, 3, 4]

// shift() - removes from beginning
const shifted = arr1.shift();
console.log("After shift():", arr1); // [1, 2, 3, 4]
console.log("Returns removed element:", shifted); // 0

// splice() - adds/removes elements at specific position
const arr2 = ["a", "b", "c", "d"];
const removed = arr2.splice(1, 2, "x", "y");
console.log('After splice(1, 2, "x", "y"):', arr2); // ['a', 'x', 'y', 'd']
console.log("Returns removed elements:", removed); // ['b', 'c']

// reverse() - reverses array in place
const arr3 = [1, 2, 3];
arr3.reverse();
console.log("After reverse():", arr3); // [3, 2, 1]

// sort() - sorts array in place
const arr4 = [30, 10, 20];
arr4.sort();
console.log("After sort():", arr4); // [10, 20, 30]

// sort with custom comparator
const arr5 = [30, 10, 20];
arr5.sort((a, b) => b - a); // descending order
console.log("After sort((a,b) => b - a):", arr5); // [30, 20, 10]

console.log("\n=== PART 3: NON-MUTATING ARRAY METHODS ===\n");

// slice() - returns copy of portion
const original = [1, 2, 3, 4, 5];
const sliced = original.slice(1, 4);
console.log("slice(1, 4):", sliced); // [2, 3, 4]
console.log("Original unchanged:", original); // [1, 2, 3, 4, 5]

// concat() - combines arrays
const arr6 = [1, 2];
const arr7 = [3, 4];
const combined = arr6.concat(arr7, [5, 6]);
console.log("concat():", combined); // [1, 2, 3, 4, 5, 6]
console.log("Original unchanged:", arr6); // [1, 2]

// join() - converts to string
const words = ["Hello", "World", "JavaScript"];
console.log('join(" "):', words.join(" ")); // Hello World JavaScript
console.log('join("-"):', words.join("-")); // Hello-World-JavaScript
console.log("join():", words.join(",")); // Hello,World,JavaScript

// includes() - checks if element exists
console.log("[1, 2, 3].includes(2):", [1, 2, 3].includes(2)); // true
console.log("[1, 2, 3].includes(5):", [1, 2, 3].includes(5)); // false

// indexOf() and lastIndexOf()
const arr8 = [1, 2, 3, 2, 1];
console.log("indexOf(2):", arr8.indexOf(2)); // 1
console.log("lastIndexOf(2):", arr8.lastIndexOf(2)); // 3
console.log("indexOf(5):", arr8.indexOf(5)); // -1 (not found)

// find() - returns first matching element
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" },
];
const found = users.find((user) => user.id === 2);
console.log("find(user => user.id === 2):", found); // { id: 2, name: 'Bob' }

// findIndex() - returns index of first match
const index = users.findIndex((user) => user.name === "Charlie");
console.log('findIndex(user => user.name === "Charlie"):', index); // 2

// filter() - returns new array with matching elements
const numbers2 = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers2.filter((num) => num % 2 === 0);
console.log("filter(even numbers):", evenNumbers); // [2, 4, 6]

// map() - transforms each element
const doubled = numbers2.map((num) => num * 2);
console.log("map(num => num * 2):", doubled); // [2, 4, 6, 8, 10, 12]

// reduce() - accumulates values
const sum = numbers2.reduce((total, num) => total + num, 0);
console.log("reduce(sum):", sum); // 21

// forEach() - executes function for each element
console.log("forEach() output:");
numbers2.forEach((num, index) => {
  console.log(`  Index ${index}: ${num}`);
});

console.log("\n=== PART 4: DESTRUCTURING AND SPREAD ===\n");

// Array destructuring
const [first, second, ...rest] = [1, 2, 3, 4, 5];
console.log("Destructuring: first, second, ...rest");
console.log("first:", first); // 1
console.log("second:", second); // 2
console.log("rest:", rest); // [3, 4, 5]

// Skipping elements
const [head, , third] = [10, 20, 30];
console.log("Skip elements: head, _, third");
console.log("head:", head); // 10
console.log("third:", third); // 30

// Spread operator for copying
const original2 = [1, 2, 3];
const copy = [...original2];
copy[0] = 99;
console.log("Original:", original2); // [1, 2, 3]
console.log("Copy (modified):", copy); // [99, 2, 3]

// Spread for combining
const arr9 = [1, 2, 3];
const arr10 = [4, 5, 6];
const combined2 = [...arr9, 3.5, ...arr10];
console.log("Spread combining:", combined2); // [1, 2, 3, 3.5, 4, 5, 6]

console.log("\n=== PART 5: MULTIDIMENSIONAL ARRAYS ===\n");

// 2D array (matrix)
const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log("Matrix:", matrix);
console.log("Element at [1][2]:", matrix[1][2]); // 6

// Accessing multidimensional arrays
console.log("First row:", matrix[0]); // [1, 2, 3]
console.log("Second row, third column:", matrix[1][2]); // 6

// Iterating through 2D array
console.log("Matrix values:");
matrix.forEach((row, i) => {
  row.forEach((value, j) => {
    console.log(`  [${i}][${j}] = ${value}`);
  });
});

// Creating and flattening nested arrays
const nested = [[1, 2], [3, [4, 5]], 6];
console.log("Nested array:", nested);
console.log("Flattened (depth 1):", nested.flat(1)); // [1, 2, 3, [4, 5], 6]
console.log("Flattened (depth 2):", nested.flat(2)); // [1, 2, 3, 4, 5, 6]

console.log("\n=== COMMON MISTAKES ===\n");

// MISTAKE 1: Confusing splice() and slice()
console.log("MISTAKE: Confusing splice() and slice()\n");
const arr11 = ["a", "b", "c", "d"];
const arr12 = ["a", "b", "c", "d"];

const removed1 = arr11.splice(1, 2); // Modifies original
console.log("splice(1, 2) returns:", removed1); // ['b', 'c']
console.log("Original after splice:", arr11); // ['a', 'd']

const removed2 = arr12.slice(1, 3); // Does NOT modify original
console.log("\nslice(1, 3) returns:", removed2); // ['b', 'c']
console.log("Original after slice:", arr12); // ['a', 'b', 'c', 'd']

// MISTAKE 2: sort() sorts as strings by default
console.log("\n\nMISTAKE: sort() sorts as strings");
const numbers3 = [10, 5, 40, 25];
const sorted1 = [...numbers3].sort();
console.log("sort() on numbers:", sorted1); // [10, 25, 40, 5] (wrong!)

console.log("\nCORRECT: Use comparator function");
const sorted2 = [...numbers3].sort((a, b) => a - b);
console.log("sort((a,b) => a - b):", sorted2); // [5, 10, 25, 40]

// MISTAKE 3: forEach returns undefined
console.log("\n\nMISTAKE: forEach does not return value");
const arr13 = [1, 2, 3];
const result1 = arr13.forEach((x) => x * 2);
console.log("forEach return value:", result1); // undefined

console.log("\nCORRECT: Use map() to transform");
const result2 = arr13.map((x) => x * 2);
console.log("map return value:", result2); // [2, 4, 6]

// MISTAKE 4: Array indexing out of bounds doesn't error
console.log("\n\nMISTAKE: Out of bounds access");
const arr14 = [1, 2, 3];
console.log("arr[10]:", arr14[10]); // undefined (no error)

// MISTAKE 5: Modifying array while iterating
console.log("\n\nMISTAKE: Modifying array while iterating with forEach");
const arr15 = [1, 2, 3, 4, 5];
arr15.forEach((val, idx) => {
  if (val === 3) {
    arr15.splice(idx, 1); // Removing element during iteration
  }
});
console.log("Array after forEach with splice:", arr15); // [1, 2, 4, 5] (element 4 skipped!)

console.log("\nCORRECT: Use filter() instead");
const arr16 = [1, 2, 3, 4, 5];
const filtered = arr16.filter((val) => val !== 3);
console.log("After filter:", filtered); // [1, 2, 4, 5]

console.log("\n=== JAVASCRIPT QUIRKS ===\n");

// QUIRK 1: [] + [] creates empty string
console.log('QUIRK 1: [] + [] === ""');
console.log("[] + []:", [] + []); // "" (empty string)
console.log("[] + {}:", [] + {}); // "[object Object]"

// QUIRK 2: Array(3) vs [3]
console.log("\nQUIRK 2: Array(3) vs [3]");
console.log("Array(3):", Array(3)); // [<3 empty items>]
console.log("[3]:", [3]); // [3]

// QUIRK 3: Holes in arrays
console.log("\nQUIRK 3: Holes in arrays");
const sparseArray = [1, , 3];
console.log("Sparse array:", sparseArray); // [1, <empty>, 3]
console.log("Length:", sparseArray.length); // 3
console.log("sparseArray[1]:", sparseArray[1]); // undefined
console.log("1 in sparseArray:", 1 in sparseArray); // false

// QUIRK 4: sort() on numbers
console.log("\nQUIRK 4: sort() behavior");
const nums = [100, 2, 30, 4];
console.log("Before sort:", nums);
console.log("After sort():", [...nums].sort()); // [100, 2, 30, 4] (lexicographic!)

// QUIRK 5: Array equality always false
console.log("\nQUIRK 5: Array equality");
console.log("[1, 2] === [1, 2]:", [1, 2] === [1, 2]); // false (different objects)
console.log("[1, 2] == [1, 2]:", [1, 2] == [1, 2]); // false (different objects)
const arr17 = [1, 2];
console.log("arr === arr:", arr17 === arr17); // true (same reference)

console.log("\n=== PRACTICE EXERCISES ===\n");

console.log("--- EXERCISE 1: Map and Filter ---");
console.log(
  "Problem: Transform user data - get names of active premium users, uppercase.\n"
);

const allUsers = [
  { name: "alice", active: true, premium: true },
  { name: "bob", active: false, premium: true },
  { name: "charlie", active: true, premium: false },
  { name: "diana", active: true, premium: true },
];

const activePremiumNames = allUsers
  .filter((user) => user.active && user.premium)
  .map((user) => user.name.toUpperCase());

console.log("Solution:");
console.log("Active premium users (uppercase):", activePremiumNames); // ['ALICE', 'DIANA']

console.log("\nExplanation:");
console.log(
  "- First filter: user.active && user.premium (returns matching users)"
);
console.log("- Then map: user.name.toUpperCase() (transforms names)");
console.log("- This creates a clean chain of operations\n");

console.log("--- EXERCISE 2: Reduce ---");
console.log(
  "Problem: Calculate total sales and group by category from transactions.\n"
);

const transactions = [
  { category: "electronics", amount: 299 },
  { category: "books", amount: 45 },
  { category: "electronics", amount: 150 },
  { category: "books", amount: 30 },
  { category: "clothes", amount: 85 },
];

const categorySales = transactions.reduce((acc, transaction) => {
  const { category, amount } = transaction;
  acc[category] = (acc[category] || 0) + amount;
  return acc;
}, {});

console.log("Solution:");
console.log("Sales by category:", categorySales);
// { electronics: 449, books: 75, clothes: 85 }

const totalSales = transactions.reduce((total, t) => total + t.amount, 0);
console.log("Total sales:", totalSales); // 609

console.log("\nExplanation:");
console.log("- accumulator starts as {} (empty object)");
console.log(
  "- For each transaction: acc[category] = (acc[category] || 0) + amount"
);
console.log(
  "- (acc[category] || 0) handles first occurrence (|| 0 if undefined)"
);
console.log("- Destructuring { category, amount } makes code cleaner\n");

console.log("--- EXERCISE 3: Sorting and Finding ---");
console.log("Problem: Sort products by price and find items in price range.\n");

const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Mouse", price: 25 },
  { id: 3, name: "Monitor", price: 350 },
  { id: 4, name: "Keyboard", price: 85 },
  { id: 5, name: "Headphones", price: 150 },
];

// Sort by price ascending
const sortedByPrice = [...products].sort((a, b) => a.price - b.price);
console.log("Solution - Products sorted by price:");
sortedByPrice.forEach((p) => console.log(`  ${p.name}: $${p.price}`));

// Find items in price range $50-$400
const midRangeProducts = products.filter(
  (p) => p.price >= 50 && p.price <= 400
);
console.log("\nProducts in $50-$400 range:");
console.log(midRangeProducts.map((p) => p.name).join(", "));

// Find cheapest and most expensive
const cheapest = products.reduce((min, p) => (p.price < min.price ? p : min));
const mostExpensive = products.reduce((max, p) =>
  p.price > max.price ? p : max
);
console.log("\nCheapest:", cheapest.name, "-", cheapest.price); // Mouse - 25
console.log("Most expensive:", mostExpensive.name, "-", mostExpensive.price); // Laptop - 1200

console.log("\nExplanation:");
console.log(
  "- [...products].sort() spreads original array to avoid modifying it"
);
console.log("- sort((a,b) => a.price - b.price) compares prices numerically");
console.log("- filter() with && combines multiple conditions");
console.log("- reduce() with ternary finds min/max values");
