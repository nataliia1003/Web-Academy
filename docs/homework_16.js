/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 23);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_16/clock.js":
/*!**********************************!*\
  !*** ./src/homework_16/clock.js ***!
  \**********************************/
/*! exports provided: clock */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clock", function() { return clock; });
function clock() {
  var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
  var startState = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'FULL';
  var dateStartState = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'TIME';
  var clockElement;
  var hourseElement;
  var minElement;
  var secElement;
  var state = startState;
  var dayElement;
  var monthElement;
  var yearElement;
  var dateState = dateStartState;

  function renderContainer() {
    clockElement = document.createElement('button');
    clockElement.id = 'ID' + Date.now() + '' + Math.floor(Math.random() * 1000);
    clockElement.classList.add('clock');
    var stopEventButton = document.createElement('button');
    stopEventButton.innerText = 'DELETE EVENT LISTENER';

    function clickHandler(e) {
      switchState();
      initContent();
    }

    function contextmenuHandler(e) {
      e.preventDefault();
      switchDateState();

      if (dateState === 'DATE') {
        initDate();
      } else {
        initContent();
      }
    }

    clockElement.addEventListener('click', clickHandler);
    clockElement.addEventListener('contextmenu', contextmenuHandler);
    stopEventButton.addEventListener('click', function () {
      clockElement.removeEventListener('click', clickHandler);
    });
    rootElement.appendChild(clockElement);
    rootElement.appendChild(stopEventButton);
  }

  function normalisedDate(num) {
    return num < 10 ? '0' + num : num;
  }

  function setTime() {
    var currentDate = new Date();
    hourseElement.textContent = normalisedDate(currentDate.getHours());
    minElement.textContent = normalisedDate(currentDate.getMinutes());

    if (secElement) {
      secElement.textContent = normalisedDate(currentDate.getSeconds());
    }
  }

  function setDate() {
    var currentDate = new Date();
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

 //

/***/ }),

/***/ "./src/homework_16/homework_16.js":
/*!****************************************!*\
  !*** ./src/homework_16/homework_16.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_16_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_16.scss */ "./src/homework_16/homework_16.scss");
/* harmony import */ var _homework_16_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_16_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _clock__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./clock */ "./src/homework_16/clock.js");



function myAnalitic() {
  var clickCounts = 0;
  var buttons = document.querySelectorAll('button');

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener('click', function () {
      clickCounts++;
      console.log(clickCounts);
    });
  }
}

Object(_clock__WEBPACK_IMPORTED_MODULE_1__["clock"])(undefined, 'SHORT');
Object(_clock__WEBPACK_IMPORTED_MODULE_1__["clock"])();
Object(_clock__WEBPACK_IMPORTED_MODULE_1__["clock"])(undefined, undefined, 'DATE');
myAnalitic();

/***/ }),

/***/ "./src/homework_16/homework_16.scss":
/*!******************************************!*\
  !*** ./src/homework_16/homework_16.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 23:
/*!**********************************************!*\
  !*** multi ./src/homework_16/homework_16.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_16/homework_16.js */"./src/homework_16/homework_16.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_16.js.map