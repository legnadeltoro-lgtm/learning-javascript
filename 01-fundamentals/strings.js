/**
 * ========================================
 * STRINGS IN JAVASCRIPT
 * ========================================
 * 
 * What are strings?
 * Strings are sequences of characters used to represent text.
 * In JavaScript, strings are a primitive data type and are immutable,
 * meaning once created, they cannot be changed directly.
 * You can create strings using single quotes (''), double quotes (""), 
 * or backticks for template literals (``)
 */

console.log('\n=== PART 1: STRING BASICS ===\n');

// Creating strings
const singleQuoted = 'Hello';
const doubleQuoted = "World";
const backtickString = `Template String`;

console.log('Single quotes:', singleQuoted);  // Hello
console.log('Double quotes:', doubleQuoted);  // World
console.log('Backticks:', backtickString);    // Template String

// String length
const message = 'JavaScript';
console.log('Length of "JavaScript":', message.length);  // 10

// Accessing characters
console.log('First character of "JavaScript":', message[0]);    // J
console.log('Last character of "JavaScript":', message[9]);     // t
console.log('Using charAt():', message.charAt(4));             // S

// String is immutable
const original = 'hello';
const upper = original.toUpperCase();
console.log('Original (unchanged):', original);  // hello
console.log('New uppercase string:', upper);     // HELLO


console.log('\n=== PART 2: TEMPLATE LITERALS ===\n');

// Template literals allow easy string interpolation
const name = 'Alice';
const age = 25;

const introduction1 = 'My name is ' + name + ' and I am ' + age + ' years old';
console.log('Concatenation method:', introduction1);

const introduction2 = `My name is ${name} and I am ${age} years old`;
console.log('Template literal method:', introduction2);

// Template literals support expressions
console.log(`Next year I will be ${age + 1} years old`);
console.log(`Is ${age} greater than 18? ${age > 18}`);

// Multi-line strings with template literals
const poem = `
Roses are red,
Violets are blue,
Template literals are great,
And now I'm done too!
`;
console.log('Multi-line poem:', poem);

// Function calls in template literals
function getFullName(first, last) {
  return first + ' ' + last;
}
console.log(`Hello, ${getFullName('John', 'Doe')}`);


console.log('\n=== PART 3: STRING METHODS ===\n');

const str = 'JavaScript is fun';

// Case methods
console.log('toUpperCase():', str.toUpperCase());              // JAVASCRIPT IS FUN
console.log('toLowerCase():', str.toLowerCase());              // javascript is fun

// Finding substrings
console.log('indexOf("is"):', str.indexOf('is'));              // 11 (first occurrence)
console.log('lastIndexOf("is"):', str.lastIndexOf('is'));      // 11 (last occurrence)
console.log('includes("fun"):', str.includes('fun'));          // true
console.log('includes("python"):', str.includes('python'));    // false
console.log('startsWith("Java"):', str.startsWith('Java'));    // true
console.log('endsWith("fun"):', str.endsWith('fun'));          // true

// Extracting parts
console.log('slice(0, 10):', str.slice(0, 10));                // JavaScript
console.log('slice(11):', str.slice(11));                      // is fun
console.log('slice(-3):', str.slice(-3));                      // fun
console.log('substring(0, 10):', str.substring(0, 10));        // JavaScript
console.log('substr(11, 2):', str.substr(11, 2));              // is

// Replacing content
console.log('replace("JavaScript", "Python"):', str.replace('JavaScript', 'Python'));
console.log('replaceAll("s", "@"):', 'scissors'.replaceAll('s', '@'));  // @ci@@or@

// Trimming
const whitespace = '  hello world  ';
console.log('trim():', `"${whitespace.trim()}"`);              // "hello world"
console.log('trimStart():', `"${whitespace.trimStart()}"`);    // "hello world  "
console.log('trimEnd():', `"${whitespace.trimEnd()}"`);        // "  hello world"

// Splitting and joining
const sentence = 'The quick brown fox';
const words = sentence.split(' ');
console.log('split(" "):', words);                             // ['The', 'quick', 'brown', 'fox']
console.log('join("-"):', words.join('-'));                    // The-quick-brown-fox

// Repeating
console.log('repeat(3):', 'Ha'.repeat(3));                     // HaHaHa

// Padding
console.log('padStart(10, "*"):', 'Hi'.padStart(10, '*'));     // ********Hi
console.log('padEnd(10, "."):', 'Hi'.padEnd(10, '.'));         // Hi........

// Finding position of character
const text = 'hello';
console.log('search("l"):', text.search('l'));                 // 2 (position of first "l")

