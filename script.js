const input = document.querySelectorAll(`.numar`);

const add = (a, b) => console.log(a + b);
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => a / b;

const operate = (operator, a, b) => {
  if (operator === `add`) {
    add(a, b);
  } else if (operator === `sub`) {
    sub(a, b);
  } else if (operator === `mul`) {
    mul(a, b);
  } else div(a, b);
};

function getNumber() {
  return this.textContent;
}

for (let i = 0; i < input.length; i++) {
  input[i].addEventListener(`click`, getNumber);
}
