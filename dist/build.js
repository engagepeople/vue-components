(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("podiumComponents", [], factory);
	else if(typeof exports === 'object')
		exports["podiumComponents"] = factory();
	else
		root["podiumComponents"] = factory();
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// identity function for calling harmony imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/dist/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 9);
/******/ })
/************************************************************************/
/******/ ({

/***/ 9:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n// import Vue from \"vue\";\r\n// import HelloComponent from \"./components/Hello.vue\";\r\nvar MyPlugin = {\r\n    n: 23,\r\n    d: 26\r\n    // The install method is all that needs to exist on the plugin object.\r\n    // It takes the global Vue object as well as user-defined options.\r\n    // install(Vue: any, options: any): void {\r\n    //     // We call Vue.mixin() here to inject functionality into all components.\r\n    //     Vue.component('pd-hello', HelloComponent);\r\n    //     Vue.mixin({\r\n    //         // Anything added to a mixin will be injected into all components.\r\n    //         // In this case, the mounted() method runs when the component is added to the DOM.\r\n    //         mounted(): void {\r\n    //             console.log('TS Mounted!', HelloComponent)\r\n    //         },\r\n    //     })\r\n    // },\r\n};\r\n/* harmony default export */ __webpack_exports__[\"default\"] = (MyPlugin);\r\n\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXgudHM/ZWFjMyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLHlCQUF5QjtBQUN6Qix1REFBdUQ7QUFFdkQsSUFBTSxRQUFRLEdBQUc7SUFDYixDQUFDLEVBQUUsRUFBRTtJQUNMLENBQUMsRUFBRSxFQUFFO0lBQ0wsc0VBQXNFO0lBQ3RFLGtFQUFrRTtJQUNsRSwwQ0FBMEM7SUFDMUMsK0VBQStFO0lBQy9FLGlEQUFpRDtJQUNqRCxrQkFBa0I7SUFDbEIsNkVBQTZFO0lBQzdFLDZGQUE2RjtJQUM3Riw0QkFBNEI7SUFDNUIseURBQXlEO0lBQ3pELGFBQWE7SUFDYixTQUFTO0lBQ1QsS0FBSztDQUNSO0FBRUQsK0RBQWUsUUFBUSIsImZpbGUiOiI5LmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFZ1ZSBmcm9tIFwidnVlXCI7XHJcbi8vIGltcG9ydCBIZWxsb0NvbXBvbmVudCBmcm9tIFwiLi9jb21wb25lbnRzL0hlbGxvLnZ1ZVwiO1xyXG5cclxuY29uc3QgTXlQbHVnaW4gPSB7XHJcbiAgICBuOiAyMyxcclxuICAgIGQ6IDI2XHJcbiAgICAvLyBUaGUgaW5zdGFsbCBtZXRob2QgaXMgYWxsIHRoYXQgbmVlZHMgdG8gZXhpc3Qgb24gdGhlIHBsdWdpbiBvYmplY3QuXHJcbiAgICAvLyBJdCB0YWtlcyB0aGUgZ2xvYmFsIFZ1ZSBvYmplY3QgYXMgd2VsbCBhcyB1c2VyLWRlZmluZWQgb3B0aW9ucy5cclxuICAgIC8vIGluc3RhbGwoVnVlOiBhbnksIG9wdGlvbnM6IGFueSk6IHZvaWQge1xyXG4gICAgLy8gICAgIC8vIFdlIGNhbGwgVnVlLm1peGluKCkgaGVyZSB0byBpbmplY3QgZnVuY3Rpb25hbGl0eSBpbnRvIGFsbCBjb21wb25lbnRzLlxyXG4gICAgLy8gICAgIFZ1ZS5jb21wb25lbnQoJ3BkLWhlbGxvJywgSGVsbG9Db21wb25lbnQpO1xyXG4gICAgLy8gICAgIFZ1ZS5taXhpbih7XHJcbiAgICAvLyAgICAgICAgIC8vIEFueXRoaW5nIGFkZGVkIHRvIGEgbWl4aW4gd2lsbCBiZSBpbmplY3RlZCBpbnRvIGFsbCBjb21wb25lbnRzLlxyXG4gICAgLy8gICAgICAgICAvLyBJbiB0aGlzIGNhc2UsIHRoZSBtb3VudGVkKCkgbWV0aG9kIHJ1bnMgd2hlbiB0aGUgY29tcG9uZW50IGlzIGFkZGVkIHRvIHRoZSBET00uXHJcbiAgICAvLyAgICAgICAgIG1vdW50ZWQoKTogdm9pZCB7XHJcbiAgICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZygnVFMgTW91bnRlZCEnLCBIZWxsb0NvbXBvbmVudClcclxuICAgIC8vICAgICAgICAgfSxcclxuICAgIC8vICAgICB9KVxyXG4gICAgLy8gfSxcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgTXlQbHVnaW5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9zcmMvaW5kZXgudHMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///9\n");

/***/ })

/******/ });
});