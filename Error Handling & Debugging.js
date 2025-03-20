// try...catch
try {
  // Code that may cause an error
} catch (error) {
  // Code to handle the error
}

// Handling an Error
try {
  let result = x + 10; // 'x' is not defined (ReferenceError)
} catch (error) {
  console.log("An error occurred:", error.message);
}

//Using finally
try {
  let num = 10;
  console.log(num.toUpperCase()); // TypeError: toUpperCase is not a function
} catch (error) {
  console.error("Oops! Something went wrong:", error.message);
} finally {
  console.log("This runs no matter what!");
} 

// Console Debugging (console.log(), console.error())

// console.log()	Prints normal messages (for debugging)
// console.error()	Prints error messages in red
// console.warn()	Prints warning messages in yellow
// console.table()	Displays arrays/objects as a table
// console.time() & console.timeEnd()	Measures execution time

//Debugging with console.log()
let name = "John";
console.log("User name is:", name);

//Using console.error()
console.error("This is an error message!");

//Using console.table()
let users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 }
];
console.table(users);