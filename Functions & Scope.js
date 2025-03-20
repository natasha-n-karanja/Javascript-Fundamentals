// Function declarations & expressions
//Function Declaration
function greet() {
  console.log("Hello!");
}

// Function Expression
let sayHello = function() {
  console.log("Hello!");
};

// Arrow functions (()=>{})
  greet = () => console.log("Hello!");
  sayHello = () => console.log("Hello!");

  //Arrow Function with Parameters
  let greetPerson = (name) => console.log(`Hello, ${name}!`);
  greetPerson("John Doe");

// Parameters and return values
function multiply(a, b) {
  return a * b;
}
console.log(multiply(4, 5)); // Output: 20

//Default parameters
function greet(name = "Guest") {
  console.log(`Hello, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet("John Doe"); // Output: Hello, John Doe!

// Scope (global, local, block)
//Global
let globalVar = "I am global";

function showGlobal() {
    console.log(globalVar);
}

showGlobal(); // Output: I am global
console.log(globalVar); // Output: I am global

//Local
function showLocal() {
  let localVar = "I am local";
  console.log(localVar);
}
showLocal(); // Output: I am local
console.log(localVar); // Error: localVar is not defined

//Block scope
{
  let blockScoped = "Only inside this block";
  console.log(blockScoped); // Works
}
console.log(blockScoped); // Error: blockScoped is not defined

// Closures
function createCounter() {
  let count = 0;
  return function() {
      count++;
      return count;
  };
}

const counter1 = createCounter();
console.log(counter1()); //1
console.log(counter1()); // 2
console.log(counter1()); // 3
