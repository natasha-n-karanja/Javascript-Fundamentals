//Creating and modifying arrays (push, pop, shift, unshift, slice, splice)

// .push()	Adds an element to the end of an array.
// .pop()	Removes the last element of an array.
// .unshift()	Adds an element to the beginning of an array.
// .shift()	Removes the first element of an array.
// .slice()  Returns a shallow copy of a portion of an array.
// .splice()  Adds/removes elements from an array.

let numbers = [1, 2, 3];

numbers.push(4);   // [1, 2, 3, 4]
numbers.pop();     // [1, 2, 3]
numbers.unshift(0); // [0, 1, 2, 3]
numbers.shift();   // [1, 2, 3]
console.log(numbers);

//Extracting & Modifying Elements
// .slice(start, end)	Extracts part of an array (without modifying the original array).
// .splice(start, deleteCount, item1, item2, ... )	Removes or replaces elements in an array.

let fruits = ["Apple", "Banana", "Cherry", "Date"];

console.log(fruits.slice(1, 3)); // ["Banana", "Cherry"]

fruits.splice(2, 1, "Grapes"); // ["Apple", "Banana", "Grapes", "Date"]
console.log(fruits);


//Looping over arrays (map, filter, reduce, forEach)
//forEach() - Iterates Over Elements
let numbs = [1, 2, 3];
numbers.forEach(num => console.log(num * 2)); // 2, 4, 6

// map() - Creates a New Array
let doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6]

//filter() - Creates a New Array with Filtered Values
let evenNumbers = numbers.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2]

// reduce() - Reduces Array to a Single Value
let sum = numbers.reduce((acc, num) => acc + num, 0);
console.log(sum); // 6

//Creating objects and accessing properties
let person = {
  name: "Alice",
  age: 25,
  city: "New York"
};

console.log(person.name);  // "Alice"
console.log(person["age"]); // 25

//object methods (Object.keys(), Object.values())
// Object.keys(obj)	Returns an array of object keys.
// Object.values(obj)	Returns an array of object values.

console.log(Object.keys(person));  // ["name", "age", "city"]
console.log(Object.values(person)); // ["Alice", 25, "New York"]