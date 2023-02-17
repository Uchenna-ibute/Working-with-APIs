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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  padding: 0;\\n  margin: 0;\\n  box-sizing: border-box;\\n}\\n\\nbody {\\n  font-size: 1.05rem;\\n  font-family: Georgia, 'Times New Roman', Times, serif;\\n}\\n\\nheader,\\nfooter {\\n  padding: 1rem 3rem;\\n  background-color: rgb(36 35 35);\\n  color: white;\\n}\\n\\na {\\n  text-decoration: none;\\n  color: white;\\n  cursor: pointer;\\n}\\n\\nnav {\\n  display: flex;\\n  justify-content: space-between;\\n  align-items: center;\\n}\\n\\nnav ul {\\n  display: flex;\\n  align-items: center;\\n}\\n\\nli {\\n  list-style: none;\\n}\\n\\nnav li {\\n  list-style: none;\\n  margin: 3px;\\n}\\n\\n.hello {\\n  display: none;\\n}\\n\\n.comment-and-reservation {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  width: 50%;\\n  margin: auto;\\n}\\n\\n.meal-name-card {\\n  font-size: 15px;\\n  font-weight: bold;\\n}\\n\\n.name h3,\\n.total,\\n.comment {\\n  margin-bottom: 20px;\\n}\\n\\n.comment {\\n  color: black;\\n  border: 1px solid;\\n  padding: 10px 15px;\\n  transition: 1s ease-in;\\n  font-weight: bold;\\n}\\n\\n.total,\\n.comment {\\n  margin-bottom: 20px;\\n}\\n\\n.comment:hover {\\n  background-color: rgb(2, 214, 2);\\n  color: white;\\n}\\n\\n.reservation {\\n  color: black;\\n  border: 1px solid;\\n  padding: 10px 15px;\\n  font-weight: bold;\\n  transition: 1s ease-in;\\n}\\n\\n.reservation:hover {\\n  background-color: rgb(2, 214, 2);\\n  color: white;\\n}\\n\\n.title {\\n  font-size: 2rem;\\n  margin-bottom: 5rem;\\n  letter-spacing: 10px;\\n  text-shadow: 1px 3px rgba(128, 128, 128, 0.493);\\n}\\n\\nmain {\\n  min-height: 100vh;\\n}\\n\\n.meal img {\\n  width: 100%;\\n  display: block;\\n}\\n\\n.meal {\\n  max-width: 1100px;\\n  margin: 0 auto;\\n  padding: 2rem;\\n  text-align: center;\\n}\\n\\n.name {\\n  padding: 1.5rem 0.5rem;\\n  border-radius: 5px;\\n  border: 1px solid;\\n  box-shadow: inset -20px -9px 10px rgb(92 69 69 / 14%);\\n  margin-bottom: 15px;\\n}\\n\\n.name h3 {\\n  font-size: 1.4rem;\\n  margin-bottom: 20px;\\n}\\n\\n.name i {\\n  margin-left: 20px;\\n}\\n\\n.wrap {\\n  display: grid;\\n  grid-template-columns: repeat(3, 1fr);\\n  gap: 2rem;\\n}\\n\\n.fa-heart {\\n  cursor: pointer;\\n}\\n\\n.fa-heart:hover {\\n  color: gray;\\n}\\n\\n.comment img {\\n  width: 100%;\\n  display: block;\\n}\\n\\n.popup {\\n  position: fixed;\\n  box-sizing: border-box;\\n  flex-direction: column;\\n  align-items: center;\\n  gap: 12px;\\n  width: 27%;\\n  left: 30%;\\n  top: 3%;\\n  right: 5%;\\n  bottom: 5%;\\n  background: rgb(225, 222, 222);\\n  border: 1px solid #dfe1e6;\\n  border-radius: 16px;\\n  backdrop-filter: blur(10px);\\n  z-index: 22;\\n  display: none;\\n}\\n\\n.popupimg {\\n  align-self: center;\\n  width: 30vw;\\n  height: 54vh;\\n  border-radius: 16px;\\n}\\n\\n.popupname h1 {\\n  font-size: 20px;\\n}\\n\\n.flexcolumn {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.comentform {\\n  margin-top: 4px;\\n  gap: 4px;\\n}\\n\\n.displaycomment {\\n  height: 8vh;\\n  overflow: auto;\\n  background-color: #fdfdfd;\\n}\\n\\n.popup-coment-close-btn {\\n  left: 510px;\\n  height: 20px;\\n  width: 20px;\\n  border-radius: 50%;\\n}\\n\\n.item {\\n  display: flex;\\n  width: 50%;\\n}\\n\\n.count {\\n  display: flex;\\n  gap: 5px;\\n  align-items: center;\\n}\\n\\n.close {\\n  position: absolute;\\n  z-index: 1;\\n}\\n\\n.reservation-popup-section {\\n  display: none;\\n  position: fixed;\\n  top: 10px;\\n  right: 10%;\\n  left: 10%;\\n  flex-direction: column;\\n  z-index: 3;\\n  height: 710px;\\n  width: 70%;\\n  margin: auto;\\n  background-color: white;\\n\\n  /* overflow: auto; */\\n  margin-bottom: 20px;\\n  border-radius: 15px;\\n  padding-bottom: 30px;\\n  border: 2px solid rgb(3, 187, 3);\\n}\\n\\n.reservation-popup {\\n  height: 100%;\\n  width: 100%;\\n  margin: auto;\\n}\\n\\n.food-image-popup {\\n  border-radius: 50%;\\n  height: 250px;\\n  margin-top: 15px;\\n  margin-left: 50px;\\n}\\n\\n.image-close-btn {\\n  display: flex;\\n}\\n\\n.pop-up-close-btn {\\n  font-size: 50px;\\n  font-weight: bold;\\n  position: absolute;\\n  left: 90%;\\n  top: 20px;\\n  cursor: pointer;\\n  color: #017533;\\n}\\n\\n.reservation-card {\\n  width: 100%;\\n  height: 100%;\\n  margin: auto;\\n  background-color: white;\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n}\\n\\n.all-reservations {\\n  height: 200px;\\n  width: 400px;\\n  overflow: auto;\\n  margin-bottom: 15px;\\n  text-align: center;\\n}\\n\\n.form {\\n  align-self: flex-start;\\n  margin-right: -100px;\\n}\\n\\ninput {\\n  padding: 7px;\\n  margin: 0;\\n  width: 80%;\\n  background-color: rgb(2, 214, 2);\\n}\\n\\n.reserve-button {\\n  width: 100px;\\n  outline: none;\\n  color: black;\\n  border-radius: 25px;\\n  border: 0;\\n  font-weight: bold;\\n  transition: 1s;\\n  background-color: white;\\n  background-color: rgb(56, 226, 56);\\n  cursor: pointer;\\n}\\n\\n.reserve-button:active {\\n  background-color: rgb(56, 226, 56);\\n  color: white;\\n}\\n\\n.reserve-button:hover {\\n  background-color: rgb(87, 86, 86);\\n  color: rgb(56, 226, 56);\\n}\\n\\n.spacing-in-popup {\\n  margin: 4px;\\n  text-align: center;\\n}\\n\\n.h2-size {\\n  font-size: 24px;\\n}\\n\\n.input {\\n  padding: 10px 45px;\\n  width: 290px;\\n  outline: none;\\n  color: black;\\n  border-radius: 25px;\\n  text-align: center;\\n  border: 0;\\n  background-color: rgb(178, 237, 178);\\n  transition: 1s;\\n}\\n\\n.input:hover {\\n  background-color: rgb(249, 212, 212);\\n}\\n\\n.input:focus {\\n  border-color: #6fb98f;\\n  color: black;\\n}\\n\\n.p-font-size {\\n  font-size: 16px;\\n  font-weight: bold;\\n}\\n\\n.all-contibutors {\\n  display: flex;\\n  flex-direction: column;\\n}\\n\\n.creator:hover {\\n  text-decoration: underline;\\n  font-weight: lighter;\\n}\\n\\n.overlay {\\n  opacity: 0;\\n  position: fixed;\\n  top: 0;\\n  bottom: 0;\\n  right: 0;\\n  left: 0;\\n  background-color: rgba(0, 0, 0, 0.9);\\n  pointer-events: none;\\n}\\n\\n@media screen and (max-width: 800px) {\\n  .wrap {\\n    grid-template-columns: repeat(2, 1fr);\\n  }\\n}\\n\\n@media (max-width: 768px) {\\n  .pop-up-close-btn {\\n    font-size: 35px;\\n    position: absolute;\\n    left: 90%;\\n    z-index: 5;\\n  }\\n\\n  .all-reservations {\\n    height: 200px;\\n    width: 60%;\\n    overflow: auto;\\n    margin-bottom: 15px;\\n    text-align: center;\\n  }\\n}\\n\\n@media (max-width: 430px) {\\n  .pop-up-close-btn {\\n    font-size: 20px;\\n    position: absolute;\\n    left: 80%;\\n    z-index: 5;\\n  }\\n\\n  form {\\n    width: 200px;\\n  }\\n\\n  .input {\\n    padding: 7px;\\n    width: 80%;\\n  }\\n\\n  .food-image-popup {\\n    border-radius: 50%;\\n    height: 150px;\\n    margin-top: 35px;\\n    margin-left: 0;\\n  }\\n\\n  .all-reservations {\\n    height: 200px;\\n    width: 60%;\\n    overflow: auto;\\n    margin-bottom: 15px;\\n    text-align: center;\\n  }\\n}\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://working-with-apis/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://working-with-apis/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://working-with-apis/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://working-with-apis/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://working-with-apis/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://working-with-apis/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://working-with-apis/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://working-with-apis/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://working-with-apis/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://working-with-apis/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n/* harmony import */ var _modules_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/api.js */ \"./src/modules/api.js\");\n/* harmony import */ var _modules_like_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./modules/like.js */ \"./src/modules/like.js\");\n/* harmony import */ var _modules_home_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/home.js */ \"./src/modules/home.js\");\n/* harmony import */ var _modules_popupcoment_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/popupcoment.js */ \"./src/modules/popupcoment.js\");\n/* harmony import */ var _modules_reservationCounter_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/reservationCounter.js */ \"./src/modules/reservationCounter.js\");\n/* harmony import */ var _modules_reservation_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./modules/reservation.js */ \"./src/modules/reservation.js\");\n\n\n\n\n\n\n\n\nconst list = document.querySelector('.wrap');\nconst reservationPopup = document.querySelector('.reservation-popup-section');\nconst overlay = document.querySelector('.overlay');\n\n(0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.meals)().then(async (data) => {\n  const meal = [...data.meals];\n  const size = meal.length;\n  const total = document.querySelector('.total');\n  const likedItem = await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_2__.likeItem)();\n  total.innerText = size;\n  meal.forEach((value, index) => {\n    let liked = 0;\n    likedItem.forEach((dat) => {\n      if (index === dat.item_id) {\n        liked = dat.likes;\n      }\n    });\n    (0,_modules_home_js__WEBPACK_IMPORTED_MODULE_3__.display)(value, liked, index);\n    // popup start here\n    (0,_modules_popupcoment_js__WEBPACK_IMPORTED_MODULE_4__.displaycommentPopup)(value, liked, index);\n    // popup ends here\n  });\n\n  const heart = document.querySelectorAll('#heart');\n  heart.forEach((a) => {\n    a.addEventListener('click', async () => {\n      const { id } = a.dataset;\n      await (0,_modules_like_js__WEBPACK_IMPORTED_MODULE_2__.incrementLikes)(parseInt(id, 10));\n      const contain = a.parentElement.parentElement;\n      const itemlike = contain.querySelector('.like');\n      const currentCount = parseInt(itemlike.innerText, 10);\n      itemlike.innerText = currentCount + 1;\n    });\n  });\n});\n\nlist.addEventListener('click', async (event) => {\n  if (event.target.className === 'reservation') {\n    const response = await (0,_modules_api_js__WEBPACK_IMPORTED_MODULE_1__.meals)();\n    const mealInfo = [...response.meals];\n    mealInfo.forEach((meal) => {\n      if (event.target.id === meal.idMeal) {\n        (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_6__.displayReservationPopUp)(meal);\n        overlay.style.opacity = 1;\n        (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_6__.displayReservation)(event.target.id);\n      }\n    });\n  }\n});\n\nreservationPopup.addEventListener('click', (event) => {\n  if (event.target.className === 'pop-up-close-btn') {\n    overlay.style.opacity = 0;\n    reservationPopup.style.display = 'none';\n  }\n});\n\nreservationPopup.addEventListener('click', async (event) => {\n  if (event.target.className === 'reserve-button') {\n    const name = document.getElementById('name').value;\n    const start = document.getElementById('start').value;\n    const end = document.getElementById('end').value;\n    const reservationId = event.target.id;\n    if (name && start && end) {\n      await (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_6__.postYourReservation)(reservationId, name, start, end);\n      (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_6__.resetFormAndReservationDiv)(event);\n      await (0,_modules_reservation_js__WEBPACK_IMPORTED_MODULE_6__.displayReservation)(reservationId);\n      const count = await (0,_modules_reservationCounter_js__WEBPACK_IMPORTED_MODULE_5__[\"default\"])(event.target.id);\n      const reservationNumber = document.getElementById('reserved-number');\n      reservationNumber.innerHTML = `Reservations (${count})`;\n    }\n  }\n});\n\n\n//# sourceURL=webpack://working-with-apis/./src/index.js?");

/***/ }),

