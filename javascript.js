let a = 0;
let b = 0;

const add = function (a, b) {
  let result;
  result = a + b;
  return result;
};

const subtract = function (a, b) {
  let result;
  result = a - b;
  return result;
};

// const sum = function (c) {
//   let result = 0;
//   c.forEach((item) => (result += item));
//   return result;
// };

const multiply = function (a, b) {
  let result;
  result = a * b;
  return result;
};

const divide = function (a, b) {
  let result;
  result = a / b;
  return result;
};

const power = function (a, b) {
  let result = a ** b;
  return result;
};

const factorial = function (a) {
  let result = 1;
  for (let i = 1; i <= a; i++) {
    result *= i;
  }
  return result;
};

let operator = "";
let result = 0;

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

console.log(operate("add", 5, 7));
