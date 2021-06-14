/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/contact.js":
/*!************************!*\
  !*** ./src/contact.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFunc\": () => (/* binding */ loadFunc)\n/* harmony export */ });\nconst mainDiv = document.createElement('div');\nconst contactDiv = document.createElement('div');\nconst contactTitle = document.createElement('h2');\nconst contactText = document.createElement('p');\nconst addressDiv = document.createElement('div');\nconst addressTitle = document.createElement('h2');\nconst addressText = document.createElement('p');\nconst mailDiv = document.createElement('div');\nconst mailTitle = document.createElement('h2');\nconst mailText = document.createElement('p');\n\nconst appendElements = (main) => {\n    contactDiv.appendChild(contactTitle);\n    contactDiv.appendChild(contactText);\n    addressDiv.appendChild(addressTitle);\n    addressDiv.appendChild(addressText);\n    mailDiv.appendChild(mailTitle);\n    mailDiv.appendChild(mailText);\n    mainDiv.appendChild(contactDiv);\n    mainDiv.appendChild(addressDiv);\n    mainDiv.appendChild(mailDiv);\n    main.appendChild(mainDiv);\n};\n\nconst setElementValues  = () => {\n\n mainDiv.id = 'contact-container';\n contactTitle.textContent = 'Phone';\n addressTitle.textContent = 'Address';\n\n contactText.textContent = '018-388-2178';\n addressText.textContent = '278 road hungry ave';\n\n mailTitle.textContent = 'Mail Address';\n mailText.textContent = 'david@gemal.com';\n};\n\nconst loadFunc = function(main) {\n //addElementIds();\n appendElements(main);\n setElementValues();\n console.warn('Contact page successfully loaded');\n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/contact.js?");

/***/ }),

/***/ "./src/home.js":
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFunc\": () => (/* binding */ loadFunc)\n/* harmony export */ });\nconst contentContainer = document.querySelector('#content');\nconst main = document.createElement('main');\nconst footer = document.createElement('footer');\nconst footerDiv = document.createElement('div');\nconst footerText = document.createElement('p');\nconst h1 = document.createElement('h1');\nconst h2 = document.createElement('h2');\nconst imageContainer = document.createElement('div');\nconst image = document.createElement('img');\nconst text = document.createElement('p');\n\nconst addElementIds = ()=> {\n    main.id = 'main-content';\n    footer.id = 'footer';\n    footerDiv.id = 'footer-container';\n    footerText.id = 'info';\n    h1.id = 'restaurant-name';\n    h2.id = 'text-title';\n    imageContainer.id = 'image-container';\n    text.id = 'text';\n};\n\nconst setElementValues = () => {\n    h1.textContent = 'Restaurant';\n    image.src = './images/res.jpg';\n    h2.textContent = 'Lorem Ipsum';\n    text.textContent = \"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent lobortis eros sed turpis eleifend, eget vulputate nunc aliquam. Maecenas at laoreet nisi, ut vehicula neque. Vivamus pharetra dolor in neque dapibus cursus. Maecenas vehicula venenatis augue nec ornare. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut elementum nibh sit amet pulvinar porta. Donec sodales quis neque sed aliquam. Sed euismod sed neque ac porta. Sed at diam sed dolor blandit tristique vel vel lectus. Curabitur molestie augue et nulla consequat interdum. Aliquam erat volutpat. Cras dui leo, sodales ac imperdiet ac, iaculis id velit. Interdum et malesuada fames ac ante ipsum primis in faucibus. \";\n    footerText.textContent = 'david@gmal.com | 158 road hungry ave';\n};\n\nconst appendElements = () => {\n    main.appendChild(h1);\n    main.appendChild(imageContainer);\n    imageContainer.appendChild(image);\n    main.appendChild(h2);\n    main.appendChild(text);\n    contentContainer.appendChild(main);\n    footer.appendChild(footerDiv);\n    footerDiv.appendChild(footerText);\n    contentContainer.appendChild(footer);\n};\n\nconst loadFunc = function() {\n    addElementIds();\n    appendElements();\n    setElementValues();\n    console.warn('Page successfully loaded')\n}\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/home.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./home */ \"./src/home.js\");\n/* harmony import */ var _contact__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact */ \"./src/contact.js\");\n/* harmony import */ var _menu__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./menu */ \"./src/menu.js\");\n\n\n\n\n\n\n\n\n(() => {\n\n    (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadFunc)();\n    const tabArr = Array.from(document.querySelectorAll('.tab'));\n    const main = document.querySelector('main');\n\n    // set home page as active\n    tabArr[0].classList.remove('.tab');\n    tabArr[0].classList.add('tab-selected');\n\n\n    const clearMainSection = () => {\n        while(main.lastChild){\n            main.removeChild(main.lastChild);\n        }\n    };\n\n    // header click toggle events\n    tabArr.forEach(element => {\n        element.addEventListener('click', e => {\n            if(e.target.id === 'Home' && !e.target.classList.contains('tab-selected')){\n                clearMainSection();\n                (0,_home__WEBPACK_IMPORTED_MODULE_0__.loadFunc)();\n            }\n            else if(e.target.id === 'Menu' && !e.target.classList.contains('tab-selected')){\n                clearMainSection();\n                (0,_menu__WEBPACK_IMPORTED_MODULE_2__.loadFunc)(main);\n            }\n            else if(e.target.id === 'Contact' && !e.target.classList.contains('tab-selected')){\n                clearMainSection();\n                (0,_contact__WEBPACK_IMPORTED_MODULE_1__.loadFunc)(main);\n            }\n            \n            tabArr.forEach(el => {\n                if(el.classList.contains('tab-selected')){\n                    el.classList.remove('tab-selected');\n                    el.classList.add('tab');\n                }\n            });\n\n            e.target.classList.remove('tab');\n            e.target.classList.add('tab-selected');\n\n        \n        });\n    });\n\n\n})();\n\n//# sourceURL=webpack://restaurant_page/./src/index.js?");

/***/ }),

/***/ "./src/menu.js":
/*!*********************!*\
  !*** ./src/menu.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"loadFunc\": () => (/* binding */ loadFunc)\n/* harmony export */ });\nconst appendElements = (main, mainDiv) => {\n main.appendChild(mainDiv);\n for(let i = 0; i < 5; i++){\n     let cardDiv = document.createElement('div');\n     let cardImage = document.createElement('img');\n     let cardText = document.createElement('p');\n     cardDiv.appendChild(cardImage);\n     cardDiv.appendChild(cardText);\n     mainDiv.appendChild(cardDiv);\n     cardImage.src= './images/food.jpg';\n     cardText.textContent = `Food : number ${i+1} | R${random(30)}`;\n }\n \n};\n\nconst random = a => {\n return Math.floor(Math.random() * a + 1);\n};\n\n\n\nconst setElementValues  = (mainDiv) => {\n const mainDivNodes = Array.from(mainDiv.childNodes);\n mainDivNodes.forEach(element => {\n     element.classList.add('menu-card');\n });\n};\n\n\nconst addElementIds = (mainDiv)=> {\n mainDiv.id = 'menu-container';\n\n};\n\nconst loadFunc = function(main) {\n const mainDiv = document.createElement('div');\n console.log(mainDiv.lastChild);\n if(mainDiv.lastChild === null){\n     addElementIds(mainDiv);\n     appendElements(main, mainDiv);\n     setElementValues(mainDiv);\n     console.warn('Menu page successfully loaded');\n }\n \n};\n\n\n\n\n//# sourceURL=webpack://restaurant_page/./src/menu.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;