/***/ "./src/modules/APIcoment.js":
/*!**********************************!*\
  !*** ./src/modules/APIcoment.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"getData\": () => (/* binding */ getData),\n/* harmony export */   \"saveData\": () => (/* binding */ saveData)\n/* harmony export */ });\nconst saveData = async (id, username, comment) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4MVrrJK7zcMBj3JVTSQH/comments';\n\n  const comments = await fetch(url, {\n    method: 'POST',\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n    body: JSON.stringify({\n      item_id: id,\n      username,\n      comment,\n    }),\n  });\n\n  const res = comments.text();\n  return res;\n};\n\nconst getData = async (id) => {\n  const url = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/4MVrrJK7zcMBj3JVTSQH/comments';\n  const indentifierurl = `${url}?item_id=${id}`;\n  const response = await fetch(indentifierurl);\n  const res = response.json();\n  return res;\n};\n\n\n//# sourceURL=webpack://working-with-apis/./src/modules/APIcoment.js?");

/***/ }),

/***/ "./src/modules/api.js":
/*!****************************!*\
  !*** ./src/modules/api.js ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"dataid\": () => (/* binding */ dataid),\n/* harmony export */   \"meals\": () => (/* binding */ meals)\n/* harmony export */ });\nconst meals = async () => {\n  const res = await fetch(\n    'https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast',\n  );\n  const data = await res.json();\n  return data;\n};\n\nconst dataid = async () => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/',\n    { method: 'post' },\n  );\n  const data = await res.text();\n  return data;\n};\n\ndataid();\n\n\n//# sourceURL=webpack://working-with-apis/./src/modules/api.js?");

