"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./src/pages/index.js":
/*!****************************!*\
  !*** ./src/pages/index.js ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/index.module.scss */ \"./src/styles/index.module.scss\");\n/* harmony import */ var _styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"./node_modules/next/image.js\");\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_image__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var formik__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! formik */ \"./node_modules/formik/dist/formik.esm.js\");\n/* harmony import */ var yup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! yup */ \"./node_modules/yup/index.esm.js\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\nfunction Home() {\n    _s();\n    const formSchema = yup__WEBPACK_IMPORTED_MODULE_4__.object().shape({\n        email: yup__WEBPACK_IMPORTED_MODULE_4__.string().required(\"Required email\").email(\"Digite um e-mail v\\xe1lido!\")\n    });\n    const formik = (0,formik__WEBPACK_IMPORTED_MODULE_3__.useFormik)({\n        initialValues: {\n            email: \"\"\n        },\n        formSchema,\n        onSubmit: (values)=>{\n            console.log(\"Valores do formul\\xe1rio:\", values);\n        }\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().newsletter),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"video\", {\n                autoPlay: true,\n                muted: true,\n                loop: true,\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().newsletter__video),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"source\", {\n                    src: \"/Wallpaper.mp4\",\n                    type: \"video/mp4\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 28,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 27,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"figure\", {\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().newsletter__logo),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                    src: \"/GenshinImact.png\",\n                    width: 380,\n                    height: 250,\n                    alt: \"Genshi Impact\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                    lineNumber: 31,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 30,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h2\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__title),\n                        children: \"Stay updated!\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__description),\n                        children: \"Join 60,000+ product managers receiving monthly updates on:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 42,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__check),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"./CheckCircle.svg\",\n                                width: 20,\n                                height: 20,\n                                alt: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 47,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__text),\n                                children: \"Product discovery and building what matters\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 48,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__check),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"./CheckCircle.svg\",\n                                width: 20,\n                                height: 20,\n                                alt: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 54,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__text),\n                                children: \"Measuring to ensure updates are a success\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 55,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__check),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_image__WEBPACK_IMPORTED_MODULE_2___default()), {\n                                src: \"./CheckCircle.svg\",\n                                width: 20,\n                                height: 20,\n                                alt: \"Check\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 61,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__text),\n                                children: \"And much more!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 62,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 60,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                        onSubmit: formik.handleSubmit,\n                        className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__form),\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__label),\n                                htmlFor: \"E-mail\",\n                                children: \"E-mail\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 66,\n                                columnNumber: 11\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__input),\n                                id: \"E-mail\",\n                                type: \"email\",\n                                ...formik.getFieldProps(\"email\")\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 69,\n                                columnNumber: 11\n                            }, this),\n                            formik.touched.email && formik.errors.email && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                                children: console.log(formik.errors.email)\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 76,\n                                columnNumber: 13\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                                className: (_styles_index_module_scss__WEBPACK_IMPORTED_MODULE_5___default().section__button),\n                                type: \"submit\",\n                                children: \"Subscribe to monthly newsletter!\"\n                            }, void 0, false, {\n                                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                                lineNumber: 78,\n                                columnNumber: 11\n                            }, this)\n                        ]\n                    }, void 0, true, {\n                        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                        lineNumber: 65,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n                lineNumber: 39,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\leelh\\\\Documents\\\\Programa\\xe7\\xe3o\\\\OKN\\\\Form Challenge\\\\Form-Challenge\\\\src\\\\pages\\\\index.js\",\n        lineNumber: 26,\n        columnNumber: 5\n    }, this);\n}\n_s(Home, \"B/4rI4IXClQ7sG7psKj+pOuRe5Q=\", false, function() {\n    return [\n        formik__WEBPACK_IMPORTED_MODULE_3__.useFormik\n    ];\n});\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGFnZXMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztBQUFpRDtBQUNwQjtBQUNFO0FBQ0k7QUFFUjtBQUVaLFNBQVNLOztJQUN0QixNQUFNQyxhQUFhRix1Q0FBVUcsR0FBR0MsTUFBTTtRQUNwQ0MsT0FBT0wsdUNBQVVNLEdBQ2RDLFNBQVMsa0JBQ1RGLE1BQU07SUFDWDtJQUVBLE1BQU1HLFNBQVNULGlEQUFTQSxDQUFDO1FBQ3ZCVSxlQUFlO1lBQ2JKLE9BQU87UUFDVDtRQUNBSDtRQUNBUSxVQUFVLENBQUNDO1lBQ1RDLFFBQVFDLElBQUksNkJBQTBCRjtRQUN4QztJQUNGO0lBRUEscUJBQ0UsOERBQUNHO1FBQUtDLFdBQVduQiw2RUFBaUJvQjs7MEJBQ2hDLDhEQUFDQztnQkFBTUMsUUFBUTtnQkFBQ0MsS0FBSztnQkFBQ0MsSUFBSTtnQkFBQ0wsV0FBV25CLG9GQUF3QnlCOzBCQUM1RCw0RUFBQ0M7b0JBQU9DLEtBQUk7b0JBQWlCQyxNQUFLOzs7Ozs7Ozs7OzswQkFFcEMsOERBQUNDO2dCQUFPVixXQUFXbkIsbUZBQXVCOEI7MEJBQ3hDLDRFQUFDNUIsbURBQUtBO29CQUNKeUIsS0FBSTtvQkFDSkksT0FBTztvQkFDUEMsUUFBUTtvQkFDUkMsS0FBSTs7Ozs7Ozs7Ozs7MEJBSVIsOERBQUNDO2dCQUFRZixXQUFXbkIsMEVBQWNrQzs7a0NBQ2hDLDhEQUFDQzt3QkFBR2hCLFdBQVduQixpRkFBcUJvQztrQ0FBRTs7Ozs7O2tDQUV0Qyw4REFBQ0M7d0JBQUVsQixXQUFXbkIsdUZBQTJCc0M7a0NBQUU7Ozs7OztrQ0FJM0MsOERBQUNDO3dCQUFJcEIsV0FBV25CLGlGQUFxQndDOzswQ0FDbkMsOERBQUN0QyxtREFBS0E7Z0NBQUN5QixLQUFJO2dDQUFvQkksT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsS0FBSTs7Ozs7OzBDQUMxRCw4REFBQ0k7Z0NBQUVsQixXQUFXbkIsZ0ZBQW9CeUM7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FLdEMsOERBQUNGO3dCQUFJcEIsV0FBV25CLGlGQUFxQndDOzswQ0FDbkMsOERBQUN0QyxtREFBS0E7Z0NBQUN5QixLQUFJO2dDQUFvQkksT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsS0FBSTs7Ozs7OzBDQUMxRCw4REFBQ0k7Z0NBQUVsQixXQUFXbkIsZ0ZBQW9CeUM7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FLdEMsOERBQUNGO3dCQUFJcEIsV0FBV25CLGlGQUFxQndDOzswQ0FDbkMsOERBQUN0QyxtREFBS0E7Z0NBQUN5QixLQUFJO2dDQUFvQkksT0FBTztnQ0FBSUMsUUFBUTtnQ0FBSUMsS0FBSTs7Ozs7OzBDQUMxRCw4REFBQ0k7Z0NBQUVsQixXQUFXbkIsZ0ZBQW9CeUM7MENBQUU7Ozs7Ozs7Ozs7OztrQ0FHdEMsOERBQUNDO3dCQUFLNUIsVUFBVUYsT0FBTytCO3dCQUFjeEIsV0FBV25CLGdGQUFvQjRDOzswQ0FDbEUsOERBQUNDO2dDQUFNMUIsV0FBV25CLGlGQUFxQjhDO2dDQUFFQyxTQUFROzBDQUFTOzs7Ozs7MENBRzFELDhEQUFDQztnQ0FDQzdCLFdBQVduQixpRkFBcUJpRDtnQ0FDaENDLElBQUc7Z0NBQ0h0QixNQUFLO2dDQUNKLEdBQUdoQixPQUFPdUMsY0FBYyxRQUFROzs7Ozs7NEJBRWxDdkMsT0FBT3dDLFFBQVEzQyxTQUFTRyxPQUFPeUMsT0FBTzVDLHVCQUNyQyw4REFBQzhCOzBDQUFLdkIsUUFBUUMsSUFBSUwsT0FBT3lDLE9BQU81Qzs7Ozs7OzBDQUVsQyw4REFBQzZDO2dDQUFPbkMsV0FBV25CLGtGQUFzQnVEO2dDQUFFM0IsTUFBSzswQ0FBUzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBT25FO0dBN0V3QnZCOztRQU9QRiw2Q0FBU0E7OztLQVBGRSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvcGFnZXMvaW5kZXguanM/NDA4MCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCIuLi9zdHlsZXMvaW5kZXgubW9kdWxlLnNjc3NcIjtcclxuaW1wb3J0IHVzZVN0YXRlIGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcclxuaW1wb3J0IHsgdXNlRm9ybWlrIH0gZnJvbSBcImZvcm1pa1wiO1xyXG5cclxuaW1wb3J0ICogYXMgWXVwIGZyb20gXCJ5dXBcIjtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWUoKSB7XHJcbiAgY29uc3QgZm9ybVNjaGVtYSA9IFl1cC5vYmplY3QoKS5zaGFwZSh7XHJcbiAgICBlbWFpbDogWXVwLnN0cmluZygpXHJcbiAgICAgIC5yZXF1aXJlZChcIlJlcXVpcmVkIGVtYWlsXCIpXHJcbiAgICAgIC5lbWFpbChcIkRpZ2l0ZSB1bSBlLW1haWwgdsOhbGlkbyFcIiksXHJcbiAgfSk7XHJcblxyXG4gIGNvbnN0IGZvcm1payA9IHVzZUZvcm1payh7XHJcbiAgICBpbml0aWFsVmFsdWVzOiB7XHJcbiAgICAgIGVtYWlsOiBcIlwiLFxyXG4gICAgfSxcclxuICAgIGZvcm1TY2hlbWEsXHJcbiAgICBvblN1Ym1pdDogKHZhbHVlcykgPT4ge1xyXG4gICAgICBjb25zb2xlLmxvZyhcIlZhbG9yZXMgZG8gZm9ybXVsw6FyaW86XCIsIHZhbHVlcyk7XHJcbiAgICB9LFxyXG4gIH0pO1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPG1haW4gY2xhc3NOYW1lPXtzdHlsZXMubmV3c2xldHRlcn0+XHJcbiAgICAgIDx2aWRlbyBhdXRvUGxheSBtdXRlZCBsb29wIGNsYXNzTmFtZT17c3R5bGVzLm5ld3NsZXR0ZXJfX3ZpZGVvfT5cclxuICAgICAgICA8c291cmNlIHNyYz1cIi9XYWxscGFwZXIubXA0XCIgdHlwZT1cInZpZGVvL21wNFwiIC8+XHJcbiAgICAgIDwvdmlkZW8+XHJcbiAgICAgIDxmaWd1cmUgY2xhc3NOYW1lPXtzdHlsZXMubmV3c2xldHRlcl9fbG9nb30+XHJcbiAgICAgICAgPEltYWdlXHJcbiAgICAgICAgICBzcmM9XCIvR2Vuc2hpbkltYWN0LnBuZ1wiXHJcbiAgICAgICAgICB3aWR0aD17MzgwfVxyXG4gICAgICAgICAgaGVpZ2h0PXsyNTB9XHJcbiAgICAgICAgICBhbHQ9XCJHZW5zaGkgSW1wYWN0XCJcclxuICAgICAgICAvPlxyXG4gICAgICA8L2ZpZ3VyZT5cclxuXHJcbiAgICAgIDxzZWN0aW9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb259PlxyXG4gICAgICAgIDxoMiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX190aXRsZX0+U3RheSB1cGRhdGVkITwvaDI+XHJcblxyXG4gICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fX2Rlc2NyaXB0aW9ufT5cclxuICAgICAgICAgIEpvaW4gNjAsMDAwKyBwcm9kdWN0IG1hbmFnZXJzIHJlY2VpdmluZyBtb250aGx5IHVwZGF0ZXMgb246XHJcbiAgICAgICAgPC9wPlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fX2NoZWNrfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIuL0NoZWNrQ2lyY2xlLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PVwiQ2hlY2tcIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9fdGV4dH0+XHJcbiAgICAgICAgICAgIFByb2R1Y3QgZGlzY292ZXJ5IGFuZCBidWlsZGluZyB3aGF0IG1hdHRlcnNcclxuICAgICAgICAgIDwvcD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX19jaGVja30+XHJcbiAgICAgICAgICA8SW1hZ2Ugc3JjPVwiLi9DaGVja0NpcmNsZS5zdmdcIiB3aWR0aD17MjB9IGhlaWdodD17MjB9IGFsdD1cIkNoZWNrXCIgLz5cclxuICAgICAgICAgIDxwIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fX3RleHR9PlxyXG4gICAgICAgICAgICBNZWFzdXJpbmcgdG8gZW5zdXJlIHVwZGF0ZXMgYXJlIGEgc3VjY2Vzc1xyXG4gICAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fX2NoZWNrfT5cclxuICAgICAgICAgIDxJbWFnZSBzcmM9XCIuL0NoZWNrQ2lyY2xlLnN2Z1wiIHdpZHRoPXsyMH0gaGVpZ2h0PXsyMH0gYWx0PVwiQ2hlY2tcIiAvPlxyXG4gICAgICAgICAgPHAgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9fdGV4dH0+QW5kIG11Y2ggbW9yZSE8L3A+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxmb3JtIG9uU3VibWl0PXtmb3JtaWsuaGFuZGxlU3VibWl0fSBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX19mb3JtfT5cclxuICAgICAgICAgIDxsYWJlbCBjbGFzc05hbWU9e3N0eWxlcy5zZWN0aW9uX19sYWJlbH0gaHRtbEZvcj1cIkUtbWFpbFwiPlxyXG4gICAgICAgICAgICBFLW1haWxcclxuICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuc2VjdGlvbl9faW5wdXR9XHJcbiAgICAgICAgICAgIGlkPVwiRS1tYWlsXCJcclxuICAgICAgICAgICAgdHlwZT1cImVtYWlsXCJcclxuICAgICAgICAgICAgey4uLmZvcm1pay5nZXRGaWVsZFByb3BzKFwiZW1haWxcIil9XHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgICAge2Zvcm1pay50b3VjaGVkLmVtYWlsICYmIGZvcm1pay5lcnJvcnMuZW1haWwgJiYgKFxyXG4gICAgICAgICAgICA8ZGl2Pntjb25zb2xlLmxvZyhmb3JtaWsuZXJyb3JzLmVtYWlsKX08L2Rpdj5cclxuICAgICAgICAgICl9XHJcbiAgICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT17c3R5bGVzLnNlY3Rpb25fX2J1dHRvbn0gdHlwZT1cInN1Ym1pdFwiPlxyXG4gICAgICAgICAgICBTdWJzY3JpYmUgdG8gbW9udGhseSBuZXdzbGV0dGVyIVxyXG4gICAgICAgICAgPC9idXR0b24+XHJcbiAgICAgICAgPC9mb3JtPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICA8L21haW4+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU3RhdGUiLCJJbWFnZSIsInVzZUZvcm1payIsIll1cCIsIkhvbWUiLCJmb3JtU2NoZW1hIiwib2JqZWN0Iiwic2hhcGUiLCJlbWFpbCIsInN0cmluZyIsInJlcXVpcmVkIiwiZm9ybWlrIiwiaW5pdGlhbFZhbHVlcyIsIm9uU3VibWl0IiwidmFsdWVzIiwiY29uc29sZSIsImxvZyIsIm1haW4iLCJjbGFzc05hbWUiLCJuZXdzbGV0dGVyIiwidmlkZW8iLCJhdXRvUGxheSIsIm11dGVkIiwibG9vcCIsIm5ld3NsZXR0ZXJfX3ZpZGVvIiwic291cmNlIiwic3JjIiwidHlwZSIsImZpZ3VyZSIsIm5ld3NsZXR0ZXJfX2xvZ28iLCJ3aWR0aCIsImhlaWdodCIsImFsdCIsInNlY3Rpb24iLCJoMiIsInNlY3Rpb25fX3RpdGxlIiwicCIsInNlY3Rpb25fX2Rlc2NyaXB0aW9uIiwiZGl2Iiwic2VjdGlvbl9fY2hlY2siLCJzZWN0aW9uX190ZXh0IiwiZm9ybSIsImhhbmRsZVN1Ym1pdCIsInNlY3Rpb25fX2Zvcm0iLCJsYWJlbCIsInNlY3Rpb25fX2xhYmVsIiwiaHRtbEZvciIsImlucHV0Iiwic2VjdGlvbl9faW5wdXQiLCJpZCIsImdldEZpZWxkUHJvcHMiLCJ0b3VjaGVkIiwiZXJyb3JzIiwiYnV0dG9uIiwic2VjdGlvbl9fYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/pages/index.js\n"));

/***/ })

});