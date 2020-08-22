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
/******/ 	return __webpack_require__(__webpack_require__.s = 2);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/cart.js":
/*!***************************!*\
  !*** ./assets/js/cart.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n // Initialize the total amount \n\nvar total = 0; // Add the number of product in the h1\n\nvar title = document.getElementById('cartTitle');\n\nif (localStorage.length > 0) {\n  if (localStorage.length > 1) {\n    // Length-1 because of the loglevel webpack line in the storage\n    title.textContent = 'Mon panier (' + (localStorage.length - 1) + ' articles )';\n  } else {\n    title.textContent = 'Mon panier (' + (localStorage.length - 1) + ' article )';\n  }\n} // Looping through the storage\n\n\nvar _loop = function _loop(i) {\n  // Get the ref\n  var product = localStorage.key(i); // Get the quantity\n\n  var quantity = localStorage.getItem(product); // Put the loglevel line aside\n\n  if (!(product === 'loglevel:webpack-dev-server')) {\n    // Get the datas of each product in the storage\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(product, 'GET').then(function (data) {\n      // Display it in the DOM\n      displayCart(data, quantity);\n    });\n  }\n};\n\nfor (var i = 0; i < localStorage.length; i++) {\n  _loop(i);\n}\n\nfunction displayCart(data, quantity) {\n  // Add the product in the first section\n  var productsReview = document.getElementById('productsReview');\n  productsReview.innerHTML += \"\\n        <article class=\\\"card mb-3 border\\\">\\n            <div class=\\\"row no-gutters w-100\\\">\\n                <div class=\\\"col-12 col-md-5 my-auto\\\">\\n                    <img src=\\\"\".concat(data.imageUrl, \"\\\" alt=\\\"\\\" class=\\\"card-img\\\">\\n                </div>\\n                <div class=\\\"col-12 col-md-7\\\">\\n                    <div class=\\\"card-body\\\">\\n                        <h3 class=\\\"card-title\\\">\").concat(data.name, \"</h5>\\n                            <p class=\\\"card-text mb-1\\\">\\n                                <small class=\\\"text-muted text-break\\\">\\n                                    ref : \").concat(data._id, \"\\n                                </small>\\n                            </p>\\n                            <p class=\\\"card-text mb-1\\\">Prix : \").concat(data.price, \"\\u20AC</p>\\n                            <div class=\\\"d-flex flex-wrap mb-1\\\">\\n                                <button type=\\\"button\\\" class=\\\"plusBtn btn p-0\\\"><i\\n                                        class=\\\"fas fa-plus\\\"></i></button>\\n                                        <p class=\\\"card-text mb-0 mx-2\\\">\").concat(quantity, \"</p>\\n                                <button type=\\\"button\\\" class=\\\"minusBtn btn p-0\\\"><i\\n                                        class=\\\"fas fa-minus\\\"></i></button>\\n                            </div>\\n                            <button type=\\\"button\\\" class=\\\"removeBtn btn btn-sm btn-outline-danger\\\">Retirer du panier</button>\\n                    </div>\\n                </div>\\n            </div>\\n        </article>\\n    \"); // Set the plus and minus button\n\n  var minusBtn = document.querySelectorAll('.minusBtn');\n  var plusBtn = document.querySelectorAll('.plusBtn');\n  plusBtn.forEach(function (element, index, array) {\n    plusBtn[index].addEventListener('click', function () {\n      console.log(localStorage.key(index));\n      console.log(parseInt(element.nextSibling));\n    });\n  }); // add the product in the list of references\n\n  var productList = document.getElementById('productList');\n  var productTotal = data.price * quantity;\n  productList.innerHTML += \"\\n        <tr>\\n            <th scope=\\\"row\\\" class=\\\"text-break\\\">\".concat(data._id, \" (x\").concat(quantity, \")</th>\\n            <td>\").concat(productTotal, \"\\u20AC</td>\\n        </tr>\\n    \"); // Display the total amount\n\n  total += productTotal;\n  document.getElementById('totalAmmount').textContent = \"\".concat(total, \"\\u20AC\");\n}\n\n//# sourceURL=webpack:///./assets/js/cart.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, request, onLoadCartNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture'; // XHR method\n\nfunction request(url, method) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.responseType = 'json';\n\n    xhr.onload = function () {\n      if (this.status === 200) {\n        resolve(xhr.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: xhr.statusText\n        });\n      }\n    };\n\n    xhr.send();\n  });\n} // Display the number of product in the header (aside the cart icon)\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n  }\n} // initialize it\n\n\nonLoadCartNumbers();\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ 2:
/*!*****************************************************!*\
  !*** multi ./assets/js/cart.js ./assets/js/main.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/cart.js */\"./assets/js/cart.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/cart.js_./assets/js/main.js?");

/***/ })

/******/ });