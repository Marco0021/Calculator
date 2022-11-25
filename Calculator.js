// function add(operand1, operand2) {
//   let result = operand1 + operand2;
//   return result;
// }

// function subtract(numValue, numSecondValue) {
//   let result = numValue - numSecondValue;
//   return result;
// }

// function multiply(numValue, numSecondValue) {
//   let result = numValue * numSecondValue;
//   return result;
// }

// function divide(numValue, numSecondValue) {
//   let result = numValue / numSecondValue;
//   return result;
// }

function operate() {
  // add(operand1, operand2);
  // subtract(numberValue, numberSecondValue);
  // multiply(numberValue, numberSecondValue);
  // divide(numberValue, numberSecondValue);
}

let displayValue = 0;
let operand1;
let operand2;
let operateMath;

let display = document.querySelector("#display");

function keyAll() {
  let keys = Object.values(document.getElementsByClassName("numKey"));
  keys.forEach((key) => {
    key.addEventListener("click", (e) => choiceNum(e.target));
  });
}

keyAll();

function choiceNum(firstNum, secondNum) {
  document.querySelector("#display").textContent += firstNum.textContent;
  currentValue = firstNum.textContent;
  nextValue = secondNum;
  // operand1;
  console.log(secondNum);
  console.log(firstNum.textContent);
}
// let result = currentValue.concat(nextValue);
// nextValue = element.textContent;
// operand1 = currentValue + nextValue;
// if (operand1 > currentValue) {
//   console.log(operand1);
//   console.log(element.textContent);
//   console.log(nextValue);
// console.log(currentValue);
//   return operand1;
// }

// function operateAll() {
//   let keyplus = document
//     .querySelector("#keyplus")
//     .addEventListener("click", add());
//   // console.log(keyplus);
// }
