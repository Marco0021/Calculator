// let button = document.querySelector(".button");
// button.addEventListener("click", example);

// function example() {
//   document.getElementById("#space").innerHTML += "example</br>";
// }

// function add(numValue, numSecondValue) {
//   let result = numValue + numSecondValue;
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

// function operate() {
//   add(numberValue, numberSecondValue);
//   subtract(numberValue, numberSecondValue);
//   multiply(numberValue, numberSecondValue);
//   divide(numberValue, numberSecondValue);
// }

// let display = (document.querySelector(".display").innerHTML = "0");
// let button = document.getElementsBy(".numCalc");
// button.addEventListener("click", createNumber);

// function createNumber() {
//   let number7 = (document.querySelector(".display").innerHTML = "ciao");
displayValue = 0;
let display = (document.querySelector(
  "#display"
).innerHTML = `${displayValue}`);

// function numbers() {
//   let key7 = document.querySelector(".key7").addEventListener("click", () => {
//     displayValue = 7;
//     let display = (document.querySelector(
//       ".display"
//     ).innerHTML = `${displayValue}`);
//   });

let key8 = document.querySelector(".key8").addEventListener("click", () => {
  activeNum("7");
});

function activeNum(choiceNum) {
  numValue = 8;
  console.log(choiceNum);
  if (choiceNum === 8) {
    display.innerHTML = `${numValue}`;
    console.log(choiceNum);
  }
}

function clearcontent(elementID) {
  document.getElementById(elementID).innerHTML = "";
}

// let key9 = document.querySelector(".key9").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "9");
// });
// let keyPlus = document
//   .querySelector(".keyplus")
//   .addEventListener("click", () => {
//     let display = (document.querySelector(".display").innerHTML = "+");
//   });
// let key4 = document.querySelector(".key4").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "4");
// });
// let key5 = document.querySelector(".key5").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "5");
// });
// let key6 = document.querySelector(".key6").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "6");
// });
// let keyLess = document
//   .querySelector(".keyless")
//   .addEventListener("click", () => {
//     let display = (document.querySelector(".display").innerHTML = "-");
//   });
// let key1 = document.querySelector(".key1").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "1");
// });
// let key2 = document.querySelector(".key2").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "2");
// });
// let key3 = document.querySelector(".key3").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "3");
// });
// let keyMultiplier = document
//   .querySelector(".keymultiplier")
//   .addEventListener("click", () => {
//     let display = (document.querySelector(".display").innerHTML = "*");
//   });
// let keyDelete = document
//   .querySelector(".keydelete")
//   .addEventListener("click", () => {
//     let display = (document.querySelector(".display").innerHTML = "0");
//   });
// let key0 = document.querySelector(".key0").addEventListener("click", () => {
//   let display = (document.querySelector(".display").innerHTML = "0");
// });
// let keySame = document
//   .querySelector(".keysame")
//   .addEventListener("click", () => {
//     let display = (document.querySelector(".display").innerHTML = "=");
//   });
// let keyDivider = document
//   .querySelector(".keydivider")
//   .addEventListener("click", () => {
//     let display = (document.querySelector(".display").innerHTML = "/");
//   });
