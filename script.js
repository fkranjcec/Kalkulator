function appendNumber(number) {
  document.getElementById("display").value += number;
}

function appendOperator(operator) {
  const display = document.getElementById("display").value;

  if (
    operator === "-" &&
    (display === "" || isOperator(display[display.length - 1]))
  ) {
    document.getElementById("display").value += operator;
  } else if (display && !isNaN(display[display.length - 1])) {
    document.getElementById("display").value += operator;
  }
}

function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}

function appendDecimal() {
  const display = document.getElementById("display").value;
  const lastNumber = display.split(/[\+\-\*\/]/).pop();

  if (!lastNumber.includes(".")) {
    document.getElementById("display").value += ".";
  }
}

function clearDisplay() {
  document.getElementById("display").value = "";
}

function calculate() {
  try {
    let result = eval(document.getElementById("display").value);
    document.getElementById("display").value = result;
  } catch (error) {
    document.getElementById("display").value = "Error. Try again!";
  }
}

document.addEventListener("keydown", function (event) {
  const key = event.key;

  if (!isNaN(key)) {
    appendNumber(key);
  } else if (key === "+" || key === "-" || key === "*" || key === "/") {
    appendOperator(key);
  } else if (key === "." || key === ",") {
    appendDecimal();
  } else if (key === "Enter") {
    calculate();
  } else if (key === "Escape") {
    clearDisplay();
  }
});
