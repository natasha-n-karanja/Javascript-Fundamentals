// Callbacks
function fetchData(callback) {
  setTimeout(() => {
      console.log("Data fetched!");
      callback(); // Executing the callback function
  }, 2000);
}

function processData() {
  console.log("Processing data...");
}

// Using the fetchData function with a callback
fetchData(processData);

// Promises (.then(), .catch())
function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          let success = true;
          if (success) {
              resolve("Data fetched successfully!");
          } else {
              reject("Error fetching data!");
          }
      }, 2000);
  });
}

// Handling the Promise
fetchData()
  .then(response => console.log(response))  // Runs if resolved
  .catch(error => console.log(error));      // Runs if rejected

//async/await 
async function fetchData() {
  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve("Data fetched successfully!");
      }, 2000);
  });
}

async function getData() {
  console.log("Fetching data...");
  let data = await fetchData();  // Waits for fetchData() to resolve
  console.log(data);
}

getData();