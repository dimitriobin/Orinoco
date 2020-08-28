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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n // Initialize the total amount \n\nvar total = 0; // Add the number of product in the h1\n\nvar title = document.getElementById('cartTitle');\nvar cartItems = localStorage.getItem('cartItems');\ncartItems = JSON.parse(cartItems);\n\nif (cartItems) {\n  if (cartItems.length > 1) {\n    title.textContent = 'Mon panier (' + cartItems.length + ' articles )';\n  } else {\n    title.textContent = 'Mon panier (' + cartItems.length + ' article )';\n  }\n}\n\nfunction displayCart(product, img) {\n  // Add the product in the first section\n  var productsReview = document.getElementById('productsReview');\n  productsReview.innerHTML += \"\\n        <article class=\\\"card mb-3 border\\\">\\n            <div class=\\\"row no-gutters w-100\\\">\\n                <div class=\\\"col-12 col-md-5 my-auto\\\">\\n                    <img src=\\\"\".concat(product.imgUrl, \"\\\" alt=\\\"\\\" class=\\\"card-img\\\">\\n                </div>\\n                <div class=\\\"col-12 col-md-7\\\">\\n                    <div class=\\\"card-body\\\">\\n                        <h3 class=\\\"card-title\\\">\").concat(product.name, \"</h5>\\n                            <p class=\\\"card-text mb-1\\\">\\n                                <small class=\\\"text-muted text-break\\\">\\n                                    ref : \").concat(product.id, \"\\n                                </small>\\n                            </p>\\n                            <p class=\\\"card-text mb-1\\\">Prix : \").concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(product.price), \"</p>\\n                            <div class=\\\"d-flex flex-wrap mb-1\\\">\\n                                <button type=\\\"button\\\" class=\\\"plusBtn btn p-0\\\"><i\\n                                        class=\\\"fas fa-plus\\\"></i></button>\\n                                        <p class=\\\"card-text mb-0 mx-2\\\">\").concat(product.quantity, \"</p>\\n                                <button type=\\\"button\\\" class=\\\"minusBtn btn p-0\\\"><i\\n                                        class=\\\"fas fa-minus\\\"></i></button>\\n                            </div>\\n                            <button type=\\\"button\\\" class=\\\"removeBtn btn btn-sm btn-outline-danger\\\">Retirer du panier</button>\\n                    </div>\\n                </div>\\n            </div>\\n        </article>\\n    \"); // add the product in the list of references\n\n  var productList = document.getElementById('productList');\n  var productTotal = product.price * product.quantity;\n  productList.innerHTML += \"\\n        <tr>\\n            <th scope=\\\"row\\\" class=\\\"text-break\\\">\".concat(product.id, \" (x\").concat(product.quantity, \")</th>\\n            <td>\").concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(productTotal), \"</td>\\n        </tr>\\n    \"); // Display the total amount\n\n  total += productTotal;\n  document.getElementById('totalAmmount').textContent = \"\".concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(total));\n}\n\nfor (var i = 0; i < cartItems.length; i++) {\n  var product = cartItems[i];\n  displayCart(product);\n} // Set the +1 and -1 button\n\n\nvar plusBtn = document.querySelectorAll('.plusBtn');\nvar minusBtn = document.querySelectorAll('.minusBtn');\nplusBtn.forEach(function (element, index, array) {\n  plusBtn[index].addEventListener('click', function () {\n    cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);\n    cartItems[index].quantity += 1;\n    localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    location.reload();\n  });\n});\nminusBtn.forEach(function (element, index, array) {\n  minusBtn[index].addEventListener('click', function () {\n    cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);\n    cartItems[index].quantity -= 1;\n    localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    location.reload();\n  });\n}); // Set the remove btn\n\nvar removeBtn = document.querySelectorAll('.removeBtn');\nremoveBtn.forEach(function (element, index, array) {\n  removeBtn[index].addEventListener('click', function () {\n    cartItems.splice(index, 1);\n    localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    location.reload();\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/cart.js?");

