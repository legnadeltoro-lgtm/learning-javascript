/**
 * ========================================
 * JAVASCRIPT STRING EXERCISES - INTERMEDIATE LEVEL
 * ========================================
 *
 * Instructions: Implement each function according to the description.
 * Each exercise has test cases at the end to verify your solution.
 *
 * Rules:
 * - Don't use array methods (map, filter, reduce) unless specified
 * - Work mainly with string methods
 * - Think through each step before coding
 */

// ============================================================
// EXERCISE 1: MESSAGE ENCRYPTOR
// ============================================================
//
// Create a function that encrypts a message following these rules:
//
// 1. Reverse the entire string
// 2. Replace each vowel with a number: a=1, e=2, i=3, o=4, u=5
//    (both uppercase and lowercase)
// 3. Replace each consonant with the next consonant in the alphabet
//    (b→c, c→d, d→f, f→g, etc.) If it's 'z', go back to 'b'
// 4. Add '#' at the beginning and '#' at the end of the result
// 5. If the string has spaces, each space becomes '--'
//
// Step-by-step example with "Hola":
// Step 1 (reverse): "aloH"
// Step 2 (vowels to numbers): "1l4H"
// Step 3 (next consonants): "1m4J"  (l→m, H→J)
// Step 4 (add #): "#1m4J#"
//
// HINTS:
// - Create a string with consonants in order: "bcdfghjklmnpqrstvwxyz"
// - To find the next consonant, look up the index and add 1
// - If it's 'z', the next one is 'b'
// - Use toLowerCase() to compare regardless of case
// - But keep the original case when replacing consonants

function encryptMessage(message) {
    let reverseMessage=reverseMyMessage(message);
    let encryptMessage='';
    const vowels = "aeiouAEIOU";
    const numbers = "1234512345";
    const consonants = "bcdfghjklmnpqrstvwxyz"; 

    for (let index = 0; index < reverseMessage.length; index++) {
        let char=reverseMessage[index];

        if (char===' ') {
            encryptMessage+="--";
        }

        else if (vowels.includes(char)) {
            let indexVowel=vowels.indexOf(char);
            encryptMessage+=numbers[indexVowel];
            
        } 

        //1. Verificar si el char (en minúscula) está en consonantes 2. Guardar en un booleano: ¿es mayúscula? (char === char.toUpperCase())3. Guardar el char en minúscula en otra variable4. Buscar el índice de esa minúscula en consonantes 5. Si el índice es 'z' → siguiente = 'b'Si no → siguiente = consonantes[indice + 1] 6. Para el resultado final:- Si es mayúscula → siguiente.toUpperCase()Si no → siguiente (se queda minúscula)//

        else if (consonants.includes(String(char).toLowerCase())) {
            let isUpperCase= char === String(char).toUpperCase();
            let lowerCaseChar=String(char).toLowerCase();
            let indexConsonant=consonants.indexOf(lowerCaseChar);
            let nextChar= lowerCaseChar ==='z' ? 'b' : consonants[indexConsonant+1];
            encryptMessage+= isUpperCase ? nextChar.toUpperCase() : nextChar;
        }

        else{
            encryptMessage+=char;
        }
    
    }

    return encryptMessage=`#${encryptMessage}#`; 
}

function reverseMyMessage(message){
    let newMessage='';
    for (let index = message.length-1; index >=0; index--) {
        newMessage+=message[index];
        
    }
    return newMessage;
}

// Test cases:
console.log("\n=== EXERCISE 1: MESSAGE ENCRYPTOR ===\n");
console.log('Test 1 - "Hola":');
console.log("Expected: #1m4J#");
console.log("Your result:", encryptMessage("Hola"));
console.log("Correct?", encryptMessage("Hola") === "#1m4J#");

console.log('\nTest 2 - "Hola Mundo":');
console.log("Expected: #4dnum--1m4J#");
console.log("Your result:", encryptMessage("Hola Mundo"));
console.log("Correct?", encryptMessage("Hola Mundo") === "#4fp5N--1m4J#");

console.log('\nTest 3 - "xyz":');
console.log("Expected: #bcd#");
console.log("Your result:", encryptMessage("xyz"));
console.log("Correct?", encryptMessage("xyz") === "#bzy#");

console.log('\nTest 4 - "aeiou":');
console.log("Expected: #54321#");
console.log("Your result:", encryptMessage("aeiou"));
console.log("Correct?", encryptMessage("aeiou") === "#54321#");

