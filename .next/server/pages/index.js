"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/index";
exports.ids = ["pages/index"];
exports.modules = {

/***/ "./api/characters.js":
/*!***************************!*\
  !*** ./api/characters.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n// import { connectToDatabase } from \"../../util/mongodb\";\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (async (req, res)=>{\n//   const { db } = await connectToDatabase();\n//   const characters = await db\n//     .collection(\"characters\")\n//     .find({})\n//     .limit(20)\n//     .toArray();\n//   res.json(characters);\n});\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9hcGkvY2hhcmFjdGVycy5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQUEsMERBQTBEO0FBRTFELGlFQUFlLE9BQU9BLEdBQUcsRUFBRUMsR0FBRyxHQUFLO0FBQ25DLDhDQUE4QztBQUU5QyxnQ0FBZ0M7QUFDaEMsZ0NBQWdDO0FBQ2hDLGdCQUFnQjtBQUNoQixpQkFBaUI7QUFDakIsa0JBQWtCO0FBSWxCLDBCQUEwQjtDQUN6QixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vYXBpL2NoYXJhY3RlcnMuanM/MWUwZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBpbXBvcnQgeyBjb25uZWN0VG9EYXRhYmFzZSB9IGZyb20gXCIuLi8uLi91dGlsL21vbmdvZGJcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG4vLyAgIGNvbnN0IHsgZGIgfSA9IGF3YWl0IGNvbm5lY3RUb0RhdGFiYXNlKCk7XHJcblxyXG4vLyAgIGNvbnN0IGNoYXJhY3RlcnMgPSBhd2FpdCBkYlxyXG4vLyAgICAgLmNvbGxlY3Rpb24oXCJjaGFyYWN0ZXJzXCIpXHJcbi8vICAgICAuZmluZCh7fSlcclxuLy8gICAgIC5saW1pdCgyMClcclxuLy8gICAgIC50b0FycmF5KCk7XHJcblxyXG5cclxuXHJcbi8vICAgcmVzLmpzb24oY2hhcmFjdGVycyk7XHJcbn07Il0sIm5hbWVzIjpbInJlcSIsInJlcyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./api/characters.js\n");

/***/ }),

