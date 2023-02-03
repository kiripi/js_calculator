// Buttons
const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");

// Display
const firstNumber = document.querySelector(".number");
const secondNumber = document.querySelector(".result");
const operator = document.querySelector(".operator");

// Functions
function changeNumber() {
  secondNumber.innerHTML += this.textContent;
}

function operate() {}

function result() {}

// Event Listeners
numBtn.forEach((button) => {
  button.addEventListener("click", changeNumber);
});
