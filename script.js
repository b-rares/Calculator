const input = document.querySelector(`#keys_container`);
const containerResult = document.querySelector(`#result`);
const historyContainer = document.querySelector(`#history`);
const clearAll = document.querySelector(`#clear_all`);
const clearOne = document.querySelector(`#clear_one`);
let historyInput = [];
let result = ``;
let operators = ["+", "-", "*", "/", "."];
const add = (a, b) => console.log(a + b);
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

let checkClick = (click) => {
  containerResult.innerHTML = ``;
  let inputChar = click.target.id;
  if (
    inputChar !== `=` &&
    inputChar !== `row1` &&
    inputChar !== `row2` &&
    inputChar !== `row5` &&
    inputChar !== `clear_all` &&
    inputChar !== `clear_one` &&
    inputChar !== `keys_container` &&
    inputChar !== `row3` &&
    inputChar !== `row4` &&
    inputChar !== `undefined`
  ) {
    historyInput.push(inputChar);
  }
  historyContainer.innerHTML = historyInput.join().replace(/[, ]+/g, "").trim();
  console.log(historyInput);
  if (inputChar === `=`) {
    giveResult(historyInput);
  }
};

let clearHistory = (result) => {
  historyInput = [result];
};

let reset = () => (historyInput = []);
let giveResult = (arr) => {
  if (
    arr.forEach((element) => {
      return element;
    }) !== `undefined`
  ) {
    arr = arr.join();
    arr = arr.replace(/[, ]+/g, " ");
    arr = arr.replace(/ /g, "");
  }
  containerResult.innerHTML = eval(arr);
  clearHistory(eval(arr));
};

let deleteOne = () => {
  historyInput.splice(historyInput.length - 1, 1);
};
input.addEventListener(`click`, checkClick);
clearAll.addEventListener(`click`, reset);
clearOne.addEventListener(`click`, deleteOne);
