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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    scroll-behavior: smooth;\\r\\n    background-color: var(--bg);\\r\\n}\\r\\n\\r\\n:root {\\r\\n    /* Fonts */\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n\\r\\n    /* Color text */\\r\\n    --text: #e9eee6;\\r\\n\\r\\n    /* background-color */\\r\\n    --bg: #1C2130;\\r\\n\\r\\n    /* Highlights */\\r\\n    --purple: #6d138b;\\r\\n    --blue: #0FACE1;\\r\\n    --dark: #543e3e2e;\\r\\n    --light: #dee6d8;\\r\\n\\r\\n    /* Font size*/\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 2 / 3;\\r\\n    margin: auto;\\r\\n    display: grid;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, auto);\\r\\n    grid-template-rows: repeat(4, 1fr);\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    padding: 0.8rem;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    color: var(--text);\\r\\n    font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nli {\\r\\n    font-family: var(--title);\\r\\n    color: var(--titles);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    font-size: 2rem;\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.2rem;\\r\\n    color: var(--purple);\\r\\n    text-shadow: 1px 0.8px 2px var(--blue);\\r\\n}\\r\\n\\r\\nli {\\r\\n    color: var(--text);\\r\\n    padding: 0.3rem 0.7rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n    color: var(--blue);\\r\\n    text-shadow: 0 0 15px var(--blue);\\r\\n    transition: .3s;\\r\\n\\r\\n}\\r\\n\\r\\n/* Center the text in the header and footer */\\r\\n\\r\\nheader {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    line-height: 4rem;\\r\\n    font-size: 0.9rem;\\r\\n    grid-row: 4 / 5;\\r\\n    grid-column: 1 / 4;\\r\\n    align-self: baseline;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 400px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 2.7rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 640px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 3.3rem;\\r\\n        text-shadow: 2px 2px 2px var(--blue);\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1.2rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 4rem;\\r\\n        \\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1.3rem;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,kCAAkC;;IAElC,eAAe;IACf,eAAe;;IAEf,qBAAqB;IACrB,aAAa;;IAEb,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;IACZ,aAAa;AACjB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,aAAa;IACb,YAAY;IACZ,eAAe;AACnB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,iBAAiB;AACrB;;;AAGA;;;;IAII,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;IACpB,sCAAsC;AAC1C;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;;AAEnB;;AAEA,6CAA6C;;AAE7C;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;AAChB;;;AAGA;;IAEI;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;;IAEI;QACI,iBAAiB;QACjB,oCAAoC;IACxC;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;;IAEI;QACI,eAAe;;IAEnB;;IAEA;QACI,iBAAiB;IACrB;AACJ\",\"sourcesContent\":[\"* {\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    scroll-behavior: smooth;\\r\\n    background-color: var(--bg);\\r\\n}\\r\\n\\r\\n:root {\\r\\n    /* Fonts */\\r\\n    font-family: 'Poppins', sans-serif;\\r\\n\\r\\n    /* Color text */\\r\\n    --text: #e9eee6;\\r\\n\\r\\n    /* background-color */\\r\\n    --bg: #1C2130;\\r\\n\\r\\n    /* Highlights */\\r\\n    --purple: #6d138b;\\r\\n    --blue: #0FACE1;\\r\\n    --dark: #543e3e2e;\\r\\n    --light: #dee6d8;\\r\\n\\r\\n    /* Font size*/\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 2 / 3;\\r\\n    margin: auto;\\r\\n    display: grid;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, auto);\\r\\n    grid-template-rows: repeat(4, 1fr);\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n    padding: 0.8rem;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    color: var(--text);\\r\\n    font-size: 0.8rem;\\r\\n}\\r\\n\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nli {\\r\\n    font-family: var(--title);\\r\\n    color: var(--titles);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    font-size: 2rem;\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.2rem;\\r\\n    color: var(--purple);\\r\\n    text-shadow: 1px 0.8px 2px var(--blue);\\r\\n}\\r\\n\\r\\nli {\\r\\n    color: var(--text);\\r\\n    padding: 0.3rem 0.7rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n    color: var(--blue);\\r\\n    text-shadow: 0 0 15px var(--blue);\\r\\n    transition: .3s;\\r\\n\\r\\n}\\r\\n\\r\\n/* Center the text in the header and footer */\\r\\n\\r\\nheader {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    line-height: 4rem;\\r\\n    font-size: 0.9rem;\\r\\n    grid-row: 4 / 5;\\r\\n    grid-column: 1 / 4;\\r\\n    align-self: baseline;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 400px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 2.7rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 640px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 3.3rem;\\r\\n        text-shadow: 2px 2px 2px var(--blue);\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1.2rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 4rem;\\r\\n        \\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1.3rem;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLG9CQUFvQixxQkFBcUIsK0JBQStCLGdDQUFnQyxvQ0FBb0MsS0FBSyxlQUFlLDhEQUE4RCxvREFBb0Qsd0RBQXdELHNEQUFzRCx3QkFBd0IsMEJBQTBCLHlCQUF5QixrREFBa0QsS0FBSyxjQUFjLDJCQUEyQix3QkFBd0IscUJBQXFCLHNCQUFzQixLQUFLLG9CQUFvQixzQkFBc0IsK0NBQStDLDJDQUEyQyxzQkFBc0IscUJBQXFCLHdCQUF3QixLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyxXQUFXLG1CQUFtQix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3QixLQUFLLFdBQVcsc0JBQXNCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLEtBQUsscUNBQXFDLGtDQUFrQyw2QkFBNkIsS0FBSyxZQUFZLHdCQUF3QiwyQkFBMkIsZ0NBQWdDLDZCQUE2QiwrQ0FBK0MsS0FBSyxZQUFZLDJCQUEyQiwrQkFBK0IsMEJBQTBCLEtBQUssa0JBQWtCLDJCQUEyQiwwQ0FBMEMsd0JBQXdCLFNBQVMsc0VBQXNFLDJCQUEyQix3QkFBd0IsMEJBQTBCLEtBQUssZ0JBQWdCLDJCQUEyQixrQkFBa0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLDZCQUE2QixxQkFBcUIsS0FBSyx1Q0FBdUMsZ0JBQWdCLDhCQUE4QixTQUFTLGVBQWUsNEJBQTRCLFNBQVMsS0FBSyxtQ0FBbUMsZ0JBQWdCLDhCQUE4QixpREFBaUQsU0FBUyxlQUFlLDhCQUE4QixTQUFTLEtBQUssbUNBQW1DLGdCQUFnQiw0QkFBNEIscUJBQXFCLGVBQWUsOEJBQThCLFNBQVMsS0FBSyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsYUFBYSxXQUFXLFdBQVcsWUFBWSxZQUFZLFVBQVUsWUFBWSxXQUFXLFlBQVksY0FBYyxXQUFXLFVBQVUsT0FBTyxLQUFLLFlBQVksV0FBVyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFlBQVksYUFBYSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFVBQVUsTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxXQUFXLE9BQU8sS0FBSyxZQUFZLE1BQU0sNEJBQTRCLG9CQUFvQixxQkFBcUIsK0JBQStCLGdDQUFnQyxvQ0FBb0MsS0FBSyxlQUFlLDhEQUE4RCxvREFBb0Qsd0RBQXdELHNEQUFzRCx3QkFBd0IsMEJBQTBCLHlCQUF5QixrREFBa0QsS0FBSyxjQUFjLDJCQUEyQix3QkFBd0IscUJBQXFCLHNCQUFzQixLQUFLLG9CQUFvQixzQkFBc0IsK0NBQStDLDJDQUEyQyxzQkFBc0IscUJBQXFCLHdCQUF3QixLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyxXQUFXLG1CQUFtQix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3QixLQUFLLFdBQVcsc0JBQXNCLHlCQUF5QiwyQkFBMkIsMEJBQTBCLEtBQUsscUNBQXFDLGtDQUFrQyw2QkFBNkIsS0FBSyxZQUFZLHdCQUF3QiwyQkFBMkIsZ0NBQWdDLDZCQUE2QiwrQ0FBK0MsS0FBSyxZQUFZLDJCQUEyQiwrQkFBK0IsMEJBQTBCLEtBQUssa0JBQWtCLDJCQUEyQiwwQ0FBMEMsd0JBQXdCLFNBQVMsc0VBQXNFLDJCQUEyQix3QkFBd0IsMEJBQTBCLEtBQUssZ0JBQWdCLDJCQUEyQixrQkFBa0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLDZCQUE2QixxQkFBcUIsS0FBSyx1Q0FBdUMsZ0JBQWdCLDhCQUE4QixTQUFTLGVBQWUsNEJBQTRCLFNBQVMsS0FBSyxtQ0FBbUMsZ0JBQWdCLDhCQUE4QixpREFBaUQsU0FBUyxlQUFlLDhCQUE4QixTQUFTLEtBQUssbUNBQW1DLGdCQUFnQiw0QkFBNEIscUJBQXFCLGVBQWUsOEJBQThCLFNBQVMsS0FBSyxtQkFBbUI7QUFDbm1NO0FBQ0EsK0RBQWUsdUJBQXVCLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3R5bGVzL2dsb2JhbC5jc3M/OTAxNiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKHRydWUpO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLyogRm9udHMgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgLyogQ29sb3IgdGV4dCAqL1xcclxcbiAgICAtLXRleHQ6ICNlOWVlZTY7XFxyXFxuXFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3IgKi9cXHJcXG4gICAgLS1iZzogIzFDMjEzMDtcXHJcXG5cXHJcXG4gICAgLyogSGlnaGxpZ2h0cyAqL1xcclxcbiAgICAtLXB1cnBsZTogIzZkMTM4YjtcXHJcXG4gICAgLS1ibHVlOiAjMEZBQ0UxO1xcclxcbiAgICAtLWRhcms6ICM1NDNlM2UyZTtcXHJcXG4gICAgLS1saWdodDogI2RlZTZkODtcXHJcXG5cXHJcXG4gICAgLyogRm9udCBzaXplKi9cXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxubGkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDAuOHB4IDJweCB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjdyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJsdWUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIENlbnRlciB0aGUgdGV4dCBpbiB0aGUgaGVhZGVyIGFuZCBmb290ZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWJsdWUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG59XCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovL3N0eWxlcy9nbG9iYWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixzQkFBc0I7SUFDdEIsdUJBQXVCO0lBQ3ZCLDJCQUEyQjtBQUMvQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixrQ0FBa0M7O0lBRWxDLGVBQWU7SUFDZixlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixhQUFhOztJQUViLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0lBQ1osYUFBYTtBQUNqQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixzQ0FBc0M7SUFDdEMsa0NBQWtDO0lBQ2xDLGFBQWE7SUFDYixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLFVBQVU7SUFDVixlQUFlO0FBQ25COztBQUVBO0lBQ0ksYUFBYTtJQUNiLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsaUJBQWlCO0FBQ3JCOzs7QUFHQTs7OztJQUlJLHlCQUF5QjtJQUN6QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7SUFDcEIsc0NBQXNDO0FBQzFDOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHNCQUFzQjtJQUN0QixpQkFBaUI7QUFDckI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsaUNBQWlDO0lBQ2pDLGVBQWU7O0FBRW5COztBQUVBLDZDQUE2Qzs7QUFFN0M7SUFDSSxrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsaUJBQWlCO0lBQ2pCLGlCQUFpQjtJQUNqQixlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLG9CQUFvQjtJQUNwQixZQUFZO0FBQ2hCOzs7QUFHQTs7SUFFSTtRQUNJLGlCQUFpQjtJQUNyQjs7SUFFQTtRQUNJLGVBQWU7SUFDbkI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGlCQUFpQjtRQUNqQixvQ0FBb0M7SUFDeEM7O0lBRUE7UUFDSSxpQkFBaUI7SUFDckI7QUFDSjs7QUFFQTs7SUFFSTtRQUNJLGVBQWU7O0lBRW5COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLyogRm9udHMgKi9cXHJcXG4gICAgZm9udC1mYW1pbHk6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG5cXHJcXG4gICAgLyogQ29sb3IgdGV4dCAqL1xcclxcbiAgICAtLXRleHQ6ICNlOWVlZTY7XFxyXFxuXFxyXFxuICAgIC8qIGJhY2tncm91bmQtY29sb3IgKi9cXHJcXG4gICAgLS1iZzogIzFDMjEzMDtcXHJcXG5cXHJcXG4gICAgLyogSGlnaGxpZ2h0cyAqL1xcclxcbiAgICAtLXB1cnBsZTogIzZkMTM4YjtcXHJcXG4gICAgLS1ibHVlOiAjMEZBQ0UxO1xcclxcbiAgICAtLWRhcms6ICM1NDNlM2UyZTtcXHJcXG4gICAgLS1saWdodDogI2RlZTZkODtcXHJcXG5cXHJcXG4gICAgLyogRm9udCBzaXplKi9cXHJcXG4gICAgZm9udC1zaXplOiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5tYWluIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBncmlkLXJvdzogMiAvIDM7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDMsIGF1dG8pO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCg0LCAxZnIpO1xcclxcbiAgICBoZWlnaHQ6IDEwMHZoO1xcclxcbiAgICB3aWR0aDogMTAwdnc7XFxyXFxuICAgIHBhZGRpbmc6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxubGkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICBmb250LXNpemU6IDJyZW07XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbGV0dGVyLXNwYWNpbmc6IC0wLjJyZW07XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1wdXJwbGUpO1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMXB4IDAuOHB4IDJweCB2YXIoLS1ibHVlKTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjdyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJsdWUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIENlbnRlciB0aGUgdGV4dCBpbiB0aGUgaGVhZGVyIGFuZCBmb290ZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDY0MHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xcclxcbiAgICAgICAgdGV4dC1zaGFkb3c6IDJweCAycHggMnB4IHZhcigtLWJsdWUpO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjJyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgICAgIFxcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxLjNyZW07XFxyXFxuICAgIH1cXHJcXG59XCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/global.css\n"));

/***/ })

});