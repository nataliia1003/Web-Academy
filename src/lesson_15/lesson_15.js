import './lesson_15.scss';
import { clock } from './clock';

function myAnalitic() {
  let clickCounts = 0;
  const buttons = document.querySelectorAll('button');

  for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function() {
      clickCounts++;
      console.log(clickCounts);
    });
  }
}

clock(undefined, 'SHORT');
clock();
clock(undefined, undefined,'DATE');
myAnalitic();

