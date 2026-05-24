/**
 * ========================================
 * SET AND MAP IN JAVASCRIPT
 * ========================================
 *
 * What are Set and Map?
 * Set: A collection of unique values (no duplicates)
 * Map: A collection of key-value pairs where keys can be any type (not just strings)
 * Both are iterable and have built-in methods for common operations
 * Both maintain insertion order
 */

console.log("\n=== PART 1: SETS - BASICS AND METHODS ===\n");

// Creating a Set
const set1 = new Set();
console.log("Empty Set:", set1);
console.log("Set size:", set1.size); // 0

// Creating Set with initial values
const set2 = new Set([1, 2, 3, 1, 2]); // Duplicates removed
console.log("Set from array [1, 2, 3, 1, 2]:", set2); // Set(3) { 1, 2, 3 }
console.log("Set size:", set2.size); // 3

// add() - adds element to Set
const set3 = new Set();
set3.add("apple");
set3.add("banana");
set3.add("apple"); // Won't be added (duplicate)
console.log("\nSet after adding values:", set3); // Set(2) { 'apple', 'banana' }

// Returns the Set itself (for chaining)
set3.add("cherry").add("date");
console.log("After chaining add():", set3); // Set(4) { 'apple', 'banana', 'cherry', 'date' }

// has() - checks if value exists
console.log('\nset3.has("apple"):', set3.has("apple")); // true
console.log('set3.has("grape"):', set3.has("grape")); // false

// delete() - removes element
const removed = set3.delete("banana");
console.log('After delete("banana"):', set3); // Set(3) { 'apple', 'cherry', 'date' }
console.log("delete() returns:", removed); // true (was deleted)
console.log("delete() non-existent:", set3.delete("grape")); // false (wasn't there)

// clear() - removes all elements
const set4 = new Set([1, 2, 3, 4, 5]);
console.log("\nBefore clear():", set4);
set4.clear();
console.log("After clear():", set4);
console.log("Size after clear():", set4.size); // 0

// Iterating through Set with forEach()
const set5 = new Set(["red", "green", "blue"]);
console.log("\nIterating with forEach():");
set5.forEach((value) => {
  console.log("  Value:", value);
});

// for...of loop
console.log("\nIterating with for...of:");
for (const value of set5) {
  console.log("  Value:", value);
}

// Converting Set to Array
const set6 = new Set([1, 2, 3]);
const array = Array.from(set6);
console.log("\nArray.from(Set):", array); // [1, 2, 3]

const array2 = [...set6]; // Using spread operator
console.log("Using spread operator:", array2); // [1, 2, 3]

console.log("\n=== PART 2: MAPS - BASICS AND METHODS ===\n");

// Creating a Map
const map1 = new Map();
console.log("Empty Map:", map1);
console.log("Map size:", map1.size); // 0

// set() - adds key-value pair
const map2 = new Map();
map2.set("name", "Alice");
map2.set("age", 25);
map2.set("city", "NYC");
console.log("\nMap with set():", map2);
console.log("Map size:", map2.size); // 3

// Keys can be any type (not just strings)
map2.set(1, "one");
map2.set(true, "boolean key");
map2.set({ id: 1 }, "object key");
map2.set(function () {}, "function key");
console.log("\nMap with various key types:", map2);

// get() - retrieves value by key
console.log('\nmap2.get("name"):', map2.get("name")); // Alice
console.log('map2.get("age"):', map2.get("age")); // 25
console.log('map2.get("unknown"):', map2.get("unknown")); // undefined

// Using variables as keys
const userKey = { id: 1 };
const map3 = new Map();
map3.set(userKey, { name: "John", role: "admin" });
console.log("\nUsing object as key:");
console.log("get(userKey):", map3.get(userKey)); // { name: 'John', role: 'admin' }

// Important: Objects are compared by reference
const key1 = { id: 1 };
const key2 = { id: 1 };
const map4 = new Map();
map4.set(key1, "value1");
console.log("\nObject reference matters:");
console.log("get(key1):", map4.get(key1)); // value1
console.log("get(key2):", map4.get(key2)); // undefined (different object)

