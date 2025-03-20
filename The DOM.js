// Selecting elements (document.querySelector, getElementById)
// document.querySelector("selector") → Selects the first matching element (e.g., class, ID, tag)
// document.querySelectorAll("selector") → Selects all matching elements (returns a NodeList)
// document.getElementById("id") → Selects an element by its id
// document.getElementsByClassName("class") → Selects all elements with a class (returns an HTMLCollection)
// document.getElementsByTagName("tag") → Selects all elements of a tag type (returns an HTMLCollection)

const title = document.querySelector("h1"); // Selects the first <h1>
const button = document.getElementById("myButton"); // Selects element with id="myButton"
const allParagraphs = document.querySelectorAll("p"); // Selects all <p> elements


//Modifying elements (.innerText, .innerHTML, .style)
// .innerText → Changes or gets the visible text of an element.
// .innerHTML → Changes or gets the HTML inside an element.
// .style.property → Modifies the inline CSS of an element.

const heading = document.querySelector("h1");
heading.innerText = "Hello, JavaScript!"; // Changes text

const content = document.getElementById("content");
content.innerHTML = "<strong>Bold text</strong>"; // Inserts HTML content

const box = document.querySelector(".box");
box.style.backgroundColor = "blue"; // Changes background color
box.style.fontSize = "20px"; // Changes font size

// //Handling events (click, input, submit)
// click → When an element is clicked.
// input → When a user types in an input field.
// submit → When a form is submitted.

//click
const buttons = document.querySelectorAll(".button");
buttons.forEach(button => {
  button.addEventListener("click", () => {
    console.log("Button clicked!");
  });
});

//input
const input = document.getElementById("myInput");
input.addEventListener("input", () => {
  console.log(input.value); // Logs the current input value
});

//submit
const form = document.getElementById("myForm");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // Prevent form from submitting
  console.log("Form submitted!");
});

//Event delegation
document.querySelector("#buttonContainer").addEventListener("click", function (event) {
  if (event.target.tagName === "BUTTON") {
      alert("Button Clicked: " + event.target.innerText);
  }
});

