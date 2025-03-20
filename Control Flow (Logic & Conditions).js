// if-else statements
if (condition) {
  // Code to execute if condition is true
} else {
  // Code to execute if condition is false
}

let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
} else {
    console.log("You are a minor.");
}

// ​Ternary operator (condition ? true : false)
condition ? expressionIfTrue : expressionIfFalse;

let isAdult = age >= 18? "You are an adult." : "You are a minor.";
console.log(isAdult);

// ​switch statements
switch (expression) {
  case value1:
    // Code to execute if expression is value1
    break;
  case value2:
    // Code to execute if expression is value2
    break;
  default:
    // Code to execute if expression is not matched
}

example:
let day = "Monday";

switch (day) {
    case "Monday":
        console.log("Start of the week!");
        break;
    case "Friday":
        console.log("Weekend is near!");
        break;
    default:
        console.log("A regular day.");
}

// Loops (for, while, forEach, map)
//for loop
for (let i = 1; i <= 5; i++) {
  console.log(i); // output 1 2 3 4 5
}

//While loops
let i = 1;
while (i <= 5) {
  console.log(i); // output 1 2 3 4 5
  i++;
}

// forEach loop
let numbers = [1, 2, 3, 4, 5];
numbers.forEach(function(number) {
  console.log(number); // output 1 2 3 4 5
});

// Map loop
let nums = [1, 2, 3, 4, 5];
let squares = numbers.map(function(number) {
  return number * number;
});
console.log(squares); // output: [1, 4, 9, 16, 25]