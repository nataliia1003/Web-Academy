import './homework_15.scss';

let hours;
let dots1;
let minutes;
let dots2;
let seconds;

const container = document.querySelector('.clock');

function clock(
    rootElement = document.querySelector('body')
) {
    const clock = document.createElement('div');
    hours = document.createElement('span');
    dots1 = document.createElement('span');
    minutes = document.createElement('span');
    dots2 = document.createElement('span');
    seconds = document.createElement('span');

    clock.appendChild(hours);
    clock.appendChild(dots1);
    clock.appendChild(minutes);
    clock.appendChild(dots2);
    clock.appendChild(seconds);
    rootElement.appendChild(clock);

    clock.classList.add('clock');
    hours.classList.add('clock__hours');
    dots1.classList.add('clock__dots');
    minutes.classList.add('clock__minutes');
    dots2.classList.add('clock__dots');
    seconds.classList.add('clock__seconds');
}

function normalisedDate(num) {
    return num < 10 ? '0' + num : num;
}

function updateContent() {
    const currentDate = new Date();

    hours.textContent = normalisedDate(currentDate.getHours());
    minutes.textContent = normalisedDate(currentDate.getMinutes());
    seconds.textContent = normalisedDate(currentDate.getSeconds());

    dots1.textContent = dots1.textContent === ':' ? '' : ':';
    dots2.textContent = dots2.textContent === ':' ? '' : ':';
}

clock();
updateContent();
setInterval(updateContent, 1000);