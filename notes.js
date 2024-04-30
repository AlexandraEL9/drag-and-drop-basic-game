var b = 0; // Initialize a variable to count the number of drag-and-drop operations
b++; // Increment the count (This statement will always execute immediately, making 'b' always equal to 1)

// Functions to handle drag start events for draggable elements
function dragStart001(event) {
    event.dataTransfer.setData("choice001", event.target.id); // Set data to be transferred during drag-and-drop
}

// Functions to handle drag start events for draggable elements (similar functions for other elements)
function dragStart002(event) {
    event.dataTransfer.setData("choice002", event.target.id);
}

function dragStart003(event) {
    event.dataTransfer.setData("choice003", event.target.id);
}

function dragStart004(event) {
    event.dataTransfer.setData("choice004", event.target.id);
}

function dragStart005(event) {
    event.dataTransfer.setData("choice005", event.target.id);
}

// Functions to allow dropping of draggable elements into drop zones
function allowDrop001(event) {
    event.preventDefault(); // Prevent default behavior of the browser
}

// Functions to allow dropping of draggable elements into drop zones (similar functions for other drop zones)
function allowDrop002(event) {
    event.preventDefault();
}

function allowDrop003(event) {
    event.preventDefault();
}

function allowDrop004(event) {
    event.preventDefault();
}

function allowDrop005(event) {
    event.preventDefault();
}

// Functions to handle dropping of draggable elements into drop zones
function put001(event) {
    var data = event.dataTransfer.getData("choice001"); // Retrieve data from drag-and-drop operation
    event.target.appendChild(document.getElementById(data)); // Append the dragged element to the drop zone
    score001.innerHTML = b++; // Increment the count and update the displayed score
    place001.innerHTML = "1 = A"; // Update the text content of a related element
}

// Functions to handle dropping of draggable elements into drop zones (similar functions for other drop zones)
function put002(event) {
    var data = event.dataTransfer.getData("choice002");
    event.target.appendChild(document.getElementById(data));
score001.innerHTML = b++;
        place002.innerHTML = "2 = B";
}

function put003(event) {
    var data = event.dataTransfer.getData("choice003");
    event.target.appendChild(document.getElementById(data));
score001.innerHTML = b++;
        place003.innerHTML = "3 = C";
}

function put004(event) {
    var data = event.dataTransfer.getData("choice004");
    event.target.appendChild(document.getElementById(data));
score001.innerHTML = b++;
        place004.innerHTML = "4 = D";
}

function put005(event) {
    var data = event.dataTransfer.getData("choice005");
    event.target.appendChild(document.getElementById(data));
score001.innerHTML = b++;
        place005.innerHTML = "5 = E";

// Functions to handle dropping events for drop zones (preventing default behavior)
function drop001(event) {
    event.preventDefault();
}

function drop002(event) {
    event.preventDefault();
}

function drop003(event) {
    event.preventDefault();

}

function drop004(event) {
    event.preventDefault();
}

function drop005(event) {
    event.preventDefault();
}

// Function to submit the form or perform further actions after drag-and-drop operations
function submit001() {
    if (b > 5) { // Check if the required number of drag-and-drop operations have been completed
        message001.innerHTML = "Congratulations."; // Display a message indicating successful completion
    }
}
