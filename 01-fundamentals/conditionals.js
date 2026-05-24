/**
 * ========================================
 * CONDITIONALS IN JAVASCRIPT
 * ========================================
 * 
 * What are conditionals?
 * Conditionals allow your code to make decisions and execute different
 * code based on different conditions. They control the flow of your program
 * using if, else if, else, switch statements, and ternary operators.
 */

console.log('\n=== PART 1: IF, ELSE IF, ELSE STATEMENTS ===\n');

// Basic if statement
const age = 20;
if (age >= 18) {
  console.log('You are an adult');  // This runs
}

// if-else statement
const temperature = 15;
if (temperature > 25) {
  console.log('It is hot');
} else {
  console.log('It is not hot');  // This runs
}

// if-else if-else statement
const score = 85;
if (score >= 90) {
  console.log('Grade: A');
} else if (score >= 80) {
  console.log('Grade: B');  // This runs
} else if (score >= 70) {
  console.log('Grade: C');
} else {
  console.log('Grade: F');
}

// Multiple conditions with logical operators
const username = 'alice';
const password = 'secret123';
if (username === 'alice' && password === 'secret123') {
  console.log('Login successful');  // This runs
}

// Short-circuit evaluation
let value;
if (value && value.toUpperCase) {
  console.log('Value exists and has toUpperCase');
} else {
  console.log('Value is falsy or missing'); // This runs (value is undefined)
}


console.log('\n=== PART 2: TRUTHY AND FALSY VALUES ===\n');

// Falsy values in JavaScript: false, 0, -0, 0n, "", null, undefined, NaN
console.log('Falsy values:');
console.log('Boolean false:', !!false);      // false
console.log('Number 0:', !!0);               // false
console.log('Empty string "":', !!'');       // false
console.log('null:', !!null);                // false
console.log('undefined:', !!undefined);      // false
console.log('NaN:', !!NaN);                  // false

