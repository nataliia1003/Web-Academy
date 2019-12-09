/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"practice_8": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([26,"vendors~practice_8"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/practice_8/practice_8.js":
/*!**************************************!*\
  !*** ./src/practice_8/practice_8.js ***!
  \**************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _practice_8_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./practice_8.scss */ "./src/practice_8/practice_8.scss");
/* harmony import */ var _practice_8_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_practice_8_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _react_test_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./react_test.jsx */ "./src/practice_8/react_test.jsx");
/*import './practice_8.scss';
import { ApiRequest } from './ApiRequest';*/


/*'./ApiRequest';

function asynsTimeoute(time) {
    return new Promise( (resolve, reject) =>  {
        asynsTimeoute(),
    });
}
asynsTimeoute(2000), then{() => console.log('Hello World')}*/

/*const rootElement = document.querySelector('body');
let authorInputElement;
let inputElement;
let sendButtonElement;
let commentsListElement;

function inputRender() {
    authorInputElement = document.createElement('input');
    inputElement = document.createElement('textarea');
    sendButtonElement = document.createElement('button');

    authorInputElement.setAttribute('placeholder', 'author');
    inputElement.setAttribute('placeholder', 'comment');

    sendButtonElement.classList.add('send');
    sendButtonElement.innerText = 'Send';

    rootElement.appendChild(authorInputElement);
    rootElement.appendChild(inputElement);
    rootElement.appendChild(sendButtonElement);
}

function commentsListRender() {
    commentsListElement = document.createElement('ul');

    commentsListElement.classList.add('comments');

    rootElement.appendChild(commentsListElement);
}

function generateComment(commentObject) {
    const commentElement = document.createElement('li');
    const authorElement = document.createElement('p');
    const textElement = document.createElement('p');
    const dateElement = document.createElement('p');
    const deleteButtonElement = document.createElement('button');

    commentElement.classList.add('comments__item');
    authorElement.classList.add('comments__author');
    textElement.classList.add('comments__text');
    dateElement.classList.add('comments__date');
    deleteButtonElement.classList.add('comments__delete');

    authorElement.innerText = commentObject.author;
    textElement.innerText = commentObject.text;
    dateElement.innerText = commentObject.date;
    commentElement.id = commentObject.id;
    deleteButtonElement.innerText = 'Delete';

    deleteButtonElement.addEventListener('click', function () {
        const request = new ApiRequest('http://localhost:4001/comments');

        function successCallback(response) {
            commentElement.remove();
        }

        function errorCallback(error) {
            console.log(error);
        }

        request.delete(commentObject.id, successCallback, errorCallback);
    });

    commentElement.appendChild(authorElement);
    commentElement.appendChild(textElement);
    commentElement.appendChild(dateElement);
    commentElement.appendChild(deleteButtonElement);

    return commentElement;
}

function renderComment(listItem) {
    commentsListElement.appendChild(listItem);
}

function getComments() {
    const request = new ApiRequest('http://localhost:4001/comments');

    function successCallback(response) {
        const commentsArray = JSON.parse(response);

        for ( let i = 0; i < commentsArray.length; i++) {
            const commentElement = generateComment(commentsArray[i]);
            renderComment(commentElement);
        }
    }

    function errorCallback(error) {
        console.log(error);
    }

    request.get(successCallback, errorCallback);
}

inputRender();
commentsListRender();
getComments();

function addComment(body) {
    const request = new ApiRequest('http://localhost:4001/comments');

    function successCallback(response) {
        const commentElement = generateComment(JSON.parse(response));
        renderComment(commentElement);

        authorInputElement.value = '';
        inputElement.value = '';
    }

    function errorCallback(error) {
        console.log(error);
    }

    request.post(JSON.stringify(body), successCallback, errorCallback);
}

sendButtonElement.addEventListener('click', function () {
    const body = {
        author: authorInputElement.value,
        text: inputElement.value
    };

    addComment(body);
});*/

/***/ }),

/***/ "./src/practice_8/practice_8.scss":
/*!****************************************!*\
  !*** ./src/practice_8/practice_8.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./src/practice_8/react_test.jsx":
/*!***************************************!*\
  !*** ./src/practice_8/react_test.jsx ***!
  \***************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



/*class HelloMessage extends React.Component {
    render() {
        return React.createElement(
            "div",
            null,
            "Привет, ",
            this.props.name
        );
    }
}
ReactDOM.render(
    React.createElement(HelloMessage, { name: "Саша" }),
    document.getElementById('hello-example')
);*/

var HelloMessage =
/*#__PURE__*/
function (_React$Component) {
  _inherits(HelloMessage, _React$Component);

  function HelloMessage() {
    _classCallCheck(this, HelloMessage);

    return _possibleConstructorReturn(this, _getPrototypeOf(HelloMessage).apply(this, arguments));
  }

  _createClass(HelloMessage, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "\u041F\u0440\u0438\u0432\u0435\u0442"), ", ", this.props.name);
    }
  }]);

  return HelloMessage;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);

react_dom__WEBPACK_IMPORTED_MODULE_1___default.a.render(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(HelloMessage, {
  name: "\u0421\u0430\u0448\u0430"
}), document.getElementById('hello-example'));
Collapse;

/***/ }),

/***/ 26:
/*!********************************************!*\
  !*** multi ./src/practice_8/practice_8.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/practice_8/practice_8.js */"./src/practice_8/practice_8.js");


/***/ })

/******/ });
//# sourceMappingURL=practice_8.js.map