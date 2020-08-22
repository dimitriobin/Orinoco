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
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, request, onLoadCartNumbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture'; // XHR method\n\nfunction request(url, method) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.responseType = 'json';\n\n    xhr.onload = function () {\n      if (this.status === 200) {\n        resolve(xhr.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: xhr.statusText\n        });\n      }\n    };\n\n    xhr.send();\n  });\n} // Display the number of product in the header (aside the cart icon)\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n  }\n} // initialize it\n\n\nonLoadCartNumbers();\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ "./assets/js/product.js":
/*!******************************!*\
  !*** ./assets/js/product.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n // Looking through the url and put informations within constants\n\nvar params = new URLSearchParams(window.location.search);\nvar productId = params.get('id');\nvar productTheme = params.get('theme');\nvar productUrl = 'http://localhost:3000/api/' + productTheme + '/' + productId;\nvar addToCartBtn = document.getElementById('addToCartBtn'); // Take the informations form the product obj and set the page with\n\nfunction setLayout(product) {\n  // Define wich option to set according to the theme of product\n  var options;\n\n  switch (productTheme) {\n    case 'teddies':\n      options = product.colors;\n      break;\n\n    case 'cameras':\n      options = product.lenses;\n      break;\n\n    case 'furniture':\n      options = product.varnish;\n      break;\n\n    default:\n      break;\n  }\n\n  ; // put the content in the DOM (in order of appearance)\n\n  document.getElementById('productImg').setAttribute('src', product.imageUrl);\n  document.getElementById('productImg').parentNode.setAttribute('href', product.imageUrl);\n  document.getElementById('productName').textContent = product.name;\n  document.getElementById('productRef').textContent = 'REF : ' + product._id;\n  document.getElementById('productDesc').textContent = product.description; // create options in the select form\n\n  for (var j = 0; j < options.length; j++) {\n    document.getElementById('inlineFormCustomSelect').appendChild(document.createElement('option')).textContent = options[j];\n  }\n\n  document.getElementById('productPrice').textContent = product.price + '€';\n}\n\nfunction cart(product) {\n  // put the datas in an object\n  var item = new Object();\n  item.id = product._id;\n  item.theme = productTheme;\n  item.imgUrl = product.imageUrl;\n  item.name = product.name;\n  item.price = product.price; // Ecouter le boutton \"Ajouter au panier\"\n\n  addToCartBtn.addEventListener('click', function () {\n    // Ajouter la valeur de la quantité choisie à l'objet du produit\n    item.quantity = document.getElementById('quantity').value; // Récupérer le tableau de données du localStorage\n\n    var cartItems = localStorage.getItem('cartItems'); // Convertir ces données en JSON\n\n    cartItems = JSON.parse(cartItems); // Si le panier est vide\n\n    if (cartItems) {\n      // Regarder dans tous le panier\n      for (var i = 0; i < cartItems.length; i++) {\n        // Si le produit existe déjà dans le panier\n        if (cartItems[i].id === item.id) {\n          // Ajouter la quantité à l'ancienne valeur.\n          console.log(\"Quantité changée !\");\n          cartItems[i].quantity = parseInt(cartItems[i].quantity);\n          cartItems[i].quantity += parseInt(item.quantity); // Renvoyer les données dans le storage sous forme de STRING\n\n          localStorage.setItem('cartItems', JSON.stringify(cartItems));\n          break;\n        } else if (i === cartItems.length - 1 && cartItems[i] !== item.id) {\n          console.log(\"Produit ajouté !\"); // Ajouter l'objet dans ce tableau\n\n          cartItems.push(item); // Renvoyer les données dans le storage sous forme de STRING\n\n          localStorage.setItem('cartItems', JSON.stringify(cartItems));\n          break;\n        }\n      }\n    } else {\n      console.log(\"Premier produit dans le panier !\"); // Créer un tableau\n\n      cartItems = []; // Ajouter l'objet dans ce tableau\n\n      cartItems.push(item); // Renvoyer les données dans le storage sous forme de STRING\n\n      localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    }\n\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"onLoadCartNumbers\"])();\n  });\n} // Make a request with the _ID url and then throw the layout function\n\n\nObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(productUrl, 'GET').then(function (product) {\n  setLayout(product);\n  cart(product);\n});\n\n//# sourceURL=webpack:///./assets/js/product.js?");

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