/***/ }),

/***/ "./src/modules/home.js":
/*!*****************************!*\
  !*** ./src/modules/home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addLike\": () => (/* binding */ addLike),\n/* harmony export */   \"display\": () => (/* binding */ display)\n/* harmony export */ });\n/* harmony import */ var _like_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./like.js */ \"./src/modules/like.js\");\n\n\nconst display = (meal, likes, index) => {\n  const list = document.querySelector('.wrap');\n  const html = `\n  <div id=\"meals>\n  <div class=\"item\">\n    <img src=\"${meal.strMealThumb}\" alt=\"food\">\n  </div>\n  <div class=\"name\">\n    <p class='meal-name-card'>${meal.strMeal} <i class=\"fa-solid fa-heart\" id=\"heart\" data-id = \"${index}\"></i></p>\n    <p class=\"total\"> <span class='like'>${likes}</span> likes</p>\n    <div class=\"comment-and-reservation\">\n      <button class=\"comment\" id =\"${index}\">Comment</button>\n      <a class=\"reservation\" id=${meal.idMeal}>Reservation</a>\n    </div>\n  </div>\n  </div>`;\n  const item = document.createElement('li');\n  item.setAttribute('data-id', meal.id);\n  item.classList.add('list');\n  item.innerHTML = html;\n  list.appendChild(item);\n};\n\nconst addLike = (like, index) => {\n  like.forEach((item, i) => {\n    item.addEventListener('click', () => {\n      if (i === index) {\n        (0,_like_js__WEBPACK_IMPORTED_MODULE_0__.incrementLikes)(index);\n        const contain = item.parentElement.parentElement;\n        const itemlike = contain.querySelector('.like');\n        const currentCount = parseInt(itemlike.innerText, 10);\n        itemlike.innerText = currentCount + 1;\n      }\n    });\n  });\n};\n\n\n//# sourceURL=webpack://working-with-apis/./src/modules/home.js?");