// has() - checks if key exists
const map5 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log('\nmap5.has("a"):', map5.has("a")); // true
console.log('map5.has("d"):', map5.has("d")); // false

// delete() - removes key-value pair
console.log("\nBefore delete:", map5);
const deleted = map5.delete("b");
console.log('After delete("b"):', map5);
console.log("delete() returns:", deleted); // true

// clear() - removes all entries
const map6 = new Map([
  ["x", 10],
  ["y", 20],
]);
console.log("\nBefore clear():", map6);
map6.clear();
console.log("After clear():", map6);

// Iterating through Map
const map7 = new Map([
  ["name", "Alice"],
  ["email", "alice@example.com"],
  ["role", "admin"],
]);

console.log("\nIterating with forEach():");
map7.forEach((value, key) => {
  console.log(`  ${key}: ${value}`);
});

// entries() - returns [key, value] pairs
console.log("\nUsing entries():");
for (const [key, value] of map7.entries()) {
  console.log(`  ${key}: ${value}`);
}

// keys() - returns only keys
console.log("\nUsing keys():");
for (const key of map7.keys()) {
  console.log("  Key:", key);
}

// values() - returns only values
console.log("\nUsing values():");
for (const value of map7.values()) {
  console.log("  Value:", value);
}

// for...of with destructuring
console.log("\nfor...of with destructuring:");
for (const [key, value] of map7) {
  console.log(`  [${key}, ${value}]`);
}

// Converting Map to Array
const array3 = Array.from(map7);
console.log("\nArray.from(Map):", array3);
// [['name', 'Alice'], ['email', 'alice@example.com'], ['role', 'admin']]

const array4 = [...map7];
console.log("Using spread operator:", array4);

console.log("\n=== PART 3: SET VS ARRAY, MAP VS OBJECT ===\n");

// Set vs Array for uniqueness
console.log("SET vs ARRAY:");
const numbers = [1, 2, 2, 3, 3, 3, 4];
console.log("Original array:", numbers); // [1, 2, 2, 3, 3, 3, 4]

const unique = new Set(numbers);
console.log("Converted to Set:", unique); // Set(4) { 1, 2, 3, 4 }

// Get unique array again
const uniqueArray = [...unique];
console.log("Back to array:", uniqueArray); // [1, 2, 3, 4]

// Map vs Object
console.log("\nMAP vs OBJECT:");
console.log("Object keys must be strings or Symbols:");
const obj = {};
obj[1] = "one";
obj[true] = "boolean";
console.log("obj:", obj); // { '1': 'one', 'true': 'boolean' }
console.log("Keys became strings:", Object.keys(obj));

console.log("\nMap keys can be any type:");
const map8 = new Map();
map8.set(1, "one");
map8.set(true, "boolean");
console.log("Map:", map8);
console.log("Keys remain their type:", [...map8.keys()]); // [1, true]

// Map iteration order vs Object
console.log("\nInsertion order:");
const map9 = new Map([
  ["a", 1],
  ["b", 2],
  ["c", 3],
]);
console.log("Map iteration order (guaranteed):");
for (const [key] of map9) {
  console.log("  ", key); // a, b, c (insertion order)
}

console.log("\n=== COMMON MISTAKES ===\n");

// MISTAKE 1: Object as Map key without reference
console.log("MISTAKE: Using different object literals as keys\n");
const map10 = new Map();
map10.set({ id: 1 }, "value1");
console.log("Created map with {id: 1} as key");

console.log("map10.get({ id: 1 }):", map10.get({ id: 1 })); // undefined (different object!)
console.log("Size:", map10.size); // 1 (original entry still there)

console.log("\nCORRECT: Store reference or use primitive keys");
const userKey2 = { id: 1 };
const map11 = new Map();
map11.set(userKey2, "value1");
console.log("map11.get(userKey2):", map11.get(userKey2)); // value1 (same reference)

