// Local Storage (localStorage, sessionStorage)
// localStorage → Stores data with no expiration (persists even after closing the browser).
// sessionStorage → Stores data for the session (disappears when the browser is closed).

// Store data
localStorage.setItem("name", "John");

// Retrieve data
console.log(localStorage.getItem("name")); // Output: John

// Remove data
localStorage.removeItem("name");

// Clear all stored data
localStorage.clear();

// Using sessionStorage

// Store data
sessionStorage.setItem("sessionKey", "TemporaryData");

// Retrieve data
console.log(sessionStorage.getItem("sessionKey")); // Output: TemporaryData

// Remove data
sessionStorage.removeItem("sessionKey");

// Clear all stored data
sessionStorage.clear();

// Differences

// Feature	-- Data lifespan  ,  Clears on close
// localStorage --- Permanent ,  No
// sessionStorage --- Only during session , Yes

//Cookies (document.cookie)
document.cookie = "username=John; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

// Reading a Cookie
console.log(document.cookie);

// Updating a Cookie
document.cookie = "username=Doe; expires=Fri, 31 Dec 2025 23:59:59 UTC; path=/";

// Deleting a Cookie
document.cookie = "username=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/";

//Handling form data
//Capturing User Input

{/* <form id="userForm">
  <input type="text" id="name" placeholder="Enter Name" required>
  <input type="email" id="email" placeholder="Enter Email" required>
  <button type="submit">Submit</button>
</form>

<script>
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevents form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;

    console.log("Name:", name);
    console.log("Email:", email);

    localStorage.setItem("userName", name);
    localStorage.setItem("userEmail", email);
});
</script> */}
