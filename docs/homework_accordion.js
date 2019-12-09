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
/******/ 	return __webpack_require__(__webpack_require__.s = 25);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_accordion/Accordion-Item.js":
/*!**************************************************!*\
  !*** ./src/homework_accordion/Accordion-Item.js ***!
  \**************************************************/
/*! exports provided: AccordionItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AccordionItem", function() { return AccordionItem; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var AccordionItem =
/*#__PURE__*/
function () {
  function AccordionItem(rootElement, body, clickCallback) {
    _classCallCheck(this, AccordionItem);

    this.rootElement = rootElement;
    this.body = body;
    this.expandClickCallback = clickCallback;
  }

  _createClass(AccordionItem, [{
    key: "render",
    value: function render() {
      var _this = this;

      this.accordionItemElement = document.createElement('div');
      var accordionTitleElement = document.createElement('button');
      var accordionBodyElement = document.createElement('div');
      this.accordionItemElement.classList.add('accordion');
      accordionTitleElement.classList.add('accordion__title');
      accordionBodyElement.classList.add('accordion__body');
      accordionTitleElement.innerHTML = this.body.title;
      accordionBodyElement.innerHTML = this.body.content;
      accordionTitleElement.addEventListener('click', function () {
        if (_this.accordionItemElement.classList.contains('active')) {
          _this.collapse();
        } else {
          _this.expandClickCallback();
        }
      });
      this.accordionItemElement.appendChild(accordionTitleElement);
      this.accordionItemElement.appendChild(accordionBodyElement);
      this.rootElement.appendChild(this.accordionItemElement);
    }
  }, {
    key: "collapse",
    value: function collapse() {
      this.accordionItemElement.classList.remove('active');
    }
  }, {
    key: "expand",
    value: function expand() {
      this.accordionItemElement.classList.add('active');
    }
  }]);

  return AccordionItem;
}();

/***/ }),

/***/ "./src/homework_accordion/Accordion.js":
/*!*********************************************!*\
  !*** ./src/homework_accordion/Accordion.js ***!
  \*********************************************/
/*! exports provided: Accordion */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Accordion", function() { return Accordion; });
/* harmony import */ var _Accordion_Item__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Accordion-Item */ "./src/homework_accordion/Accordion-Item.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var Accordion =
/*#__PURE__*/
function () {
  function Accordion(rootElement, body) {
    _classCallCheck(this, Accordion);

    this.rootElement = rootElement;
    this.body = body;
    this.accordionItemsArray = [];
  }

  _createClass(Accordion, [{
    key: "render",
    value: function render() {
      var _this = this;

      var _loop = function _loop(i) {
        _this.accordionItemsArray[i] = new _Accordion_Item__WEBPACK_IMPORTED_MODULE_0__["AccordionItem"](_this.rootElement, _this.body[i], function () {
          _this.expandItem(i);
        });

        _this.accordionItemsArray[i].render();
      };

      for (var i = 0; i < this.body.length; i++) {
        _loop(i);
      }
    }
  }, {
    key: "expandItem",
    value: function expandItem(i) {
      this.collapseAll();
      this.accordionItemsArray[i].expand();
    }
  }, {
    key: "collapseAll",
    value: function collapseAll() {
      for (var i = 0; i < this.accordionItemsArray.length; i++) {
        this.accordionItemsArray[i].collapse();
      }
    }
  }]);

  return Accordion;
}();

/***/ }),

/***/ "./src/homework_accordion/homework_accordion.js":
/*!******************************************************!*\
  !*** ./src/homework_accordion/homework_accordion.js ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_accordion_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_accordion.scss */ "./src/homework_accordion/homework_accordion.scss");
/* harmony import */ var _homework_accordion_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_accordion_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Accordion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Accordion */ "./src/homework_accordion/Accordion.js");


var accordion = new _Accordion__WEBPACK_IMPORTED_MODULE_1__["Accordion"](document.querySelector('body'), [{
  title: '<h2>Section 1</h2>',
  content: "\n      Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui\n      <ul>\n        <li>List item one</li>\n        <li>List item two</li>\n        <li>List item three</li>\n      </ul>\n    "
}, {
  title: '<h2>Section 1</h2>',
  content: "\n      Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui\n      <ul>\n        <li>List item one</li>\n        <li>List item two</li>\n        <li>List item three</li>\n      </ul>\n    "
}, {
  title: '<h2>Section 1</h2>',
  content: "\n      Nam enim risus, molestie et, porta ac, aliquam ac, risus. Quisque lobortis. Phasellus pellentesque purus in massa. Aenean in pede. Phasellus ac libero ac tellus pellentesque semper. Sed ac felis. Sed commodo, magna quis lacinia ornare, quam ante aliquam nisi, eu iaculis leo purus venenatis dui\n      <ul>\n        <li>List item one</li>\n        <li>List item two</li>\n        <li>List item three</li>\n      </ul>\n    "
}]);
accordion.render();

/***/ }),

/***/ "./src/homework_accordion/homework_accordion.scss":
/*!********************************************************!*\
  !*** ./src/homework_accordion/homework_accordion.scss ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 25:
/*!************************************************************!*\
  !*** multi ./src/homework_accordion/homework_accordion.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_accordion/homework_accordion.js */"./src/homework_accordion/homework_accordion.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_accordion.js.map