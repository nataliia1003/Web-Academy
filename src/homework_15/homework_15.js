import './homework_15.scss';

const container document.querySelector('.clock');

function clock(
    rootElement = document.querySelector('body')
) {
    const clock = document.createElement('div')
    const hours = document.createElement('span');
    const dots1 = document.createElement('span');
    const minutes = document.createElement('span');
    const dots2 = document.createElement('span');
    const seconds = document.createElement('span');


    clock.appendChild(hours);
    clock.appendChild(dots1);
    clock.appendChild(minutes);
    clock.appendChild(dots2);
    clock.appendChild(seconds);
    rootElement.appendChild(clock);

    hours.classList.add('clock__hours');
    dots1.classList.add('clock__dots');
    minutes.classList.add('clock__minutes');
    dots2.classList.add('clock__dots');
    seconds.classList.add('clock__seconds');


}

/*function update() {
    let clock = document.getElementsByClassName('clock');
    let data = new Date();
    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;
    clock.children[0].innerHTML = hours;

    let minutes = date.getMinutes();
    if (minutes < 10) minutes = '0' + minutes;
    clock.children[0].innerHTML = minutes;

    let seconds = date.getSeconds();
    if (seconds < 10) seconds = '0' + seconds;
    clock.children[0].innerHTML = seconds;
}

let timerId;

function clockStart() {
    timerId = setInterval(update, 1000);
    update();
}

function clockStop() {
    clearInterval(timerId);
    timerId = null;
}*/


