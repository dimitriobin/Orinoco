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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, teddiesOrderAPI, camerasOrderAPI, furnitureOrderAPI, onLoadCartNumbers, getProductDatas, convertPrice, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesOrderAPI\", function() { return teddiesOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasOrderAPI\", function() { return camerasOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureOrderAPI\", function() { return furnitureOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getProductDatas\", function() { return getProductDatas; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertPrice\", function() { return convertPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popup\", function() { return popup; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture';\nvar teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';\nvar camerasOrderAPI = 'http://localhost:3000/api/cameras/order';\nvar furnitureOrderAPI = 'http://localhost:3000/api/furniture/order'; //////////////////////////////////////\n// XHR method for GET and POST methods\n//////////////////////////////////////\n\nfunction getProductDatas(theme, method, responseType, sendData, contentType) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, \"http://localhost:3000/api/\".concat(theme));\n    xhr.responseType = responseType;\n    xhr.setRequestHeader('Content-Type', contentType);\n\n    xhr.onreadystatechange = function () {\n      if (this.readyState === 4) {\n        if (this.status >= 200 && this.status < 300) {\n          resolve(xhr.response);\n          console.log(xhr.status);\n        } else if (this.status >= 500 && this.status < 600) {\n          var main = document.querySelector('main');\n          main.innerHTML = '';\n          main.innerHTML += \"\\n                            <h1>Notre serveur rencontre un probl\\xE8me technique</h1>\\n                            <p>Veuillez attendre quelques minutes puis actualiser la page.\\n                            <br>Nous essayons de r\\xE9soudre le probl\\xE8me dans les plus brefs d\\xE9lais</p>\\n                        \";\n        } else {\n          var error = {\n            status: xhr.status,\n            statusText: xhr.statusText\n          };\n          reject(error);\n        }\n      }\n    };\n\n    xhr.send(sendData);\n  });\n} /////////////////////////////////////////////////////////////////////\n// Display the number of product in the header (aside the cart icon)\n/////////////////////////////////////////////////////////////////////\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n    document.getElementById('cartDescription').textContent = 'Vous avez actuellement ' + productNumber.length + 'articles dans votre panier';\n  }\n}\n\n;\nonLoadCartNumbers(); ////////////////////////////////////////////////////////////////////////////////////\n// take a price in centimes in input and put this price in the format \"xx.xx€\" in output\n//////////////////////////////////////////////////////////////////////////////////////\n\nfunction convertPrice(input) {\n  var price = JSON.stringify(input);\n  var output;\n\n  if (price.length <= 5) {\n    output = price.slice(0, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 6 && price.length <= 8) {\n    output = price.slice(0, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 9) {\n    output = price.slice(0, -9) + ' ' + price.slice(-8, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  }\n} ///////////////////////////////////////////////////////\n// create a modal or popup message\n///////////////////////////////////////////////////////\n\n\nfunction popup(e, modal) {\n  var body = document.querySelector('body');\n  var modalBg = document.getElementById(modal);\n  var previousActiveElement;\n  e.stopPropagation();\n  modalBg.querySelector('.modal').focus();\n  previousActiveElement = document.activeElement;\n  Array.from(document.body.children).forEach(function (child) {\n    if (child !== modalBg) {\n      child.inert = true;\n    }\n  });\n  modalBg.classList.add('modal-bg-active');\n  body.addEventListener('click', function () {\n    modalBg.classList.remove('modal-bg-active');\n    Array.from(document.body.children).forEach(function (child) {\n      if (child !== modalBg) {\n        child.inert = false;\n      }\n    });\n    previousActiveElement.focus();\n  });\n  window.addEventListener('keydown', function (e) {\n    if (e.key === \"Escape\") {\n      modalBg.classList.remove('modal-bg-active');\n      Array.from(document.body.children).forEach(function (child) {\n        if (child !== modalBg) {\n          child.inert = false;\n        }\n      });\n      previousActiveElement.focus();\n    }\n  });\n} //////////////////////////////////////////////\n// \"about us informations\" in each footer of each page\n///////////////////////////////////////////////\n\n\ndocument.getElementById('aboutPopup').addEventListener('click', function (e) {\n  popup(e, 'aboutUs');\n}); //////////////////////////////////////////////\n// \"contact informations\" in each footer of each page\n///////////////////////////////////////////////\n\ndocument.getElementById('contactPopup').addEventListener('click', function (e) {\n  popup(e, 'contactUs');\n});\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/product.js":
/*!******************************!*\
  !*** ./assets/js/product.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n\nvar mainContentSection = document.getElementById('mainContent'); ////////////////////////////////////////////////////////////////\n// Looking through the url and put informations within constants\n/////////////////////////////////////////////////////////////////\n\nvar params = new URLSearchParams(window.location.search);\nvar productId = params.get('id');\nvar productTheme = params.get('theme');\nvar productUrl = \"\".concat(productTheme, \"/\").concat(productId); ////////////////////////////////////////////////////////////////\n// Take the informations form the product obj and set the page with\n/////////////////////////////////////////////////////////////////\n\nfunction setLayout(product) {\n  // Define wich option to set according to the theme of product\n  var options;\n\n  switch (productTheme) {\n    case 'teddies':\n      options = product.colors;\n      break;\n\n    case 'cameras':\n      options = product.lenses;\n      break;\n\n    case 'furniture':\n      options = product.varnish;\n      break;\n\n    default:\n      break;\n  }\n\n  ; // put the content in the DOM \n\n  mainContentSection.innerHTML += \"\\n    <a href=\\\"\\\" class=\\\"col-12 col-md-5 my-auto\\\" target=\\\"_blank\\\"><img id=\\\"productImg\\\" src=\\\"\".concat(product.imageUrl, \"\\\" alt=\\\"\\\"\\n                    class=\\\"card-img\\\"></a>\\n            <article class=\\\"col-12 col-md-7 text-break\\\">\\n                <div class=\\\"card-body\\\">\\n                    <h1 id=\\\"productName\\\" class=\\\"card-title\\\">\").concat(product.name, \"</h1>\\n                    <p id=\\\"productRef\\\" class=\\\"text-muted card-subtitle\\\"><small>ref :\\n                    \").concat(product._id, \"</small></p>\\n                    <p id=\\\"productDesc\\\" class=\\\"card-text \\\">\").concat(product.description, \"</p>\\n                    <div class=\\\"form-row align-items-center mb-3\\\">\\n                        <label id=\\\"productOptions\\\" class=\\\"col-auto mr-sm-2\\\" for=\\\"inlineFormCustomSelect\\\">Options :\\n                        </label>\\n                        <select id=\\\"inlineFormCustomSelect\\\" class=\\\"col-4 custom-select mr-sm-2\\\"></select>\\n                    </div>\\n                    <div class=\\\"form-row align-items-center mb-3\\\">\\n                        <label class=\\\"col-auto\\\" for=\\\"quantity\\\">Quantit\\xE9 : </label>\\n                        <select class=\\\"col-2 custom-select\\\" name=\\\"\\\" id=\\\"quantity\\\">\\n                            <option value=\\\"1\\\">1</option>\\n                            <option value=\\\"2\\\">2</option>\\n                            <option value=\\\"3\\\">3</option>\\n                            <option value=\\\"4\\\">4</option>\\n                            <option value=\\\"5\\\">5</option>\\n                            <option value=\\\"6\\\">6</option>\\n                            <option value=\\\"7\\\">7</option>\\n                            <option value=\\\"8\\\">8</option>\\n                            <option value=\\\"9\\\">9</option>\\n                            <option value=\\\"10\\\">10</option>\\n                        </select>\\n                    </div>\\n                    <p id=\\\"productPrice\\\" class=\\\"lead\\\">Prix : \").concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(product.price), \"</p>\\n                    <button id=\\\"addToCartBtn\\\" type=\\\"submit\\\" class=\\\"btn btn-success w-75\\\">Ajouter au\\n                        panier</button>\\n                </div>\\n            </article>\\n    \");\n\n  for (var j = 0; j < options.length; j++) {\n    document.getElementById('inlineFormCustomSelect').appendChild(document.createElement('option')).textContent = options[j];\n  }\n}\n\nfunction displayError() {\n  var mainContentSection = document.getElementById('mainContent');\n  mainContentSection.innerHTML = '';\n  mainContentSection.innerHTML += \"\\n    <div class=\\\"d-flex flex-column justify-content-center align-items-center\\\">\\n        <h1 class=\\\"text-center mb-5\\\">Ce produit n'existe pas</h1>\\n        <p  class=\\\"text-center mb-5\\\">Il semblerait que vous essayez d'acc\\xE9der \\xE0 un produit qui n'est pas ou plus dans notre catalogue, pour consulter la liste de nos produits actuellement disponibles veuillez cliquer sur le bouton suivant : </p>\\n        <a role=\\\"button\\\" class=\\\"btn btn-light btn-lg mx-auto\\\" href=\\\"../index.html\\\" aria-label=\\\"Visitez notre catalogue mis \\xE0 jours\\\">Notre catalogue</a>\\n    </div>\\n    \";\n}\n\nfunction addToCart(product) {\n  // put the datas in an object\n  var item = new Object();\n  item.id = product._id;\n  item.theme = productTheme;\n  item.imgUrl = product.imageUrl;\n  item.name = product.name;\n  item.price = product.price; // Listen to the \"add to cart\" button\n\n  var addToCartBtn = document.getElementById('addToCartBtn');\n  addToCartBtn.addEventListener('click', function () {\n    // Add the value of the chosen quantity to the object of the product\n    item.quantity = document.getElementById('quantity').value; // Retrieve the data table from localStorage\n\n    var cartItems = localStorage.getItem('cartItems'); // Convert this data to JSON\n\n    cartItems = JSON.parse(cartItems); // If the cart is empty\n\n    if (cartItems) {\n      // Look through all the cart\n      for (var i = 0; i < cartItems.length; i++) {\n        // If the product already exists in the cart\n        if (cartItems[i].id === item.id) {\n          // Add the quantity to the old value.\n          document.getElementById('productAddedTitle').textContent = 'La quantité a été changée !';\n          cartItems[i].quantity = parseInt(cartItems[i].quantity);\n          cartItems[i].quantity += parseInt(item.quantity); // Send data back to storage as a STRING\n\n          localStorage.setItem('cartItems', JSON.stringify(cartItems));\n          break;\n        } else if (i === cartItems.length - 1 && cartItems[i] !== item.id) {\n          document.getElementById('productAddedTitle').innerHTML += \"\\n                    <i class=\\\"fas fa-check-circle text-success mr-sm-3\\\"></i>Article ajout\\xE9 !\\n                    \"; // Add the object in this table\n\n          cartItems.push(item); // Send data back to storage as a STRING\n\n          localStorage.setItem('cartItems', JSON.stringify(cartItems));\n          break;\n        }\n      }\n    } else {\n      document.getElementById('productAddedTitle').innerHTML += \"\\n                <i class=\\\"fas fa-check-circle text-success mr-sm-3\\\"></i>Premier article dans votre panier !\\n            \"; // initialize an array\n\n      cartItems = []; // Add the object in this table\n\n      cartItems.push(item); // Send data back to storage as a STRING\n\n      localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    }\n\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"onLoadCartNumbers\"])();\n  });\n} /////////////////////////////////////////////////////////////////////\n// Make a request with the _ID url and then throw the layout function\n/////////////////////////////////////////////////////////////////////\n\n\nObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"getProductDatas\"])(productUrl, 'GET', 'json').then(function (product) {\n  setLayout(product);\n  addToCart(product);\n  document.getElementById('addToCartBtn').addEventListener('click', function (e) {\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"popup\"])(e, 'productAdded');\n  });\n})[\"catch\"](function (error) {\n  displayError();\n  console.log(error);\n});\n\n//# sourceURL=webpack:///./assets/js/product.js?");

/***/ }),

/***/ 1:
/*!********************************************************!*\
  !*** multi ./assets/js/product.js ./assets/js/main.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/product.js */\"./assets/js/product.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/product.js_./assets/js/main.js?");

/***/ })

/******/ });