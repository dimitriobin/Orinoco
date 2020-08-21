/******/
(function (modules) { // webpackBootstrap
  /******/ // The module cache
  /******/
  var installedModules = {};
  /******/
  /******/ // The require function
  /******/
  function __webpack_require__(moduleId) {
    /******/
    /******/ // Check if module is in cache
    /******/
    if (installedModules[moduleId]) {
      /******/
      return installedModules[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/
    var module = installedModules[moduleId] = {
      /******/
      i: moduleId,
      /******/
      l: false,
      /******/
      exports: {}
      /******/
    };
    /******/
    /******/ // Execute the module function
    /******/
    modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
    /******/
    /******/ // Flag the module as loaded
    /******/
    module.l = true;
    /******/
    /******/ // Return the exports of the module
    /******/
    return module.exports;
    /******/
  }
  /******/
  /******/
  /******/ // expose the modules object (__webpack_modules__)
  /******/
  __webpack_require__.m = modules;
  /******/
  /******/ // expose the module cache
  /******/
  __webpack_require__.c = installedModules;
  /******/
  /******/ // define getter function for harmony exports
  /******/
  __webpack_require__.d = function (exports, name, getter) {
    /******/
    if (!__webpack_require__.o(exports, name)) {
      /******/
      Object.defineProperty(exports, name, {
        enumerable: true,
        get: getter
      });
      /******/
    }
    /******/
  };
  /******/
  /******/ // define __esModule on exports
  /******/
  __webpack_require__.r = function (exports) {
    /******/
    if (typeof Symbol !== 'undefined' && Symbol.toStringTag) {
      /******/
      Object.defineProperty(exports, Symbol.toStringTag, {
        value: 'Module'
      });
      /******/
    }
    /******/
    Object.defineProperty(exports, '__esModule', {
      value: true
    });
    /******/
  };
  /******/
  /******/ // create a fake namespace object
  /******/ // mode & 1: value is a module id, require it
  /******/ // mode & 2: merge all properties of value into the ns
  /******/ // mode & 4: return value when already ns object
  /******/ // mode & 8|1: behave like require
  /******/
  __webpack_require__.t = function (value, mode) {
    /******/
    if (mode & 1) value = __webpack_require__(value);
    /******/
    if (mode & 8) return value;
    /******/
    if ((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
    /******/
    var ns = Object.create(null);
    /******/
    __webpack_require__.r(ns);
    /******/
    Object.defineProperty(ns, 'default', {
      enumerable: true,
      value: value
    });
    /******/
    if (mode & 2 && typeof value != 'string')
      for (var key in value) __webpack_require__.d(ns, key, function (key) {
        return value[key];
      }.bind(null, key));
    /******/
    return ns;
    /******/
  };
  /******/
  /******/ // getDefaultExport function for compatibility with non-harmony modules
  /******/
  __webpack_require__.n = function (module) {
    /******/
    var getter = module && module.__esModule ?
      /******/
      function getDefault() {
        return module['default'];
      } :
      /******/
      function getModuleExports() {
        return module;
      };
    /******/
    __webpack_require__.d(getter, 'a', getter);
    /******/
    return getter;
    /******/
  };
  /******/
  /******/ // Object.prototype.hasOwnProperty.call
  /******/
  __webpack_require__.o = function (object, property) {
    return Object.prototype.hasOwnProperty.call(object, property);
  };
  /******/
  /******/ // __webpack_public_path__
  /******/
  __webpack_require__.p = "";
  /******/
  /******/
  /******/ // Load entry module and return exports
  /******/
  return __webpack_require__(__webpack_require__.s = 1);
  /******/
})
/************************************************************************/
/******/
({

  /***/
  "./assets/js/main.js":
    /*!***************************!*\
      !*** ./assets/js/main.js ***!
      \***************************/
    /*! exports provided: teddiesAPI, camerasAPI, furnitureAPI, request */
    /***/
    (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"teddiesAPI\", function() { return teddiesAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"camerasAPI\", function() { return camerasAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"furnitureAPI\", function() { return furnitureAPI; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"request\", function() { return request; });\n// APIs\nvar teddiesAPI = 'http://localhost:3000/api/teddies';\nvar camerasAPI = 'http://localhost:3000/api/cameras';\nvar furnitureAPI = 'http://localhost:3000/api/furniture'; // XHR method\n\nfunction request(url, method) {\n  return new Promise(function (resolve, reject) {\n    var xhr = new XMLHttpRequest();\n    xhr.open(method, url);\n    xhr.responseType = 'json';\n\n    xhr.onload = function () {\n      if (xhr.status === 200) {\n        resolve(xhr.response);\n      } else {\n        reject(console.log('error' + xhr.status));\n      }\n    };\n\n    xhr.send();\n  });\n}\n\n\n\n//# sourceURL=webpack:///./assets/js/main.js?");

      /***/
    }),

  /***/
  "./assets/js/product.js":
    /*!******************************!*\
      !*** ./assets/js/product.js ***!
      \******************************/
    /*! no exports provided */
    /***/
    (function (module, __webpack_exports__, __webpack_require__) {

      "use strict";
      eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _main__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./main */ \"./assets/js/main.js\");\n // Looking through the url and put informations within constants\n\nvar params = new URLSearchParams(window.location.search);\nvar productId = params.get('id');\nvar productTheme = params.get('theme');\nvar productUrl = 'http://localhost:3000/api/' + productTheme + '/' + productId;\n\nfunction setLayout(product) {\n  console.log(product);\n  var options;\n\n  switch (productTheme) {\n    case 'teddies':\n      options = product.colors;\n      break;\n\n    case 'cameras':\n      options = product.lenses;\n      break;\n\n    case 'furniture':\n      options = product.varnish;\n      break;\n\n    default:\n      break;\n  }\n\n  document.getElementById('productImg').setAttribute('src', product.imageUrl);\n  document.getElementById('productImg').parentNode.setAttribute('href', product.imageUrl);\n  document.getElementById('productName').textContent = product.name;\n  document.getElementById('productRef').textContent = 'REF : ' + product._id;\n  document.getElementById('productDesc').textContent = product.description;\n\n  for (var j = 0; j < options.length; j++) {\n    document.getElementById('inlineFormCustomSelect').appendChild(document.createElement('option')).textContent = options[j];\n  }\n\n  document.getElementById('productPrice').textContent = product.price + '€';\n}\n\nObject(_main__WEBPACK_IMPORTED_MODULE_0__[\"request\"])(productUrl, 'GET').then(function (product) {\n  setLayout(product);\n});\n\n//# sourceURL=webpack:///./assets/js/product.js?");

      /***/
    }),

  /***/
  1:
    /*!********************************************************!*\
      !*** multi ./assets/js/product.js ./assets/js/main.js ***!
      \********************************************************/
    /*! no static exports found */
    /***/
    (function (module, exports, __webpack_require__) {

      eval("__webpack_require__(/*! ./assets/js/product.js */\"./assets/js/product.js\");\nmodule.exports = __webpack_require__(/*! ./assets/js/main.js */\"./assets/js/main.js\");\n\n\n//# sourceURL=webpack:///multi_./assets/js/product.js_./assets/js/main.js?");

      /***/
    })

  /******/
});