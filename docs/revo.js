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
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 27);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/revo/js/choose-favorite.js":
/*!****************************************!*\
  !*** ./src/revo/js/choose-favorite.js ***!
  \****************************************/
/*! exports provided: chooseFavorite */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chooseFavorite", function() { return chooseFavorite; });
function chooseFavorite() {
  var leftButton = document.querySelector('.slider-btn.prev-btn');
  var rightButton = document.querySelector('.slider-btn.next-btn');
  var grid = document.querySelector('.grid.slider-grid');
  var width = window.innerWidth;
  var mediumWidth = 1162;
  var smallWidth = 585;
  var largeSliderWidth = 570;
  var smallSliderWidth = grid.children[0].clientWidth / 2;
  var screenSize;
  var sliderWidth;
  var slidersPerScreen;

  if (width > mediumWidth) {
    screenSize = 'large';
    sliderWidth = largeSliderWidth;
    slidersPerScreen = 2;
  } else if (width <= mediumWidth && width > smallWidth) {
    screenSize = 'medium';
    sliderWidth = largeSliderWidth;
    slidersPerScreen = 1;
  } else {
    screenSize = 'small';
    sliderWidth = smallSliderWidth;
    slidersPerScreen = 1;
  }

  var sliderCount = grid.children.length;

  if (screenSize === 'small') {
    sliderCount *= 2;
  }

  rightButton.style.display = 'block';
  var currentSlide = 0;
  getSlide(currentSlide).classList.add('active');

  if (screenSize === 'large') {
    getSlide(currentSlide + 1).classList.add('active');
  }

  leftButton.addEventListener('click', function () {
    grid.style.marginLeft = grid.offsetLeft + sliderWidth + 'px';
    currentSlide -= 1;
    checkButtons();
    getSlide(currentSlide).classList.add('active');

    if (screenSize === 'large') {
      getSlide(currentSlide + 2).classList.remove('active');
    } else {
      getSlide(currentSlide + 1).classList.remove('active');
    }
  });
  rightButton.addEventListener('click', function () {
    grid.style.marginLeft = grid.offsetLeft - sliderWidth + 'px';
    currentSlide += 1;
    checkButtons();
    getSlide(currentSlide - 1).classList.remove('active');

    if (screenSize === 'large') {
      getSlide(currentSlide + 1).classList.add('active');
    } else {
      getSlide(currentSlide).classList.add('active');
    }
  });

  function checkButtons() {
    if (currentSlide <= 0) {
      leftButton.style.display = 'none';
    } else {
      leftButton.style.display = 'block';
    }

    var slideOffset;

    if (screenSize === 'large') {
      slideOffset = 2;
    } else {
      slideOffset = 1;
    }

    if (currentSlide + slideOffset >= sliderCount) {
      rightButton.style.display = 'none';
    } else {
      rightButton.style.display = 'block';
    }
  }

  function getSlide(number) {
    if (screenSize !== 'small') {
      return grid.children[number];
    } else {
      return grid.children[Math.floor(number / 2)].children[number % 2];
    }
  }
}



/***/ }),

/***/ "./src/revo/js/combo-coffee.js":
/*!*************************************!*\
  !*** ./src/revo/js/combo-coffee.js ***!
  \*************************************/
