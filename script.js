// List of colors
const colors = ["red", "blue", "green", "yellow", "purple", "orange", "pink"];

// Select elements
const colorDisplay = document.getElementById("colorDisplay");
const colorButtons = document.getElementById("colorButtons");
const message = document.getElementById("message");

// Pick a random color
let correctColor = colors[Math.floor(Math.random() * colors.length)];

// Display the correct color in the instructions
colorDisplay.textContent = correctColor;

// Generate color buttons
colors.forEach(color => {
    const button = document.createElement("button");
    button.style.backgroundColor = color;
    button.addEventListener("click", () => checkColor(color));
    colorButtons.appendChild(button);
});

// Function to check if the guessed color is correct
function checkColor(selectedColor) {
    if (selectedColor === correctColor) {
        message.textContent = "Correct! You guessed the color!";
        message.style.color = "green";
    } else {
        message.textContent = "Wrong! Try again.";
        message.style.color = "red";
    }
}
