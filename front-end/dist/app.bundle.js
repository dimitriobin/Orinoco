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
/******/ 	return __webpack_require__(__webpack_require__.s = "./assets/js/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./assets/js/index.js":
/*!****************************!*\
  !*** ./assets/js/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var teddiesBtn = document.getElementById('oriTeddies');\nvar camerasBtn = document.getElementById('oriCameras');\nvar furnituresBtn = document.getElementById('oriFurnitures');\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture'; // How to throw the list in the DOM \n\nfunction showProducts(datas) {\n  var listOfProducts = document.querySelector('#listOfProdutcs');\n  listOfProducts.innerHTML = '';\n\n  for (var i = 0; i < datas.length; i++) {\n    var article = document.createElement('article');\n    var productImg = datas[i].imageUrl;\n    var productName = datas[i].name;\n    var productDescription = datas[i].description;\n    var productPrice = datas[i].price;\n    var productId = datas[i]._id;\n    article.setAttribute('class', 'mb-3 border w-100');\n    article.innerHTML = '<div class=\"row\"><div class=\"col-12 col-md-5 my-auto\"><img src=' + productImg + ' alt=\"Une photographie de ' + productName + '\" class=\"card-img h-100\"></div><div class=\"col-12 col-md-7\"><div class=\"card-body\"><h3 class=\"card-title\">' + productName + '</h5><p class=\"card-text mb-1\">' + productDescription + '</p><p class=\"card-text text-muted mb-1\">Prix : ' + productPrice + '</p><a href=\"pages-html/produits.html?id=' + productId + '\" class=\"stretched-link\" aria-label=\"Voir la fiche de ce produit\"></div></div></div>';\n    listOfProducts.appendChild(article);\n  }\n}\n\n; // XHR method\n// function getDatas(url) {\n//     const xhr = new XMLHttpRequest();\n//     xhr.open('GET', url);\n//     xhr.responseType = 'json';\n//     xhr.onload = function () {\n//         if (xhr.status === 200) {\n//             showProducts(xhr.response);\n//         } else {\n//             console.error('ERROR');\n//         }\n//     };\n//     xhr.send();\n// }\n// Fetch method\n\nfunction getDatas(url) {\n  fetch(url).then(function (response) {\n    if (response.ok) {\n      return response.json();\n    } else {\n      throw new Error(response.status);\n    }\n  }).then(function (data) {\n    showProducts(data);\n  });\n}\n\n; // Event on theme's buttons \n\nteddiesBtn.addEventListener('click', function () {\n  getDatas(teddiesAPI);\n});\ncamerasBtn.addEventListener('click', function () {\n  getDatas(camerasAPI);\n});\nfurnituresBtn.addEventListener('click', function () {\n  getDatas(furnitureAPI);\n});\n\n//# sourceURL=webpack:///./assets/js/index.js?");

/***/ })

/******/ });