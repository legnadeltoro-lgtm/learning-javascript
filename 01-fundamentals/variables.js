// Variables and data types

//In JavaScript, variables act as containers for storing data that you can access and modify throughout your program. You can think of variables as boxes that hold values. With variables, you can keep track of things like numbers or text and refer to these values whenever you need them in your program.

//One way to declare a variable in JavaScript is to use the let keyword. For example 

let age; //This variable doesn't have a value assigned to it. It's unidefined

console.log(age);

//Now if we assign a value , for exmple , 40 ,the results at console will be 40

age=40;

console.log(age);

//Your variable names should describe what the data represents. For example, instead of using a name like x, a more descriptive name such as age or points makes your code easier to understand.

//Variable names are case-sensitive, meaning the word age in all lowercase and the word Age with a capital A are considered different variables.

//This is why it's important to stick with a consistent naming convention like camelCase. camelCase is where the first word is all lowercase and each subsequent word starts with an uppercase letter.

//For example 

let schoolName="Monster High";
let character='a';
let piConstant=3.14;


console.log("My school is "+schoolName);

//You should also avoid using special characters like exclamation points (!) or at (@) symbols, in your variable names. It is best to keep variable names readable by using letters, numbers, underscores, or dollar signs.

//In modern JavaScript, let and const are the preferred ways to declare variables, but they differ in how they handle value assignment and reassignment.The let keyword allows you to declare variables that can be updated or reassigned later. You can think of let as a flexible container – once you've stored a value in it, you can change that value as needed throughout your program.

//On the other hand, const is used to declare variables that are constant. Once you assign a value to a variable declared with const, you cannot reassign it.This makes const ideal for values that you don't want to change accidentally during the execution of your program.

//Variables declared with const must be assigned a value at the time of declaration. If you try to declare a const variable without assigning it a value, you will get an error:




