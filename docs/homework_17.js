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
/******/ 	return __webpack_require__(__webpack_require__.s = 24);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/homework_17/ApiRequest.js":
/*!***************************************!*\
  !*** ./src/homework_17/ApiRequest.js ***!
  \***************************************/
/*! exports provided: ApiRequest */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ApiRequest", function() { return ApiRequest; });
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var ApiRequest =
/*#__PURE__*/
function () {
  function ApiRequest(url) {
    _classCallCheck(this, ApiRequest);

    this.url = url;
  }

  _createClass(ApiRequest, [{
    key: "get",
    value: function get(successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', this.url);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            console.log(xhr);
            successCallback(xhr.response);
          } else {
            errorCallback(xhr.response);
          }
        }
      };
    }
  }, {
    key: "post",
    value: function post(data, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('POST', this.url);
      xhr.setRequestHeader('Content-Type', 'application/json');
      xhr.send(data);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            successCallback(xhr.response);
          } else {
            errorCallback(xhr.response);
          }
        }
      };
    }
  }, {
    key: "delete",
    value: function _delete(id, successCallback, errorCallback) {
      var xhr = new XMLHttpRequest();
      xhr.open('DELETE', this.url + '/' + id);
      xhr.send();

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            successCallback(xhr.response);
          } else {
            errorCallback(xhr.response);
          }
        }
      };
    }
  }]);

  return ApiRequest;
}();

/***/ }),

/***/ "./src/homework_17/homework_17.js":
/*!****************************************!*\
  !*** ./src/homework_17/homework_17.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _homework_17_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./homework_17.scss */ "./src/homework_17/homework_17.scss");
/* harmony import */ var _homework_17_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_homework_17_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ApiRequest__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ApiRequest */ "./src/homework_17/ApiRequest.js");


'./ApiRequest';
var rootElement = document.querySelector('body');
var authorInputElement;
var inputElement;
var sendButtonElement;
var commentsListElement;

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
  var commentElement = document.createElement('li');
  var authorElement = document.createElement('p');
  var textElement = document.createElement('p');
  var dateElement = document.createElement('p');
  var deleteButtonElement = document.createElement('button');
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
    var request = new _ApiRequest__WEBPACK_IMPORTED_MODULE_1__["ApiRequest"]('http://localhost:4001/comments');

    function successCallback(response) {
      commentElement.remove();
    }

    function errorCallback(error) {
      console.log(error);
    }

    request["delete"](commentObject.id, successCallback, errorCallback);
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
  var request = new _ApiRequest__WEBPACK_IMPORTED_MODULE_1__["ApiRequest"]('http://localhost:4001/comments');

  function successCallback(response) {
    var commentsArray = JSON.parse(response);

    for (var i = 0; i < commentsArray.length; i++) {
      var commentElement = generateComment(commentsArray[i]);
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
  var request = new _ApiRequest__WEBPACK_IMPORTED_MODULE_1__["ApiRequest"]('http://localhost:4001/comments');

  function successCallback(response) {
    var commentElement = generateComment(JSON.parse(response));
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
  var body = {
    author: authorInputElement.value,
    text: inputElement.value
  };
  addComment(body);
});

/***/ }),

/***/ "./src/homework_17/homework_17.scss":
/*!******************************************!*\
  !*** ./src/homework_17/homework_17.scss ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ 24:
/*!**********************************************!*\
  !*** multi ./src/homework_17/homework_17.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./src/homework_17/homework_17.js */"./src/homework_17/homework_17.js");


/***/ })

/******/ });
//# sourceMappingURL=homework_17.js.map