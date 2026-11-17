
// Select HTML elements
const userInput = document.getElementById("userInput");
const checkBtn = document.getElementById("checkBtn");
const result = document.getElementById("result");

// Create checkInput function
function checkInput() {

    // Read the input
    const inputValue = userInput.value.trim();

    // Check empty input
    if (inputValue === "") {
        result.textContent = "Please enter a valid number!";
    }

    // Check invalid number
    else if (!Number.isFinite(Number(inputValue))) {
        result.textContent = "Please enter a valid number!";
    }

    // Check number lower than 10
    else if (Number(inputValue) < 10) {
        result.textContent = "The number is lower than 10";
    }

    // Check number higher than 10
    else if (Number(inputValue) > 10) {
        result.textContent = "The number is higher than 10";
    }

    // Check number equal to 10
    else {
        result.textContent = "The number is equal to 10";
    }
}

// Add click event listener
checkBtn.addEventListener("click", checkInput);
