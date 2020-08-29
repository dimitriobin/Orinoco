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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n\nvar teddiesBtn = document.getElementById('oriTeddies');\nvar camerasBtn = document.getElementById('oriCameras');\nvar furnituresBtn = document.getElementById('oriFurnitures'); // How to throw the list in the DOM \n\nfunction showProducts(url, productTheme) {\n  Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(url, 'GET', 'json').then(function (datas) {\n    console.log(datas);\n    var listOfProducts = document.querySelector('#listOfProdutcs');\n    listOfProducts.innerHTML = '';\n\n    for (var i = 0; i < datas.length; i++) {\n      var article = document.createElement('article');\n      var productImg = datas[i].imageUrl;\n      var productName = datas[i].name;\n      var productDescription = datas[i].description;\n      var productPrice = Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(datas[i].price);\n      var productId = datas[i]._id;\n      article.setAttribute('class', 'mb-3 border w-100');\n      article.innerHTML += \"\\n                    <a href=\\\"pages-html/produits.html?id=\".concat(productId, \"&theme=\").concat(productTheme, \"\\\" class=\\\"focus-ring text-dark text-decoration-none\\\" aria-label=\\\"Voir la fiche de ce produit\\\">\\n                        <div class=\\\"row\\\">\\n                            <div class=\\\"col-12 col-md-5 my-auto\\\">\\n                                <img src=\").concat(productImg, \" alt=\\\"Une photographie de \").concat(productName, \"\\\" class=\\\"card-img h-100\\\">\\n                            </div>\\n                            <div class=\\\"col-12 col-md-7\\\">\\n                                <div class=\\\"card-body\\\">\\n                                    <h3 class=\\\"card-title\\\">\").concat(productName, \"</h3>\\n                                    <p class=\\\"card-text mb-1\\\">\").concat(productDescription, \"</p>\\n                                    <p class=\\\"card-text text-muted mb-1\\\">Prix : \").concat(productPrice, \"</p>\\n                                </div>\\n                            </div>\\n                        </div>\\n                    </a>\\n                \");\n      listOfProducts.appendChild(article);\n    }\n  });\n}\n\n; // Event on theme's buttons\n\nteddiesBtn.addEventListener('click', function () {\n  showProducts(_main__WEBPACK_IMPORTED_MODULE_0__[\"teddiesAPI\"], 'teddies');\n});\ncamerasBtn.addEventListener('click', function () {\n  showProducts(_main__WEBPACK_IMPORTED_MODULE_0__[\"camerasAPI\"], 'cameras');\n});\nfurnituresBtn.addEventListener('click', function () {\n  showProducts(_main__WEBPACK_IMPORTED_MODULE_0__[\"furnitureAPI\"], 'furniture');\n});\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, teddiesOrderAPI, camerasOrderAPI, furnitureOrderAPI, request, onLoadCartNumbers, convertPrice, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesOrderAPI\", function() { return teddiesOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasOrderAPI\", function() { return camerasOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureOrderAPI\", function() { return furnitureOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertPrice\", function() { return convertPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popup\", function() { return popup; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture';\nvar teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';\nvar camerasOrderAPI = 'http://localhost:3000/api/cameras/order';\nvar furnitureOrderAPI = 'http://localhost:3000/api/furniture/order'; // XHR method\n\nfunction request(url, method, responseType, sendData, contentType) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.responseType = responseType;\n    xhr.setRequestHeader('Content-Type', contentType);\n\n    xhr.onload = function () {\n      if (this.status >= 200 && this.status < 300 && this.readyState === 4) {\n        resolve(xhr.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: xhr.statusText\n        });\n      }\n    };\n\n    xhr.send(sendData);\n  });\n} // Display the number of product in the header (aside the cart icon)\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n  }\n} // initialize it\n\n\nonLoadCartNumbers(); // Permet de convertir la chaine de charactere pour une meilleure lisibilté du prix\n\nfunction convertPrice(input) {\n  var price = JSON.stringify(input);\n  var output;\n\n  if (price.length <= 5) {\n    output = price.slice(0, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 6 && price.length <= 8) {\n    output = price.slice(0, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 9) {\n    output = price.slice(0, -9) + ' ' + price.slice(-8, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  }\n} // popup function\n\n\nfunction popup(btn, modal) {\n  var body = document.querySelector('body');\n  var modalBtn = document.querySelector(btn);\n  var modalBg = document.querySelector(modal);\n  modalBtn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    modalBg.classList.add('modal-bg-active');\n    body.addEventListener('click', function () {\n      modalBg.classList.remove('modal-bg-active');\n    });\n    window.addEventListener('keydown', function () {\n      if (event.key === \"Escape\") {\n        modalBg.classList.remove('modal-bg-active');\n      }\n    });\n  });\n} // Informations pour le contact dans le footer\n\n\npopup('#aboutPopup', '#aboutUs'); // Informations pour le 'a propos'' dans le footer\n\npopup('#contactPopup', '#contactUs');\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ 0:
/*!******************************************************!*\
  !*** multi ./assets/js/index.js ./assets/js/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/index.js */\"./assets/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/index.js_./assets/js/main.js?");

/***/ })

/******/ });