// Truthy values: everything else
console.log('\nTruthy values:');
console.log('Boolean true:', !!true);        // true
console.log('Non-zero number (1):', !!1);    // true
console.log('Non-zero number (-1):', !!-1);  // true
console.log('Non-empty string:', !!'hello'); // true
console.log('Array []:', !![]);              // true (arrays are truthy!)
console.log('Object {}:', !!{});             // true (objects are truthy!)
console.log('Function:', !!(function(){});   // true

// Using truthy/falsy in conditionals
const user = 'john';
if (user) {
  console.log('User is logged in');  // This runs (non-empty string is truthy)
}

const userCount = 0;
if (!userCount) {
  console.log('No users online');  // This runs (0 is falsy)
}


console.log('\n=== PART 3: SWITCH STATEMENTS ===\n');

// Switch statement
const day = 3;
switch (day) {
  case 1:
    console.log('Monday');
    break;
  case 2:
    console.log('Tuesday');
    break;
  case 3:
    console.log('Wednesday');  // This runs
    break;
  case 4:
    console.log('Thursday');
    break;
  case 5:
    console.log('Friday');
    break;
  default:
    console.log('Weekend');
}

// Switch with string comparison
const fruit = 'apple';
switch (fruit) {
  case 'apple':
    console.log('Color: Red or Green');  // This runs
    break;
  case 'banana':
    console.log('Color: Yellow');
    break;
  case 'orange':
    console.log('Color: Orange');
    break;
  default:
    console.log('Unknown fruit');
}

// Switch with grouped cases (fall-through)
const status = 'pending';
switch (status) {
  case 'pending':
  case 'processing':
  case 'in_progress':
    console.log('Order is not ready');  // This runs (fall-through from 'pending')
    break;
  case 'completed':
    console.log('Order is ready for pickup');
    break;
  case 'cancelled':
    console.log('Order was cancelled');
    break;
  default:
    console.log('Unknown status');
}


console.log('\n=== PART 4: TERNARY OPERATOR ===\n');

// Simple ternary
const age2 = 25;
const canDrive = age2 >= 16 ? 'Yes' : 'No';
console.log('Can drive (age 25):', canDrive);  // Yes

// Ternary with expressions
const score2 = 45;
const result = score2 >= 50 ? 'Pass' : 'Fail';
console.log('Exam result (score 45):', result);  // Fail

// Nested ternary (use with caution - can be hard to read)
const hour = 14;
const timeOfDay = hour < 12 ? 'Morning' : hour < 17 ? 'Afternoon' : 'Evening';
console.log('Time of day (hour 14):', timeOfDay);  // Afternoon

// Ternary with function calls
function getStatus(isOnline) {
  return isOnline ? 'User is online' : 'User is offline';
}
console.log(getStatus(true));   // User is online
console.log(getStatus(false));  // User is offline


console.log('\n=== PART 5: SHORT-CIRCUIT EVALUATION ===\n');

// AND operator (&&) - returns first falsy value or last truthy value
console.log('Short-circuit with AND (&&):');
console.log('true && "hello":', true && 'hello');      // hello
console.log('"hello" && true:', 'hello' && true);      // true
console.log('false && "hello":', false && 'hello');    // false
console.log('undefined && "hello":', undefined && 'hello');  // undefined

// Practical use: executing code only if condition is true
let user2 = { name: 'Alice', isAdmin: true };
user2.isAdmin && console.log('Admin access granted');  // Runs

user2 = { name: 'Bob', isAdmin: false };
user2.isAdmin && console.log('Admin access granted');  // Does not run

// OR operator (||) - returns first truthy value or last falsy value
console.log('\nShort-circuit with OR (||):');
console.log('false || "hello":', false || 'hello');    // hello
console.log('"world" || "hello":', 'world' || 'hello'); // world
console.log('false || false:', false || false);        // false
console.log('0 || "default":', 0 || 'default');        // default

// Practical use: providing defaults
const nameInput = '';
const displayName = nameInput || 'Guest';
console.log('Display name:', displayName);  // Guest

const settingsInput = { theme: 'dark' };
const settings = settingsInput || { theme: 'light' };
console.log('Settings:', settings);  // { theme: 'dark' }


console.log('\n=== COMMON MISTAKES ===\n');

// MISTAKE 1: Missing braces (dangerous!)
console.log('MISTAKE: Missing braces in if statement');
const x = 5;
if (x > 3)
  console.log('x is greater than 3');  // This runs fine
  console.log('This always runs');     // But this ALSO always runs (not part of if!)

console.log('\nCORRECT: Always use braces');
if (x > 3) {
  console.log('x is greater than 3');
  console.log('This only runs if x > 3');
}

// MISTAKE 2: Confusing assignment (=) with comparison (==)
console.log('\n\nMISTAKE: Using = instead of ==');
let value2 = 5;
if (value2 = 10) {  // This ASSIGNS 10 to value2, doesn't compare!
  console.log('This always runs because assignment returns 10');
}
console.log('value2 is now:', value2);  // 10 (changed!)

console.log('\nCORRECT: Use == or === for comparison');
let value3 = 5;
if (value3 === 10) {
  console.log('This does not run');
} else {
  console.log('value3 is still:', value3);  // 5 (unchanged)
}

// MISTAKE 3: Missing break in switch (fall-through)
console.log('\n\nMISTAKE: Forgetting break in switch');
const color = 'red';
switch (color) {
  case 'red':
    console.log('You chose red');
    // Missing break!
  case 'green':
    console.log('You chose green');
    // Missing break!
  case 'blue':
    console.log('You chose blue');  // This runs even though color is 'red'
    break;
}

console.log('\nCORRECT: Always include break (unless intentional fall-through)');
const color2 = 'red';
switch (color2) {
  case 'red':
    console.log('You chose red');
    break;
  case 'green':
    console.log('You chose green');
    break;
  case 'blue':
    console.log('You chose blue');
    break;
}

// MISTAKE 4: Not handling all cases in switch
console.log('\n\nMISTAKE: Not handling all possible cases');
const grade = 'X';
switch (grade) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  case 'C':
    console.log('Average');
    break;
  // Missing case for 'D', 'F', or invalid grades
}
console.log('If grade is "X", nothing happens');

console.log('\nCORRECT: Use default case');
const grade2 = 'X';
switch (grade2) {
  case 'A':
    console.log('Excellent');
    break;
  case 'B':
    console.log('Good');
    break;
  case 'C':
    console.log('Average');
    break;
  default:
    console.log('Invalid grade');
}

// MISTAKE 5: Truthy/falsy confusion
console.log('\n\nMISTAKE: Confusing truthy/falsy values');
const items = [];
if (items) {
  console.log('items exists and is truthy');  // Runs! (empty array is truthy)
}

console.log('\nCORRECT: Check length or use explicit comparison');
if (items.length > 0) {
  console.log('items has elements');
} else {
  console.log('items is empty');  // This runs
}


console.log('\n=== JAVASCRIPT QUIRKS ===\n');

// QUIRK 1: [] == false is true but [] is truthy
console.log('QUIRK 1: Empty array is truthy but [] == false is true');
console.log('[] == false:', [] == false);      // true (type coercion)
console.log('[] === false:', [] === false);    // false (no coercion)
console.log('if ([]):', !![]); // true (array is truthy)

const arr = [];
if (arr) {
  console.log('Empty array is truthy in if statement');  // Runs
}
if (arr == false) {
  console.log('But [] == false is true');  // Also runs!
}

// QUIRK 2: NaN is not equal to NaN
console.log('\nQUIRK 2: NaN !== NaN');
console.log('NaN === NaN:', NaN === NaN);  // false
console.log('NaN == NaN:', NaN == NaN);    // false

// Correct way to check for NaN
const result2 = parseInt('hello');
if (isNaN(result2)) {
  console.log('result is NaN');  // Runs
}