// ============================================================
// EXERCISE 2: PASSWORD VALIDATOR
// ============================================================
//
// Create a function that validates if a password is strong.
// It should return an object with:
//   - isValid: boolean (true if ALL rules pass)
//   - score: number (0-5, how many rules it passes)
//   - errors: array of strings (messages for each failed rule)
//   - strength: string ("Weak", "Medium", "Strong", "Very Strong")
//
// The password rules are:
// 1. Must be at least 8 characters long
// 2. Must contain at least one uppercase letter
// 3. Must contain at least one lowercase letter
// 4. Must contain at least one number
// 5. Must contain at least one special character (!@#$%^&*)
//
// Bonus rule (optional):
// 6. Cannot contain the word "password" (case insensitive)
//
// Strength levels:
// - 0-2 rules passed: "Weak"
// - 3 rules passed: "Medium"
// - 4 rules passed: "Strong"
// - 5 rules passed: "Very Strong"
//
// HINTS:
// - Create a string with all special characters
// - Use a loop to check each character
// - Check each rule separately and store results
// - Use includes() to check for forbidden words
// - Build the errors array as you go

function validatePassword(password) {
  // Write your code here
}

// Test cases:
console.log("\n=== EXERCISE 2: PASSWORD VALIDATOR ===\n");

console.log('Test 1 - "abc":');
const result1 = validatePassword("abc");
console.log('Expected: isValid: false, score: 1, strength: "Weak"');
console.log("Your result:", JSON.stringify(result1, null, 2));

console.log('\nTest 2 - "Abcdefg1":');
const result2 = validatePassword("Abcdefg1");
console.log('Expected: isValid: false, score: 4, strength: "Strong"');
console.log("Your result:", JSON.stringify(result2, null, 2));

console.log('\nTest 3 - "MyP@ssw0rd":');
const result3 = validatePassword("MyP@ssw0rd");
console.log('Expected: isValid: true, score: 5, strength: "Very Strong"');
console.log("Your result:", JSON.stringify(result3, null, 2));

console.log('\nTest 4 - "Password123!":');
const result4 = validatePassword("Password123!");
console.log('Expected: isValid: false (contains "password"), score: 5 or less');
console.log("Your result:", JSON.stringify(result4, null, 2));

// ============================================================
// EXERCISE 3: TEXT FORMATTER
// ============================================================
//
// Create a function that formats a text string according to these rules:
//
// 1. Trim whitespace from start and end
// 2. Replace multiple consecutive spaces with a single space
// 3. Capitalize the first letter of each sentence
//    (sentences end with . ! ?)
// 4. If a word is ALL CAPS and has 3 or more letters, keep it as is
//    (like acronyms: NASA, HTML, CSS)
// 5. Add proper spacing after punctuation marks:
//    - One space after . , ! ? ; :
//    - No space before punctuation marks
// 6. Format the result to fit in a width of 40 characters per line
//    (split into lines of max 40 chars, but don't cut words in half)
//
// The function should return:
//   - formatted: the complete formatted text with line breaks
//   - stats: object with { characters, words, sentences, lines }
//
// HINTS:
// - First clean and normalize the text
// - Then split into sentences
// - Process each sentence to capitalize first letter
// - To wrap text, loop through words and add them to the current line
// - If adding the next word exceeds 40 chars, start a new line
// - Count characters without spaces for the stats

function formatText(text) {
  // Write your code here
}

// Test cases:
console.log("\n=== EXERCISE 3: TEXT FORMATTER ===\n");

const testText =
  "  hello   world...this is   a TEST.   NASA and HTML are ACRONYMS!do you understand?  yes, i do  ";

console.log("Test 1 - Messy text:");
const formatted1 = formatText(testText);
console.log("Your result:");
console.log(formatted1);
console.log("Stats should show correct word and sentence counts");

console.log("\nTest 2 - Short text:");
const formatted2 = formatText("hi");
console.log("Your result:");
console.log(formatted2);

console.log("\nTest 3 - Empty string:");
const formatted3 = formatText("");
console.log("Your result:");
console.log(formatted3);

console.log("\nTest 4 - Long word test:");
const longText =
  "This sentence has a supercalifragilisticexpialidocious word inside it that should not break.";
const formatted4 = formatText(longText);
console.log("Your result:");
console.log(formatted4);

// ============================================================
// BONUS CHALLENGE: Combine exercises 1 and 2
// ============================================================
//
// Create a function that takes a message and a password.
// It validates the password first, and if it's "Strong" or better,
// it encrypts the message. Otherwise, it returns an error.
//
// Return an object with:
//   - success: boolean
//   - encryptedMessage: string (if successful) or null
//   - passwordStrength: string
//   - message: string describing the result

function secureEncrypt(message, password) {
  // Write your code here
  // HINT: You can call your validatePassword and encryptMessage functions!
}

// Test cases for bonus:
console.log("\n=== BONUS: SECURE ENCRYPT ===\n");

console.log("Test 1 - Strong password:");
console.log(secureEncrypt("Hola Mundo", "MyP@ssw0rd"));

console.log("\nTest 2 - Weak password:");
console.log(secureEncrypt("Hola Mundo", "abc"));

console.log("\n=== ALL EXERCISES COMPLETED ===");
