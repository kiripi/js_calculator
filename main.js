// Buttons
const numBtn = document.querySelectorAll(".num");
const operatorBtn = document.querySelectorAll(".operator");
const clearBtn = document.querySelector(".clear");
const equalBtn = document.querySelector(".equals");
const deleteBtn = document.querySelector(".delete");

// Display
const firstNumber = document.querySelector(".number p");
const secondNumber = document.querySelector(".result");
const operatorSign = document.querySelector(".sign");

let result = "";

// Functions
function changeNumber() {
  if (this.textContent === "." && secondNumber.innerHTML.includes(".")) return;
  if (this.textContent === "." && secondNumber.innerHTML === "")
    return (secondNumber.innerHTML = "0.");
  secondNumber.innerHTML += this.textContent;
}

function operate() {
  if (secondNumber.innerHTML === "" && this.textContent === "-") {
    secondNumber.innerHTML = "-";
    return;
  }
  firstNumber.innerHTML = secondNumber.innerHTML;
  operatorSign.innerHTML = this.textContent;
  secondNumber.innerHTML = "";
}

function showResult() {
  if (firstNumber.innerHTML === "" || secondNumber.innerHTML === "") return;

  let x = Number(secondNumber.innerHTML);
  let y = Number(firstNumber.innerHTML);
  let operator = operatorSign.innerHTML;

  switch (operator) {
    case "+":
      result = x + y;
      break;
    case "-":
      result = y - x;
      break;
    case "*":
      result = x * y;
      break;
    case "/":
      result = y / x;
      break;
    case "^":
      result = y ** x;
      break;
    case "%":
      result = y % x;
      break;
  }
  secondNumber.innerHTML = result;
  firstNumber.innerHTML = "";
  operatorSign.innerHTML = "";
}

function deleteLastChar() {
  secondNumber.innerHTML = secondNumber.innerHTML.slice(0, -1);
}

function clearDisplay() {
  result = "";
  firstNumber.innerHTML = "";
  secondNumber.innerHTML = "";
  operatorSign.innerHTML = "";
}

// Event Listeners
operatorBtn.forEach((button) => button.addEventListener("click", operate));

equalBtn.addEventListener("click", showResult);

clearBtn.addEventListener("click", clearDisplay);

deleteBtn.addEventListener("click", deleteLastChar);

numBtn.forEach((button) => {
  button.addEventListener("click", changeNumber);
});