/***/ }),

/***/ "./src/modules/like.js":
/*!*****************************!*\
  !*** ./src/modules/like.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"incrementLikes\": () => (/* binding */ incrementLikes),\n/* harmony export */   \"likeItem\": () => (/* binding */ likeItem)\n/* harmony export */ });\nconst incrementLikes = async (index) => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/likes',\n    {\n      method: 'post',\n      body: JSON.stringify({ item_id: index }),\n      headers: { 'content-type': 'application/json' },\n    },\n  );\n  const predata = res.text();\n  return predata;\n};\n\nconst likeItem = async () => {\n  const res = await fetch(\n    'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/likes',\n  );\n  const predata = res.json();\n  return predata;\n};\n\n\n//# sourceURL=webpack://working-with-apis/./src/modules/like.js?");

/***/ }),

/***/ "./src/modules/popupcoment.js":
/*!************************************!*\
  !*** ./src/modules/popupcoment.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"countcoment\": () => (/* binding */ countcoment),\n/* harmony export */   \"displaycommentPopup\": () => (/* binding */ displaycommentPopup)\n/* harmony export */ });\n/* harmony import */ var _APIcoment_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./APIcoment.js */ \"./src/modules/APIcoment.js\");\n\n\nconst displaycomment = async (index) => {\n  const comentData = await (0,_APIcoment_js__WEBPACK_IMPORTED_MODULE_0__.getData)(index);\n  const displaycomm = document.querySelector('.displaycomment');\n  comentData.forEach((coment) => {\n    const eachComment = document.createElement('p');\n    displaycomm.appendChild(eachComment);\n    eachComment.innerHTML = `${coment.creation_date}  ${coment.username} : ${coment.comment}`;\n  });\n};\n\nconst countcoment = async (index) => {\n  const comments = await (0,_APIcoment_js__WEBPACK_IMPORTED_MODULE_0__.getData)(index);\n  let count = 0;\n  comments.forEach((item) => {\n    if (item.comment !== '') {\n      count += 1;\n    }\n  });\n  const addcount = document.querySelector('.number');\n  addcount.innerHTML = `${count}`;\n};\n\nconst reset = () => {\n  const form = document.getElementById('form');\n  form.reset();\n  const commentspace = document.querySelector('.displaycomment');\n  commentspace.innerHTML = '';\n};\n\nconst addcomment = (index) => {\n  const adding = document.getElementById('submit');\n  const itemid = Number(index);\n  adding.addEventListener('click', async () => {\n    const username = document.getElementById('name');\n    const comment = document.getElementById('comment');\n    if (username.value && comment.value) {\n      await (0,_APIcoment_js__WEBPACK_IMPORTED_MODULE_0__.saveData)(itemid, username.value, comment.value);\n      reset(index);\n      await countcoment(index);\n      await displaycomment(index);\n    }\n  });\n};\n\nconst closePop = () => {\n  const closeup = document.querySelector('.popup-coment-close-btn');\n  closeup.addEventListener('click', () => {\n    const mealblur = document.querySelector('.meal');\n    const popupclose = document.querySelector('.popup');\n    popupclose.innerHTML = '';\n    popupclose.removeAttribute('style');\n    mealblur.style.filter = 'none';\n  });\n};\n\nconst displaycommentPopup = async (meal, likes, index) => {\n  const addcoment = document.querySelectorAll('.comment');\n  const mealblur = document.querySelector('.meal');\n  addcoment.forEach((pop) => {\n    pop.addEventListener('click', async () => {\n      if (Number(pop.id) === index) {\n        countcoment(index);\n        const list = document.querySelector('.popup');\n        const html = `\n    <div class=\"item\">\n      <img class=\"popupimg\" src=\"${meal.strMealThumb}\" alt=\"food\">\n      <p class=\"popup-coment-close-btn\">&#10005;</p>\n    </div>\n    <div class=\"popupname flexcolumn\">\n      <h1 class='popup_meal-name-card'>${meal.strMeal} <i class=\"fa-solid fa-heart\" id=\"heart\" data-id = \"${index}\"></i></h1>\n      <p class=\"popuptotal\"> <span class='like'>${likes}</span> likes</p>\n    </div>\n    <div class=\"addcoment flexcolumn\">\n    <h4 class=\"count\">comment\n    <span class=\"number\"> </span>\n    </h4>\n    </div>\n    <div class=\"displaycomment flexcolumn\"> </div>\n    <form id=\"form\" class=\"flexcolumn comentform\"> Add coment\n    <input type=\"text\" id='name' placeholder='Your name' required>\n    <input type=\"text\" id='comment' placeholder='Your insights' required>\n    <button type=\"button\" id=\"submit\">Submit</button>\n    </form>\n    </div>`;\n        const item = document.createElement('li');\n        item.setAttribute('data-id', meal.id);\n        item.classList.add('list');\n        item.innerHTML = html;\n        list.appendChild(item);\n        list.style.display = 'block';\n        mealblur.style.filter = 'blur(10px)';\n\n        closePop();\n        addcomment(index);\n        displaycomment(index);\n      }\n    });\n  });\n};\n\n\n//# sourceURL=webpack://working-with-apis/./src/modules/popupcoment.js?");

