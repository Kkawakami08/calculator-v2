let a = 0;
let b = 0;
let result = 0;

const add = function (a, b) {
  result = a + b;
  return result;
};

const subtract = function (a, b) {
  result = a - b;
  return result;
};

// const sum = function (c) {
//   let result = 0;
//   c.forEach((item) => (result += item));
//   return result;
// };

const multiply = function (a, b) {
  result = a * b;
  return result;
};

const divide = function (a, b) {
  result = a / b;
  return result;
};

const power = function (a, b) {
  result = a ** b;
  return result;
};

const factorial = function (a) {
  result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

let operator = "";

const operate = function (operator, a, b) {
  if (operator === "add") {
    return (result = add(a, b));
  } else if (operator === "subtract") {
    return (result = subtract(a, b));
  } else if (operator === "multiply") {
    return (result = multiply(a, b));
  } else if (operator === "divide") {
    return (result = divide(a, b));
  }
};

const sevenBtn = document.getElementById("seven");
sevenBtn.value = 7;
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const zeroBtn = document.getElementById("zero");

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const multBtn = document.getElementById("mult");
const divideBtn = document.getElementById("divide");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

const screenText = document.getElementById("screenDisplay");

sevenBtn.addEventListener("click", display);

function display(e) {
  screenText.textContent = e.target.value;
}
