

const hour = document.querySelector('#hour');
const minute = document.querySelector('#minute');
const second = document.querySelector('#second');
const box = document.querySelector('.box');
const form = document.querySelector('form');


const start = document.querySelector('#start');
const reset = document.querySelector('#reset');
const stop = document.querySelector('#stop');

const display = document.querySelector('#display');

let interval = null;
let total = 0;

totalValue = () => {
    total = Number(hour.value)*3600 + Number(minute.value)*60 + Number(second.value);
}

Timer = () => {
   totalValue();
   total--;
   if (total >= 0) {
    var hr = Math.floor(total/3600);
    var min = Math.floor((total/60) - (hr*60));
    var sec = total - ((hr*3600) + (min*60))

    hour.value = hr;
    minute.value = min;
    second.value = sec;
   } else {
    display.innerText = 'Time Over!';
    box.style.backgroundColor = 'rgb(43, 26, 40)';
    form.style.backgroundColor = 'rgb(43, 26, 40)';
    box.classList.add('pulse');
   }
}

start.addEventListener('click', () => {
    clearInterval(interval);
    interval = setInterval(Timer, 1000);

    display.innerText = 'Timer Started!';
});

reset.addEventListener('click', () => {
    clearInterval(interval);
    if (null === reset) {
        return null;
    }

    hour.value = null;
    minute.value = null;
    second.value = null;

    display.innerText = 'Timer';
    box.style.backgroundColor = 'rgb(26, 58, 58)';
    form.style.backgroundColor = 'rgb(26, 58, 58)';
    box.classList.remove('pulse');
})

stop.addEventListener('click', () => {
    clearInterval(interval);

    display.innerText = 'Timer Stoped!';
})