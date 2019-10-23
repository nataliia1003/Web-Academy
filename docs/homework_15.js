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
/******/ 	return __webpack_require__(__webpack_require__.s = 21);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_15/homework_15.js":
/*!****************************************!*\
  !*** ./src/homework_15/homework_15.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_15_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_15.scss */ "./src/homework_15/homework_15.scss");
/* harmony import */ var _homework_15_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_15_scss__WEBPACK_IMPORTED_MODULE_0__);

var hours;
var dots1;
var minutes;
var dots2;
var seconds;
var container = document.querySelector('.clock');

function clock() {
  var rootElement = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : document.querySelector('body');
  var clock = document.createElement('div');
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
  var currentDate = new Date();
  hours.textContent = normalisedDate(currentDate.getHours());
  minutes.textContent = normalisedDate(currentDate.getMinutes());
  seconds.textContent = normalisedDate(currentDate.getSeconds());
  dots1.textContent = dots1.textContent === ':' ? '' : ':';
  dots2.textContent = dots2.textContent === ':' ? '' : ':';
}

clock();
updateContent();
setInterval(updateContent, 1000);

/***/ }),

/***/ "./src/homework_15/homework_15.scss":
/*!******************************************!*\
  !*** ./src/homework_15/homework_15.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 21:
/*!**********************************************!*\
  !*** multi ./src/homework_15/homework_15.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_15/homework_15.js */"./src/homework_15/homework_15.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_15.js.map