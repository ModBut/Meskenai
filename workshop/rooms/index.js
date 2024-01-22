function RandomColor() {
    return (
      "#" +
      Math.floor(Math.random() * 16777215)
        .toString(16)
        .padStart(6, "0")
    );
  }

const randomColor = RandomColor();
const input = document.querySelector('input');
const submit = document.querySelector('.submit');
const h1 = document.querySelector('h1');
const red = document.querySelector('.red');
const size = document.querySelector('.size');
const body = document.querySelector('body');

submit.addEventListener('click', () => {
    h1.innerText = (input.value);
})

red.addEventListener('click', () => {
    body.style.backgroundColor = RandomColor();
})


size.addEventListener('click', () => {
    h1.style.fontSize = '50px';
})