// Extracting character code
console.log('charCodeAt(0):', text.charCodeAt(0));             // 104 (code for 'h')
console.log('fromCharCode(104, 105):', String.fromCharCode(104, 105));  // hi


console.log('\n=== PART 4: ESCAPE CHARACTERS ===\n');

// Common escape sequences
console.log('Newline: line1\\nline2');
console.log('Line1\nLine2');

console.log('\nTab: col1\\tcol2');
console.log('Col1\tCol2\tCol3');

console.log('\nBackslash: \\');
console.log('Backslash: \\');

console.log('\nQuote in single quotes: "quoted"');
console.log('Quote in single quotes: "quoted"');

console.log("\nApostrophe in double quotes: it's");
console.log("Apostrophe in double quotes: it's");

console.log('\nUsing backslash to escape: I\\m');
console.log('Using backslash to escape: I\'m');

console.log('\nUnicode escape: \\u0041 for A');
console.log('Unicode escape: \u0041 for A');


console.log('\n=== COMMON MISTAKES ===\n');

// MISTAKE 1: Confusing slice() and substring()
console.log('MISTAKE: Confusing slice() and substring()\n');
const original1 = 'JavaScript';
console.log('Original string: "JavaScript"');
console.log('slice(0, 4):', original1.slice(0, 4));            // Java
console.log('substring(0, 4):', original1.substring(0, 4));    // Java
console.log('slice(-6, -2):', original1.slice(-6, -2));        // Scri (negative indices work!)
console.log('substring(-6, -2):', original1.substring(-6, -2)); // JavaScr (treats negatives as 0!)

console.log('\nCORRECT: Use slice() for negative indices, substring() for positive:');
console.log('To get last 4 chars: str.slice(-4) =', original1.slice(-4));  // ript

// MISTAKE 2: Forgetting strings are immutable
console.log('\n\nMISTAKE: Thinking strings are mutable');
const str1 = 'hello';
str1[0] = 'H';  // This does NOT work!
console.log('After trying str1[0] = "H":', str1);  // still "hello"
console.log('You must create a new string instead');

console.log('\nCORRECT: Create a new string');
const str2 = 'hello';
const str3 = str2[0].toUpperCase() + str2.slice(1);
console.log('Original:', str2);  // hello
console.log('New string:', str3);  // Hello

// MISTAKE 3: Using == for string comparison without considering case
console.log('\n\nMISTAKE: Case-sensitive comparison issues');
const user1 = 'john';
const user2 = 'JOHN';
console.log('user1 == user2:', user1 == user2);   // false
console.log('user1 === user2:', user1 === user2); // false (both false because case differs)

console.log('\nCORRECT: Convert to same case before comparing');
console.log('user1.toLowerCase() === user2.toLowerCase():', 
  user1.toLowerCase() === user2.toLowerCase());  // true

// MISTAKE 4: String indexing out of bounds
console.log('\n\nMISTAKE: Accessing string beyond its length');
const test = 'abc';
console.log('test[0]:', test[0]);    // a
console.log('test[5]:', test[5]);    // undefined (no error, just undefined)
console.log('test.charAt(5):', test.charAt(5));  // "" (empty string, not undefined)

console.log('\nCORRECT: Check length first or use appropriate method');
if (test.length > 5) {
  console.log('Character at index 5 exists');
} else {
  console.log('Index out of bounds');
}


console.log('\n=== JAVASCRIPT QUIRKS ===\n');

// QUIRK 1: String addition vs subtraction type coercion
console.log('QUIRK 1: Type coercion with strings');
console.log('"11" + 1 =', '11' + 1);      // "111" (string concatenation)
console.log('"11" - 1 =', '11' - 1);      // 10 (converts to number, subtracts)
console.log('"hello" + 1 =', 'hello' + 1);  // "hello1" (concatenation)
console.log('"hello" - 1 =', 'hello' - 1);  // NaN (can't convert "hello")

// QUIRK 2: String comparison with >, <, >=, <=
console.log('\nQUIRK 2: String comparison operators');
console.log('"10" > "2":', '10' > '2');    // false (lexicographic: "1" < "2")
console.log('"10" > 2:', '10' > 2);        // true (converts to number)
console.log('"Apple" > "apple":', 'Apple' > 'apple');  // false (uppercase letters come before lowercase)
console.log('"B" > "A":', 'B' > 'A');      // true

