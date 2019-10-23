function clock(
  rootElement = document.querySelector('body'),
  startState = 'FULL',
  dateStartState = 'TIME'
) {
  let clockElement;
  let hourseElement;
  let minElement;
  let secElement;
  let state = startState;
  let dayElement;
  let monthElement;
  let yearElement;
  let dateState = dateStartState;


  function renderContainer() {
    clockElement = document.createElement('button');
    clockElement.id = 'ID' + Date.now() + '' + Math.floor(Math.random() * 1000);
    clockElement.classList.add('clock');
    const stopEventButton = document.createElement('button');
    stopEventButton.innerText = 'DELETE EVENT LISTENER';

    function clickHandler(e) {
      switchState();
      initContent();
    }

    function contextmenuHandler(e) {
      e.preventDefault();
      switchDateState();

      if (dateState === 'DATE'){
        initDate();
      } else {
        initContent();
      }

    }

    clockElement.addEventListener('click', clickHandler);
    clockElement.addEventListener('contextmenu', contextmenuHandler);
    stopEventButton.addEventListener('click', function() {
      clockElement.removeEventListener('click', clickHandler);
    });
    rootElement.appendChild(clockElement);
    rootElement.appendChild(stopEventButton);
  }

  function normalisedDate(num) {
    return num < 10 ? '0' + num : num;
  }

  function setTime() {
    const currentDate = new Date();

    hourseElement.textContent = normalisedDate(currentDate.getHours());
    minElement.textContent = normalisedDate(currentDate.getMinutes());

    if (secElement) {
      secElement.textContent = normalisedDate(currentDate.getSeconds());
    }
  }

  function setDate() {
    const currentDate = new Date();

    dayElement.textContent = normalisedDate(currentDate.getDate());
    monthElement.textContent = normalisedDate(currentDate.getMonth() + 1);
    yearElement.textContent = normalisedDate(currentDate.getFullYear());
  }

  function renderContentForDate() {
    clockElement.innerHTML = '';

    dayElement = document.createElement('div');
    monthElement = document.createElement('div');
    yearElement = document.createElement('div');

    dayElement.classList.add('day');
    monthElement.classList.add('month');
    yearElement.classList.add('year');

    clockElement.appendChild(dayElement);
    clockElement.appendChild(monthElement);
    clockElement.appendChild(yearElement);

  }

  function renderContent() {
    clockElement.innerHTML = '';

    hourseElement = document.createElement('div');
    minElement = document.createElement('div');

    hourseElement.classList.add('clock__hourse');
    minElement.classList.add('clock__min');

    clockElement.appendChild(hourseElement);
    clockElement.appendChild(minElement);

    if (state === 'FULL') {
      secElement = document.createElement('div');
      secElement.classList.add('clock__sec');
      clockElement.appendChild(secElement);
    }
  }

  function switchState() {
    if (state === 'FULL') {
      state = 'SHORT';
    } else {
      state = 'FULL';
    }
  }

  function switchDateState() {
    if (dateState === 'TIME') {
      dateState = 'DATE';
    } else {
      dateState = 'TIME';
    }
  }

  function initDate() {
    renderContentForDate();
    setDate();
  }

  function initContent() {
    renderContent();
    setTime();
  }

  renderContainer();

  if (dateState === 'TIME') {
    initContent();
  } else {
    initDate();
  }
}

export { clock }; //