// MISTAKE 2: Forgetting Set doesn't allow duplicates
console.log("\n\nMISTAKE: Expecting Set to work like Array for all operations");
const set7 = new Set([1, 1, 1]);
console.log("Set([1, 1, 1]):", set7); // Set(1) { 1 } - only one element!
console.log("Size:", set7.size); // 1
console.log("set7[0]:", set7[0]); // undefined - can\'t access by index

console.log("\nCORRECT: Convert to array if you need indexing");
const arr = [...set7];
console.log("Array from Set:", arr); // [1]
console.log("arr[0]:", arr[0]); // 1

// MISTAKE 3: NaN in Set
console.log("\n\nMISTAKE: Understanding NaN in Sets");
const set8 = new Set();
set8.add(NaN);
set8.add(NaN);
set8.add(NaN);
console.log("Set with multiple NaN:", set8); // Set(1) { NaN }
console.log("NaN is stored only once (size:", set8.size, ")"); // 1

console.log("But: NaN !== NaN:", NaN === NaN); // false
console.log("Yet Set treats NaN specially");

// MISTAKE 4: Trying to access Map with bracket notation
console.log("\n\nMISTAKE: Using bracket notation for Map access");
const map12 = new Map();
map12.set("name", "Alice");
console.log('map12["name"]:', map12["name"]); // undefined (wrong!)
console.log('map12.get("name"):', map12.get("name")); // Alice (correct)

// MISTAKE 5: forEach with wrong parameter order
console.log("\n\nMISTAKE: Confusing forEach parameter order");
const map13 = new Map([
  ["a", 1],
  ["b", 2],
]);
console.log("Map forEach - note parameter order:");
map13.forEach((value, key) => {
  console.log(`  forEach(value, key): key="${key}", value="${value}"`);
});

const set9 = new Set(["x", "y", "z"]);
console.log("\nSet forEach - both first and second params are value:");
set9.forEach((value, valueDuplicate) => {
  console.log(
    `  forEach(value, valueDuplicate): value="${value}", dup="${valueDuplicate}"`
  );
});

console.log("\n=== JAVASCRIPT QUIRKS ===\n");

// QUIRK 1: new Set([NaN, NaN]) has size 1, but NaN !== NaN
console.log("QUIRK 1: NaN is treated specially in Set");
console.log("NaN === NaN:", NaN === NaN); // false
const set10 = new Set([NaN, NaN, NaN]);
console.log("Set([NaN, NaN, NaN]):", set10); // Set(1) { NaN }
console.log("Size:", set10.size); // 1

// QUIRK 2: Sets maintain insertion order
console.log("\nQUIRK 2: Sets maintain insertion order");
const set11 = new Set();
set11.add(3);
set11.add(1);
set11.add(2);
console.log("Added in order [3, 1, 2]:", set11); // Set(3) { 3, 1, 2 } - order preserved!

// QUIRK 3: Map can have 0 as key and it's different from false
console.log("\nQUIRK 3: 0, -0, and false are all different keys in Map");
const map14 = new Map();
map14.set(0, "zero");
map14.set(-0, "negative zero");
map14.set(false, "false");
console.log("Map with 0, -0, and false:", map14);
console.log("Size:", map14.size); // 2 (0 and -0 are the same in Map!)
console.log("0 === -0:", 0 === -0); // true
console.log("0 === false:", 0 === false); // false

// QUIRK 4: +0 and -0 are different but equal
console.log("\nQUIRK 4: +0 and -0 quirk");
console.log("0 === -0:", 0 === -0); // true
console.log("Object.is(0, -0):", Object.is(0, -0)); // false (stricter)

// QUIRK 5: Arrays converted to objects use indices as string keys
console.log("\nQUIRK 5: Converting Array-like object to Map");
const pseudoArray = { 0: "a", 1: "b", 2: "c" };
const mapFromObject = new Map(Object.entries(pseudoArray));
console.log("Map from object entries:", mapFromObject);
// Keys are '0', '1', '2' (strings, not numbers)

console.log("\n=== PRACTICE EXERCISES ===\n");

console.log("--- EXERCISE 1: Set for Deduplication ---");
console.log(
  "Problem: Find unique words in text and count total unique words.\n"
);

