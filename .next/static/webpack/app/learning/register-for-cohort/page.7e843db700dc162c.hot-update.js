/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/learning/register-for-cohort/page",{

/***/ "(app-pages-browser)/./src/app/learning/register-for-cohort/courseInfoForm.tsx":
/*!*****************************************************************!*\
  !*** ./src/app/learning/register-for-cohort/courseInfoForm.tsx ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {



;
    // Wrapped in an IIFE to avoid polluting the global scope
    ;
    (function () {
        var _a, _b;
        // Legacy CSS implementations will `eval` browser code in a Node.js context
        // to extract CSS. For backwards compatibility, we need to check we're in a
        // browser context before continuing.
        if (typeof self !== 'undefined' &&
            // AMP / No-JS mode does not inject these helpers:
            '$RefreshHelpers$' in self) {
            // @ts-ignore __webpack_module__ is global
            var currentExports = module.exports;
            // @ts-ignore __webpack_module__ is global
            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;
            // This cannot happen in MainTemplate because the exports mismatch between
            // templating and execution.
            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
            // A module can be accepted automatically based on its exports, e.g. when
            // it is a Refresh Boundary.
            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
                // Save the previous exports signature on update so we can compare the boundary
                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)
                module.hot.dispose(function (data) {
                    data.prevSignature =
                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);
                });
                // Unconditionally accept an update to this module, we'll check if it's
                // still a Refresh Boundary later.
                // @ts-ignore importMeta is replaced in the loader
                module.hot.accept();
                // This field is set when the previous version of this module was a
                // Refresh Boundary, letting us know we need to check for invalidation or
                // enqueue an update.
                if (prevSignature !== null) {
                    // A boundary can become ineligible if its exports are incompatible
                    // with the previous exports.
                    //
                    // For example, if you add/remove/change exports, we'll want to
                    // re-execute the importing modules, and force those components to
                    // re-render. Similarly, if you convert a class component to a
                    // function, we want to invalidate the boundary.
                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {
                        module.hot.invalidate();
                    }
                    else {
                        self.$RefreshHelpers$.scheduleUpdate();
                    }
                }
            }
            else {
                // Since we just executed the code for the module, it's possible that the
                // new exports made it ineligible for being a boundary.
                // We only care about the case when we were _previously_ a boundary,
                // because we already accepted this update (accidental side effect).
                var isNoLongerABoundary = prevSignature !== null;
                if (isNoLongerABoundary) {
                    module.hot.invalidate();
                }
            }
        }
    })();


/***/ }),

