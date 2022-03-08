let a = "";

let b = "";
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

const operate = function (a, b, operatorSign) {
  if (operatorSign === "+") {
    add(a, b);
    screenText.textContent = result;
  } else if (operatorSign === "-") {
    subtract(a, b);
    screenText.textContent = result;
  } else if (operatorSign === "*") {
    multiply(a, b);
    screenText.textContent = result;
  } else if (operatorSign === "/") {
    divide(a, b);
    screenText.textContent = result;
  }
};

const sevenBtn = document.getElementById("seven");
const eightBtn = document.getElementById("eight");
const nineBtn = document.getElementById("nine");
const fourBtn = document.getElementById("four");
const fiveBtn = document.getElementById("five");
const sixBtn = document.getElementById("six");
const oneBtn = document.getElementById("one");
const twoBtn = document.getElementById("two");
const threeBtn = document.getElementById("three");
const zeroBtn = document.getElementById("zero");

sevenBtn.value = 7;
eightBtn.value = 8;
nineBtn.value = 9;
fourBtn.value = 4;
fiveBtn.value = 5;
sixBtn.value = 6;
oneBtn.value = 1;
twoBtn.value = 2;
threeBtn.value = 3;
zeroBtn.value = 0;

sevenBtn.addEventListener("click", store);
eightBtn.addEventListener("click", store);
nineBtn.addEventListener("click", store);
fourBtn.addEventListener("click", store);
fiveBtn.addEventListener("click", store);
sixBtn.addEventListener("click", store);
oneBtn.addEventListener("click", store);
twoBtn.addEventListener("click", store);
threeBtn.addEventListener("click", store);
zeroBtn.addEventListener("click", store);

function store(e) {
  if (operatorSign === "") {
    let numberString = e.target.value.toString();
    a += numberString;
    console.log(a);
    // a += e.target.value;
    // console.log(a);
    displayA(e);
  } else if (operatorSign !== "") {
    let numberString = e.target.value.toString();
    b += numberString;
    console.log(b);
    // a += e.target.value;
    // console.log(a);
    displayB(e);
  }
}

function displayA(e) {
  screenText.textContent = a;
}

function displayB(e) {
  screenText.textContent = b;
}

const addBtn = document.getElementById("add");
const subBtn = document.getElementById("sub");
const multBtn = document.getElementById("mult");
const divideBtn = document.getElementById("divide");
const clearBtn = document.getElementById("clear");
const equalBtn = document.getElementById("equal");

addBtn.value = "+";
subBtn.value = "-";
multBtn.value = "*";
divideBtn.value = "/";
clearBtn.value = "clear";
equalBtn.value = "equal";

addBtn.addEventListener("click", storeOperator);
subBtn.addEventListener("click", storeOperator);
multBtn.addEventListener("click", storeOperator);
divideBtn.addEventListener("click", storeOperator);

let operatorSign = "";

function storeOperator(e) {
  operatorSign = e.target.value;
  a = Number(a);
  screenText.textContent = operatorSign;
  console.log(operatorSign);
}

equalBtn.addEventListener("click", finalOperator);

function finalOperator(e) {
  b = Number(b);
  operate(a, b, operatorSign);
  console.log(a);
  console.log(b);
  a = result;
  b = "";
  operatorSign = "";
  console.log(a);
  console.log(b);
  console.log(operatorSign);
}

clearBtn.addEventListener("click", clear);

function clear(e) {
  a = "";
  b = "";
  operatorSign = "";
  screenText.textContent = 0;
  console.log(a);
}

const screenText = document.getElementById("screenDisplay");