function analyzeText(text) {
  const words = text
    .toLowerCase()
    .replace(/[.,!?;:]/g, "") // Remove punctuation
    .split(/\s+/); // Split by whitespace

  const uniqueWords = new Set(words);
  const wordCount = words.length;
  const uniqueCount = uniqueWords.size;

  return {
    totalWords: wordCount,
    uniqueWords: uniqueCount,
    uniqueList: Array.from(uniqueWords).sort(),
  };
}

console.log("Solution:");
const textAnalysis = analyzeText(
  "The quick brown fox jumps over the lazy dog. The dog was brown."
);
console.log("Analysis:", textAnalysis);

console.log("\nExplanation:");
console.log("- Convert text to array of words");
console.log("- Create Set from array (automatically removes duplicates)");
console.log("- uniqueWords.size gives count without duplicates");
console.log("- Convert back to array with Array.from() and sort\n");

console.log("--- EXERCISE 2: Map for Counting/Grouping ---");
console.log("Problem: Count character frequency and group by frequency.\n");

function analyzeCharacterFrequency(text) {
  const charFrequency = new Map();

  for (const char of text.toLowerCase()) {
    if (char !== " ") {
      // Skip spaces
      charFrequency.set(char, (charFrequency.get(char) || 0) + 1);
    }
  }

  // Convert to array and sort by frequency (descending)
  const sorted = Array.from(charFrequency).sort((a, b) => b[1] - a[1]);

  return {
    frequency: charFrequency,
    sorted: sorted,
    mostCommon: sorted[0] ? sorted[0][0] : null,
  };
}

console.log("Solution:");
const charAnalysis = analyzeCharacterFrequency("mississippi");
console.log("Character frequencies:");
charAnalysis.frequency.forEach((count, char) => {
  console.log(`  "${char}": ${count}`);
});
console.log(
  "Most common character:",
  charAnalysis.mostCommon,
  `(${charAnalysis.frequency.get(charAnalysis.mostCommon)} times)`
);

console.log("\nExplanation:");
console.log("- Use Map to store character => frequency");
console.log("- For each char: set count to (current || 0) + 1");
console.log(
  "- Convert Map to array: Array.from(map) gives [[key, value], ...]"
);
console.log("- Sort by [1] (value/frequency) in descending order\n");

console.log("--- EXERCISE 3: Combining Set and Map ---");
console.log(
  "Problem: Track user permissions - which users can do what actions.\n"
);

class PermissionManager {
  constructor() {
    this.permissions = new Map(); // action => Set of users
  }

  grantPermission(user, action) {
    if (!this.permissions.has(action)) {
      this.permissions.set(action, new Set());
    }
    this.permissions.get(action).add(user);
  }

  revokePermission(user, action) {
    if (this.permissions.has(action)) {
      this.permissions.get(action).delete(user);
    }
  }

  hasPermission(user, action) {
    return (
      this.permissions.has(action) && this.permissions.get(action).has(user)
    );
  }

  getAllUsers(action) {
    return this.permissions.has(action)
      ? Array.from(this.permissions.get(action))
      : [];
  }
}

console.log("Solution:");
const manager = new PermissionManager();

// Grant permissions
manager.grantPermission("alice", "read");
manager.grantPermission("bob", "read");
manager.grantPermission("alice", "write");
manager.grantPermission("charlie", "write");

console.log("Users with read permission:", manager.getAllUsers("read")); // ['alice', 'bob']
console.log("Users with write permission:", manager.getAllUsers("write")); // ['alice', 'charlie']

console.log("Can alice read?", manager.hasPermission("alice", "read")); // true
console.log("Can bob write?", manager.hasPermission("bob", "write")); // false

manager.revokePermission("alice", "read");
console.log("After revoking alice read:", manager.getAllUsers("read")); // ['bob']

console.log("\nExplanation:");
console.log("- Map stores action => Set of users");
console.log("- Use Set to prevent duplicate users per action");
console.log("- grantPermission creates Set if action doesn't exist");
console.log("- hasPermission checks both Map and Set contain the entries");
console.log("- getAllUsers returns array of users for easy display");
