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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js */ \"./node_modules/next/dist/build/webpack/loaders/css-loader/src/runtime/api.js\");\n/* harmony import */ var _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);\n// Imports\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_next_dist_build_webpack_loaders_css_loader_src_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(true);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    scroll-behavior: smooth;\\r\\n    background-color: var(--bg);\\r\\n}\\r\\n\\r\\n:root {\\r\\n    /* Fonts */\\r\\n    --title: 'Poppins', sans-serif;\\r\\n    --textFont: 'Poppins', sans-serif;\\r\\n\\r\\n    /* Color text */\\r\\n    --text: #e9eee6;\\r\\n\\r\\n    /* background-color */\\r\\n    --bg: #1C2130;\\r\\n\\r\\n    /* Highlights */\\r\\n    --purple: #6d138b;\\r\\n    --blue: #0FACE1;\\r\\n    --dark: #543e3e2e;\\r\\n    --light: #dee6d8;\\r\\n\\r\\n    /* Font size*/\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 2 / 3;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, auto);\\r\\n    grid-template-rows: repeat(4, 1fr);\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    color: var(--text);\\r\\n    font-family: var(--textFont);\\r\\n    font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nli {\\r\\n    font-family: var(--title);\\r\\n    color: var(--titles);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-shadow: 2px 2px 2px var(--blue);\\r\\n    font-size: 2rem;\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.2rem;\\r\\n    color: var(--purple);\\r\\n}\\r\\n\\r\\nli {\\r\\n    color: var(--text);\\r\\n    padding: 0.3rem 0.7rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n    color: var(--blue);\\r\\n    text-shadow: 0 0 15px var(--blue);\\r\\n    transition: .3s;\\r\\n\\r\\n}\\r\\n\\r\\n/* Center the text in the header and footer */\\r\\n\\r\\nheader {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    line-height: 4rem;\\r\\n    font-size: 0.9rem;\\r\\n    grid-row: 4 / 5;\\r\\n    grid-column: 1 / 4;\\r\\n    align-self: baseline;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 400px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 2.7rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 0.8rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 500px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 3.3rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 4rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1.3rem;\\r\\n    }\\r\\n}\", \"\",{\"version\":3,\"sources\":[\"webpack://styles/global.css\"],\"names\":[],\"mappings\":\"AAAA;IACI,WAAW;IACX,YAAY;IACZ,sBAAsB;IACtB,uBAAuB;IACvB,2BAA2B;AAC/B;;AAEA;IACI,UAAU;IACV,8BAA8B;IAC9B,iCAAiC;;IAEjC,eAAe;IACf,eAAe;;IAEf,qBAAqB;IACrB,aAAa;;IAEb,eAAe;IACf,iBAAiB;IACjB,eAAe;IACf,iBAAiB;IACjB,gBAAgB;;IAEhB,aAAa;IACb,eAAe;AACnB;;AAEA;IACI,kBAAkB;IAClB,eAAe;IACf,YAAY;AAChB;;AAEA;IACI,aAAa;IACb,sCAAsC;IACtC,kCAAkC;IAClC,aAAa;IACb,YAAY;AAChB;;AAEA;IACI,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,UAAU;IACV,eAAe;AACnB;;AAEA;IACI,aAAa;IACb,gBAAgB;IAChB,kBAAkB;IAClB,4BAA4B;IAC5B,iBAAiB;AACrB;;;AAGA;;;;IAII,yBAAyB;IACzB,oBAAoB;AACxB;;AAEA;IACI,oCAAoC;IACpC,eAAe;IACf,kBAAkB;IAClB,uBAAuB;IACvB,oBAAoB;AACxB;;AAEA;IACI,kBAAkB;IAClB,sBAAsB;IACtB,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,iCAAiC;IACjC,eAAe;;AAEnB;;AAEA,6CAA6C;;AAE7C;IACI,kBAAkB;IAClB,eAAe;IACf,iBAAiB;AACrB;;AAEA;IACI,kBAAkB;IAClB,SAAS;IACT,iBAAiB;IACjB,iBAAiB;IACjB,eAAe;IACf,kBAAkB;IAClB,oBAAoB;IACpB,YAAY;AAChB;;;AAGA;;IAEI;QACI,iBAAiB;IACrB;;IAEA;QACI,iBAAiB;IACrB;AACJ;;AAEA;;IAEI;QACI,iBAAiB;IACrB;;IAEA;QACI,eAAe;IACnB;AACJ;;AAEA;;IAEI;QACI,eAAe;IACnB;;IAEA;QACI,iBAAiB;IACrB;AACJ\",\"sourcesContent\":[\"* {\\r\\n    margin: 0px;\\r\\n    padding: 0px;\\r\\n    box-sizing: border-box;\\r\\n    scroll-behavior: smooth;\\r\\n    background-color: var(--bg);\\r\\n}\\r\\n\\r\\n:root {\\r\\n    /* Fonts */\\r\\n    --title: 'Poppins', sans-serif;\\r\\n    --textFont: 'Poppins', sans-serif;\\r\\n\\r\\n    /* Color text */\\r\\n    --text: #e9eee6;\\r\\n\\r\\n    /* background-color */\\r\\n    --bg: #1C2130;\\r\\n\\r\\n    /* Highlights */\\r\\n    --purple: #6d138b;\\r\\n    --blue: #0FACE1;\\r\\n    --dark: #543e3e2e;\\r\\n    --light: #dee6d8;\\r\\n\\r\\n    /* Font size*/\\r\\n    font-size: 16px;\\r\\n}\\r\\n\\r\\nmain {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 2 / 3;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n.container {\\r\\n    display: grid;\\r\\n    grid-template-columns: repeat(3, auto);\\r\\n    grid-template-rows: repeat(4, 1fr);\\r\\n    height: 100vh;\\r\\n    width: 100vw;\\r\\n}\\r\\n\\r\\nselect {\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\na:hover {\\r\\n    all: unset;\\r\\n    cursor: pointer;\\r\\n}\\r\\n\\r\\np {\\r\\n    margin-top: 0;\\r\\n    margin-bottom: 0;\\r\\n    color: var(--text);\\r\\n    font-family: var(--textFont);\\r\\n    font-size: 0.9rem;\\r\\n}\\r\\n\\r\\n\\r\\nh1,\\r\\nh2,\\r\\nh3,\\r\\nli {\\r\\n    font-family: var(--title);\\r\\n    color: var(--titles);\\r\\n}\\r\\n\\r\\nh1 {\\r\\n    text-shadow: 2px 2px 2px var(--blue);\\r\\n    font-size: 2rem;\\r\\n    text-align: center;\\r\\n    letter-spacing: -0.2rem;\\r\\n    color: var(--purple);\\r\\n}\\r\\n\\r\\nli {\\r\\n    color: var(--text);\\r\\n    padding: 0.3rem 0.7rem;\\r\\n    font-weight: bold;\\r\\n}\\r\\n\\r\\nli:hover {\\r\\n    color: var(--blue);\\r\\n    text-shadow: 0 0 15px var(--blue);\\r\\n    transition: .3s;\\r\\n\\r\\n}\\r\\n\\r\\n/* Center the text in the header and footer */\\r\\n\\r\\nheader {\\r\\n    grid-column: 1 / 4;\\r\\n    grid-row: 1 / 2;\\r\\n    margin: 2rem 2rem;\\r\\n}\\r\\n\\r\\nfooter {\\r\\n    text-align: center;\\r\\n    margin: 0;\\r\\n    line-height: 4rem;\\r\\n    font-size: 0.9rem;\\r\\n    grid-row: 4 / 5;\\r\\n    grid-column: 1 / 4;\\r\\n    align-self: baseline;\\r\\n    margin: auto;\\r\\n}\\r\\n\\r\\n\\r\\n@media (min-width: 400px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 2.7rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 0.8rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 500px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 3.3rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1rem;\\r\\n    }\\r\\n}\\r\\n\\r\\n@media (min-width: 768px) {\\r\\n\\r\\n    h1 {\\r\\n        font-size: 4rem;\\r\\n    }\\r\\n\\r\\n    p {\\r\\n        font-size: 1.3rem;\\r\\n    }\\r\\n}\"],\"sourceRoot\":\"\"}]);\n// Exports\n/* harmony default export */ __webpack_exports__[\"default\"] = (___CSS_LOADER_EXPORT___);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2J1aWxkL3dlYnBhY2svbG9hZGVycy9jc3MtbG9hZGVyL3NyYy9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXS5vbmVPZlsxM10udXNlWzFdIS4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvcG9zdGNzcy1sb2FkZXIvc3JjL2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzFdLm9uZU9mWzEzXS51c2VbMl0hLi9zdHlsZXMvZ2xvYmFsLmNzcy5qcyIsIm1hcHBpbmdzIjoiOzs7QUFBQTtBQUN3SDtBQUN4SCw4QkFBOEIsa0hBQTJCO0FBQ3pEO0FBQ0EsNkNBQTZDLG9CQUFvQixxQkFBcUIsK0JBQStCLGdDQUFnQyxvQ0FBb0MsS0FBSyxlQUFlLDBEQUEwRCwwQ0FBMEMsb0RBQW9ELHdEQUF3RCxzREFBc0Qsd0JBQXdCLDBCQUEwQix5QkFBeUIsa0RBQWtELEtBQUssY0FBYywyQkFBMkIsd0JBQXdCLHFCQUFxQixLQUFLLG9CQUFvQixzQkFBc0IsK0NBQStDLDJDQUEyQyxzQkFBc0IscUJBQXFCLEtBQUssZ0JBQWdCLHdCQUF3QixLQUFLLFdBQVcsbUJBQW1CLHdCQUF3QixLQUFLLGlCQUFpQixtQkFBbUIsd0JBQXdCLEtBQUssV0FBVyxzQkFBc0IseUJBQXlCLDJCQUEyQixxQ0FBcUMsMEJBQTBCLEtBQUsscUNBQXFDLGtDQUFrQyw2QkFBNkIsS0FBSyxZQUFZLDZDQUE2Qyx3QkFBd0IsMkJBQTJCLGdDQUFnQyw2QkFBNkIsS0FBSyxZQUFZLDJCQUEyQiwrQkFBK0IsMEJBQTBCLEtBQUssa0JBQWtCLDJCQUEyQiwwQ0FBMEMsd0JBQXdCLFNBQVMsc0VBQXNFLDJCQUEyQix3QkFBd0IsMEJBQTBCLEtBQUssZ0JBQWdCLDJCQUEyQixrQkFBa0IsMEJBQTBCLDBCQUEwQix3QkFBd0IsMkJBQTJCLDZCQUE2QixxQkFBcUIsS0FBSyx1Q0FBdUMsZ0JBQWdCLDhCQUE4QixTQUFTLGVBQWUsOEJBQThCLFNBQVMsS0FBSyxtQ0FBbUMsZ0JBQWdCLDhCQUE4QixTQUFTLGVBQWUsNEJBQTRCLFNBQVMsS0FBSyxtQ0FBbUMsZ0JBQWdCLDRCQUE0QixTQUFTLGVBQWUsOEJBQThCLFNBQVMsS0FBSyxPQUFPLGtGQUFrRixVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFVBQVUsWUFBWSxjQUFjLFdBQVcsV0FBVyxZQUFZLFlBQVksVUFBVSxZQUFZLFdBQVcsWUFBWSxjQUFjLFdBQVcsVUFBVSxPQUFPLEtBQUssWUFBWSxXQUFXLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLFdBQVcsVUFBVSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsT0FBTyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxRQUFRLFFBQVEsWUFBWSxhQUFhLE9BQU8sS0FBSyxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLE9BQU8sS0FBSyxZQUFZLGFBQWEsWUFBWSxPQUFPLGFBQWEsTUFBTSxZQUFZLFdBQVcsWUFBWSxPQUFPLEtBQUssWUFBWSxXQUFXLFlBQVksYUFBYSxXQUFXLFlBQVksYUFBYSxXQUFXLFFBQVEsTUFBTSxLQUFLLFlBQVksT0FBTyxLQUFLLFlBQVksTUFBTSxNQUFNLE1BQU0sS0FBSyxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxNQUFNLEtBQUssVUFBVSxPQUFPLEtBQUssWUFBWSxNQUFNLDRCQUE0QixvQkFBb0IscUJBQXFCLCtCQUErQixnQ0FBZ0Msb0NBQW9DLEtBQUssZUFBZSwwREFBMEQsMENBQTBDLG9EQUFvRCx3REFBd0Qsc0RBQXNELHdCQUF3QiwwQkFBMEIseUJBQXlCLGtEQUFrRCxLQUFLLGNBQWMsMkJBQTJCLHdCQUF3QixxQkFBcUIsS0FBSyxvQkFBb0Isc0JBQXNCLCtDQUErQywyQ0FBMkMsc0JBQXNCLHFCQUFxQixLQUFLLGdCQUFnQix3QkFBd0IsS0FBSyxXQUFXLG1CQUFtQix3QkFBd0IsS0FBSyxpQkFBaUIsbUJBQW1CLHdCQUF3QixLQUFLLFdBQVcsc0JBQXNCLHlCQUF5QiwyQkFBMkIscUNBQXFDLDBCQUEwQixLQUFLLHFDQUFxQyxrQ0FBa0MsNkJBQTZCLEtBQUssWUFBWSw2Q0FBNkMsd0JBQXdCLDJCQUEyQixnQ0FBZ0MsNkJBQTZCLEtBQUssWUFBWSwyQkFBMkIsK0JBQStCLDBCQUEwQixLQUFLLGtCQUFrQiwyQkFBMkIsMENBQTBDLHdCQUF3QixTQUFTLHNFQUFzRSwyQkFBMkIsd0JBQXdCLDBCQUEwQixLQUFLLGdCQUFnQiwyQkFBMkIsa0JBQWtCLDBCQUEwQiwwQkFBMEIsd0JBQXdCLDJCQUEyQiw2QkFBNkIscUJBQXFCLEtBQUssdUNBQXVDLGdCQUFnQiw4QkFBOEIsU0FBUyxlQUFlLDhCQUE4QixTQUFTLEtBQUssbUNBQW1DLGdCQUFnQiw4QkFBOEIsU0FBUyxlQUFlLDRCQUE0QixTQUFTLEtBQUssbUNBQW1DLGdCQUFnQiw0QkFBNEIsU0FBUyxlQUFlLDhCQUE4QixTQUFTLEtBQUssbUJBQW1CO0FBQ3ZoTTtBQUNBLCtEQUFlLHVCQUF1QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3N0eWxlcy9nbG9iYWwuY3NzPzkwMTYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vbm9kZV9tb2R1bGVzL25leHQvZGlzdC9idWlsZC93ZWJwYWNrL2xvYWRlcnMvY3NzLWxvYWRlci9zcmMvcnVudGltZS9hcGkuanNcIjtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyh0cnVlKTtcbi8vIE1vZHVsZVxuX19fQ1NTX0xPQURFUl9FWFBPUlRfX18ucHVzaChbbW9kdWxlLmlkLCBcIioge1xcclxcbiAgICBtYXJnaW46IDBweDtcXHJcXG4gICAgcGFkZGluZzogMHB4O1xcclxcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDtcXHJcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmcpO1xcclxcbn1cXHJcXG5cXHJcXG46cm9vdCB7XFxyXFxuICAgIC8qIEZvbnRzICovXFxyXFxuICAgIC0tdGl0bGU6ICdQb3BwaW5zJywgc2Fucy1zZXJpZjtcXHJcXG4gICAgLS10ZXh0Rm9udDogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcblxcclxcbiAgICAvKiBDb2xvciB0ZXh0ICovXFxyXFxuICAgIC0tdGV4dDogI2U5ZWVlNjtcXHJcXG5cXHJcXG4gICAgLyogYmFja2dyb3VuZC1jb2xvciAqL1xcclxcbiAgICAtLWJnOiAjMUMyMTMwO1xcclxcblxcclxcbiAgICAvKiBIaWdobGlnaHRzICovXFxyXFxuICAgIC0tcHVycGxlOiAjNmQxMzhiO1xcclxcbiAgICAtLWJsdWU6ICMwRkFDRTE7XFxyXFxuICAgIC0tZGFyazogIzU0M2UzZTJlO1xcclxcbiAgICAtLWxpZ2h0OiAjZGVlNmQ4O1xcclxcblxcclxcbiAgICAvKiBGb250IHNpemUqL1xcclxcbiAgICBmb250LXNpemU6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbm1haW4ge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAyIC8gMztcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gICAgZGlzcGxheTogZ3JpZDtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiByZXBlYXQoMywgYXV0byk7XFxyXFxuICAgIGdyaWQtdGVtcGxhdGUtcm93czogcmVwZWF0KDQsIDFmcik7XFxyXFxuICAgIGhlaWdodDogMTAwdmg7XFxyXFxuICAgIHdpZHRoOiAxMDB2dztcXHJcXG59XFxyXFxuXFxyXFxuc2VsZWN0IHtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5hOmhvdmVyIHtcXHJcXG4gICAgYWxsOiB1bnNldDtcXHJcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG5wIHtcXHJcXG4gICAgbWFyZ2luLXRvcDogMDtcXHJcXG4gICAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGV4dEZvbnQpO1xcclxcbiAgICBmb250LXNpemU6IDAuOXJlbTtcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuaDEsXFxyXFxuaDIsXFxyXFxuaDMsXFxyXFxubGkge1xcclxcbiAgICBmb250LWZhbWlseTogdmFyKC0tdGl0bGUpO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGl0bGVzKTtcXHJcXG59XFxyXFxuXFxyXFxuaDEge1xcclxcbiAgICB0ZXh0LXNoYWRvdzogMnB4IDJweCAycHggdmFyKC0tYmx1ZSk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMnJlbTtcXHJcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgICBsZXR0ZXItc3BhY2luZzogLTAuMnJlbTtcXHJcXG4gICAgY29sb3I6IHZhcigtLXB1cnBsZSk7XFxyXFxufVxcclxcblxcclxcbmxpIHtcXHJcXG4gICAgY29sb3I6IHZhcigtLXRleHQpO1xcclxcbiAgICBwYWRkaW5nOiAwLjNyZW0gMC43cmVtO1xcclxcbiAgICBmb250LXdlaWdodDogYm9sZDtcXHJcXG59XFxyXFxuXFxyXFxubGk6aG92ZXIge1xcclxcbiAgICBjb2xvcjogdmFyKC0tYmx1ZSk7XFxyXFxuICAgIHRleHQtc2hhZG93OiAwIDAgMTVweCB2YXIoLS1ibHVlKTtcXHJcXG4gICAgdHJhbnNpdGlvbjogLjNzO1xcclxcblxcclxcbn1cXHJcXG5cXHJcXG4vKiBDZW50ZXIgdGhlIHRleHQgaW4gdGhlIGhlYWRlciBhbmQgZm9vdGVyICovXFxyXFxuXFxyXFxuaGVhZGVyIHtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBncmlkLXJvdzogMSAvIDI7XFxyXFxuICAgIG1hcmdpbjogMnJlbSAycmVtO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIge1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIG1hcmdpbjogMDtcXHJcXG4gICAgbGluZS1oZWlnaHQ6IDRyZW07XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbiAgICBncmlkLXJvdzogNCAvIDU7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXHJcXG4gICAgYWxpZ24tc2VsZjogYmFzZWxpbmU7XFxyXFxuICAgIG1hcmdpbjogYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDQwMHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMi43cmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAwLjhyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDUwMHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMy4zcmVtO1xcclxcbiAgICB9XFxyXFxuXFxyXFxuICAgIHAge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xcclxcbiAgICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWluLXdpZHRoOiA3NjhweCkge1xcclxcblxcclxcbiAgICBoMSB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDRyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDEuM3JlbTtcXHJcXG4gICAgfVxcclxcbn1cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vc3R5bGVzL2dsb2JhbC5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUE7SUFDSSxXQUFXO0lBQ1gsWUFBWTtJQUNaLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsMkJBQTJCO0FBQy9COztBQUVBO0lBQ0ksVUFBVTtJQUNWLDhCQUE4QjtJQUM5QixpQ0FBaUM7O0lBRWpDLGVBQWU7SUFDZixlQUFlOztJQUVmLHFCQUFxQjtJQUNyQixhQUFhOztJQUViLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixnQkFBZ0I7O0lBRWhCLGFBQWE7SUFDYixlQUFlO0FBQ25COztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNDQUFzQztJQUN0QyxrQ0FBa0M7SUFDbEMsYUFBYTtJQUNiLFlBQVk7QUFDaEI7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7O0FBRUE7SUFDSSxVQUFVO0lBQ1YsZUFBZTtBQUNuQjs7QUFFQTtJQUNJLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLDRCQUE0QjtJQUM1QixpQkFBaUI7QUFDckI7OztBQUdBOzs7O0lBSUkseUJBQXlCO0lBQ3pCLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHVCQUF1QjtJQUN2QixvQkFBb0I7QUFDeEI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixpQ0FBaUM7SUFDakMsZUFBZTs7QUFFbkI7O0FBRUEsNkNBQTZDOztBQUU3QztJQUNJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLFlBQVk7QUFDaEI7OztBQUdBOztJQUVJO1FBQ0ksaUJBQWlCO0lBQ3JCOztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7O0FBRUE7O0lBRUk7UUFDSSxlQUFlO0lBQ25COztJQUVBO1FBQ0ksaUJBQWlCO0lBQ3JCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiKiB7XFxyXFxuICAgIG1hcmdpbjogMHB4O1xcclxcbiAgICBwYWRkaW5nOiAwcHg7XFxyXFxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxuICAgIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoO1xcclxcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZyk7XFxyXFxufVxcclxcblxcclxcbjpyb290IHtcXHJcXG4gICAgLyogRm9udHMgKi9cXHJcXG4gICAgLS10aXRsZTogJ1BvcHBpbnMnLCBzYW5zLXNlcmlmO1xcclxcbiAgICAtLXRleHRGb250OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XFxyXFxuXFxyXFxuICAgIC8qIENvbG9yIHRleHQgKi9cXHJcXG4gICAgLS10ZXh0OiAjZTllZWU2O1xcclxcblxcclxcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yICovXFxyXFxuICAgIC0tYmc6ICMxQzIxMzA7XFxyXFxuXFxyXFxuICAgIC8qIEhpZ2hsaWdodHMgKi9cXHJcXG4gICAgLS1wdXJwbGU6ICM2ZDEzOGI7XFxyXFxuICAgIC0tYmx1ZTogIzBGQUNFMTtcXHJcXG4gICAgLS1kYXJrOiAjNTQzZTNlMmU7XFxyXFxuICAgIC0tbGlnaHQ6ICNkZWU2ZDg7XFxyXFxuXFxyXFxuICAgIC8qIEZvbnQgc2l6ZSovXFxyXFxuICAgIGZvbnQtc2l6ZTogMTZweDtcXHJcXG59XFxyXFxuXFxyXFxubWFpbiB7XFxyXFxuICAgIGdyaWQtY29sdW1uOiAxIC8gNDtcXHJcXG4gICAgZ3JpZC1yb3c6IDIgLyAzO1xcclxcbiAgICBtYXJnaW46IGF1dG87XFxyXFxufVxcclxcblxcclxcbi5jb250YWluZXIge1xcclxcbiAgICBkaXNwbGF5OiBncmlkO1xcclxcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdCgzLCBhdXRvKTtcXHJcXG4gICAgZ3JpZC10ZW1wbGF0ZS1yb3dzOiByZXBlYXQoNCwgMWZyKTtcXHJcXG4gICAgaGVpZ2h0OiAxMDB2aDtcXHJcXG4gICAgd2lkdGg6IDEwMHZ3O1xcclxcbn1cXHJcXG5cXHJcXG5zZWxlY3Qge1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmEge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbmE6aG92ZXIge1xcclxcbiAgICBhbGw6IHVuc2V0O1xcclxcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbnAge1xcclxcbiAgICBtYXJnaW4tdG9wOiAwO1xcclxcbiAgICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10ZXh0Rm9udCk7XFxyXFxuICAgIGZvbnQtc2l6ZTogMC45cmVtO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5oMSxcXHJcXG5oMixcXHJcXG5oMyxcXHJcXG5saSB7XFxyXFxuICAgIGZvbnQtZmFtaWx5OiB2YXIoLS10aXRsZSk7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS10aXRsZXMpO1xcclxcbn1cXHJcXG5cXHJcXG5oMSB7XFxyXFxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDJweCB2YXIoLS1ibHVlKTtcXHJcXG4gICAgZm9udC1zaXplOiAycmVtO1xcclxcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICAgIGxldHRlci1zcGFjaW5nOiAtMC4ycmVtO1xcclxcbiAgICBjb2xvcjogdmFyKC0tcHVycGxlKTtcXHJcXG59XFxyXFxuXFxyXFxubGkge1xcclxcbiAgICBjb2xvcjogdmFyKC0tdGV4dCk7XFxyXFxuICAgIHBhZGRpbmc6IDAuM3JlbSAwLjdyZW07XFxyXFxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xcclxcbn1cXHJcXG5cXHJcXG5saTpob3ZlciB7XFxyXFxuICAgIGNvbG9yOiB2YXIoLS1ibHVlKTtcXHJcXG4gICAgdGV4dC1zaGFkb3c6IDAgMCAxNXB4IHZhcigtLWJsdWUpO1xcclxcbiAgICB0cmFuc2l0aW9uOiAuM3M7XFxyXFxuXFxyXFxufVxcclxcblxcclxcbi8qIENlbnRlciB0aGUgdGV4dCBpbiB0aGUgaGVhZGVyIGFuZCBmb290ZXIgKi9cXHJcXG5cXHJcXG5oZWFkZXIge1xcclxcbiAgICBncmlkLWNvbHVtbjogMSAvIDQ7XFxyXFxuICAgIGdyaWQtcm93OiAxIC8gMjtcXHJcXG4gICAgbWFyZ2luOiAycmVtIDJyZW07XFxyXFxufVxcclxcblxcclxcbmZvb3RlciB7XFxyXFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gICAgbWFyZ2luOiAwO1xcclxcbiAgICBsaW5lLWhlaWdodDogNHJlbTtcXHJcXG4gICAgZm9udC1zaXplOiAwLjlyZW07XFxyXFxuICAgIGdyaWQtcm93OiA0IC8gNTtcXHJcXG4gICAgZ3JpZC1jb2x1bW46IDEgLyA0O1xcclxcbiAgICBhbGlnbi1zZWxmOiBiYXNlbGluZTtcXHJcXG4gICAgbWFyZ2luOiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNDAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAyLjdyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDAuOHJlbTtcXHJcXG4gICAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1pbi13aWR0aDogNTAwcHgpIHtcXHJcXG5cXHJcXG4gICAgaDEge1xcclxcbiAgICAgICAgZm9udC1zaXplOiAzLjNyZW07XFxyXFxuICAgIH1cXHJcXG5cXHJcXG4gICAgcCB7XFxyXFxuICAgICAgICBmb250LXNpemU6IDFyZW07XFxyXFxuICAgIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtaW4td2lkdGg6IDc2OHB4KSB7XFxyXFxuXFxyXFxuICAgIGgxIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogNHJlbTtcXHJcXG4gICAgfVxcclxcblxcclxcbiAgICBwIHtcXHJcXG4gICAgICAgIGZvbnQtc2l6ZTogMS4zcmVtO1xcclxcbiAgICB9XFxyXFxufVwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./node_modules/next/dist/build/webpack/loaders/css-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[1]!./node_modules/next/dist/build/webpack/loaders/postcss-loader/src/index.js??ruleSet[1].rules[1].oneOf[13].use[2]!./styles/global.css\n"));

/***/ })

});