/***/ "(app-pages-browser)/./src/app/learning/register-for-cohort/page.tsx":
/*!*******************************************************!*\
  !*** ./src/app/learning/register-for-cohort/page.tsx ***!
  \*******************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Home; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _home_navbar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../home/navbar */ \"(app-pages-browser)/./src/app/learning/home/navbar.tsx\");\n/* harmony import */ var _registerForCohortSlider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./registerForCohortSlider */ \"(app-pages-browser)/./src/app/learning/register-for-cohort/registerForCohortSlider.tsx\");\n/* harmony import */ var _courseInfoForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./courseInfoForm */ \"(app-pages-browser)/./src/app/learning/register-for-cohort/courseInfoForm.tsx\");\n/* harmony import */ var _courseInfoForm__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_courseInfoForm__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Home() {\n    _s();\n    const [formData, setFormData] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)({\n        firstname: \"\",\n        lastname: \"\",\n        email: \"\",\n        phone: \"\",\n        gender: \"\",\n        course: \"\",\n        university: \"\",\n        programType: \"\",\n        currentlyWorking: \"\",\n        plan: \"\",\n        howDoYouIntendToPay: \"\",\n        whyTakeCourse: \"\",\n        howDidYouHearAboutUs: \"\",\n        refererNameAndPhone: \"\"\n    });\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"w-screen z-50 absolute top-0 left-0\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_home_navbar__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {}, void 0, false, {\n                    fileName: \"/Users/damiadeh/Desktop/Projects/quales/src/app/learning/register-for-cohort/page.tsx\",\n                    lineNumber: 40,\n                    columnNumber: 60\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/damiadeh/Desktop/Projects/quales/src/app/learning/register-for-cohort/page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"section\", {\n                className: \"grid grid-cols-1 xl:grid-cols-2 max-h-screen\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_registerForCohortSlider__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {}, void 0, false, {\n                        fileName: \"/Users/damiadeh/Desktop/Projects/quales/src/app/learning/register-for-cohort/page.tsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((_courseInfoForm__WEBPACK_IMPORTED_MODULE_3___default()), {\n                        formData: formData,\n                        setFormData: setFormData\n                    }, void 0, false, {\n                        fileName: \"/Users/damiadeh/Desktop/Projects/quales/src/app/learning/register-for-cohort/page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/Users/damiadeh/Desktop/Projects/quales/src/app/learning/register-for-cohort/page.tsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n_s(Home, \"2o6KfhHW9kMsaHdFyH/+cS5hrQU=\");\n_c = Home;\nvar _c;\n$RefreshReg$(_c, \"Home\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvbGVhcm5pbmcvcmVnaXN0ZXItZm9yLWNvaG9ydC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBR29DO0FBRTRCO0FBRWxCO0FBQ2I7QUFXbEIsU0FBU0k7O0lBRXRCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSCwrQ0FBUUEsQ0FBUTtRQUM5Q0ksV0FBVztRQUNYQyxVQUFVO1FBQ1ZDLE9BQU87UUFDUEMsT0FBTztRQUNQQyxRQUFRO1FBQ1JDLFFBQVE7UUFDUkMsWUFBWTtRQUNaQyxhQUFhO1FBQ2JDLGtCQUFrQjtRQUNsQkMsTUFBTTtRQUNOQyxxQkFBcUI7UUFDckJDLGVBQWU7UUFDZkMsc0JBQXNCO1FBQ3RCQyxxQkFBcUI7SUFDdkI7SUFDQSxxQkFDRTs7MEJBQ0UsOERBQUNDO2dCQUFJQyxXQUFVOzBCQUFzQyw0RUFBQ3RCLG9EQUFNQTs7Ozs7Ozs7OzswQkFHNUQsOERBQUN1QjtnQkFBUUQsV0FBVTs7a0NBQ2pCLDhEQUFDckIsZ0VBQXVCQTs7Ozs7a0NBRXhCLDhEQUFDQyx3REFBY0E7d0JBQUNHLFVBQVVBO3dCQUFVQyxhQUFhQTs7Ozs7Ozs7Ozs7Ozs7QUFJekQ7R0E5QndCRjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwL2xlYXJuaW5nL3JlZ2lzdGVyLWZvci1jb2hvcnQvcGFnZS50c3g/YThjYiJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxuXG5cbmltcG9ydCBOYXZCYXIgZnJvbSBcIi4uL2hvbWUvbmF2YmFyXCI7XG5pbXBvcnQgeyBNZXRhZGF0YSB9IGZyb20gJ25leHQnO1xuaW1wb3J0IFJlZ2lzdGVyRm9yQ29ob3J0U2xpZGVyIGZyb20gXCIuL3JlZ2lzdGVyRm9yQ29ob3J0U2xpZGVyXCI7XG5pbXBvcnQgUGVyc29uYWxJbmZvRm9ybSBmcm9tIFwiLi9wZXJzb25hbEluZm9Gb3JtXCI7XG5pbXBvcnQgQ291cnNlSW5mb0Zvcm0gZnJvbSBcIi4vY291cnNlSW5mb0Zvcm1cIjtcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4gXG4vKiBleHBvcnQgY29uc3QgbWV0YWRhdGE6IE1ldGFkYXRhID0ge1xuICB0aXRsZTogJ0xlYXJuaW5nIHwgUXVhbGVzIENvbnN1bHRpbmcnLFxuICBkZXNjcmlwdGlvbjogJ1F1YWxlcyBDb25zdWx0aW5nIGNvbXByaXNlcyBhbiBlbGl0ZSBuZXR3b3JrIG9mIHRoZSBmaW5lc3QgZnJlZWxhbmNlIFNvZnR3YXJlIERldmVsb3BlcnMsIERlc2lnbmVycywgQnVzaW5lc3MgQW5hbHlzdHMsIFByb2R1Y3QgTWFuYWdlcnMsIGFuZCBTY3J1bSBNYXN0ZXJzLCBEYXRhIEFuYWx5c3RzIGdsb2JhbGx5LiBMZWFkaW5nIGNvbXBhbmllcyBlbmdhZ2UgZnJlZWxhbmNlcnMgZnJvbSBRdWFsZXMgQ29uc3VsdGluZyBmb3IgdGhlaXIgY3JpdGljYWwgcHJvamVjdHMuJyxcbn07ICovXG5cbmV4cG9ydCBpbnRlcmZhY2UgZGF0YSB7XG4gIGZpcnN0bmFtZTogc3RyaW5nLCBsYXN0bmFtZTogc3RyaW5nLCBlbWFpbDogc3RyaW5nLCBwaG9uZTogc3RyaW5nLCBnZW5kZXI6IHN0cmluZywgY291cnNlOiBzdHJpbmcsIHVuaXZlcnNpdHk6IHN0cmluZywgcHJvZ3JhbVR5cGU6IHN0cmluZywgY3VycmVudGx5V29ya2luZzogc3RyaW5nLCBwbGFuOiBzdHJpbmcsIGhvd0RvWW91SW50ZW5kVG9QYXk6IHN0cmluZywgd2h5VGFrZUNvdXJzZTogc3RyaW5nLCBob3dEaWRZb3VIZWFyQWJvdXRVczogc3RyaW5nLCByZWZlcmVyTmFtZUFuZFBob25lOiBzdHJpbmdcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSG9tZSgpIHtcblxuICBjb25zdCBbZm9ybURhdGEsIHNldEZvcm1EYXRhXSA9IHVzZVN0YXRlIDxkYXRhPih7XG4gICAgZmlyc3RuYW1lOiBcIlwiLFxuICAgIGxhc3RuYW1lOiBcIlwiLFxuICAgIGVtYWlsOiBcIlwiLFxuICAgIHBob25lOiBcIlwiLFxuICAgIGdlbmRlcjogXCJcIixcbiAgICBjb3Vyc2U6IFwiXCIsXG4gICAgdW5pdmVyc2l0eTogXCJcIixcbiAgICBwcm9ncmFtVHlwZTogXCJcIixcbiAgICBjdXJyZW50bHlXb3JraW5nOiBcIlwiLFxuICAgIHBsYW46IFwiXCIsXG4gICAgaG93RG9Zb3VJbnRlbmRUb1BheTogXCJcIixcbiAgICB3aHlUYWtlQ291cnNlOiBcIlwiLFxuICAgIGhvd0RpZFlvdUhlYXJBYm91dFVzOiBcIlwiLFxuICAgIHJlZmVyZXJOYW1lQW5kUGhvbmU6IFwiXCIsXG4gIH0pXG4gIHJldHVybiAoXG4gICAgPD5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gei01MCBhYnNvbHV0ZSB0b3AtMCBsZWZ0LTBcIj48TmF2QmFyIC8+PC9kaXY+XG5cblxuICAgICAgPHNlY3Rpb24gY2xhc3NOYW1lPVwiZ3JpZCBncmlkLWNvbHMtMSB4bDpncmlkLWNvbHMtMiBtYXgtaC1zY3JlZW5cIj5cbiAgICAgICAgPFJlZ2lzdGVyRm9yQ29ob3J0U2xpZGVyIC8+XG4gICAgICAgIHsvKiA8UGVyc29uYWxJbmZvRm9ybSBmb3JtRGF0YT17Zm9ybURhdGF9IHNldEZvcm1EYXRhPXtzZXRGb3JtRGF0YX0gLz4gKi99XG4gICAgICAgIDxDb3Vyc2VJbmZvRm9ybSBmb3JtRGF0YT17Zm9ybURhdGF9IHNldEZvcm1EYXRhPXtzZXRGb3JtRGF0YX0gLz5cbiAgICAgIDwvc2VjdGlvbj5cbiAgICA8Lz5cbiAgKTtcbn1cbiJdLCJuYW1lcyI6WyJOYXZCYXIiLCJSZWdpc3RlckZvckNvaG9ydFNsaWRlciIsIkNvdXJzZUluZm9Gb3JtIiwidXNlU3RhdGUiLCJIb21lIiwiZm9ybURhdGEiLCJzZXRGb3JtRGF0YSIsImZpcnN0bmFtZSIsImxhc3RuYW1lIiwiZW1haWwiLCJwaG9uZSIsImdlbmRlciIsImNvdXJzZSIsInVuaXZlcnNpdHkiLCJwcm9ncmFtVHlwZSIsImN1cnJlbnRseVdvcmtpbmciLCJwbGFuIiwiaG93RG9Zb3VJbnRlbmRUb1BheSIsIndoeVRha2VDb3Vyc2UiLCJob3dEaWRZb3VIZWFyQWJvdXRVcyIsInJlZmVyZXJOYW1lQW5kUGhvbmUiLCJkaXYiLCJjbGFzc05hbWUiLCJzZWN0aW9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/learning/register-for-cohort/page.tsx\n"));

/***/ })

});