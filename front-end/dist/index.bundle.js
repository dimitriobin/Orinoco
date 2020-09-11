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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n\nvar shopsBtn = document.querySelectorAll('#shopsBtn button'); //////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////\n// Fetch the datas for all product in the shop and display it in the DOM\n//////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////\n\nfunction displayProductByShop(shop) {\n  var listOfProducts = document.querySelector('#listOfProdutcs'); // clean the layout for displaying just this shop\n\n  listOfProducts.innerHTML = '';\n  Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"getProductDatas\"])(shop, 'GET', 'json').then(function (datas) {\n    // looping through each product datas\n    datas.forEach(function (product) {\n      var article = document.createElement('article');\n      article.classList.add('mb-3', 'border', 'w-100');\n      article.innerHTML += \"    \\n                    <div class=\\\"row\\\">\\n                            <img src=\".concat(product.imageUrl, \" alt=\\\"Une photographie de \").concat(product.name, \"\\\" class=\\\"card-img h-100 col-12 col-md-5 my-auto\\\">\\n                        <div class=\\\"col-12 col-md-7\\\">\\n                            <div class=\\\"card-body\\\">\\n                                <h3 class=\\\"card-title\\\">\").concat(product.name, \"</h3>\\n                                <p class=\\\"card-text mb-1\\\">\").concat(product.description, \"</p>\\n                                <p class=\\\"card-text text-muted mb-1\\\">Prix : \").concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(product.price), \"</p>\\n                                <a href=\\\"pages-html/produits.html?id=\").concat(product._id, \"&theme=\").concat(shop, \"\\\" class=\\\"btn btn-light text-dark mt-3 stretched-link\\\">Voir la fiche de ce produit</a>\\n                            </div>\\n                        </div>\\n                    </div>\\n            \\n                    \");\n      listOfProducts.appendChild(article);\n    });\n  })[\"catch\"](function (error) {\n    console.log(error);\n    listOfProducts.innerHTML += \"\\n                <article class='mt-5 w-100'>\\n                    <div class=\\\"row justify-content-center align-items-center\\\">\\n                        <div class=\\\"col-12 col-md-7 text-center\\\">\\n                            <h2>Une erreur est survenue</h2>\\n                            <p>Veuillez actualiser la page et r\\xE9essayer ult\\xE9rieurement, si le probl\\xE8me persiste contactez-nous via la rubrique 'contact' en bas de cette page.</p>\\n                        </div>\\n                    </div>\\n                </article>\\n            \";\n  });\n}\n\n; //////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////\n// add an eventListener to each button, lauch the product's displaying if clicked\n//////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////\n\nshopsBtn.forEach(function (btn) {\n  btn.addEventListener('click', function (e) {\n    e.preventDefault();\n    displayProductByShop(btn.getAttribute('id'));\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/index.js?");

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

/***/ 0:
/*!******************************************************!*\
  !*** multi ./assets/js/index.js ./assets/js/main.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/index.js */\"./assets/js/index.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/index.js_./assets/js/main.js?");

/***/ })

/******/ });