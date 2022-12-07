let display = document.querySelector("#display");
let numbers = document.querySelectorAll(".btn");
let operators = document.querySelectorAll(".operator");
let clearLastDisplay = document.querySelector("#keydelete");
let clearAllDisplay = document.querySelector("#cancel");
let equals = document.querySelector("#equals");
let btnPoint = document.querySelector("#point");

const calculator = () => {
  let operand1 = "";
  let operand2 = "";
  let operator = "";
  let lastResult;

  const decimal = () => {
    if (lastResult == undefined) {
      if (operand2 && operator) {
        if (operand2.includes(".") != true) {
          operand2 += ".";
          display.textContent = operand1 + operator + operand2;
        }
      }
      if (operand1.includes(".") != true) {
        operand1 += ".";
        display.textContent = operand1 + operator + operand2;
      }
    }
  };

  btnPoint.addEventListener("click", decimal);

  const add = (operand1, operand2) => {
    result = parseFloat(+operand1) + parseFloat(+operand2);
    return result;
  };
  const subtract = (operand1, operand2) => {
    result = parseFloat(operand1) - parseFloat(operand2);
    return result;
  };
  const divider = (operand1, operand2) => {
    if (operand2 == 0) {
      return "Err:impossible to divide by 0";
    }
    result = parseFloat(+operand1) / parseFloat(+operand2);
    return result;
  };
  const multiply = (operand1, operand2) => {
    result = parseFloat(+operand1) * parseFloat(+operand2);
    return result;
  };
  const percentage = (operand1) => {
    return operand1 / 100;
  };

  const calcResult = () => {
    if (operand2) {
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
      display.textContent = parseFloat(lastResult);
      console.log(lastResult);
    }
  };

  equals.addEventListener("click", calcResult);

  const getOperand = (e) => {
    if (lastResult) {
      clearAll();
    }
    if (operator == "") {
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
    if (lastResult !== undefined && lastResult !== "") {
      operand1 = lastResult;
      operand2 = "";
      lastResult = "";
    }
    display.textContent = operand1 + operator;
    console.log(display.textContent);
  };

  operators.forEach((operatorBtn) => {
    if (operatorBtn.innerText !== "=") {
      operatorBtn.addEventListener("click", (e) => getOperator(e));
    }
  });

  const clearLast = () => {
    if (lastResult) {
      clearAll();
      display.textContent = 0;
      console.log(`dv : ${display.textContent}`);
    }
    if (
      (operand2 !== "" && lastResult == undefined) ||
      (operand2 !== "" && lastResult !== "")
    ) {
      operand2 = operand2.toString().slice(0, -1);
      display.textContent = operand1 + operator + operand2;
    } else {
      let display = document.querySelector("#display");
      let clearLast = display.textContent.toString().slice(0, -1);
      display.textContent = clearLast;
      operand1 = display.textContent;
      operand2 = "";
      operator = "";
      console.log(operand1);
      console.log(`dv : ${display.textContent}`);
    }
  };

  clearLastDisplay.addEventListener("click", clearLast);

  const clearAll = () => {
    display.textContent = 0;
    operand1 = "";
    operator = "";
    operand2 = "";
    lastResult = undefined;
  };

  clearAllDisplay.addEventListener("click", clearAll);
};
calculator();
