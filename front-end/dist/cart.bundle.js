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
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n // Initialize the total amount \n\nvar total = 0; // Add the number of product in the h1\n\nvar title = document.getElementById('cartTitle');\nvar formSection = document.getElementById('formSection');\nvar orderReview = document.getElementById('orderReview');\nvar cartItems = localStorage.getItem('cartItems');\ncartItems = JSON.parse(cartItems);\n\nif (cartItems) {\n  if (cartItems.length > 0) {\n    if (cartItems.length === 1) {\n      title.textContent = 'Mon panier (' + cartItems.length + ' article)';\n    } else {\n      title.textContent = 'Mon panier (' + cartItems.length + ' articles)';\n    }\n\n    displayTotal();\n    displayCart();\n    formSection.classList.remove('d-none');\n  } else {\n    title.textContent = 'Votre panier est vide';\n  }\n} else {\n  title.textContent = 'Votre panier est vide';\n}\n\nfunction displayCart(product) {\n  var productsReview = document.getElementById('productsReview');\n  var listOfProductsTitle = document.createElement('h2');\n  listOfProductsTitle.textContent = 'Liste de vos produits';\n  productsReview.appendChild(listOfProductsTitle);\n\n  for (var i = 0; i < cartItems.length; i++) {\n    var _product = cartItems[i]; // Add the product in the first section\n\n    productsReview.innerHTML += \"\\n        <article class=\\\"card mb-3 border\\\">\\n            <div class=\\\"row no-gutters w-100\\\">\\n                <div class=\\\"col-12 col-md-5 my-auto\\\">\\n                    <img src=\\\"\".concat(_product.imgUrl, \"\\\" alt=\\\"\\\" class=\\\"card-img\\\">\\n                </div>\\n                <div class=\\\"col-12 col-md-7\\\">\\n                    <div class=\\\"card-body\\\">\\n                        <h3 class=\\\"card-title\\\">\").concat(_product.name, \"</h5>\\n                            <p class=\\\"card-text mb-1\\\">\\n                                <small class=\\\"text-muted text-break\\\">\\n                                    ref : \").concat(_product.id, \"\\n                                </small>\\n                            </p>\\n                            <p class=\\\"card-text mb-1\\\">Prix : \").concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(_product.price), \"</p>\\n                            <div class=\\\"d-flex flex-wrap mb-1\\\">\\n                                <button type=\\\"button\\\" class=\\\"plusBtn btn p-0\\\" aria-label=\\\"Augmenter la quantit\\xE9 de une unit\\xE9\\\"><i\\n                                        class=\\\"fas fa-plus\\\"></i></button>\\n                                        <p class=\\\"card-text mb-0 mx-2 counter\\\" aria-live=\\\"assertive\\\"><span class=\\\"sr-only\\\">La quantit\\xE9 est de </span>\").concat(_product.quantity, \"</p>\\n                                <button type=\\\"button\\\" class=\\\"minusBtn btn p-0\\\" aria-label=\\\"Diminuer la quantit\\xE9 de une unit\\xE9\\\"><i\\n                                        class=\\\"fas fa-minus\\\"></i></button>\\n                            </div>\\n                            <button type=\\\"button\\\" class=\\\"removeBtn btn btn-sm btn-outline-danger\\\">Retirer du panier</button>\\n                    </div>\\n                </div>\\n            </div>\\n        </article>\\n    \"); // add the product in the list of references\n\n    var productList = document.getElementById('productList');\n    var productTotal = _product.price * _product.quantity;\n    productList.innerHTML += \"\\n        <tr>\\n            <th scope=\\\"row\\\" class=\\\"text-break\\\">\".concat(_product.id, \" (x\").concat(_product.quantity, \")</th>\\n            <td>\").concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(productTotal), \"</td>\\n        </tr>\\n    \"); // Display the total amount\n\n    total += productTotal;\n    document.getElementById('totalAmmount').textContent = \"\".concat(Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"convertPrice\"])(total));\n  }\n}\n\nfunction displayTotal() {\n  // display the 'total' section\n  var totalSection = document.createElement('section');\n  orderReview.appendChild(totalSection);\n  totalSection.classList.add('bg-white', 'p-4', 'mb-4', 'col-12', 'h-25', 'rounded-lg');\n  totalSection.innerHTML += \"\\n        <h2>Total</h2>\\n        <table class=\\\"table table-borderless table-striped \\\">\\n            <caption class=\\\"sr-only\\\">Sous-total</caption>\\n            <tbody id=\\\"productList\\\">\\n            </tbody>\\n            <tfoot>\\n                <tr class=\\\"font-weight-bold\\\">\\n                    <th scope=\\\"row\\\">Total</th>\\n                    <td id=\\\"totalAmmount\\\"></td>\\n                </tr>\\n            </tfoot>\\n        </table>\\n    \";\n} // Set the +1 and -1 button\n\n\nvar plusBtn = document.querySelectorAll('.plusBtn');\nvar minusBtn = document.querySelectorAll('.minusBtn');\nvar counter = document.querySelectorAll('.counter');\nplusBtn.forEach(function (element, index, array) {\n  plusBtn[index].addEventListener('click', function (e) {\n    e.preventDefault();\n    cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);\n    cartItems[index].quantity += 1;\n    localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    location.reload();\n  });\n});\nminusBtn.forEach(function (element, index, array) {\n  minusBtn[index].addEventListener('click', function () {\n    cartItems[index].quantity = parseInt(cartItems[index].quantity, 10);\n    cartItems[index].quantity -= 1;\n    localStorage.setItem('cartItems', JSON.stringify(cartItems));\n    location.reload();\n  });\n}); // Set the remove btn\n\nvar removeBtn = document.querySelectorAll('.removeBtn');\nremoveBtn.forEach(function (element, index, array) {\n  removeBtn[index].addEventListener('click', function () {\n    if (cartItems.length > 1) {\n      cartItems.splice(index, 1);\n      localStorage.setItem('cartItems', JSON.stringify(cartItems));\n      location.reload();\n    } else {\n      localStorage.removeItem('cartItems');\n      location.reload();\n    }\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/cart.js?");

