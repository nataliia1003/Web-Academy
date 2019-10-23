import './homework_14.scss';

const light = document.querySelector('.garland__light-bulb');
const button = document.querySelector('.garland__btn');
let intervalId;

function randomValue(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

function getRandomColor() {
    return (
        'rgb(' + randomValue(0, 255) + ',' + randomValue(0, 255) + ',' + randomValue(0, 255) + ')'
    );
}

function nextColor() {
    light.style.backgroundColor = getRandomColor();
}

function toggle() {
    const isEnabled = button.classList.contains('garland__btn-active');

    if (isEnabled) {
        button.classList.remove('garland__btn-active');
        button.textContent = 'Off';
        light.style.backgroundColor = '';
        clearInterval(intervalId);
    } else {
        button.classList.add('garland__btn-active');
        button.textContent = 'On';
        nextColor();
        intervalId = setInterval(nextColor, 500);
    }
}

button.onclick = toggle;