/***/ "./lib/mongodb.js":
/*!************************!*\
  !*** ./lib/mongodb.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! mongodb */ \"mongodb\");\n/* harmony import */ var mongodb__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(mongodb__WEBPACK_IMPORTED_MODULE_0__);\n\nconst uri = process.env.MONGODB_URI;\nconst options = {};\nlet client;\nlet clientPromise;\nif (!process.env.MONGODB_URI) {\n    throw new Error(\"Please add your Mongo URI to .env.local\");\n}\nif (true) {\n    // In development mode, use a global variable so that the value\n    // is preserved across module reloads caused by HMR (Hot Module Replacement).\n    if (!global._mongoClientPromise) {\n        client = new mongodb__WEBPACK_IMPORTED_MODULE_0__.MongoClient(uri, options);\n        global._mongoClientPromise = client.connect();\n    }\n    clientPromise = global._mongoClientPromise;\n} else {}\n// Export a module-scoped MongoClient promise. By doing this in a\n// separate module, the client can be shared across functions.\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (clientPromise);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9saWIvbW9uZ29kYi5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBcUM7QUFFckMsTUFBTUMsR0FBRyxHQUFHQyxPQUFPLENBQUNDLEdBQUcsQ0FBQ0MsV0FBVztBQUNuQyxNQUFNQyxPQUFPLEdBQUcsRUFBRTtBQUVsQixJQUFJQyxNQUFNO0FBQ1YsSUFBSUMsYUFBYTtBQUVqQixJQUFJLENBQUNMLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDQyxXQUFXLEVBQUU7SUFDNUIsTUFBTSxJQUFJSSxLQUFLLENBQUMseUNBQXlDLENBQUM7Q0FDM0Q7QUFFRCxJQUFJTixJQUFzQyxFQUFFO0lBQzFDLCtEQUErRDtJQUMvRCw2RUFBNkU7SUFDN0UsSUFBSSxDQUFDTyxNQUFNLENBQUNDLG1CQUFtQixFQUFFO1FBQy9CSixNQUFNLEdBQUcsSUFBSU4sZ0RBQVcsQ0FBQ0MsR0FBRyxFQUFFSSxPQUFPLENBQUM7UUFDdENJLE1BQU0sQ0FBQ0MsbUJBQW1CLEdBQUdKLE1BQU0sQ0FBQ0ssT0FBTyxFQUFFO0tBQzlDO0lBQ0RKLGFBQWEsR0FBR0UsTUFBTSxDQUFDQyxtQkFBbUI7Q0FDM0MsTUFBTSxFQUlOO0FBRUQsaUVBQWlFO0FBQ2pFLDhEQUE4RDtBQUM5RCxpRUFBZUgsYUFBYSIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL2xpYi9tb25nb2RiLmpzP2Q5MjAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTW9uZ29DbGllbnQgfSBmcm9tICdtb25nb2RiJ1xuXG5jb25zdCB1cmkgPSBwcm9jZXNzLmVudi5NT05HT0RCX1VSSVxuY29uc3Qgb3B0aW9ucyA9IHt9XG5cbmxldCBjbGllbnRcbmxldCBjbGllbnRQcm9taXNlXG5cbmlmICghcHJvY2Vzcy5lbnYuTU9OR09EQl9VUkkpIHtcbiAgdGhyb3cgbmV3IEVycm9yKCdQbGVhc2UgYWRkIHlvdXIgTW9uZ28gVVJJIHRvIC5lbnYubG9jYWwnKVxufVxuXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdkZXZlbG9wbWVudCcpIHtcbiAgLy8gSW4gZGV2ZWxvcG1lbnQgbW9kZSwgdXNlIGEgZ2xvYmFsIHZhcmlhYmxlIHNvIHRoYXQgdGhlIHZhbHVlXG4gIC8vIGlzIHByZXNlcnZlZCBhY3Jvc3MgbW9kdWxlIHJlbG9hZHMgY2F1c2VkIGJ5IEhNUiAoSG90IE1vZHVsZSBSZXBsYWNlbWVudCkuXG4gIGlmICghZ2xvYmFsLl9tb25nb0NsaWVudFByb21pc2UpIHtcbiAgICBjbGllbnQgPSBuZXcgTW9uZ29DbGllbnQodXJpLCBvcHRpb25zKVxuICAgIGdsb2JhbC5fbW9uZ29DbGllbnRQcm9taXNlID0gY2xpZW50LmNvbm5lY3QoKVxuICB9XG4gIGNsaWVudFByb21pc2UgPSBnbG9iYWwuX21vbmdvQ2xpZW50UHJvbWlzZVxufSBlbHNlIHtcbiAgLy8gSW4gcHJvZHVjdGlvbiBtb2RlLCBpdCdzIGJlc3QgdG8gbm90IHVzZSBhIGdsb2JhbCB2YXJpYWJsZS5cbiAgY2xpZW50ID0gbmV3IE1vbmdvQ2xpZW50KHVyaSwgb3B0aW9ucylcbiAgY2xpZW50UHJvbWlzZSA9IGNsaWVudC5jb25uZWN0KClcbn1cblxuLy8gRXhwb3J0IGEgbW9kdWxlLXNjb3BlZCBNb25nb0NsaWVudCBwcm9taXNlLiBCeSBkb2luZyB0aGlzIGluIGFcbi8vIHNlcGFyYXRlIG1vZHVsZSwgdGhlIGNsaWVudCBjYW4gYmUgc2hhcmVkIGFjcm9zcyBmdW5jdGlvbnMuXG5leHBvcnQgZGVmYXVsdCBjbGllbnRQcm9taXNlXG4iXSwibmFtZXMiOlsiTW9uZ29DbGllbnQiLCJ1cmkiLCJwcm9jZXNzIiwiZW52IiwiTU9OR09EQl9VUkkiLCJvcHRpb25zIiwiY2xpZW50IiwiY2xpZW50UHJvbWlzZSIsIkVycm9yIiwiZ2xvYmFsIiwiX21vbmdvQ2xpZW50UHJvbWlzZSIsImNvbm5lY3QiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./lib/mongodb.js\n");

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ Home),\n/* harmony export */   \"getServerSideProps\": () => (/* binding */ getServerSideProps)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/dist/shared/lib/styled-jsx */ \"next/dist/shared/lib/styled-jsx\");\n/* harmony import */ var next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ \"next/head\");\n/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _api_characters__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../api/characters */ \"./api/characters.js\");\n/* harmony import */ var _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../lib/mongodb */ \"./lib/mongodb.js\");\n\n\n\n\n\nfunction Home({ characters: characters1 , isConnected  }) {\n    characters1 = JSON.parse(characters1);\n    console.log(characters1);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"jsx-fc70f7f1db67ed3d\" + \" \" + \"container\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_head__WEBPACK_IMPORTED_MODULE_2___default()), {\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"title\", {\n                        className: \"jsx-fc70f7f1db67ed3d\",\n                        /*#__PURE__*/ children: \"Roll Quest\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                        lineNumber: 12,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"link\", {\n                        rel: \"icon\",\n                        href: \"/favicon.ico\",\n                        className: \"jsx-fc70f7f1db67ed3d\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                        lineNumber: 13,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                lineNumber: 11,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n                className: \"jsx-fc70f7f1db67ed3d\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                        className: \"jsx-fc70f7f1db67ed3d\" + \" \" + \"title\",\n                        children: \"Welcome to ROLL QUEST\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                        lineNumber: 17,\n                        columnNumber: 9\n                    }, this),\n                    isConnected ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-fc70f7f1db67ed3d\" + \" \" + \"subtitle\",\n                        children: \"You are connected to MongoDB\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                        lineNumber: 22,\n                        columnNumber: 11\n                    }, this) : /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: \"jsx-fc70f7f1db67ed3d\" + \" \" + \"subtitle\",\n                        children: [\n                            \"You are NOT connected to MongoDB. Check the \",\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"code\", {\n                                className: \"jsx-fc70f7f1db67ed3d\",\n                                children: \"README.md\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                                lineNumber: 25,\n                                columnNumber: 57\n                            }, this),\n                            \" \",\n                            \"for instructions.\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                        lineNumber: 24,\n                        columnNumber: 11\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: \"jsx-fc70f7f1db67ed3d\",\n                        children: \"hi\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                        lineNumber: 29,\n                        columnNumber: 7\n                    }, this),\n                    characters1[0][\"character\"][\"name\"]\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                lineNumber: 16,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"footer\", {\n                className: \"jsx-fc70f7f1db67ed3d\",\n                children: \"FEET\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"d660ae35dd2c3fc0\",\n                children: \".container.jsx-fc70f7f1db67ed3d{min-height:100vh;padding:0 .5rem;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}main.jsx-fc70f7f1db67ed3d{padding:5rem 0;-webkit-box-flex:1;-webkit-flex:1;-moz-box-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-fc70f7f1db67ed3d{width:100%;height:100px;border-top:1px solid#eaeaea;display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}footer.jsx-fc70f7f1db67ed3d img.jsx-fc70f7f1db67ed3d{margin-left:.5rem}footer.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center}a.jsx-fc70f7f1db67ed3d{color:inherit;text-decoration:none}.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d{color:#0070f3;text-decoration:none}.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d:hover,.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d:focus,.title.jsx-fc70f7f1db67ed3d a.jsx-fc70f7f1db67ed3d:active{text-decoration:underline}.title.jsx-fc70f7f1db67ed3d{margin:0;line-height:1.15;font-size:4rem}.title.jsx-fc70f7f1db67ed3d,.description.jsx-fc70f7f1db67ed3d{text-align:center}.subtitle.jsx-fc70f7f1db67ed3d{font-size:2rem}.description.jsx-fc70f7f1db67ed3d{line-height:1.5;font-size:1.5rem}code.jsx-fc70f7f1db67ed3d{background:#fafafa;-webkit-border-radius:5px;-moz-border-radius:5px;border-radius:5px;padding:.75rem;font-size:1.1rem;font-family:Menlo,Monaco,Lucida Console,Liberation Mono,DejaVu Sans Mono,Bitstream Vera Sans Mono,Courier New,monospace}.grid.jsx-fc70f7f1db67ed3d{display:-webkit-box;display:-webkit-flex;display:-moz-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-webkit-align-items:center;-moz-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-webkit-justify-content:center;-moz-box-pack:center;-ms-flex-pack:center;justify-content:center;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;max-width:800px;margin-top:3rem}.card.jsx-fc70f7f1db67ed3d{margin:1rem;-webkit-flex-basis:45%;-ms-flex-preferred-size:45%;flex-basis:45%;padding:1.5rem;text-align:left;color:inherit;text-decoration:none;border:1px solid#eaeaea;-webkit-border-radius:10px;-moz-border-radius:10px;border-radius:10px;-webkit-transition:color.15s ease,border-color.15s ease;-moz-transition:color.15s ease,border-color.15s ease;-o-transition:color.15s ease,border-color.15s ease;transition:color.15s ease,border-color.15s ease}.card.jsx-fc70f7f1db67ed3d:hover,.card.jsx-fc70f7f1db67ed3d:focus,.card.jsx-fc70f7f1db67ed3d:active{color:#0070f3;border-color:#0070f3}.card.jsx-fc70f7f1db67ed3d h3.jsx-fc70f7f1db67ed3d{margin:0 0 1rem 0;font-size:1.5rem}.card.jsx-fc70f7f1db67ed3d p.jsx-fc70f7f1db67ed3d{margin:0;font-size:1.25rem;line-height:1.5}.logo.jsx-fc70f7f1db67ed3d{height:1em}@media(max-width:600px){.grid.jsx-fc70f7f1db67ed3d{width:100%;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-moz-box-orient:vertical;-moz-box-direction:normal;-ms-flex-direction:column;flex-direction:column}}\"\n            }, void 0, false, void 0, this),\n            (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_dist_shared_lib_styled_jsx__WEBPACK_IMPORTED_MODULE_1___default()), {\n                id: \"2323726f93dd16ea\",\n                children: \"html,body{padding:0;margin:0;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Oxygen,Ubuntu,Cantarell,Fira Sans,Droid Sans,Helvetica Neue,sans-serif}*{-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box}\"\n            }, void 0, false, void 0, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\steve\\\\projects\\\\rollquest-nextgen\\\\pages\\\\index.js\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n};\nasync function getServerSideProps(context) {\n    try {\n        const client = await _lib_mongodb__WEBPACK_IMPORTED_MODULE_4__[\"default\"];\n        const db = client.db(\"rollquest\");\n        let characters2 = await db.collection(\"characters\").find({}).toArray();\n        characters2 = JSON.stringify(characters2);\n        // `await clientPromise` will use the default database passed in the MONGODB_URI\n        // However you can use another database (e.g. myDatabase) by replacing the `await clientPromise` with the following code:\n        //\n        // `const client = await clientPromise`\n        // `const db = client.db(\"myDatabase\")`\n        //\n        // Then you can execute queries against your database like so:\n        // db.find({}) or any of the MongoDB Node Driver commands\n        return {\n            props: {\n                characters: characters2,\n                isConnected: true\n            }\n        };\n    } catch (e) {\n        console.error(e);\n        return {\n            props: {\n                isConnected: false\n            }\n        };\n    }\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9pbmRleC5qcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQUE7O0FBQTRCO0FBQ2M7QUFDQTtBQUUzQixTQUFTRyxJQUFJLENBQUMsRUFBRUYsVUFBVSxFQUFWQSxXQUFVLEdBQUVHLFdBQVcsR0FBRSxFQUFFO0lBRXhESCxXQUFVLEdBQUdJLElBQUksQ0FBQ0MsS0FBSyxDQUFDTCxXQUFVLENBQUM7SUFDbkNNLE9BQU8sQ0FBQ0MsR0FBRyxDQUFDUCxXQUFVLENBQUM7SUFDdkIscUJBQ0UsOERBQUNRLEtBQUc7a0RBQVcsV0FBVzs7MEJBQ3hCLDhEQUFDVCxrREFBSTs7a0NBQ0gsOERBQUNVLE9BQUs7O2dEQUFDLFlBQVU7Ozs7OzRCQUFRO2tDQUN6Qiw4REFBQ0MsTUFBSTt3QkFBQ0MsR0FBRyxFQUFDLE1BQU07d0JBQUNDLElBQUksRUFBQyxjQUFjOzs7Ozs7NEJBQUc7Ozs7OztvQkFDbEM7MEJBRVAsOERBQUNDLE1BQUk7OztrQ0FDSCw4REFBQ0MsSUFBRTtrRUFBVyxPQUFPO2tDQUFDLHVCQUV0Qjs7Ozs7NEJBQUs7b0JBRUpYLFdBQVcsaUJBQ1YsOERBQUNZLElBQUU7a0VBQVcsVUFBVTtrQ0FBQyw4QkFBNEI7Ozs7OzRCQUFLLGlCQUUxRCw4REFBQ0EsSUFBRTtrRUFBVyxVQUFVOzs0QkFBQyw4Q0FDcUI7MENBQUEsOERBQUNDLE1BQUk7OzBDQUFDLFdBQVM7Ozs7O29DQUFPOzRCQUFDLEdBQUc7NEJBQUMsbUJBRXpFOzs7Ozs7NEJBQUs7a0NBRVQsOERBQUNDLEdBQUM7O2tDQUFDLElBQUU7Ozs7OzRCQUFJO29CQUFDakIsV0FBVSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsQ0FBQyxDQUFDLE1BQU0sQ0FBQzs7Ozs7O29CQUNyQzswQkFFUCw4REFBQ2tCLFFBQU07OzBCQUFDLE1BQUk7Ozs7O29CQUFTOzs7Ozs7Ozs7Ozs7OztZQXVKakIsQ0FDUDtDQUNGO0FBRU0sZUFBZUMsa0JBQWtCLENBQUNDLE9BQU8sRUFBRTtJQUNoRCxJQUFJO1FBQ0YsTUFBTUMsTUFBTSxHQUFHLE1BQU1wQixvREFBYTtRQUNsQyxNQUFNcUIsRUFBRSxHQUFHRCxNQUFNLENBQUNDLEVBQUUsQ0FBQyxXQUFXLENBQUM7UUFDakMsSUFBSXRCLFdBQVUsR0FBRyxNQUFNc0IsRUFBRSxDQUFDQyxVQUFVLENBQUMsWUFBWSxDQUFDLENBQUNDLElBQUksQ0FBQyxFQUFFLENBQUMsQ0FBQ0MsT0FBTyxFQUFFO1FBQ3JFekIsV0FBVSxHQUFHSSxJQUFJLENBQUNzQixTQUFTLENBQUMxQixXQUFVLENBQUM7UUFDdkMsZ0ZBQWdGO1FBQ2hGLHlIQUF5SDtRQUN6SCxFQUFFO1FBQ0YsdUNBQXVDO1FBQ3ZDLHVDQUF1QztRQUN2QyxFQUFFO1FBQ0YsOERBQThEO1FBQzlELHlEQUF5RDtRQUV6RCxPQUFPO1lBQ0wyQixLQUFLLEVBQUU7Z0JBQUUzQixVQUFVLEVBQUVBLFdBQVU7Z0JBQ3ZCRyxXQUFXLEVBQUUsSUFBSTthQUFFO1NBQzVCO0tBQ0YsQ0FBQyxPQUFPeUIsQ0FBQyxFQUFFO1FBQ1Z0QixPQUFPLENBQUN1QixLQUFLLENBQUNELENBQUMsQ0FBQztRQUNoQixPQUFPO1lBQ0xELEtBQUssRUFBRTtnQkFBRXhCLFdBQVcsRUFBRSxLQUFLO2FBQUU7U0FDOUI7S0FDRjtDQUNGIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vcGFnZXMvaW5kZXguanM/YmVlNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnXG5pbXBvcnQgY2hhcmFjdGVycyBmcm9tICcuLi9hcGkvY2hhcmFjdGVycydcbmltcG9ydCBjbGllbnRQcm9taXNlIGZyb20gJy4uL2xpYi9tb25nb2RiJ1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBIb21lKHsgY2hhcmFjdGVycywgaXNDb25uZWN0ZWQgfSkge1xuXG4gIGNoYXJhY3RlcnMgPSBKU09OLnBhcnNlKGNoYXJhY3RlcnMpXG4gIGNvbnNvbGUubG9nKGNoYXJhY3RlcnMpXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+Um9sbCBRdWVzdDwvdGl0bGU+XG4gICAgICAgIDxsaW5rIHJlbD1cImljb25cIiBocmVmPVwiL2Zhdmljb24uaWNvXCIgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPG1haW4+XG4gICAgICAgIDxoMSBjbGFzc05hbWU9XCJ0aXRsZVwiPlxuICAgICAgICAgIFdlbGNvbWUgdG8gUk9MTCBRVUVTVFxuICAgICAgICA8L2gxPlxuXG4gICAgICAgIHtpc0Nvbm5lY3RlZCA/IChcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5Zb3UgYXJlIGNvbm5lY3RlZCB0byBNb25nb0RCPC9oMj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8aDIgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICAgICAgICAgIFlvdSBhcmUgTk9UIGNvbm5lY3RlZCB0byBNb25nb0RCLiBDaGVjayB0aGUgPGNvZGU+UkVBRE1FLm1kPC9jb2RlPnsnICd9XG4gICAgICAgICAgICBmb3IgaW5zdHJ1Y3Rpb25zLlxuICAgICAgICAgIDwvaDI+XG4gICAgICAgICl9XG4gICAgICA8cD5oaTwvcD57Y2hhcmFjdGVyc1swXVsnY2hhcmFjdGVyJ11bJ25hbWUnXX1cbiAgICAgIDwvbWFpbj5cblxuICAgICAgPGZvb3Rlcj5GRUVUPC9mb290ZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgICAgbWluLWhlaWdodDogMTAwdmg7XG4gICAgICAgICAgcGFkZGluZzogMCAwLjVyZW07XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBtYWluIHtcbiAgICAgICAgICBwYWRkaW5nOiA1cmVtIDA7XG4gICAgICAgICAgZmxleDogMTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvb3RlciB7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgICAgaGVpZ2h0OiAxMDBweDtcbiAgICAgICAgICBib3JkZXItdG9wOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBmb290ZXIgaW1nIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMC41cmVtO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9vdGVyIGEge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiBpbmhlcml0O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC50aXRsZSBhIHtcbiAgICAgICAgICBjb2xvcjogIzAwNzBmMztcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUgYTpob3ZlcixcbiAgICAgICAgLnRpdGxlIGE6Zm9jdXMsXG4gICAgICAgIC50aXRsZSBhOmFjdGl2ZSB7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiB1bmRlcmxpbmU7XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBmb250LXNpemU6IDRyZW07XG4gICAgICAgIH1cblxuICAgICAgICAudGl0bGUsXG4gICAgICAgIC5kZXNjcmlwdGlvbiB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDJyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuZGVzY3JpcHRpb24ge1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICBjb2RlIHtcbiAgICAgICAgICBiYWNrZ3JvdW5kOiAjZmFmYWZhO1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDVweDtcbiAgICAgICAgICBwYWRkaW5nOiAwLjc1cmVtO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMS4xcmVtO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiBNZW5sbywgTW9uYWNvLCBMdWNpZGEgQ29uc29sZSwgTGliZXJhdGlvbiBNb25vLFxuICAgICAgICAgICAgRGVqYVZ1IFNhbnMgTW9ubywgQml0c3RyZWFtIFZlcmEgU2FucyBNb25vLCBDb3VyaWVyIE5ldywgbW9ub3NwYWNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmdyaWQge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG5cbiAgICAgICAgICBtYXgtd2lkdGg6IDgwMHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDNyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCB7XG4gICAgICAgICAgbWFyZ2luOiAxcmVtO1xuICAgICAgICAgIGZsZXgtYmFzaXM6IDQ1JTtcbiAgICAgICAgICBwYWRkaW5nOiAxLjVyZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogbGVmdDtcbiAgICAgICAgICBjb2xvcjogaW5oZXJpdDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2VhZWFlYTtcbiAgICAgICAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xuICAgICAgICAgIHRyYW5zaXRpb246IGNvbG9yIDAuMTVzIGVhc2UsIGJvcmRlci1jb2xvciAwLjE1cyBlYXNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLmNhcmQ6aG92ZXIsXG4gICAgICAgIC5jYXJkOmZvY3VzLFxuICAgICAgICAuY2FyZDphY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiAjMDA3MGYzO1xuICAgICAgICAgIGJvcmRlci1jb2xvcjogIzAwNzBmMztcbiAgICAgICAgfVxuXG4gICAgICAgIC5jYXJkIGgzIHtcbiAgICAgICAgICBtYXJnaW46IDAgMCAxcmVtIDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgICAgIH1cblxuICAgICAgICAuY2FyZCBwIHtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU7XG4gICAgICAgIH1cblxuICAgICAgICAubG9nbyB7XG4gICAgICAgICAgaGVpZ2h0OiAxZW07XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgKG1heC13aWR0aDogNjAwcHgpIHtcbiAgICAgICAgICAuZ3JpZCB7XG4gICAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIGh0bWwsXG4gICAgICAgIGJvZHkge1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIGZvbnQtZmFtaWx5OiAtYXBwbGUtc3lzdGVtLCBCbGlua01hY1N5c3RlbUZvbnQsIFNlZ29lIFVJLCBSb2JvdG8sXG4gICAgICAgICAgICBPeHlnZW4sIFVidW50dSwgQ2FudGFyZWxsLCBGaXJhIFNhbnMsIERyb2lkIFNhbnMsIEhlbHZldGljYSBOZXVlLFxuICAgICAgICAgICAgc2Fucy1zZXJpZjtcbiAgICAgICAgfVxuXG4gICAgICAgICoge1xuICAgICAgICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U2VydmVyU2lkZVByb3BzKGNvbnRleHQpIHtcbiAgdHJ5IHtcbiAgICBjb25zdCBjbGllbnQgPSBhd2FpdCBjbGllbnRQcm9taXNlXG4gICAgY29uc3QgZGIgPSBjbGllbnQuZGIoJ3JvbGxxdWVzdCcpXG4gICAgbGV0IGNoYXJhY3RlcnMgPSBhd2FpdCBkYi5jb2xsZWN0aW9uKCdjaGFyYWN0ZXJzJykuZmluZCh7fSkudG9BcnJheSgpXG4gICAgY2hhcmFjdGVycyA9IEpTT04uc3RyaW5naWZ5KGNoYXJhY3RlcnMpXG4gICAgLy8gYGF3YWl0IGNsaWVudFByb21pc2VgIHdpbGwgdXNlIHRoZSBkZWZhdWx0IGRhdGFiYXNlIHBhc3NlZCBpbiB0aGUgTU9OR09EQl9VUklcbiAgICAvLyBIb3dldmVyIHlvdSBjYW4gdXNlIGFub3RoZXIgZGF0YWJhc2UgKGUuZy4gbXlEYXRhYmFzZSkgYnkgcmVwbGFjaW5nIHRoZSBgYXdhaXQgY2xpZW50UHJvbWlzZWAgd2l0aCB0aGUgZm9sbG93aW5nIGNvZGU6XG4gICAgLy9cbiAgICAvLyBgY29uc3QgY2xpZW50ID0gYXdhaXQgY2xpZW50UHJvbWlzZWBcbiAgICAvLyBgY29uc3QgZGIgPSBjbGllbnQuZGIoXCJteURhdGFiYXNlXCIpYFxuICAgIC8vXG4gICAgLy8gVGhlbiB5b3UgY2FuIGV4ZWN1dGUgcXVlcmllcyBhZ2FpbnN0IHlvdXIgZGF0YWJhc2UgbGlrZSBzbzpcbiAgICAvLyBkYi5maW5kKHt9KSBvciBhbnkgb2YgdGhlIE1vbmdvREIgTm9kZSBEcml2ZXIgY29tbWFuZHNcblxuICAgIHJldHVybiB7XG4gICAgICBwcm9wczogeyBjaGFyYWN0ZXJzOiBjaGFyYWN0ZXJzLFxuICAgICAgICAgICAgICBpc0Nvbm5lY3RlZDogdHJ1ZSB9LFxuICAgIH1cbiAgfSBjYXRjaCAoZSkge1xuICAgIGNvbnNvbGUuZXJyb3IoZSlcbiAgICByZXR1cm4ge1xuICAgICAgcHJvcHM6IHsgaXNDb25uZWN0ZWQ6IGZhbHNlIH0sXG4gICAgfVxuICB9XG59XG4iXSwibmFtZXMiOlsiSGVhZCIsImNoYXJhY3RlcnMiLCJjbGllbnRQcm9taXNlIiwiSG9tZSIsImlzQ29ubmVjdGVkIiwiSlNPTiIsInBhcnNlIiwiY29uc29sZSIsImxvZyIsImRpdiIsInRpdGxlIiwibGluayIsInJlbCIsImhyZWYiLCJtYWluIiwiaDEiLCJoMiIsImNvZGUiLCJwIiwiZm9vdGVyIiwiZ2V0U2VydmVyU2lkZVByb3BzIiwiY29udGV4dCIsImNsaWVudCIsImRiIiwiY29sbGVjdGlvbiIsImZpbmQiLCJ0b0FycmF5Iiwic3RyaW5naWZ5IiwicHJvcHMiLCJlIiwiZXJyb3IiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./pages/index.js\n");

/***/ }),

/***/ "mongodb":
/*!**************************!*\
  !*** external "mongodb" ***!
  \**************************/
/***/ ((module) => {

module.exports = require("mongodb");

/***/ }),

/***/ "next/dist/shared/lib/styled-jsx":
/*!**************************************************!*\
  !*** external "next/dist/shared/lib/styled-jsx" ***!
  \**************************************************/
/***/ ((module) => {

module.exports = require("next/dist/shared/lib/styled-jsx");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/***/ ((module) => {

module.exports = require("next/head");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/index.js"));
module.exports = __webpack_exports__;

})();