/***/ }),

/***/ "./src/modules/reservation.js":
/*!************************************!*\
  !*** ./src/modules/reservation.js ***!
  \************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"displayReservation\": () => (/* binding */ displayReservation),\n/* harmony export */   \"displayReservationPopUp\": () => (/* binding */ displayReservationPopUp),\n/* harmony export */   \"postYourReservation\": () => (/* binding */ postYourReservation),\n/* harmony export */   \"resetFormAndReservationDiv\": () => (/* binding */ resetFormAndReservationDiv)\n/* harmony export */ });\n/* harmony import */ var _reservationCounter_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./reservationCounter.js */ \"./src/modules/reservationCounter.js\");\n\n\nconst reservationPopup = document.querySelector('.reservation-popup-section');\n\nconst displayReservationPopUp = async (mealObject) => {\n  const countOfReservation = await (0,_reservationCounter_js__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(mealObject.idMeal);\n  reservationPopup.style.display = 'flex';\n  reservationPopup.innerHTML = `\n  <div class=\"reservation-popup\">\n    <div class=\"reservation-card\">\n      <div class=\"image-close-btn\">\n        <img class=\"food-image-popup\" src='${mealObject.strMealThumb}' alt=\"meal\">\n        <p class=\"pop-up-close-btn\">&#10005;</p>\n      </div>\n    <h2 class=\"spacing-in-popup h2-size\" id='popup-unique-name'>${mealObject.strMeal}</h2>\n    <p class=\"spacing-in-popup p-font-size\" id=\"reserved-number\" >Reservations (${countOfReservation})</p>\n    <p class=\"spacing-in-popup p-font-size\">Add a Reservation</p>\n    <div class='all-reservations' id=\"all-reservations\">\n    </div>\n    <div>\n      <form action=\"\" id=\"form\">\n        <input type=\"text\" placeholder=\"Your name\" class=\"input\" id=\"name\"><br><br>\n        <input placeholder=\"Start Date\" type=\"text\" onfocus=\"(this.type = 'date')\" id=\"start\" class=\"input\"><br><br>\n        <input placeholder=\"End Date\" type=\"text\" onfocus=\"(this.type = 'date')\" id=\"end\" class=\"input\"><br><br>\n        <input class=\"reserve-button\" id=${mealObject.idMeal} type=\"button\" value=\"Reserve\">\n      </form>\n    </div>\n  </div>`;\n};\n\nconst postYourReservation = async (reservationId, username, dateStart, dateEnd) => {\n  const getReservationURL = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations';\n  await fetch(getReservationURL, {\n    method: 'POST',\n    body: JSON.stringify({\n      item_id: reservationId,\n      username,\n      date_start: dateStart,\n      date_end: dateEnd,\n    }),\n    headers: {\n      'Content-type': 'application/json; charset=UTF-8',\n    },\n  });\n};\n\nconst displayReservation = async (itemId) => {\n  const reservationURL = `https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations?item_id=${itemId}`;\n  const response = await fetch(reservationURL);\n  const allResevations = await response.json();\n  const reservespace = document.getElementById('all-reservations');\n  allResevations.forEach((reservation) => {\n    const newReservation = document.createElement('p');\n    newReservation.textContent = `${reservation.date_start} - ${reservation.date_end} by ${reservation.username}`;\n    reservespace.appendChild(newReservation);\n  });\n};\n\nconst resetFormAndReservationDiv = (event) => {\n  if (event.target.className === 'reserve-button') {\n    const form = document.getElementById('form');\n    form.reset();\n    const reservespace = document.getElementById('all-reservations');\n    reservespace.innerHTML = '';\n  }\n};\n\n\n//# sourceURL=webpack://working-with-apis/./src/modules/reservation.js?");

/***/ }),

/***/ "./src/modules/reservationCounter.js":
/*!*******************************************!*\
  !*** ./src/modules/reservationCounter.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nconst countReservation = async (itemId) => {\n  const response = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/KHwd97Kg4JUFks1Mpn4d/reservations?item_id=${itemId}`);\n  const allResevations = await response.json();\n  const counter = allResevations.length;\n  return counter;\n};\n\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (countReservation);\n\n//# sourceURL=webpack://working-with-apis/./src/modules/reservationCounter.js?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
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