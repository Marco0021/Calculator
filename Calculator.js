let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".operator");
let clear = document.querySelector("#keydelete");
let equals = document.querySelector("#equals");

let displayValue = 0;
let operand1 = "";
let operand2 = "";
let operator = "";

numbers.forEach((number) => {
  number.addEventListener("click", (e) => {
    if (operator == "") {
      operand1 += e.target.innerText;
      display.textContent = operand1;
      displayValue = display.textContent;
      console.log(`op1: ${operand1}`);
    } else {
      operand2 += e.target.innerText;
      display.textContent = operand1 + operator + operand2;
      displayValue = operand1 + operator + operand2;
      console.log(`op2: ${operand2}`);
    }
    console.log(`dv 2:${displayValue}`);
  });
});

operators.forEach((operatorBtn) => {
  operatorBtn.addEventListener("click", (e) => {
    if (e.target.innerText !== "=") {
      operator = e.target.innerText;
      displayValue = operand1 + operator;
      display.textContent = displayValue;
      console.log(`dv :${displayValue}`);
    }
  });
});