// QUIRK 3: Emoji and character length
console.log('\nQUIRK 3: Emoji have length > 1');
console.log('Length of "😀":', '😀'.length);      // 2 (represented as 2 characters)
console.log('Length of "👨‍👩‍👧":', '👨‍👩‍👧'.length);  // 8 (complex emoji is 8 characters)
console.log('Length of "a":', 'a'.length);        // 1

// QUIRK 4: Comparing strings with null or undefined
console.log('\nQUIRK 4: String with null/undefined');
console.log('"" == false:', '' == false);         // true (loose equality)
console.log('"" === false:', '' === false);       // false (strict equality)
console.log('"0" == false:', '0' == false);       // true (coercion)
console.log('"null" == null:', 'null' == null);   // false (string "null" vs null value)

// QUIRK 5: Accessing properties on string literals
console.log('\nQUIRK 5: Strings have properties despite being primitive');
console.log('"hello".length:', 'hello'.length);   // 5 (auto-wraps in String object)
console.log('"hello".toUpperCase():', 'hello'.toUpperCase());  // HELLO
console.log('"hello"[1]:', 'hello'[1]);           // e (can access by index)


console.log('\n=== PRACTICE EXERCISES ===\n');

console.log('--- EXERCISE 1: String Manipulation ---');
console.log('Problem: Create a function that reverses a string and removes vowels.\n');

function reverseWithoutVowels(str) {
  const vowels = 'aeiouAEIOU';
  let result = '';
  
  for (let i = str.length - 1; i >= 0; i--) {
    const char = str[i];
    if (!vowels.includes(char)) {
      result += char;
    }
  }
  return result;
}

console.log('Solution:');
console.log('reverseWithoutVowels("javascript") =', reverseWithoutVowels('javascript'));  // tprcsvj
console.log('reverseWithoutVowels("hello world") =', reverseWithoutVowels('hello world')); // wrld wh

console.log('\nExplanation:');
console.log('- We loop through the string backwards using: for (i = length - 1; i >= 0; i--)');
console.log('- We check if each character is NOT a vowel using includes()');
console.log('- We build a new string (since strings are immutable)');
console.log('- Time complexity: O(n) where n is string length\n');


console.log('--- EXERCISE 2: Template Literals and Formatting ---');
console.log('Problem: Format a user profile with template literals.\n');

function formatUserProfile(user) {
  const profile = `
╔════════════════════════════╗
║ USER PROFILE               ║
╠════════════════════════════╣
║ Name: ${user.name.padEnd(20)} ║
║ Email: ${user.email.padEnd(19)} ║
║ Age: ${String(user.age).padEnd(21)} ║
║ Premium: ${String(user.isPremium ? 'Yes' : 'No').padEnd(17)} ║
╚════════════════════════════╝`;
  return profile;
}

console.log('Solution:');
const user = { name: 'Alice Johnson', email: 'alice@example.com', age: 28, isPremium: true };
console.log(formatUserProfile(user));

console.log('Explanation:');
console.log('- We use template literals with ${} for embedding expressions');
console.log('- We use padEnd() to align text in fixed columns');
console.log('- We use ternary operator for conditional text (isPremium)');
console.log('- We convert age to string before padding\n');


console.log('--- EXERCISE 3: String Search and Validation ---');
console.log('Problem: Validate email format and find domain.\n');

function validateAndExtractDomain(email) {
  email = email.trim().toLowerCase();
  
  const hasValidFormat = email.includes('@') && 
                        email.includes('.') &&
                        email.indexOf('@') < email.lastIndexOf('.');
  
  if (!hasValidFormat) {
    return { valid: false, message: 'Invalid email format' };
  }
  
  const atIndex = email.indexOf('@');
  const domain = email.slice(atIndex + 1);
  const username = email.slice(0, atIndex);
  
  return {
    valid: true,
    message: 'Valid email',
    username: username,
    domain: domain,
    formatted: `${username}@${domain}`
  };
}

console.log('Solution:');
console.log('Input: "  ALICE@GMAIL.COM  "');
console.log(validateAndExtractDomain('  ALICE@GMAIL.COM  '));

console.log('\nInput: "invalid.email"');
console.log(validateAndExtractDomain('invalid.email'));

console.log('\nInput: "bob@company.co.uk"');
console.log(validateAndExtractDomain('bob@company.co.uk'));

console.log('\nExplanation:');
console.log('- We trim() to remove whitespace and toLowerCase() for case-insensitive comparison');
console.log('- We check for required characters: @ and .');
console.log('- We verify @ comes before . using indexOf() and lastIndexOf()');
console.log('- We use slice() to extract username and domain parts');
console.log('- We return an object with detailed information about validation result');