/***/ }),

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\nfunction _createForOfIteratorHelper(o, allowArrayLike) { var it; if (typeof Symbol === \"undefined\" || o[Symbol.iterator] == null) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === \"number\") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError(\"Invalid attempt to iterate non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = o[Symbol.iterator](); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it[\"return\"] != null) it[\"return\"](); } finally { if (didErr) throw err; } } }; }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\n\nvar submitBtn = document.getElementById('submitRequest'); // Récupérer les données du panier\n\nvar cartItems = localStorage.getItem('cartItems');\ncartItems = JSON.parse(cartItems); // fonction pour créer le corps de la requete a envoyer\n\nfunction bodyRequest() {\n  var contact = {}; // Inclure les valeurs du formulaire dans l'object contact\n\n  contact.firstName = document.querySelector('#firstName').value;\n  contact.lastName = document.querySelector('#lastName').value;\n  contact.address = document.querySelector('#address').value;\n  contact.city = document.querySelector('#city').value;\n  contact.email = document.querySelector('#email').value; // Prendre le tableau trié de la boutique et le mettre dans la variable 'products'\n\n  var products = [];\n\n  var _iterator = _createForOfIteratorHelper(cartItems),\n      _step;\n\n  try {\n    for (_iterator.s(); !(_step = _iterator.n()).done;) {\n      var product = _step.value;\n      products.push(product.id);\n    }\n  } catch (err) {\n    _iterator.e(err);\n  } finally {\n    _iterator.f();\n  }\n\n  console.log(products);\n  var body = {\n    contact: contact,\n    products: products\n  };\n  return body;\n} // fonction pour envoyer la reponse du serveur au localStorage afin d'utiliser les données ultérieurement\n\n\nfunction orderStorage(order) {\n  localStorage.setItem('orders', order);\n} // \n\n\nfunction order() {\n  var body = bodyRequest();\n  body = JSON.stringify(body);\n  return body;\n}\n\nsubmitBtn.addEventListener('click', function (e) {\n  e.preventDefault();\n  var requestBody = order();\n  Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(_main__WEBPACK_IMPORTED_MODULE_0__[\"camerasOrderAPI\"], 'POST', 'text', requestBody, 'application/json').then(function (response) {\n    orderStorage(response);\n  }).then(function () {\n    var confirmPopup = document.querySelector('#confirmation div');\n    confirmPopup.innerHTML += \"\\n                <h3>Votre commande est valid\\xE9e</h3>\\n                <p>Vous allez \\xEAtre redirig\\xE9 vers une page de confirmation de commande !</p>\\n            \"; // Lancer la redirection après 4s\n\n    setTimeout(function () {\n      window.location = 'confirmation.html';\n    }, 4000);\n  })[\"catch\"](function (error) {\n    var confirmPopup = document.querySelector('#confirmation div');\n    confirmPopup.innerHTML += \"\\n                <h3>Votre commande n'a pas pu \\xEAtre valid\\xE9e</h3>\\n                <p>Veuillez r\\xE9essayer dans quelques minutes, si le probl\\xE8me persiste, vous pouvez nous contacter (voir rubrique \\\"contact\\\")</p>\\n            \"; // Recharger la page après 4s\n\n    setTimeout(function () {\n      window.location.reload();\n    }, 4000);\n  });\n});\nObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"popup\"])('#submitRequest', '#confirmation');\n\n//# sourceURL=webpack:///./assets/js/form.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, teddiesOrderAPI, camerasOrderAPI, furnitureOrderAPI, request, onLoadCartNumbers, convertPrice, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesOrderAPI\", function() { return teddiesOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasOrderAPI\", function() { return camerasOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureOrderAPI\", function() { return furnitureOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertPrice\", function() { return convertPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popup\", function() { return popup; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture';\nvar teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';\nvar camerasOrderAPI = 'http://localhost:3000/api/cameras/order';\nvar furnitureOrderAPI = 'http://localhost:3000/api/furniture/order'; // XHR method\n\nfunction request(url, method, responseType, sendData, contentType) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.responseType = responseType;\n    xhr.setRequestHeader('Content-Type', contentType);\n\n    xhr.onload = function () {\n      if (this.status >= 200 && this.status < 300 && this.readyState === 4) {\n        resolve(xhr.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: xhr.statusText\n        });\n      }\n    };\n\n    xhr.send(sendData);\n  });\n} // Display the number of product in the header (aside the cart icon)\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n  }\n} // initialize it\n\n\nonLoadCartNumbers(); // Permet de convertir la chaine de charactere pour une meilleure lisibilté du prix\n\nfunction convertPrice(input) {\n  var price = JSON.stringify(input);\n  var output;\n\n  if (price.length <= 5) {\n    output = price.slice(0, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 6 && price.length <= 8) {\n    output = price.slice(0, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 9) {\n    output = price.slice(0, -9) + ' ' + price.slice(-8, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  }\n} // popup function\n\n\nfunction popup(btn, modal) {\n  var body = document.querySelector('body');\n  var modalBtn = document.querySelector(btn);\n  var modalBg = document.querySelector(modal);\n  modalBtn.addEventListener('click', function (e) {\n    e.stopPropagation();\n    modalBg.classList.add('modal-bg-active');\n    body.addEventListener('click', function () {\n      modalBg.classList.remove('modal-bg-active');\n    });\n  });\n} // Informations pour le contact dans le footer\n\n\npopup('#aboutPopup', '#aboutUs'); // Informations pour le 'a propos'' dans le footer\n\npopup('#contactPopup', '#contactUs');\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

/***/ }),

/***/ 2:
/*!*************************************************************************!*\
  !*** multi ./assets/js/cart.js ./assets/js/form.js ./assets/js/main.js ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("__webpack_require__(/*! ./assets/js/cart.js */\"./assets/js/cart.js\");\n__webpack_require__(/*! ./assets/js/form.js */\"./assets/js/form.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/cart.js_./assets/js/form.js_./assets/js/main.js?");

/***/ })

/******/ });