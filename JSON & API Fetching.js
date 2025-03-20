// Fetching data using fetch() or Axios
fetch('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => response.json())  // Convert response to JSON
  .then(data => console.log(data))    // Handle the data
  .catch(error => console.error('Error:', error)); // Handle errors

//GET Request with Async/Await
async function getData() {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error('Error:', error);
  }
}
getData();

//Handling responses (.json(), .text())

// JSON Response: response.json()
// Text Response: response.text()

fetch('https://example.com/some-text-file.txt')
  .then(response => response.text())
  .then(data => console.log(data))
  .catch(error => console.error('Error:', error));
  
// Understanding API requests (GET, POST)
//Making a POST Request using fetch
fetch('https://jsonplaceholder.typicode.com/posts', {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    title: 'Hello World',
    body: 'This is a test post',
    userId: 1
  })
})
.then(response => response.json())
.then(data => console.log(data))
.catch(error => console.error('Error:', error));

//Using Axios (Alternative to fetch())
// Installing Axios 
// npm install axios

// GET Request with Axios
  axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then(response => console.log(response.data))
  .catch(error => console.error('Error:', error));

// POST Request with Axios
    axios.post('https://jsonplaceholder.typicode.com/posts', {
      title: 'Hello World',
      body: 'This is a test post',
      userId: 1
    })
    .then(response => console.log(response.data))
    .catch(error => console.error('Error:', error));