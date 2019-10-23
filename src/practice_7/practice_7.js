import './practice_7.scss';

/*
const lamp = document.querySelectorAll('.lamp');

for {let  i = 0; i < lamp.length; i++}

/!*lampSwitcher(document.querySelector('#lamp1'));
lampSwitcher(document.querySelector('#lamp2'));
lampSwitcher(document.querySelector('#lamp3'));
lampSwitcher(document.querySelector('#lamp4'));*!/
*/


const container = document.querySelector('.header');
lampSwitcher(container, 1000, 150);
lampSwitcher(container, 300, 150);
lampSwitcher(container, 5000, 30);

function lampSwitcher(
    rootElement = document.querySelector('body'),
    speed = 1500,
    size = 50,

) {
    const wrapper = document.createElement('div');
    const lamp = document.createElement('div');
    const button = document.createElement('button');

    wrapper.classList.add('lamp');
    lamp.classList.add('lamp__light');
    lamp.style.width = size + 'px';
    lamp.style.height = size + 'px';
    button.classList.add('lamp__button');
    button.textContent = 'toggle';
    wrapper.appendChild(lamp);
    wrapper.appendChild(button);
    rootElement.appendChild(wrapper);


    let intervalId;

    function randomValue(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    function getRandomColor() {
        return (
            'rgb(' +
            randomValue(0, 255) +
            ',' +
            randomValue(0, 255) +
            ',' +
            randomValue(0, 255) +
            ')'
        );
    }

    function setColor() {
        lamp.style.background = getRandomColor();
    }

    function startInterval() {
        intervalId = setInterval(function() {
            setColor();
        }, speed);
    }

    function start() {
        setColor();
        startInterval();
    }
    function stop() {
        clearInterval(intervalId);
        lamp.style.background = '';
    }

    function toggle() {
        if (lamp.style.background === '') {
            start();
        } else {
            stop();
        }
    }

    button.onclick = toggle;
}