// QUIRK 3: switch uses strict comparison (===)
console.log('\nQUIRK 3: switch uses === not ==');
const value4 = '5';
switch (value4) {
  case 5:
    console.log('Number 5');
    break;
  case '5':
    console.log('String "5"');  // This runs (strict comparison)
    break;
}

// QUIRK 4: Loose vs strict equality in conditionals
console.log('\nQUIRK 4: == causes unexpected results');
console.log('0 == false:', 0 == false);               // true
console.log('"" == false:', '' == false);             // true
console.log('null == undefined:', null == undefined); // true
console.log('"0" == false:', '0' == false);           // true

console.log('\nUsing === prevents these surprises:');
console.log('0 === false:', 0 === false);               // false
console.log('"" === false:', '' === false);             // false
console.log('null === undefined:', null === undefined); // false

// QUIRK 5: Falsy values that aren't obvious
console.log('\nQUIRK 5: -0 is falsy');
console.log('!!(-0):', !!(-0));          // false
console.log('!!0:', !!0);                // false
console.log('-0 === 0:', -0 === 0);      // true (they're equal)


console.log('\n=== PRACTICE EXERCISES ===\n');

console.log('--- EXERCISE 1: If/Else Logic ---');
console.log('Problem: Create a traffic light system that returns action based on color.\n');

function getTrafficLightAction(color) {
  if (color === 'red') {
    return 'STOP - do not proceed';
  } else if (color === 'yellow') {
    return 'CAUTION - prepare to stop';
  } else if (color === 'green') {
    return 'GO - proceed with caution';
  } else {
    return 'INVALID - unknown color';
  }
}

console.log('Solution:');
console.log('Green:', getTrafficLightAction('green'));   // GO - proceed with caution
console.log('Red:', getTrafficLightAction('red'));       // STOP - do not proceed
console.log('Unknown:', getTrafficLightAction('blue'));  // INVALID - unknown color

console.log('\nExplanation:');
console.log('- We use if-else if-else structure for multiple exclusive conditions');
console.log('- Each branch returns immediately, no fall-through');
console.log('- We use default else for unexpected inputs\n');


console.log('--- EXERCISE 2: Switch Statement ---');
console.log('Problem: Convert weather condition to activity recommendation.\n');

function getActivityRecommendation(weather) {
  let activity;
  weather = weather.toLowerCase();
  
  switch (weather) {
    case 'sunny':
    case 'clear':
      activity = 'Go for outdoor activities - hiking, picnic, or beach';
      break;
    case 'rainy':
    case 'stormy':
      activity = 'Stay indoors - watch movies, read, or indoor sports';
      break;
    case 'cloudy':
    case 'overcast':
      activity = 'Flexible - indoor or outdoor depending on temperature';
      break;
    case 'snowy':
      activity = 'Winter activities - skiing, sledding, or snowball fights';
      break;
    default:
      activity = 'Unknown weather condition';
  }
  return activity;
}

console.log('Solution:');
console.log('Sunny:', getActivityRecommendation('sunny'));      // Go for outdoor activities...
console.log('Rainy:', getActivityRecommendation('RAINY'));      // Stay indoors...
console.log('Snowy:', getActivityRecommendation('snowy'));      // Winter activities...
console.log('Unknown:', getActivityRecommendation('foggy'));    // Unknown weather condition

console.log('\nExplanation:');
console.log('- We use switch for multiple related conditions');
console.log('- We group related cases (sunny/clear) to share the same action');
console.log('- We convert input to lowercase for case-insensitive matching');
console.log('- Each group has only one break statement\n');


console.log('--- EXERCISE 3: Ternary and Short-Circuit Evaluation ---');
console.log('Problem: Validate and process user registration data.\n');

function validateRegistration(data) {
  const isValidName = data.name && data.name.length > 2;
  const isValidEmail = data.email && data.email.includes('@');
  const isValidAge = data.age >= 18 && data.age <= 120;
  
  // Using ternary for final result
  const isFullyValid = isValidName && isValidEmail && isValidAge;
  const status = isFullyValid ? 'Registration successful' : 'Registration failed';
  
  // Using short-circuit to build error message
  const errors = [];
  !isValidName && errors.push('Name must be longer than 2 characters');
  !isValidEmail && errors.push('Email must contain @');
  !isValidAge && errors.push('Age must be between 18 and 120');
  
  return {
    status: status,
    valid: isFullyValid,
    errors: errors.length > 0 ? errors : []
  };
}

console.log('Solution:');
console.log('Valid user:', validateRegistration({
  name: 'Alice Smith',
  email: 'alice@example.com',
  age: 25
}));

console.log('\nInvalid user:', validateRegistration({
  name: 'Bob',
  email: 'invalid-email',
  age: 16
}));

console.log('\nExplanation:');
console.log('- We use multiple ternary/logical operations for validation');
console.log('- We use && for short-circuit evaluation to collect errors');
console.log('- Only adding error messages for invalid fields (&&)');
console.log('- We return an object with multiple pieces of information');