/***/ }),

/***/ "./assets/js/form.js":
/*!***************************!*\
  !*** ./assets/js/form.js ***!
  \***************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n\nvar form = document.getElementById('contact');\nvar submitRequest = document.getElementById('submitRequest'); // Récupérer les données du panier\n\nvar cartItems = localStorage.getItem('cartItems');\ncartItems = JSON.parse(cartItems); /////////////////////////////////////////////////\n/////////////////////////////////////////////////\n// Sort products by shop'theme\n/////////////////////////////////////////////////\n/////////////////////////////////////////////////\n\nvar sortedOrder = {};\n\n(function sortByTheme() {\n  cartItems.forEach(function (element) {\n    switch (element.theme) {\n      case 'teddies':\n        if (!sortedOrder.teddies) {\n          sortedOrder.teddies = [];\n          sortedOrder.teddies.push(element);\n        } else {\n          sortedOrder.teddies.push(element);\n        }\n\n        break;\n\n      case 'cameras':\n        if (!sortedOrder.cameras) {\n          sortedOrder.cameras = [];\n          sortedOrder.cameras.push(element);\n        } else {\n          sortedOrder.cameras.push(element);\n        }\n\n        break;\n\n      case 'furniture':\n        if (!sortedOrder.furniture) {\n          sortedOrder.furniture = [];\n          sortedOrder.furniture.push(element);\n        } else {\n          sortedOrder.furniture.push(element);\n        }\n\n        break;\n\n      default:\n        break;\n    }\n  });\n})(); ///////////////////////////////////////////////////////\n///////////////////////////////////////////////////////\n// fonction pour créer le corps de la requete a envoyer\n///////////////////////////////////////////////////////\n///////////////////////////////////////////////////////\n\n\nfunction makeContactObject() {\n  var contact = {}; // Inclure les valeurs du formulaire dans l'object contact\n\n  contact.firstName = document.querySelector('#firstName').value;\n  contact.lastName = document.querySelector('#lastName').value;\n  contact.address = document.querySelector('#address').value;\n  contact.city = document.querySelector('#city').value;\n  contact.email = document.querySelector('#email').value;\n  return contact;\n} //////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n// fonction pour envoyer la reponse du serveur au localStorage afin d'utiliser les données ultérieurement\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n\nfunction orderStorage(orderArray) {\n  console.log(orderArray);\n  localStorage.setItem('ordersInformation', JSON.stringify(orderArray)); // Transfert products in an other storage\n\n  localStorage.setItem('productsOrdered', localStorage.getItem('cartItems')); // Reset le panier\n\n  localStorage.removeItem('cartItems');\n} //////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n// Create a client side validation of the submission datas\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\n\n(function formValidationLive() {\n  var validationBtn = document.getElementById('validationBtn');\n  var inputs = document.querySelectorAll('#contact input');\n  var validInputCounter = 0;\n\n  function toUpperCase(input) {\n    input.addEventListener('input', function () {\n      input.value = input.value.replace(input.value.slice(0, 1), input.value.slice(0, 1).toUpperCase());\n    });\n  }\n\n  function toLowerCase(input) {\n    input.addEventListener('input', function () {\n      input.value = input.value.toLowerCase();\n    });\n  }\n\n  function validation(input, regEx) {\n    if (!regEx.test(input.value)) {\n      input.nextElementSibling.innerHTML = 'Veuillez entrez votre prénom au bon format.';\n      input.nextElementSibling.className = 'error active';\n      validInputCounter > 0 ? validInputCounter-- : validInputCounter = 0;\n    } else {\n      input.nextElementSibling.innerHTML = '<i class=\"fas fa-check text-success mt-2\"></i>';\n      input.nextElementSibling.className = 'error';\n      validInputCounter >= 0 && validInputCounter < 5 ? validInputCounter++ : validInputCounter = 5;\n    }\n  }\n\n  toUpperCase(firstName);\n  toUpperCase(lastName);\n  toUpperCase(city);\n  toLowerCase(email);\n  inputs.forEach(function (input) {\n    input.addEventListener('blur', function () {\n      var regEx = new RegExp(input.getAttribute('pattern'));\n      validation(input, regEx);\n      console.log(validInputCounter);\n\n      if (validInputCounter == 5) {\n        validationBtn.setAttribute('class', 'd-none');\n        submitRequest.classList.remove('d-none');\n      }\n    });\n  });\n})();\n\nfunction formValidationPostClick() {}\n\n; //////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n// Listen to the submission's button \n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n//////////////////////////////////////////////////////////////////////////////////////////////////////////////\n\nsubmitRequest.addEventListener('click', function (e) {\n  e.preventDefault();\n  formValidationPostClick();\n  var contact = makeContactObject();\n  var responsesArray = [];\n  Object.keys(sortedOrder).forEach(function (shop) {\n    var products = [];\n    sortedOrder[shop].forEach(function (product) {\n      products.push(product.id);\n    });\n    var body = {\n      contact: contact,\n      products: products\n    };\n    body = JSON.stringify(body);\n    Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(\"\".concat(shop, \"/order\"), 'POST', 'text', body, 'application/json').then(function (res) {\n      res = JSON.parse(res);\n      res['theme'] = shop;\n      responsesArray.push(res);\n\n      if (responsesArray.length == Object.keys(sortedOrder).length) {\n        orderStorage(responsesArray);\n        Object(_main__WEBPACK_IMPORTED_MODULE_0__[\"popup\"])(e, 'confirmation'); // Lancer la redirection après 4s\n\n        setTimeout(function () {\n          window.location = 'confirmation.html';\n        }, 4000);\n      }\n    });\n  });\n});\n\n//# sourceURL=webpack:///./assets/js/form.js?");

/***/ }),

