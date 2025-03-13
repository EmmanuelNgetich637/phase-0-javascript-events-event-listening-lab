// Define the addingEventListener function
function addingEventListener() {
    // Select the DOM element to which the event listener will be added
    const button = document.getElementById('button');

    // Add an event listener to the button
    button.addEventListener('click', function() {
        // This function will be executed when the button is clicked
        alert('Button was clicked!');
    });
}

// Call the function to add the event listener
addingEventListener();