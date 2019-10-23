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
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module build failed (from ./node_modules/babel-loader/lib/index.js):\nSyntaxError: C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\src\\homework_15\\homework_15.js: Unexpected token (3:16)\n\n\u001b[0m \u001b[90m 1 | \u001b[39m\u001b[36mimport\u001b[39m \u001b[32m'./homework_15.scss'\u001b[39m\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 2 | \u001b[39m\u001b[0m\n\u001b[0m\u001b[31m\u001b[1m>\u001b[22m\u001b[39m\u001b[90m 3 | \u001b[39m\u001b[36mconst\u001b[39m container document\u001b[33m.\u001b[39mquerySelector(\u001b[32m'.clock'\u001b[39m)\u001b[33m;\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m   | \u001b[39m                \u001b[31m\u001b[1m^\u001b[22m\u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 4 | \u001b[39m\u001b[0m\n\u001b[0m \u001b[90m 5 | \u001b[39m\u001b[36mfunction\u001b[39m clock(\u001b[0m\n\u001b[0m \u001b[90m 6 | \u001b[39m    rootElement \u001b[33m=\u001b[39m document\u001b[33m.\u001b[39mquerySelector(\u001b[32m'body'\u001b[39m)\u001b[0m\n    at Object.raise (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:6420:17)\n    at Object.unexpected (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:7773:16)\n    at Object.parseVar (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:10664:18)\n    at Object.parseVarStatement (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:10479:10)\n    at Object.parseStatementContent (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:10076:21)\n    at Object.parseStatement (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:10009:17)\n    at Object.parseBlockOrModuleBlockBody (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:10585:25)\n    at Object.parseBlockBody (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:10572:10)\n    at Object.parseTopLevel (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:9940:10)\n    at Object.parse (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:11447:17)\n    at parse (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\parser\\lib\\index.js:11483:38)\n    at parser (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:168:34)\n    at normalizeFile (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\core\\lib\\transformation\\normalize-file.js:102:11)\n    at runSync (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\core\\lib\\transformation\\index.js:44:43)\n    at runAsync (C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\core\\lib\\transformation\\index.js:35:14)\n    at C:\\Users\\Natasha\\Desktop\\WebAcademy\\group_2708-master\\node_modules\\@babel\\core\\lib\\transform.js:34:34\n    at processTicksAndRejections (internal/process/task_queues.js:75:11)");

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