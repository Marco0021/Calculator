let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".operator");
let clearLastDisplay = document.querySelector("#keydelete");
let clearAllDisplay = document.querySelector("#cancel");
let equals = document.querySelector("#equals");

const calculator = () => {
  let operand1 = "";
  let operand2 = "";
  let operator = "";
  let lastResult;
  let newResult;

  const add = (operand1, operand2) => {
    result = +operand1 + +operand2;
    return result;
  };
  const subtract = (operand1, operand2) => {
    result = operand1 - operand2;
    return result;
  };
  const divider = (operand1, operand2) => {
    result = +operand1 / +operand2;
    return result;
  };
  const multiply = (operand1, operand2) => {
    result = +operand1 * +operand2;
    return result;
  };
  const percentage = (operand1) => {
    return operand1 / 100;
  };

  const calcResult = () => {
    switch (operator) {
      case "+":
        lastResult = add(operand1, operand2);
        break;
      case "-":
        lastResult = subtract(operand1, operand2);
        break;
      case "*":
        lastResult = multiply(operand1, operand2);
        break;
      case "/":
        lastResult = divider(operand1, operand2);
        break;
      case "%":
        lastResult = percentage(operand1);
    }
    display.textContent = lastResult;
  };

  equals.addEventListener("click", calcResult);

  const getOperand = (e) => {
    if (operator == "" && display.textContent.includes("=")) {
      operand1 += e.target.innerText;
      display.textContent = operand1;
      console.log(`op1: ${operand1}`);
    } else {
      operand2 += e.target.innerText;
      display.textContent = operand1 + operator + operand2;
      console.log(`op2: ${operand2}`);
    }
  };

  const choiceNumber = () => {
    numbers.forEach((number) => {
      number.addEventListener("click", (e) => getOperand(e));
    });
  };

  choiceNumber();

  const getOperator = (e) => {
    calcResult();
    operator = e.target.innerText;
    if (lastResult !== undefined) {
      operand1 = lastResult;
      operand2 = "";
    }
    display.textContent = operand1 + operator;
  };

  operators.forEach((operatorBtn) => {
    if (operatorBtn.innerText !== "=") {
      operatorBtn.addEventListener("click", (e) => getOperator(e));
    }
  });

  const clearLast = () => {
    let display = document.querySelector("#display");
    let clearLast = display.textContent.toString().slice(0, -1);
    display.textContent = clearLast;
    operand1 = clearLast;
    operand2 = "";
    operator = "";
  };

  clearLastDisplay.addEventListener("click", clearLast);

  const clearAll = () => {
    operand1 = "";
    operator = "";
    operand2 = "";
    display.textContent = 0;
  };

  clearAllDisplay.addEventListener("click", clearAll);
};
calculator();