/*! exports provided: comboCoffee */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "comboCoffee", function() { return comboCoffee; });
function comboCoffee() {
  var leftButton = document.querySelector('.combo-coffee__slider-btn.combo-coffee__prev-btn');
  var rightButton = document.querySelector('.combo-coffee__slider-btn.combo-coffee__next-btn');
  var grid = document.querySelector('.grid.combo-coffee__slider-grid');
  var width = window.innerWidth;
  var sliderWidth = grid.children[0].clientWidth;
  var mediumWidth = 767;
  var smallWidth = 574;
  var slidersPerScreen;

  if (width > mediumWidth) {
    slidersPerScreen = 3;
  } else if (width <= mediumWidth && width > smallWidth) {
    slidersPerScreen = 2;
  } else {
    slidersPerScreen = 1;
  }

  var sliderCount = grid.children.length;
  rightButton.style.display = 'block';
  var currentSlide = 0;

  if (slidersPerScreen === 1) {
    grid.style.marginLeft = (width - sliderWidth) / 2 + 'px';
  }

  leftButton.addEventListener('click', function () {
    grid.style.marginLeft = grid.offsetLeft + sliderWidth + 'px';
    currentSlide -= 1;
    checkButtons();
    grid.children[currentSlide].classList.add('active');
    grid.children[currentSlide + slidersPerScreen].classList.remove('active');
  });
  rightButton.addEventListener('click', function () {
    grid.style.marginLeft = grid.offsetLeft - sliderWidth + 'px';
    currentSlide += 1;
    checkButtons();
    grid.children[currentSlide - 1].classList.remove('active');
    grid.children[currentSlide + slidersPerScreen - 1].classList.add('active');
  });

  function checkButtons() {
    if (currentSlide <= 0) {
      leftButton.style.display = 'none';
    } else {
      leftButton.style.display = 'block';
    }

    if (currentSlide + 3 >= sliderCount) {
      rightButton.style.display = 'none';
    } else {
      rightButton.style.display = 'block';
    }
  }
}



/***/ }),

/***/ "./src/revo/js/giftset.js":
/*!********************************!*\
  !*** ./src/revo/js/giftset.js ***!
  \********************************/
/*! exports provided: giftset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "giftset", function() { return giftset; });
function giftset() {
  var tabLinks = document.querySelectorAll('.tab-link');
  var tabPanels = document.querySelectorAll('.giftset__tab-content');

  for (var i = 0; i < tabLinks.length; i += 1) {
    tabLinks[i].addEventListener('click', clickHandler);
  }

  function clickHandler(event) {
    for (var _i = 0; _i < tabLinks.length; _i += 1) {
      tabLinks[_i].classList.remove('active');
    }

    event.currentTarget.classList.add('active');
    var index = [].indexOf.call(tabLinks, event.currentTarget);

    for (var _i2 = 0; _i2 < tabPanels.length; _i2 += 1) {
      tabPanels[_i2].classList.remove('active');
    }

    tabPanels[index].classList.add('active');
  }
}



/***/ }),

/***/ "./src/revo/js/mobile-menu.js":
/*!************************************!*\
  !*** ./src/revo/js/mobile-menu.js ***!
  \************************************/
/*! exports provided: mobileMenu */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileMenu", function() { return mobileMenu; });
function mobileMenu() {
  var menuButton = document.querySelector('.btn-mobile-menu');
  var mobileMenu = document.querySelector('.mobile-menu');
  menuButton.addEventListener('click', function () {
    if (mobileMenu.classList.contains('active')) {
      mobileMenu.classList.remove('active');
    } else {
      mobileMenu.classList.add('active');
    }
  });
}



/***/ }),

/***/ "./src/revo/revo.js":
/*!**************************!*\
  !*** ./src/revo/revo.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _revo_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./revo.scss */ "./src/revo/revo.scss");
/* harmony import */ var _revo_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_revo_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _js_choose_favorite__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./js/choose-favorite */ "./src/revo/js/choose-favorite.js");
/* harmony import */ var _js_combo_coffee__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js/combo-coffee */ "./src/revo/js/combo-coffee.js");
/* harmony import */ var _js_giftset__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./js/giftset */ "./src/revo/js/giftset.js");
/* harmony import */ var _js_mobile_menu__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./js/mobile-menu */ "./src/revo/js/mobile-menu.js");





Object(_js_choose_favorite__WEBPACK_IMPORTED_MODULE_1__["chooseFavorite"])();
Object(_js_combo_coffee__WEBPACK_IMPORTED_MODULE_2__["comboCoffee"])();
Object(_js_giftset__WEBPACK_IMPORTED_MODULE_3__["giftset"])();
Object(_js_mobile_menu__WEBPACK_IMPORTED_MODULE_4__["mobileMenu"])();

/***/ }),

/***/ "./src/revo/revo.scss":
/*!****************************!*\
  !*** ./src/revo/revo.scss ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 27:
/*!********************************!*\
  !*** multi ./src/revo/revo.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/revo/revo.js */"./src/revo/revo.js");


/***/ })

/******/ });
//# sourceMappingURL=revo.js.map