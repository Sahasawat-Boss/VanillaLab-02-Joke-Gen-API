// Get the joke display element and the button by their IDs
const displayJoke = document.getElementById("display-joke");
const button = document.getElementById("getJoke");

// Add a click event listener to the button
button.addEventListener("click", getRandomJoke);

// Function to fetch a random Chuck Norris joke
function getRandomJoke() {
    const ajax = new XMLHttpRequest(); // Create a new XMLHttpRequest object
    const url = "https://api.chucknorris.io/jokes/random"; // API endpoint URL

    ajax.open("GET", url, true); // Set up a GET request (true = asynchronous)

    // Define what happens when the request state changes
    ajax.onreadystatechange = () => {
        // If the request is successful and completed
        if (ajax.status === 200 && ajax.readyState === 4) {
            let data = JSON.parse(ajax.responseText); // Parse the JSON response
            displayJoke.innerHTML = `${data.value}`; // Display the joke text in the page
        } else {
            // If not successful, handle the error
            ajax.onerror = onerror(); // Call error handler
        }
    };

    ajax.send(); // Send the request
}

// Function to handle errors when request fails
function onerror() {
    displayJoke.textContent = `Something Went Wrong :(`;
}



// console.log(displayJoke);
// console.log(button);