/***/ "./assets/js/main.js":
/*!***************************!*\
  !*** ./assets/js/main.js ***!
  \***************************/
/*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, teddiesOrderAPI, camerasOrderAPI, furnitureOrderAPI, request, onLoadCartNumbers, convertPrice, popup */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesOrderAPI\", function() { return teddiesOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasOrderAPI\", function() { return camerasOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureOrderAPI\", function() { return furnitureOrderAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"onLoadCartNumbers\", function() { return onLoadCartNumbers; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"convertPrice\", function() { return convertPrice; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"popup\", function() { return popup; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture';\nvar teddiesOrderAPI = 'http://localhost:3000/api/teddies/order';\nvar camerasOrderAPI = 'http://localhost:3000/api/cameras/order';\nvar furnitureOrderAPI = 'http://localhost:3000/api/furniture/order'; // XHR method\n\nfunction request(theme, method, responseType, sendData, contentType) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, \"http://localhost:3000/api/\".concat(theme));\n    xhr.responseType = responseType;\n    xhr.setRequestHeader('Content-Type', contentType);\n\n    xhr.onload = function () {\n      if (this.status >= 200 && this.status < 300 && this.readyState === 4) {\n        resolve(xhr.response);\n      } else {\n        reject({\n          status: this.status,\n          statusText: xhr.statusText\n        });\n      }\n    };\n\n    xhr.send(sendData);\n  });\n} // Display the number of product in the header (aside the cart icon)\n\n\nfunction onLoadCartNumbers() {\n  var productNumber = localStorage.getItem('cartItems');\n  productNumber = JSON.parse(productNumber);\n\n  if (productNumber) {\n    document.querySelector('.cart span').textContent = productNumber.length;\n    document.getElementById('cartDescription').textContent = 'Vous avez actuellement ' + productNumber.length + 'articles dans votre panier';\n  }\n} // initialize it\n\n\nonLoadCartNumbers(); // Permet de convertir la chaine de charactere pour une meilleure lisibilté du prix\n\nfunction convertPrice(input) {\n  var price = JSON.stringify(input);\n  var output;\n\n  if (price.length <= 5) {\n    output = price.slice(0, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 6 && price.length <= 8) {\n    output = price.slice(0, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  } else if (price.length >= 9) {\n    output = price.slice(0, -9) + ' ' + price.slice(-8, -5) + ' ' + price.slice(-5, -2) + ',' + price.slice(-2) + '€';\n    return output;\n  }\n} // popup function\n\n\nfunction popup(e, modal) {\n  var body = document.querySelector('body');\n  var modalBg = document.getElementById(modal);\n  var previousActiveElement;\n  e.stopPropagation();\n  modalBg.querySelector('.modal').focus();\n  previousActiveElement = document.activeElement;\n  Array.from(document.body.children).forEach(function (child) {\n    if (child !== modalBg) {\n      child.inert = true;\n    }\n  });\n  modalBg.classList.add('modal-bg-active');\n  body.addEventListener('click', function () {\n    modalBg.classList.remove('modal-bg-active');\n    Array.from(document.body.children).forEach(function (child) {\n      if (child !== modalBg) {\n        child.inert = false;\n      }\n    });\n    previousActiveElement.focus();\n  });\n  window.addEventListener('keydown', function (e) {\n    if (e.key === \"Escape\") {\n      modalBg.classList.remove('modal-bg-active');\n      Array.from(document.body.children).forEach(function (child) {\n        if (child !== modalBg) {\n          child.inert = false;\n        }\n      });\n      previousActiveElement.focus();\n    }\n  });\n} // Informations pour le contact dans le footer\n\n\ndocument.getElementById('aboutPopup').addEventListener('click', function (e) {\n  popup(e, 'aboutUs');\n}); // Informations pour le 'a propos'' dans le footer\n\ndocument.getElementById('contactPopup').addEventListener('click', function (e) {\n  popup(e, 'contactUs');\n});\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

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