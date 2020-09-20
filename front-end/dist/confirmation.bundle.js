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
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/confirmation.js":
/*!***********************************!*\
  !*** ./assets/js/confirmation.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main.js */ \"./assets/js/main.js\");\n ////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n// Get the localStorage with server response AND the list of products oredered\n////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n\nvar ordersInformation = localStorage.getItem('ordersInformation');\nordersInformation = JSON.parse(ordersInformation);\nvar productsOrdered = localStorage.getItem('productsOrdered');\nproductsOrdered = JSON.parse(productsOrdered); ////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n// Display a table with orderId, date and shop's category\n////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n\n(function displayOrderReferences() {\n  var refList = document.getElementById('refList');\n  var date = new Date();\n  date = date.toLocaleString(date);\n  ordersInformation.forEach(function (shop) {\n    refList.innerHTML += \"\\n        <tr>\\n            <td class=\\\"text-break\\\">\".concat(shop.theme, \"</td>\\n            <td class=\\\"text-break\\\">\").concat(date, \"</td>\\n            <td class=\\\"text-break\\\">\").concat(shop.orderId, \"</td>\\n        </tr>\\n        \");\n  });\n})(); ////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n// With the contact informations, display a confirmation text to \n// let the client know about the shipping and transaction\n////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n\n\n(function displayClientReferences() {\n  var clientReferences = document.getElementById('clientReferences');\n  clientReferences.innerHTML += \"\\n        <p>Merci <span class=\\\"font-weight-bold\\\">\".concat(ordersInformation[0].contact.firstName, \"</span> <span class=\\\"font-weight-bold\\\">\").concat(ordersInformation[0].contact.lastName, \"</span> d'avoir command\\xE9 chez Orinoco !</p>\\n        <p>Un mail de confirmation vous sera envoy\\xE9 \\xE0 <span class=\\\"font-weight-bold\\\">\").concat(ordersInformation[0].contact.email, \"</span> contenant le r\\xE9capitulatif de\\n        votre commande et les informations de livraison \\xE0 votre adresse <span class=\\\"font-weight-bold\\\">\").concat(ordersInformation[0].contact.address, \"</span> \\xE0 <span class=\\\"font-weight-bold\\\">\").concat(ordersInformation[0].contact.city, \"</span>.</p>\\n    \");\n})(); ////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n// display again the list of product with all order's details and the total cost at the end\n////////////////////////////////////////////////////////////////\n////////////////////////////////////////////////////////////////\n\n\n(function displayProductsDetails() {\n  var articlesOrdered = document.querySelector('#articlesOrdered');\n  var total = 0;\n  var products = productsOrdered;\n\n  for (var j = 0; j < products.length; j++) {\n    var element = products[j];\n    articlesOrdered.innerHTML += \"\\n        <article class=\\\"card mb-4 border\\\">\\n            <div class=\\\"row no-gutters w-100\\\">\\n                <img src=\\\"\".concat(element.imgUrl, \"\\\" alt=\\\"\\\" class=\\\"h-100 card-img col-12 col-md-5 my-auto\\\">\\n                <div class=\\\"col-12 col-md-7\\\">\\n                    <div class=\\\"card-body\\\">\\n                        <h3 class=\\\"card-title\\\">\").concat(element.name, \"</h5>\\n                            <p class=\\\"card-text mb-0\\\"><small class=\\\"text-muted\\\">ref :\\n                            \").concat(element.id, \"</small>\\n                            </p>\\n                            <p class=\\\"card-text mb-0\\\">Quantit\\xE9 : \").concat(element.quantity, \"</p>\\n                            <p class=\\\"card-text mb-0\\\">Prix unitaire : \").concat(Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(element.price), \"</p>\\n                            <p class=\\\"card-text mb-1 font-weight-bold\\\">Prix du lot : \").concat(Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(element.price * element.quantity), \"</p>\\n                    </div>\\n                </div>\\n            </div>\\n        </article>\\n    \");\n    total += element.price * element.quantity;\n  }\n\n  var totalOutput = document.createElement('p');\n  totalOutput.innerHTML = \"Prix total de votre commande : \".concat(Object(_main_js__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(total));\n  totalOutput.setAttribute('class', 'lead font-weight-bold mt-4');\n  articlesOrdered.parentNode.appendChild(totalOutput);\n})();\n\n//# sourceURL=webpack:///./assets/js/confirmation.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, teddiesOrderAPI, camerasOrderAPI, furnitureOrderAPI, onLoadCartNumbers, getProductDatas, convertPrice, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesOrderAPI\", function() { return teddiesOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasOrderAPI\", function() { return camerasOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureOrderAPI\", function() { return furnitureOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductDatas\", function() { return getProductDatas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertPrice\", function() { return convertPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popup\", function() { return popup; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture';\nvar teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';\nvar camerasOrderAPI = 'http://localhost:3000/api/cameras/order';\nvar furnitureOrderAPI = 'http://localhost:3000/api/furniture/order'; //////////////////////////////////////\n// XHR method for GET and POST methods\n//////////////////////////////////////\n\nfunction getProductDatas(theme, method, responseType, sendData, contentType) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, \"http://localhost:3000/api/\".concat(theme));\n    xhr.responseType = responseType;\n    xhr.setRequestHeader('Content-Type', contentType);\n\n    xhr.onreadystatechange = function () {\n      if (this.readyState === 4) {\n        if (this.status >= 200 && this.status < 300) {\n          resolve(xhr.response);\n          console.log(xhr.status);\n        } else if (this.status >= 500 && this.status < 600) {\n          var main = document.querySelector('main');\n          main.innerHTML = '';\n          main.innerHTML += \"\\n                            <h1>Notre serveur rencontre un probl\\xE8me technique</h1>\\n                            <p>Veuillez attendre quelques minutes puis actualiser la page.\\n                            <br>Nous essayons de r\\xE9soudre le probl\\xE8me dans les plus brefs d\\xE9lais</p>\\n                        \";\n        } else {\n          var error = {\n            status: xhr.status,\n            statusText: xhr.statusText\n          };\n          reject(error);\n        }\n      }\n    };\n\n    xhr.send(sendData);\n  });\n} /////////////////////////////////////////////////////////////////////\n// Display the number of product in the header (aside the cart icon)\n/////////////////////////////////////////////////////////////////////\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n    document.getElementById('cartDescription').textContent = 'Vous avez actuellement ' + productNumber.length + 'articles dans votre panier';\n  }\n}\n\n;\nonLoadCartNumbers(); ////////////////////////////////////////////////////////////////////////////////////\n// take a price in centimes in input and put this price in the format \"xx.xx€\" in output\n//////////////////////////////////////////////////////////////////////////////////////\n\nfunction convertPrice(input) {\n  var price = JSON.stringify(input);\n  var output;\n\n  if (price.length <= 5) {\n    output = price.slice(0, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 6 && price.length <= 8) {\n    output = price.slice(0, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 9) {\n    output = price.slice(0, -9) + ' ' + price.slice(-8, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  }\n} ///////////////////////////////////////////////////////\n// create a modal or popup message\n///////////////////////////////////////////////////////\n\n\nfunction popup(e, modal) {\n  var body = document.querySelector('body');\n  var modalBg = document.getElementById(modal);\n  var previousActiveElement;\n  e.stopPropagation();\n  modalBg.querySelector('.modal').focus();\n  previousActiveElement = document.activeElement;\n  Array.from(document.body.children).forEach(function (child) {\n    if (child !== modalBg) {\n      child.inert = true;\n    }\n  });\n  modalBg.classList.add('modal-bg-active');\n  body.addEventListener('click', function () {\n    modalBg.classList.remove('modal-bg-active');\n    Array.from(document.body.children).forEach(function (child) {\n      if (child !== modalBg) {\n        child.inert = false;\n      }\n    });\n    previousActiveElement.focus();\n  });\n  window.addEventListener('keydown', function (e) {\n    if (e.key === \"Escape\") {\n      modalBg.classList.remove('modal-bg-active');\n      Array.from(document.body.children).forEach(function (child) {\n        if (child !== modalBg) {\n          child.inert = false;\n        }\n      });\n      previousActiveElement.focus();\n    }\n  });\n} //////////////////////////////////////////////\n// \"about us informations\" in each footer of each page\n///////////////////////////////////////////////\n\n\ndocument.getElementById('aboutPopup').addEventListener('click', function (e) {\n  popup(e, 'aboutUs');\n}); //////////////////////////////////////////////\n// \"contact informations\" in each footer of each page\n///////////////////////////////////////////////\n\ndocument.getElementById('contactPopup').addEventListener('click', function (e) {\n  popup(e, 'contactUs');\n});\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ 3:
/*!*************************************************************!*\
  !*** multi ./assets/js/confirmation.js ./assets/js/main.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/confirmation.js */\"./assets/js/confirmation.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/confirmation.js_./assets/js/main.js?");

/***/ })

/******/ });