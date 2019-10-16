import './homework_11.scss';

const redColor = 'red';
const yellowColor = 'yellow';
const greenColor = 'green';
const greyColor = '#ccc';

const redButton = document.querySelector('.red-light');
const yellowButton = document.querySelector('.yellow-light');
const greenButton = document.querySelector('.green-light');


function redClick(event) {
    redButton.style.backgroundColor = redColor;
    yellowButton.style.backgroundColor = greyColor;
    greenButton.style.backgroundColor = greyColor;

    event.stopPropagation();
}
function yellowClick(event) {
    yellowButton.style.backgroundColor = yellowColor;
    redButton.style.backgroundColor = greyColor;
    greenButton.style.backgroundColor = greyColor;

    event.stopPropagation();
}
function greenClick(event) {
    greenButton.style.backgroundColor = greenColor;
    redButton.style.backgroundColor = greyColor;
    yellowButton.style.backgroundColor = greyColor;

    event.stopPropagation();
}
function bodyClick() {
    greenButton.style.backgroundColor = greyColor;
    redButton.style.backgroundColor = greyColor;
    yellowButton.style.backgroundColor = greyColor;
}


redButton.onclick = redClick;
yellowButton.onclick = yellowClick;
greenButton.onclick = greenClick;
document.body.onclick = bodyClick;
