"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/global.css":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/global.css ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    scroll-behavior: smooth;\\r\\n    background-color: var(--bg);\\r\\n}\\r\\n\\r\\n:root {\\r\\n    /* Fonts */\\r\\n    --title: 'Poppins', sans-serif;\\r\\n    --textFont: 'Poppins', sans-serif;\\r\\n    \\r\\n\\r\\n    /* Color text */\\r\\n    --text: #e9eee6;\\r\\n\\r\\n    /* background-color */\\r\\n    --bg: #1C2130;\\r\\n\\r\\n    /* Highlights */\\r\\n    --purple: #6d138b;\\r\\n    --blue: #0FACE1;\\r\\n    --dark: #543e3e2e;\\r\\n    --light: #dee6d8;\\r\\n\\r\\n    /* Font size*/\\r\\n\\r\\n}\\r\\n\\r\\nmain {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 2 / 3;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, auto);\\r\\n    grid-template-rows: repeat(4, 1fr);\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    color: var(--text);\\r\\n    font-family: var(--textFont);\\r\\n    font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nli {\\r\\n    font-family: var(--title);\\r\\n    color: var(--titles);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-shadow: 2px 2px 2px var(--blue);\\r\\n    font-size: 2rem;\\r\\n    letter-spacing: -0.2rem;\\r\\n    color: var(--purple);\\r\\n}\\r\\n\\r\\nli {\\r\\n    color: var(--text);\\r\\n    padding: 0.3rem 0.7rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n    color: var(--blue);\\r\\n    text-shadow: 0 0 15px var(--blue);\\r\\n    transition: .3s;\\r\\n\\r\\n}\\r\\n\\r\\n/* Center the text in the header and footer */\\r\\n\\r\\nheader {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    line-height: 4rem;\\r\\n    font-size: 0.9rem;\\r\\n    grid-row: 4 / 5;\\r\\n    grid-column: 1 / 4;\\r\\n    align-self: baseline;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 400px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 3.5rem;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 768px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 4rem;\\r\\n    }\\r\\n}\\r\\n\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,8BAA8B;IAC9B,iCAAiC;;;IAGjC,eAAe;IACf,eAAe;;IAEf,qBAAqB;IACrB,aAAa;;IAEb,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;;AAEjB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,iBAAiB;AACrB;;;AAGA;;;;IAII,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;;AAEnB;;AAEA,6CAA6C;;AAE7C;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;AAChB;;;AAGA;;IAEI;QACI,iBAAiB;IACrB;AACJ;AACA;;IAEI;QACI,eAAe;IACnB;AACJ\",\"sourcesContent\":[\"* {\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    scroll-behavior: smooth;\\r\\n    background-color: var(--bg);\\r\\n}\\r\\n\\r\\n:root {\\r\\n    /* Fonts */\\r\\n    --title: 'Poppins', sans-serif;\\r\\n    --textFont: 'Poppins', sans-serif;\\r\\n    \\r\\n\\r\\n    /* Color text */\\r\\n    --text: #e9eee6;\\r\\n\\r\\n    /* background-color */\\r\\n    --bg: #1C2130;\\r\\n\\r\\n    /* Highlights */\\r\\n    --purple: #6d138b;\\r\\n    --blue: #0FACE1;\\r\\n    --dark: #543e3e2e;\\r\\n    --light: #dee6d8;\\r\\n\\r\\n    /* Font size*/\\r\\n\\r\\n}\\r\\n\\r\\nmain {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 2 / 3;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, auto);\\r\\n    grid-template-rows: repeat(4, 1fr);\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    color: var(--text);\\r\\n    font-family: var(--textFont);\\r\\n    font-size: 1.3rem;\\r\\n}\\r\\n\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nli {\\r\\n    font-family: var(--title);\\r\\n    color: var(--titles);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-shadow: 2px 2px 2px var(--blue);\\r\\n    font-size: 2rem;\\r\\n    letter-spacing: -0.2rem;\\r\\n    color: var(--purple);\\r\\n}\\r\\n\\r\\nli {\\r\\n    color: var(--text);\\r\\n    padding: 0.3rem 0.7rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n    color: var(--blue);\\r\\n    text-shadow: 0 0 15px var(--blue);\\r\\n    transition: .3s;\\r\\n\\r\\n}\\r\\n\\r\\n/* Center the text in the header and footer */\\r\\n\\r\\nheader {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    line-height: 4rem;\\r\\n    font-size: 0.9rem;\\r\\n    grid-row: 4 / 5;\\r\\n    grid-column: 1 / 4;\\r\\n    align-self: baseline;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 400px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 3.5rem;\\r\\n    }\\r\\n}\\r\\n@media (min-width: 768px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 4rem;\\r\\n    }\\r\\n}\\r\\n\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLG9CQUFvQixxQkFBcUIsK0JBQStCLGdDQUFnQyxvQ0FBb0MsS0FBSyxlQUFlLDBEQUEwRCwwQ0FBMEMsNERBQTRELHdEQUF3RCxzREFBc0Qsd0JBQXdCLDBCQUEwQix5QkFBeUIsbUNBQW1DLGNBQWMsMkJBQTJCLHdCQUF3QixxQkFBcUIsS0FBSyxvQkFBb0Isc0JBQXNCLCtDQUErQywyQ0FBMkMsc0JBQXNCLHFCQUFxQixLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyxXQUFXLG1CQUFtQix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3QixLQUFLLFdBQVcsc0JBQXNCLHlCQUF5QiwyQkFBMkIscUNBQXFDLDBCQUEwQixLQUFLLHFDQUFxQyxrQ0FBa0MsNkJBQTZCLEtBQUssWUFBWSw2Q0FBNkMsd0JBQXdCLGdDQUFnQyw2QkFBNkIsS0FBSyxZQUFZLDJCQUEyQiwrQkFBK0IsMEJBQTBCLEtBQUssa0JBQWtCLDJCQUEyQiwwQ0FBMEMsd0JBQXdCLFNBQVMsc0VBQXNFLDJCQUEyQix3QkFBd0IsMEJBQTBCLEtBQUssZ0JBQWdCLDJCQUEyQixrQkFBa0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLDZCQUE2QixxQkFBcUIsS0FBSyx1Q0FBdUMsZ0JBQWdCLDhCQUE4QixTQUFTLEtBQUssK0JBQStCLGdCQUFnQiw0QkFBNEIsU0FBUyxLQUFLLFdBQVcsa0ZBQWtGLFVBQVUsVUFBVSxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGVBQWUsV0FBVyxXQUFXLFlBQVksWUFBWSxVQUFVLFlBQVksV0FBVyxZQUFZLGNBQWMsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssWUFBWSxhQUFhLFlBQVksT0FBTyxhQUFhLE1BQU0sWUFBWSxXQUFXLFlBQVksT0FBTyxLQUFLLFlBQVksV0FBVyxZQUFZLGFBQWEsV0FBVyxZQUFZLGFBQWEsV0FBVyxRQUFRLE1BQU0sS0FBSyxZQUFZLE1BQU0sS0FBSyxNQUFNLEtBQUssVUFBVSxNQUFNLDRCQUE0QixvQkFBb0IscUJBQXFCLCtCQUErQixnQ0FBZ0Msb0NBQW9DLEtBQUssZUFBZSwwREFBMEQsMENBQTBDLDREQUE0RCx3REFBd0Qsc0RBQXNELHdCQUF3QiwwQkFBMEIseUJBQXlCLG1DQUFtQyxjQUFjLDJCQUEyQix3QkFBd0IscUJBQXFCLEtBQUssb0JBQW9CLHNCQUFzQiwrQ0FBK0MsMkNBQTJDLHNCQUFzQixxQkFBcUIsS0FBSyxnQkFBZ0Isd0JBQXdCLEtBQUssV0FBVyxtQkFBbUIsd0JBQXdCLEtBQUssaUJBQWlCLG1CQUFtQix3QkFBd0IsS0FBSyxXQUFXLHNCQUFzQix5QkFBeUIsMkJBQTJCLHFDQUFxQywwQkFBMEIsS0FBSyxxQ0FBcUMsa0NBQWtDLDZCQUE2QixLQUFLLFlBQVksNkNBQTZDLHdCQUF3QixnQ0FBZ0MsNkJBQTZCLEtBQUssWUFBWSwyQkFBMkIsK0JBQStCLDBCQUEwQixLQUFLLGtCQUFrQiwyQkFBMkIsMENBQTBDLHdCQUF3QixTQUFTLHNFQUFzRSwyQkFBMkIsd0JBQXdCLDBCQUEwQixLQUFLLGdCQUFnQiwyQkFBMkIsa0JBQWtCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDJCQUEyQiw2QkFBNkIscUJBQXFCLEtBQUssdUNBQXVDLGdCQUFnQiw4QkFBOEIsU0FBUyxLQUFLLCtCQUErQixnQkFBZ0IsNEJBQTRCLFNBQVMsS0FBSyx1QkFBdUI7QUFDNTBLO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3M/OTAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLyogRm9udHMgKi9cXHJcXG4gICAgLS10aXRsZTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXRleHRGb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIFxcclxcblxcclxcbiAgICAvKiBDb2xvciB0ZXh0ICovXFxyXFxuICAgIC0tdGV4dDogI2U5ZWVlNjtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvciAqL1xcclxcbiAgICAtLWJnOiAjMUMyMTMwO1xcclxcblxcclxcbiAgICAvKiBIaWdobGlnaHRzICovXFxyXFxuICAgIC0tcHVycGxlOiAjNmQxMzhiO1xcclxcbiAgICAtLWJsdWU6ICMwRkFDRTE7XFxyXFxuICAgIC0tZGFyazogIzU0M2UzZTJlO1xcclxcbiAgICAtLWxpZ2h0OiAjZGVlNmQ4O1xcclxcblxcclxcbiAgICAvKiBGb250IHNpemUqL1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxufVxcclxcblxcclxcbnNlbGVjdCB7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuYTpob3ZlciB7XFxyXFxuICAgIGFsbDogdW5zZXQ7XFxyXFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxucCB7XFxyXFxuICAgIG1hcmdpbi10b3A6IDA7XFxyXFxuICAgIG1hcmdpbi1ib3R0b206IDA7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRleHRGb250KTtcXHJcXG4gICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxufVxcclxcblxcclxcblxcclxcbmgxLFxcclxcbmgyLFxcclxcbmgzLFxcclxcbmxpIHtcXHJcXG4gICAgZm9udC1mYW1pbHk6IHZhcigtLXRpdGxlKTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRpdGxlcyk7XFxyXFxufVxcclxcblxcclxcbmgxIHtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWJsdWUpO1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjdyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJsdWUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIENlbnRlciB0aGUgdGV4dCBpbiB0aGUgaGVhZGVyIGFuZCBmb290ZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzLjVyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixpQ0FBaUM7OztJQUdqQyxlQUFlO0lBQ2YsZUFBZTs7SUFFZixxQkFBcUI7SUFDckIsYUFBYTs7SUFFYixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZ0JBQWdCOztJQUVoQixhQUFhOztBQUVqQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsWUFBWTtBQUNoQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQiw0QkFBNEI7SUFDNUIsaUJBQWlCO0FBQ3JCOzs7QUFHQTs7OztJQUlJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxvQ0FBb0M7SUFDcEMsZUFBZTtJQUNmLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZUFBZTs7QUFFbkI7O0FBRUEsNkNBQTZDOztBQUU3QztJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7OztBQUdBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7QUFDQTs7SUFFSTtRQUNJLGVBQWU7SUFDbkI7QUFDSlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqIHtcXHJcXG4gICAgbWFyZ2luOiAwcHg7XFxyXFxuICAgIHBhZGRpbmc6IDBweDtcXHJcXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gICAgc2Nyb2xsLWJlaGF2aW9yOiBzbW9vdGg7XFxyXFxuICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnKTtcXHJcXG59XFxyXFxuXFxyXFxuOnJvb3Qge1xcclxcbiAgICAvKiBGb250cyAqL1xcclxcbiAgICAtLXRpdGxlOiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuICAgIC0tdGV4dEZvbnQ6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgXFxyXFxuXFxyXFxuICAgIC8qIENvbG9yIHRleHQgKi9cXHJcXG4gICAgLS10ZXh0OiAjZTllZWU2O1xcclxcblxcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yICovXFxyXFxuICAgIC0tYmc6ICMxQzIxMzA7XFxyXFxuXFxyXFxuICAgIC8qIEhpZ2hsaWdodHMgKi9cXHJcXG4gICAgLS1wdXJwbGU6ICM2ZDEzOGI7XFxyXFxuICAgIC0tYmx1ZTogIzBGQUNFMTtcXHJcXG4gICAgLS1kYXJrOiAjNTQzZTNlMmU7XFxyXFxuICAgIC0tbGlnaHQ6ICNkZWU2ZDg7XFxyXFxuXFxyXFxuICAgIC8qIEZvbnQgc2l6ZSovXFxyXFxuXFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dEZvbnQpO1xcclxcbiAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxubGkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbn1cXHJcXG5cXHJcXG5saSB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10ZXh0KTtcXHJcXG4gICAgcGFkZGluZzogMC4zcmVtIDAuN3JlbTtcXHJcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxufVxcclxcblxcclxcbmxpOmhvdmVyIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLWJsdWUpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMCAwIDE1cHggdmFyKC0tYmx1ZSk7XFxyXFxuICAgIHRyYW5zaXRpb246IC4zcztcXHJcXG5cXHJcXG59XFxyXFxuXFxyXFxuLyogQ2VudGVyIHRoZSB0ZXh0IGluIHRoZSBoZWFkZXIgYW5kIGZvb3RlciAqL1xcclxcblxcclxcbmhlYWRlciB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXHJcXG4gICAgZ3JpZC1yb3c6IDEgLyAyO1xcclxcbiAgICBtYXJnaW46IDJyZW0gMnJlbTtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIHtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBtYXJnaW46IDA7XFxyXFxuICAgIGxpbmUtaGVpZ2h0OiA0cmVtO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG4gICAgZ3JpZC1yb3c6IDQgLyA1O1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGFsaWduLXNlbGY6IGJhc2VsaW5lO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA0MDBweCkge1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDMuNXJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNzY4cHgpIHtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/global.css\n"));

/***/ })

});