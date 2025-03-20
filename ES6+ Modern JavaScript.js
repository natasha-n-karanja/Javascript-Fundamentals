// Destructuring (const {name} = obj)
const person = {name: "Alice", age: 25};
const {name} = person;
console.log(name); // "Alice"

// Destructuring Arrays
const colors = ["red", "green", "blue"];

const [first, second] = colors;
console.log(first);  // "red"
console.log(second); // "green"

// Template literals (`Hello, ${name}!`)
const nam = "Alice";
const age = 25;

// Using template literals
console.log(`Hello, my name is ${name} and I am ${age} years old.`);

//multiline string
// const multilineString = `
// const message = `This is a
// multiline string.`;
// console.log(message);



//Spread/rest operators (...)
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4, 5];

console.log(newNumbers); // [1, 2, 3, 4, 5]

//Merge objects
const persn = { name: "Alice", age: 25 };
const updatedPerson = { ...person, city: "New York" };

console.log(updatedPerson); // { name: "Alice", age: 25, city: "New York" }

//Rest Operator (...)
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3, 4)); // 10

//Modules (import/export)
export function add(a, b) {
  return a + b;
}

export const PI = 3.14159;

//Importing in another file (file: main.js)
import { add, PI } from "./math.js";

console.log(add(2, 3)); // 5
console.log(PI); // 3.14159

//Default export:
export default function multiply(a, b) {
  return a * b;
}

//Importing a default export:
import multiply from "./math.js";

console.log(multiply(2, 3)); // 6