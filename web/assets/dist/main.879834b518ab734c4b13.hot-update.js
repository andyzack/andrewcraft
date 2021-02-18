webpackHotUpdate("main",{

/***/ "./src/scripts/toggle-button.js":
/*!**************************************!*\
  !*** ./src/scripts/toggle-button.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("const navToggle = document.querySelectorAll(\".js-toggle-button\");\n\nif (navToggle && navToggle.length) {\n  navToggle.forEach(e => {\n    e.addEventListener('click', e => {\n      // prevent default link click and toggle class\n      e.preventDefault();\n      e.target.parentNode.classList.toggle(\"open\");\n    });\n  });\n}\n\n//# sourceURL=webpack:///./src/scripts/toggle-button.js?");

/***/ })

})