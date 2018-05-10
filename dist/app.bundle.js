/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push(["./front/src/app/app.module.js","vendors"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./front/assets/movies.png":
/*!*********************************!*\
  !*** ./front/assets/movies.png ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__.p + \"assets/img/movies.png?e340575360d06ae40fd5cb88e02a0e8f\";\n\n//# sourceURL=webpack:///./front/assets/movies.png?");

/***/ }),

/***/ "./front/src/app/app.module.js":
/*!*************************************!*\
  !*** ./front/src/app/app.module.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _angular = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _home = __webpack_require__(/*! ./home/home.module */ \"./front/src/app/home/home.module.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nvar _mining = __webpack_require__(/*! ./mining/mining.module */ \"./front/src/app/mining/mining.module.js\");\n\nvar _mining2 = _interopRequireDefault(_mining);\n\nvar _shared = __webpack_require__(/*! ./shared/shared.module */ \"./front/src/app/shared/shared.module.js\");\n\nvar _shared2 = _interopRequireDefault(_shared);\n\n__webpack_require__(/*! ./../../styles.scss */ \"./front/styles.scss\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n_angular2.default.module('genresApp', [_home2.default, _mining2.default, _shared2.default]);\n\n//# sourceURL=webpack:///./front/src/app/app.module.js?");

/***/ }),

/***/ "./front/src/app/config/core.module.js":
/*!*********************************************!*\
  !*** ./front/src/app/config/core.module.js ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _angularAnimate = __webpack_require__(/*! angular-animate */ \"./node_modules/angular-animate/index.js\");\n\nvar _angularAnimate2 = _interopRequireDefault(_angularAnimate);\n\nvar _angularAria = __webpack_require__(/*! angular-aria */ \"./node_modules/angular-aria/index.js\");\n\nvar _angularAria2 = _interopRequireDefault(_angularAria);\n\nvar _angularMessages = __webpack_require__(/*! angular-messages */ \"./node_modules/angular-messages/index.js\");\n\nvar _angularMessages2 = _interopRequireDefault(_angularMessages);\n\nvar _angularMaterial = __webpack_require__(/*! angular-material */ \"./node_modules/angular-material/index.js\");\n\nvar _angularMaterial2 = _interopRequireDefault(_angularMaterial);\n\nvar _angularjs = __webpack_require__(/*! @uirouter/angularjs */ \"./node_modules/@uirouter/angularjs/release/ui-router-angularjs.js\");\n\nvar _angularjs2 = _interopRequireDefault(_angularjs);\n\nvar _core = __webpack_require__(/*! ./core.routing */ \"./front/src/app/config/core.routing.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\n__webpack_require__(/*! angular-chart.js */ \"./node_modules/angular-chart.js/dist/angular-chart.js\");\n\n__webpack_require__(/*! angular-material/angular-material.min.css */ \"./node_modules/angular-material/angular-material.min.css\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar core = _angular2.default.module('app.core', [_angularAnimate2.default, _angularAria2.default, _angularMessages2.default, _angularMaterial2.default, _angularjs2.default, 'chart.js']).config(_core2.default).name;\n\nexports.default = core;\n\n//# sourceURL=webpack:///./front/src/app/config/core.module.js?");

/***/ }),

/***/ "./front/src/app/config/core.routing.js":
/*!**********************************************!*\
  !*** ./front/src/app/config/core.routing.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nrouting.$inject = [\"$locationProvider\", \"$urlRouterProvider\", \"ChartJsProvider\"];\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = routing;\nfunction routing($locationProvider, $urlRouterProvider, ChartJsProvider) {\n  'ngInject';\n\n  $locationProvider.html5Mode(true);\n  $urlRouterProvider.otherwise('/');\n  ChartJsProvider.setOptions({\n    global: {\n      colors: ['#3F51B5'],\n      defaultFontColor: '#555555',\n      defaultFontFamily: 'Roboto',\n      defaultFontSize: 13\n    }\n  });\n}\n\n//# sourceURL=webpack:///./front/src/app/config/core.routing.js?");

/***/ }),

/***/ "./front/src/app/home/home.controller.js":
/*!***********************************************!*\
  !*** ./front/src/app/home/home.controller.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _jquery = __webpack_require__(/*! jquery */ \"./node_modules/jquery/dist/jquery.js\");\n\nvar _jquery2 = _interopRequireDefault(_jquery);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar HomeController = function () {\n  HomeController.$inject = [\"$scope\", \"$mdDialog\", \"movieApiService\"];\n  function HomeController($scope, $mdDialog, movieApiService) {\n    'ngInject';\n\n    _classCallCheck(this, HomeController);\n\n    this.movieId = '';\n    this.movie = {};\n    this.isSpinnerShowing = false;\n    this.$scope = $scope;\n    this.$mdDialog = $mdDialog;\n    this.movieApiService = movieApiService;\n    this.imgSrc = './../../../assets/movies.png';\n\n    ////////////////////////\n    this.labels = ['Action', 'Adventure', 'Drama', 'Comedy', 'Romance'];\n    this.series = ['Series A'];\n    this.data = [[230, 20, 11, 40, 3]];\n    this.onClick = function (points, evt) {\n      console.log(points, evt);\n    };\n    this.datasetOverride = [{ yAxisID: 'y-axis-1' }, { yAxisID: 'y-axis-2' }];\n    this.options = {\n      scales: {\n        yAxes: [{\n          id: 'y-axis-1',\n          type: 'linear',\n          display: true,\n          position: 'left'\n        }, {\n          id: 'y-axis-2',\n          type: 'linear',\n          display: true,\n          position: 'right'\n        }]\n      }\n    };\n  }\n\n  _createClass(HomeController, [{\n    key: 'findById',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        var _this = this;\n\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                this.movie = {};\n                this.isSpinnerShowing = true;\n                _context.next = 4;\n                return this.movieApiService.findMovieById(this.movieId).then(function (response) {\n                  console.log(response.data);\n                  (0, _jquery2.default)('html, body').animate({\n                    scrollTop: (0, _jquery2.default)('#movieInfo').offset().top\n                  }, 2000);\n                  return response.data;\n                }).catch(function (error) {\n                  _this.showAlertDialog();\n                }).finally(function () {\n                  _this.isSpinnerShowing = false;\n                });\n\n              case 4:\n                this.movie = _context.sent;\n\n                this.$scope.$apply();\n\n              case 6:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function findById() {\n        return _ref.apply(this, arguments);\n      }\n\n      return findById;\n    }()\n  }, {\n    key: 'showAlertDialog',\n    value: function showAlertDialog() {\n      this.$mdDialog.show(this.$mdDialog.alert().parent(angular.element(document.body)).clickOutsideToClose(true).title('Movie not found').textContent('Check the movie ID.').ariaLabel('Movie not found alert dialog').ok('Ok').targetEvent(null));\n    }\n  }]);\n\n  return HomeController;\n}();\n\nexports.default = HomeController;\n\n//# sourceURL=webpack:///./front/src/app/home/home.controller.js?");

/***/ }),

/***/ "./front/src/app/home/home.html":
/*!**************************************!*\
  !*** ./front/src/app/home/home.html ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div layout=\\\"column\\\" class=\\\"h-100\\\">\\n  <div class=\\\"parallax bg-movies\\\" layout=\\\"column\\\" layout-align=\\\"center center\\\" flex=\\\"100\\\">\\n    <div layout=\\\"row\\\" layout-align=\\\"center center\\\" flex=\\\"100\\\" class=\\\"w-100\\\">\\n      <md-card flex=\\\"33\\\" md-colors=\\\"{ 'background' : 'grey-800-0.90' }\\\">\\n        <md-card-title>\\n          <span class=\\\"md-title\\\">Search Movie</span>\\n        </md-card-title>\\n        <md-divider class=\\\"bg-white\\\"></md-divider>\\n        <md-card-content>\\n          <div layout=\\\"row\\\" layout-align=\\\"space-between center\\\">\\n            <md-input-container flex=\\\"100\\\">\\n              <input type=\\\"text\\\" placeholder=\\\"Movie ID\\\" ng-model=\\\"vm.movieId\\\">\\n            </md-input-container>\\n          </div>\\n        </md-card-content>\\n        <md-card-actions layout=\\\"row\\\" layout-align=\\\"end center\\\">\\n          <md-button class=\\\"md-accent md-raised\\\" ng-click=\\\"vm.findById()\\\">Search</md-button>\\n        </md-card-actions>\\n      </md-card>\\n    </div>\\n  </div>\\n</div>\\n<div id=\\\"movieInfo\\\" layout=\\\"row\\\" ng-if=\\\"vm.movie.hasOwnProperty('original_title')\\\" md-colors=\\\"{ 'background' : 'grey-800' }\\\">\\n  <div flex=\\\"30\\\">\\n    <md-card>\\n      <img ng-src=\\\"{{ 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + vm.movie.poster_path }}\\\" alt=\\\"\\\">\\n    </md-card>\\n  </div>\\n  <div flex=\\\"70\\\">\\n    <md-card>\\n      <md-card-title>\\n        <md-card-title-text>\\n          <span class=\\\"md-title\\\">{{ vm.movie.original_title }}</span>\\n        </md-card-title-text>\\n      </md-card-title>\\n      <div class=\\\"md-padding\\\">\\n        <md-chips ng-model=\\\"vm.movie.genres\\\" readonly=\\\"true\\\">\\n          <md-chip-template>\\n            {{ $chip.name }}\\n          </md-chip-template>\\n        </md-chips>\\n      </div>\\n      <md-card-content>\\n        <p>\\n          {{ vm.movie.overview }}\\n        </p>\\n      </md-card-content>\\n    </md-card>\\n  </div>\\n</div>\\n<div layout=\\\"row\\\" layout-align=\\\"center center\\\" layout-margin flex ng-if=\\\"vm.isSpinnerShowing\\\">\\n  <md-progress-circular class=\\\"md-primary\\\" md-mode=\\\"indeterminate\\\"></md-progress-circular>\\n</div>\\n<!-- <div layout=\\\"row\\\" layout-align=\\\"center center\\\">\\n    <md-card flex=\\\"75\\\">\\n      <md-card-title>\\n        <md-card-title-text>\\n          <span class=\\\"md-title\\\">Results</span>\\n        </md-card-title-text>\\n      </md-card-title>\\n      <md-divider></md-divider>\\n      <md-card-content>\\n        <canvas id=\\\"bar\\\" class=\\\"chart chart-bar\\\" chart-data=\\\"vm.data\\\" chart-labels=\\\"vm.labels\\\" chart-series=\\\"vm.series\\\">\\n        </canvas>\\n      </md-card-content>\\n    </md-card>\\n  </div> -->\";\n\n//# sourceURL=webpack:///./front/src/app/home/home.html?");

/***/ }),

/***/ "./front/src/app/home/home.module.js":
/*!*******************************************!*\
  !*** ./front/src/app/home/home.module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _core = __webpack_require__(/*! ../config/core.module */ \"./front/src/app/config/core.module.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nvar _shared = __webpack_require__(/*! ../shared/shared.module */ \"./front/src/app/shared/shared.module.js\");\n\nvar _shared2 = _interopRequireDefault(_shared);\n\nvar _home = __webpack_require__(/*! ./home.routing */ \"./front/src/app/home/home.routing.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar home = _angular2.default.module('app.home', [_core2.default, _shared2.default]).config(_home2.default).name;\n\nexports.default = home;\n\n//# sourceURL=webpack:///./front/src/app/home/home.module.js?");

/***/ }),

/***/ "./front/src/app/home/home.routing.js":
/*!********************************************!*\
  !*** ./front/src/app/home/home.routing.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nhomeRouting.$inject = [\"$stateProvider\"];\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = homeRouting;\n\nvar _home = __webpack_require__(/*! ./home.controller */ \"./front/src/app/home/home.controller.js\");\n\nvar _home2 = _interopRequireDefault(_home);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction homeRouting($stateProvider) {\n  'ngInject';\n\n  var homeState = {\n    name: 'home',\n    url: '/',\n    controller: _home2.default,\n    controllerAs: 'vm',\n    template: __webpack_require__(/*! ./home.html */ \"./front/src/app/home/home.html\")\n  };\n\n  $stateProvider.state(homeState);\n}\n\n//# sourceURL=webpack:///./front/src/app/home/home.routing.js?");

/***/ }),

/***/ "./front/src/app/mining/mining.controller.js":
/*!***************************************************!*\
  !*** ./front/src/app/mining/mining.controller.js ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MiningController = function () {\n  MiningController.$inject = [\"$scope\", \"movieApiService\"];\n  function MiningController($scope, movieApiService) {\n    'ngInject';\n\n    _classCallCheck(this, MiningController);\n\n    this.$scope = $scope;\n    this.movieApiService = movieApiService;\n\n    this.foundMovies = false;\n    this.genre = '';\n    this.genres = [];\n    this.getMovieGenres();\n    this.pages = [{\n      number: 1,\n      numberOfMovies: 20\n    }, {\n      number: 5,\n      numberOfMovies: 100\n    }, {\n      number: 25,\n      numberOfMovies: 500\n    }, {\n      number: 40,\n      numberOfMovies: 800\n    }];\n    this.movies = [];\n    this.selectedPage = this.pages[0];\n    this.searchingForMovies = false;\n  }\n\n  _createClass(MiningController, [{\n    key: 'clear',\n    value: function clear() {\n      this.movies = [];\n      this.foundMovies = false;\n    }\n  }, {\n    key: 'getMovieGenres',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.movieApiService.getGenres().then(function (response) {\n                  console.log(response);\n                  return response.data.genres;\n                }).catch(function (error) {\n                  console.log(error);\n                }).finally(function () {});\n\n              case 2:\n                this.genres = _context.sent;\n\n                this.$scope.$apply();\n\n              case 4:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function getMovieGenres() {\n        return _ref.apply(this, arguments);\n      }\n\n      return getMovieGenres;\n    }()\n  }, {\n    key: 'mineDataFromGenre',\n    value: function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2(pageNumber) {\n        var _this = this;\n\n        var apiResponse;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                this.foundMovies = false;\n                this.searchingForMovies = true;\n                _context2.next = 4;\n                return this.movieApiService.getMoviesByGenre(this.genre.id, pageNumber).then(function (response) {\n                  _this.foundMovies = true;\n                  console.log(response);\n                  return response.data.results;\n                }).catch(function (error) {\n                  console.log(error);\n                }).finally(function () {\n                  _this.searchingForMovies = false;\n                });\n\n              case 4:\n                apiResponse = _context2.sent;\n                return _context2.abrupt('return', apiResponse);\n\n              case 6:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function mineDataFromGenre(_x) {\n        return _ref2.apply(this, arguments);\n      }\n\n      return mineDataFromGenre;\n    }()\n  }, {\n    key: 'mine',\n    value: function () {\n      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3() {\n        var results, index, result;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                results = [];\n\n                console.log('Mining...');\n                index = 1;\n\n              case 3:\n                if (!(index <= this.selectedPage.number)) {\n                  _context3.next = 11;\n                  break;\n                }\n\n                _context3.next = 6;\n                return this.mineDataFromGenre(index).then(function (response) {\n                  return response;\n                }).catch(function (error) {}).finally(function () {});\n\n              case 6:\n                result = _context3.sent;\n\n                results = results.concat(result);\n\n              case 8:\n                index++;\n                _context3.next = 3;\n                break;\n\n              case 11:\n                this.movies = results;\n                this.$scope.$apply();\n\n              case 13:\n              case 'end':\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function mine() {\n        return _ref3.apply(this, arguments);\n      }\n\n      return mine;\n    }()\n  }]);\n\n  return MiningController;\n}();\n\nexports.default = MiningController;\n\n//# sourceURL=webpack:///./front/src/app/mining/mining.controller.js?");

/***/ }),

/***/ "./front/src/app/mining/mining.html":
/*!******************************************!*\
  !*** ./front/src/app/mining/mining.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<div layout=\\\"row\\\" layout-align=\\\"start-center\\\" style=\\\"min-height: 650px\\\">\\n\\n  <div layout=\\\"column\\\" layout-align=\\\"center center\\\" flex=\\\"25\\\">\\n    <md-card>\\n      <md-card-title>\\n        <md-card-title-text>\\n          <span class=\\\"md-title\\\">Mine data from genres</span>\\n        </md-card-title-text>\\n      </md-card-title>\\n      <md-card-content>\\n        <div layout=\\\"row\\\" layout-align=\\\"start center\\\">\\n          <md-input-container flex=\\\"100\\\">\\n            <label>Genre</label>\\n            <md-select ng-model=\\\"vm.genre\\\" flex=\\\"100\\\" ng-change=\\\"vm.clear()\\\">\\n              <md-option ng-repeat=\\\"genre in vm.genres\\\" ng-value=\\\"genre\\\">\\n                {{ genre.name }}\\n              </md-option>\\n            </md-select>\\n          </md-input-container>\\n        </div>\\n        <div layout=\\\"row\\\" layout-align=\\\"start center\\\">\\n          <md-input-container flex=\\\"100\\\">\\n            <label>Number of Movies</label>\\n            <md-select ng-model=\\\"vm.selectedPage\\\" flex=\\\"100\\\">\\n              <md-option ng-repeat=\\\"page in vm.pages\\\" ng-value=\\\"page\\\">\\n                {{ page.numberOfMovies }}\\n              </md-option>\\n            </md-select>\\n          </md-input-container>\\n        </div>\\n      </md-card-content>\\n      <md-card-actions layout=\\\"row\\\" layout-align=\\\"end center\\\">\\n        <md-button class=\\\"md-raised md-accent\\\" ng-click=\\\"vm.mine()\\\" ng-disabled=\\\"vm.genre == ''\\\">Start mining</md-button>\\n      </md-card-actions>\\n    </md-card>\\n  </div>\\n\\n  <div layout=\\\"row\\\" layout-align=\\\"center start\\\" flex=\\\"75\\\" layout-wrap>\\n    <!-- <md-card ng-repeat=\\\"movie in vm.movies\\\" flex=\\\"20\\\">\\n      <img ng-src=\\\"{{ 'https://image.tmdb.org/t/p/w300_and_h450_bestv2' + movie.backdrop_path }}\\\" alt=\\\"\\\">\\n      <md-card-title>\\n        <md-truncate>\\n          <span>{{ movie.original_title }}</span>\\n        </md-truncate>\\n      </md-card-title>\\n    </md-card> -->\\n    <md-card ng-if=\\\"vm.foundMovies\\\" flex=\\\"75\\\">\\n      <md-toolbar class=\\\"md-primary\\\">\\n        <div class=\\\"md-toolbar-tools\\\">\\n          <span class=\\\"md-title\\\">\\n            <strong>\\n              {{ vm.genre.name }}\\n            </strong>\\n          </span>\\n        </div>\\n      </md-toolbar>\\n      <md-card-content>\\n        <md-virtual-repeat-container style=\\\"height: 500px\\\">\\n          <div md-virtual-repeat=\\\"movie in vm.movies\\\" flex>\\n            <p>\\n              {{ movie.original_title }}\\n            </p>\\n            <md-divider ng-if=\\\"!$last\\\"></md-divider>\\n          </div>\\n        </md-virtual-repeat-container>\\n      </md-card-content>\\n    </md-card>\\n    <div ng-if=\\\"vm.searchingForMovies\\\" layout=\\\"row\\\" layout-align=\\\"center center\\\">\\n      <md-progress-circular class=\\\"md-primary\\\" md-mode=\\\"indeterminate\\\"></md-progress-circular>\\n    </div>\\n  </div>\\n</div>\";\n\n//# sourceURL=webpack:///./front/src/app/mining/mining.html?");

/***/ }),

/***/ "./front/src/app/mining/mining.module.js":
/*!***********************************************!*\
  !*** ./front/src/app/mining/mining.module.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _core = __webpack_require__(/*! ../config/core.module */ \"./front/src/app/config/core.module.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nvar _shared = __webpack_require__(/*! ../shared/shared.module */ \"./front/src/app/shared/shared.module.js\");\n\nvar _shared2 = _interopRequireDefault(_shared);\n\nvar _mining = __webpack_require__(/*! ./mining.routing */ \"./front/src/app/mining/mining.routing.js\");\n\nvar _mining2 = _interopRequireDefault(_mining);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar mining = _angular2.default.module('app.mining', [_core2.default, _shared2.default]).config(_mining2.default).name;\n\nexports.default = mining;\n\n//# sourceURL=webpack:///./front/src/app/mining/mining.module.js?");

/***/ }),

/***/ "./front/src/app/mining/mining.routing.js":
/*!************************************************!*\
  !*** ./front/src/app/mining/mining.routing.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nminingRouting.$inject = [\"$stateProvider\"];\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = miningRouting;\n\nvar _mining = __webpack_require__(/*! ./mining.controller */ \"./front/src/app/mining/mining.controller.js\");\n\nvar _mining2 = _interopRequireDefault(_mining);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction miningRouting($stateProvider) {\n  'ngInject';\n\n  var miningState = {\n    name: 'mining',\n    url: '/mine-data',\n    controller: _mining2.default,\n    controllerAs: 'vm',\n    template: __webpack_require__(/*! ./mining.html */ \"./front/src/app/mining/mining.html\")\n  };\n\n  $stateProvider.state(miningState);\n}\n\n//# sourceURL=webpack:///./front/src/app/mining/mining.routing.js?");

/***/ }),

/***/ "./front/src/app/shared/components/nav-bar/navbar.controller.js":
/*!**********************************************************************!*\
  !*** ./front/src/app/shared/components/nav-bar/navbar.controller.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar NavBarController = function NavBarController($transitions) {\n  'ngInject';\n\n  var _this = this;\n\n  _classCallCheck(this, NavBarController);\n\n  $transitions.onSuccess({}, function (trans) {\n    _this.currentNavItem = trans.$to().name;\n  });\n};\nNavBarController.$inject = [\"$transitions\"];\n\nexports.default = NavBarController;\n\n//# sourceURL=webpack:///./front/src/app/shared/components/nav-bar/navbar.controller.js?");

/***/ }),

/***/ "./front/src/app/shared/components/nav-bar/navbar.directive.html":
/*!***********************************************************************!*\
  !*** ./front/src/app/shared/components/nav-bar/navbar.directive.html ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = \"<md-nav-bar md-no-ink-bar=\\\"disableInkBar\\\" md-selected-nav-item=\\\"vm.currentNavItem\\\" nav-bar-aria-label=\\\"navigation links\\\" md-whiteframe=\\\"4\\\">\\n  <md-nav-item md-nav-sref=\\\"home\\\" name=\\\"home\\\">\\n    Search\\n  </md-nav-item>\\n  <md-nav-item md-nav-sref=\\\"mining\\\" name=\\\"mining\\\">\\n    Mine data\\n  </md-nav-item>\\n</md-nav-bar>\";\n\n//# sourceURL=webpack:///./front/src/app/shared/components/nav-bar/navbar.directive.html?");

/***/ }),

/***/ "./front/src/app/shared/components/nav-bar/navbar.directive.js":
/*!*********************************************************************!*\
  !*** ./front/src/app/shared/components/nav-bar/navbar.directive.js ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.default = comNavBar;\n\nvar _navbar = __webpack_require__(/*! ./navbar.controller */ \"./front/src/app/shared/components/nav-bar/navbar.controller.js\");\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction comNavBar() {\n  var directive = {\n    restrict: 'E',\n    bindToController: true,\n    controller: _navbar2.default,\n    controllerAs: 'vm',\n    scope: {},\n    template: __webpack_require__(/*! ./navbar.directive.html */ \"./front/src/app/shared/components/nav-bar/navbar.directive.html\")\n  };\n\n  return directive;\n}\n\n//# sourceURL=webpack:///./front/src/app/shared/components/nav-bar/navbar.directive.js?");

/***/ }),

/***/ "./front/src/app/shared/services/movie-api.service.js":
/*!************************************************************!*\
  !*** ./front/src/app/shared/services/movie-api.service.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step(\"next\", value); }, function (err) { step(\"throw\", err); }); } } return step(\"next\"); }); }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nvar MovieApiService = function () {\n  MovieApiService.$inject = [\"$http\", \"$q\"];\n  function MovieApiService($http, $q) {\n    'ngInject';\n\n    _classCallCheck(this, MovieApiService);\n\n    this.$http = $http;\n    this.$q = $q;\n    this.MOVIE_API_URL = 'https://api.themoviedb.org/3';\n    this.API_KEY = '78fdf10d18cb397803b89d89d23b0d77';\n  }\n\n  _createClass(MovieApiService, [{\n    key: 'findMovieById',\n    value: function () {\n      var _ref = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(movieId) {\n        var response;\n        return regeneratorRuntime.wrap(function _callee$(_context) {\n          while (1) {\n            switch (_context.prev = _context.next) {\n              case 0:\n                _context.next = 2;\n                return this.$http.get(this.MOVIE_API_URL + '/movie/' + movieId + '?api_key=' + this.API_KEY);\n\n              case 2:\n                response = _context.sent;\n                return _context.abrupt('return', response);\n\n              case 4:\n              case 'end':\n                return _context.stop();\n            }\n          }\n        }, _callee, this);\n      }));\n\n      function findMovieById(_x) {\n        return _ref.apply(this, arguments);\n      }\n\n      return findMovieById;\n    }()\n  }, {\n    key: 'getGenres',\n    value: function () {\n      var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {\n        var response;\n        return regeneratorRuntime.wrap(function _callee2$(_context2) {\n          while (1) {\n            switch (_context2.prev = _context2.next) {\n              case 0:\n                _context2.next = 2;\n                return this.$http.get(this.MOVIE_API_URL + '/genre/movie/list?api_key=' + this.API_KEY);\n\n              case 2:\n                response = _context2.sent;\n                return _context2.abrupt('return', response);\n\n              case 4:\n              case 'end':\n                return _context2.stop();\n            }\n          }\n        }, _callee2, this);\n      }));\n\n      function getGenres() {\n        return _ref2.apply(this, arguments);\n      }\n\n      return getGenres;\n    }()\n  }, {\n    key: 'getMoviesByGenre',\n    value: function () {\n      var _ref3 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee3(genreId, pageNumber) {\n        var response;\n        return regeneratorRuntime.wrap(function _callee3$(_context3) {\n          while (1) {\n            switch (_context3.prev = _context3.next) {\n              case 0:\n                _context3.next = 2;\n                return this.$http.get(this.MOVIE_API_URL + '/genre/' + genreId + '/movies?api_key=' + this.API_KEY + '&page=' + pageNumber);\n\n              case 2:\n                response = _context3.sent;\n                return _context3.abrupt('return', response);\n\n              case 4:\n              case 'end':\n                return _context3.stop();\n            }\n          }\n        }, _callee3, this);\n      }));\n\n      function getMoviesByGenre(_x2, _x3) {\n        return _ref3.apply(this, arguments);\n      }\n\n      return getMoviesByGenre;\n    }()\n  }]);\n\n  return MovieApiService;\n}();\n\nexports.default = MovieApiService;\n\n//# sourceURL=webpack:///./front/src/app/shared/services/movie-api.service.js?");

/***/ }),

/***/ "./front/src/app/shared/shared.module.js":
/*!***********************************************!*\
  !*** ./front/src/app/shared/shared.module.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _angular = __webpack_require__(/*! angular */ \"./node_modules/angular/index.js\");\n\nvar _angular2 = _interopRequireDefault(_angular);\n\nvar _core = __webpack_require__(/*! ../config/core.module */ \"./front/src/app/config/core.module.js\");\n\nvar _core2 = _interopRequireDefault(_core);\n\nvar _navbar = __webpack_require__(/*! ./components/nav-bar/navbar.directive */ \"./front/src/app/shared/components/nav-bar/navbar.directive.js\");\n\nvar _navbar2 = _interopRequireDefault(_navbar);\n\nvar _movieApi = __webpack_require__(/*! ./services/movie-api.service */ \"./front/src/app/shared/services/movie-api.service.js\");\n\nvar _movieApi2 = _interopRequireDefault(_movieApi);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar shared = _angular2.default.module('app.shared', [_core2.default]).directive('comNavBar', _navbar2.default).service('movieApiService', _movieApi2.default).name;\n\nexports.default = shared;\n\n//# sourceURL=webpack:///./front/src/app/shared/shared.module.js?");

/***/ }),

/***/ "./front/styles.scss":
/*!***************************!*\
  !*** ./front/styles.scss ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("\nvar content = __webpack_require__(/*! !../node_modules/css-loader!../node_modules/sass-loader/lib/loader.js!./styles.scss */ \"./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./front/styles.scss\");\n\nif(typeof content === 'string') content = [[module.i, content, '']];\n\nvar transform;\nvar insertInto;\n\n\n\nvar options = {\"hmr\":true}\n\noptions.transform = transform\noptions.insertInto = undefined;\n\nvar update = __webpack_require__(/*! ../node_modules/style-loader/lib/addStyles.js */ \"./node_modules/style-loader/lib/addStyles.js\")(content, options);\n\nif(content.locals) module.exports = content.locals;\n\nif(false) {}\n\n//# sourceURL=webpack:///./front/styles.scss?");

/***/ }),

/***/ "./node_modules/css-loader/index.js!./node_modules/sass-loader/lib/loader.js!./front/styles.scss":
/*!**********************************************************************************************!*\
  !*** ./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js!./front/styles.scss ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var escape = __webpack_require__(/*! ../node_modules/css-loader/lib/url/escape.js */ \"./node_modules/css-loader/lib/url/escape.js\");\nexports = module.exports = __webpack_require__(/*! ../node_modules/css-loader/lib/css-base.js */ \"./node_modules/css-loader/lib/css-base.js\")(false);\n// imports\n\n\n// module\nexports.push([module.i, \"html,\\nbody {\\n  height: 100%;\\n  width: 100%;\\n  min-height: 100%;\\n  min-width: 100%; }\\n\\n.h-100 {\\n  min-height: 100% !important;\\n  height: 100% !important; }\\n\\n.w-100 {\\n  min-width: 100%;\\n  width: 100%; }\\n\\n.parallax {\\n  height: 100%;\\n  background-position: center center; }\\n\\n.bg-movies {\\n  background-image: url(\" + escape(__webpack_require__(/*! ./assets/movies.png */ \"./front/assets/movies.png\")) + \"); }\\n\\nmd-input-container label {\\n  color: gainsboro !important; }\\n\\nmd-input-container input {\\n  color: white !important; }\\n\\nmd-input-container.md-input-focused label {\\n  color: white !important; }\\n\\nmd-input-container.md-input-focused input {\\n  color: white !important;\\n  border-color: white !important; }\\n\\n.bg-white {\\n  background: white;\\n  color: white; }\\n\", \"\"]);\n\n// exports\n\n\n//# sourceURL=webpack:///./front/styles.scss?./node_modules/css-loader!./node_modules/sass-loader/lib/loader.js");

/***/ }),

/***/ "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
/*!**************************************************!*\
  !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("var map = {\n\t\"./af\": \"./node_modules/moment/locale/af.js\",\n\t\"./af.js\": \"./node_modules/moment/locale/af.js\",\n\t\"./ar\": \"./node_modules/moment/locale/ar.js\",\n\t\"./ar-dz\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-dz.js\": \"./node_modules/moment/locale/ar-dz.js\",\n\t\"./ar-kw\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-kw.js\": \"./node_modules/moment/locale/ar-kw.js\",\n\t\"./ar-ly\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ly.js\": \"./node_modules/moment/locale/ar-ly.js\",\n\t\"./ar-ma\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-ma.js\": \"./node_modules/moment/locale/ar-ma.js\",\n\t\"./ar-sa\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-sa.js\": \"./node_modules/moment/locale/ar-sa.js\",\n\t\"./ar-tn\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar-tn.js\": \"./node_modules/moment/locale/ar-tn.js\",\n\t\"./ar.js\": \"./node_modules/moment/locale/ar.js\",\n\t\"./az\": \"./node_modules/moment/locale/az.js\",\n\t\"./az.js\": \"./node_modules/moment/locale/az.js\",\n\t\"./be\": \"./node_modules/moment/locale/be.js\",\n\t\"./be.js\": \"./node_modules/moment/locale/be.js\",\n\t\"./bg\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bg.js\": \"./node_modules/moment/locale/bg.js\",\n\t\"./bm\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bm.js\": \"./node_modules/moment/locale/bm.js\",\n\t\"./bn\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bn.js\": \"./node_modules/moment/locale/bn.js\",\n\t\"./bo\": \"./node_modules/moment/locale/bo.js\",\n\t\"./bo.js\": \"./node_modules/moment/locale/bo.js\",\n\t\"./br\": \"./node_modules/moment/locale/br.js\",\n\t\"./br.js\": \"./node_modules/moment/locale/br.js\",\n\t\"./bs\": \"./node_modules/moment/locale/bs.js\",\n\t\"./bs.js\": \"./node_modules/moment/locale/bs.js\",\n\t\"./ca\": \"./node_modules/moment/locale/ca.js\",\n\t\"./ca.js\": \"./node_modules/moment/locale/ca.js\",\n\t\"./cs\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cs.js\": \"./node_modules/moment/locale/cs.js\",\n\t\"./cv\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cv.js\": \"./node_modules/moment/locale/cv.js\",\n\t\"./cy\": \"./node_modules/moment/locale/cy.js\",\n\t\"./cy.js\": \"./node_modules/moment/locale/cy.js\",\n\t\"./da\": \"./node_modules/moment/locale/da.js\",\n\t\"./da.js\": \"./node_modules/moment/locale/da.js\",\n\t\"./de\": \"./node_modules/moment/locale/de.js\",\n\t\"./de-at\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-at.js\": \"./node_modules/moment/locale/de-at.js\",\n\t\"./de-ch\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de-ch.js\": \"./node_modules/moment/locale/de-ch.js\",\n\t\"./de.js\": \"./node_modules/moment/locale/de.js\",\n\t\"./dv\": \"./node_modules/moment/locale/dv.js\",\n\t\"./dv.js\": \"./node_modules/moment/locale/dv.js\",\n\t\"./el\": \"./node_modules/moment/locale/el.js\",\n\t\"./el.js\": \"./node_modules/moment/locale/el.js\",\n\t\"./en-au\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-au.js\": \"./node_modules/moment/locale/en-au.js\",\n\t\"./en-ca\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-ca.js\": \"./node_modules/moment/locale/en-ca.js\",\n\t\"./en-gb\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-gb.js\": \"./node_modules/moment/locale/en-gb.js\",\n\t\"./en-ie\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-ie.js\": \"./node_modules/moment/locale/en-ie.js\",\n\t\"./en-il\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-il.js\": \"./node_modules/moment/locale/en-il.js\",\n\t\"./en-nz\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./en-nz.js\": \"./node_modules/moment/locale/en-nz.js\",\n\t\"./eo\": \"./node_modules/moment/locale/eo.js\",\n\t\"./eo.js\": \"./node_modules/moment/locale/eo.js\",\n\t\"./es\": \"./node_modules/moment/locale/es.js\",\n\t\"./es-do\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-do.js\": \"./node_modules/moment/locale/es-do.js\",\n\t\"./es-us\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es-us.js\": \"./node_modules/moment/locale/es-us.js\",\n\t\"./es.js\": \"./node_modules/moment/locale/es.js\",\n\t\"./et\": \"./node_modules/moment/locale/et.js\",\n\t\"./et.js\": \"./node_modules/moment/locale/et.js\",\n\t\"./eu\": \"./node_modules/moment/locale/eu.js\",\n\t\"./eu.js\": \"./node_modules/moment/locale/eu.js\",\n\t\"./fa\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fa.js\": \"./node_modules/moment/locale/fa.js\",\n\t\"./fi\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fi.js\": \"./node_modules/moment/locale/fi.js\",\n\t\"./fo\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fo.js\": \"./node_modules/moment/locale/fo.js\",\n\t\"./fr\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fr-ca\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ca.js\": \"./node_modules/moment/locale/fr-ca.js\",\n\t\"./fr-ch\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr-ch.js\": \"./node_modules/moment/locale/fr-ch.js\",\n\t\"./fr.js\": \"./node_modules/moment/locale/fr.js\",\n\t\"./fy\": \"./node_modules/moment/locale/fy.js\",\n\t\"./fy.js\": \"./node_modules/moment/locale/fy.js\",\n\t\"./gd\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gd.js\": \"./node_modules/moment/locale/gd.js\",\n\t\"./gl\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gl.js\": \"./node_modules/moment/locale/gl.js\",\n\t\"./gom-latn\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gom-latn.js\": \"./node_modules/moment/locale/gom-latn.js\",\n\t\"./gu\": \"./node_modules/moment/locale/gu.js\",\n\t\"./gu.js\": \"./node_modules/moment/locale/gu.js\",\n\t\"./he\": \"./node_modules/moment/locale/he.js\",\n\t\"./he.js\": \"./node_modules/moment/locale/he.js\",\n\t\"./hi\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hi.js\": \"./node_modules/moment/locale/hi.js\",\n\t\"./hr\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hr.js\": \"./node_modules/moment/locale/hr.js\",\n\t\"./hu\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hu.js\": \"./node_modules/moment/locale/hu.js\",\n\t\"./hy-am\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./hy-am.js\": \"./node_modules/moment/locale/hy-am.js\",\n\t\"./id\": \"./node_modules/moment/locale/id.js\",\n\t\"./id.js\": \"./node_modules/moment/locale/id.js\",\n\t\"./is\": \"./node_modules/moment/locale/is.js\",\n\t\"./is.js\": \"./node_modules/moment/locale/is.js\",\n\t\"./it\": \"./node_modules/moment/locale/it.js\",\n\t\"./it.js\": \"./node_modules/moment/locale/it.js\",\n\t\"./ja\": \"./node_modules/moment/locale/ja.js\",\n\t\"./ja.js\": \"./node_modules/moment/locale/ja.js\",\n\t\"./jv\": \"./node_modules/moment/locale/jv.js\",\n\t\"./jv.js\": \"./node_modules/moment/locale/jv.js\",\n\t\"./ka\": \"./node_modules/moment/locale/ka.js\",\n\t\"./ka.js\": \"./node_modules/moment/locale/ka.js\",\n\t\"./kk\": \"./node_modules/moment/locale/kk.js\",\n\t\"./kk.js\": \"./node_modules/moment/locale/kk.js\",\n\t\"./km\": \"./node_modules/moment/locale/km.js\",\n\t\"./km.js\": \"./node_modules/moment/locale/km.js\",\n\t\"./kn\": \"./node_modules/moment/locale/kn.js\",\n\t\"./kn.js\": \"./node_modules/moment/locale/kn.js\",\n\t\"./ko\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ko.js\": \"./node_modules/moment/locale/ko.js\",\n\t\"./ky\": \"./node_modules/moment/locale/ky.js\",\n\t\"./ky.js\": \"./node_modules/moment/locale/ky.js\",\n\t\"./lb\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lb.js\": \"./node_modules/moment/locale/lb.js\",\n\t\"./lo\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lo.js\": \"./node_modules/moment/locale/lo.js\",\n\t\"./lt\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lt.js\": \"./node_modules/moment/locale/lt.js\",\n\t\"./lv\": \"./node_modules/moment/locale/lv.js\",\n\t\"./lv.js\": \"./node_modules/moment/locale/lv.js\",\n\t\"./me\": \"./node_modules/moment/locale/me.js\",\n\t\"./me.js\": \"./node_modules/moment/locale/me.js\",\n\t\"./mi\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mi.js\": \"./node_modules/moment/locale/mi.js\",\n\t\"./mk\": \"./node_modules/moment/locale/mk.js\",\n\t\"./mk.js\": \"./node_modules/moment/locale/mk.js\",\n\t\"./ml\": \"./node_modules/moment/locale/ml.js\",\n\t\"./ml.js\": \"./node_modules/moment/locale/ml.js\",\n\t\"./mn\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mn.js\": \"./node_modules/moment/locale/mn.js\",\n\t\"./mr\": \"./node_modules/moment/locale/mr.js\",\n\t\"./mr.js\": \"./node_modules/moment/locale/mr.js\",\n\t\"./ms\": \"./node_modules/moment/locale/ms.js\",\n\t\"./ms-my\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms-my.js\": \"./node_modules/moment/locale/ms-my.js\",\n\t\"./ms.js\": \"./node_modules/moment/locale/ms.js\",\n\t\"./mt\": \"./node_modules/moment/locale/mt.js\",\n\t\"./mt.js\": \"./node_modules/moment/locale/mt.js\",\n\t\"./my\": \"./node_modules/moment/locale/my.js\",\n\t\"./my.js\": \"./node_modules/moment/locale/my.js\",\n\t\"./nb\": \"./node_modules/moment/locale/nb.js\",\n\t\"./nb.js\": \"./node_modules/moment/locale/nb.js\",\n\t\"./ne\": \"./node_modules/moment/locale/ne.js\",\n\t\"./ne.js\": \"./node_modules/moment/locale/ne.js\",\n\t\"./nl\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nl-be\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl-be.js\": \"./node_modules/moment/locale/nl-be.js\",\n\t\"./nl.js\": \"./node_modules/moment/locale/nl.js\",\n\t\"./nn\": \"./node_modules/moment/locale/nn.js\",\n\t\"./nn.js\": \"./node_modules/moment/locale/nn.js\",\n\t\"./pa-in\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pa-in.js\": \"./node_modules/moment/locale/pa-in.js\",\n\t\"./pl\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pl.js\": \"./node_modules/moment/locale/pl.js\",\n\t\"./pt\": \"./node_modules/moment/locale/pt.js\",\n\t\"./pt-br\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt-br.js\": \"./node_modules/moment/locale/pt-br.js\",\n\t\"./pt.js\": \"./node_modules/moment/locale/pt.js\",\n\t\"./ro\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ro.js\": \"./node_modules/moment/locale/ro.js\",\n\t\"./ru\": \"./node_modules/moment/locale/ru.js\",\n\t\"./ru.js\": \"./node_modules/moment/locale/ru.js\",\n\t\"./sd\": \"./node_modules/moment/locale/sd.js\",\n\t\"./sd.js\": \"./node_modules/moment/locale/sd.js\",\n\t\"./se\": \"./node_modules/moment/locale/se.js\",\n\t\"./se.js\": \"./node_modules/moment/locale/se.js\",\n\t\"./si\": \"./node_modules/moment/locale/si.js\",\n\t\"./si.js\": \"./node_modules/moment/locale/si.js\",\n\t\"./sk\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sk.js\": \"./node_modules/moment/locale/sk.js\",\n\t\"./sl\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sl.js\": \"./node_modules/moment/locale/sl.js\",\n\t\"./sq\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sq.js\": \"./node_modules/moment/locale/sq.js\",\n\t\"./sr\": \"./node_modules/moment/locale/sr.js\",\n\t\"./sr-cyrl\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr-cyrl.js\": \"./node_modules/moment/locale/sr-cyrl.js\",\n\t\"./sr.js\": \"./node_modules/moment/locale/sr.js\",\n\t\"./ss\": \"./node_modules/moment/locale/ss.js\",\n\t\"./ss.js\": \"./node_modules/moment/locale/ss.js\",\n\t\"./sv\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sv.js\": \"./node_modules/moment/locale/sv.js\",\n\t\"./sw\": \"./node_modules/moment/locale/sw.js\",\n\t\"./sw.js\": \"./node_modules/moment/locale/sw.js\",\n\t\"./ta\": \"./node_modules/moment/locale/ta.js\",\n\t\"./ta.js\": \"./node_modules/moment/locale/ta.js\",\n\t\"./te\": \"./node_modules/moment/locale/te.js\",\n\t\"./te.js\": \"./node_modules/moment/locale/te.js\",\n\t\"./tet\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tet.js\": \"./node_modules/moment/locale/tet.js\",\n\t\"./tg\": \"./node_modules/moment/locale/tg.js\",\n\t\"./tg.js\": \"./node_modules/moment/locale/tg.js\",\n\t\"./th\": \"./node_modules/moment/locale/th.js\",\n\t\"./th.js\": \"./node_modules/moment/locale/th.js\",\n\t\"./tl-ph\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tl-ph.js\": \"./node_modules/moment/locale/tl-ph.js\",\n\t\"./tlh\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tlh.js\": \"./node_modules/moment/locale/tlh.js\",\n\t\"./tr\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tr.js\": \"./node_modules/moment/locale/tr.js\",\n\t\"./tzl\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzl.js\": \"./node_modules/moment/locale/tzl.js\",\n\t\"./tzm\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./tzm-latn\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm-latn.js\": \"./node_modules/moment/locale/tzm-latn.js\",\n\t\"./tzm.js\": \"./node_modules/moment/locale/tzm.js\",\n\t\"./ug-cn\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./ug-cn.js\": \"./node_modules/moment/locale/ug-cn.js\",\n\t\"./uk\": \"./node_modules/moment/locale/uk.js\",\n\t\"./uk.js\": \"./node_modules/moment/locale/uk.js\",\n\t\"./ur\": \"./node_modules/moment/locale/ur.js\",\n\t\"./ur.js\": \"./node_modules/moment/locale/ur.js\",\n\t\"./uz\": \"./node_modules/moment/locale/uz.js\",\n\t\"./uz-latn\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz-latn.js\": \"./node_modules/moment/locale/uz-latn.js\",\n\t\"./uz.js\": \"./node_modules/moment/locale/uz.js\",\n\t\"./vi\": \"./node_modules/moment/locale/vi.js\",\n\t\"./vi.js\": \"./node_modules/moment/locale/vi.js\",\n\t\"./x-pseudo\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./x-pseudo.js\": \"./node_modules/moment/locale/x-pseudo.js\",\n\t\"./yo\": \"./node_modules/moment/locale/yo.js\",\n\t\"./yo.js\": \"./node_modules/moment/locale/yo.js\",\n\t\"./zh-cn\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-cn.js\": \"./node_modules/moment/locale/zh-cn.js\",\n\t\"./zh-hk\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-hk.js\": \"./node_modules/moment/locale/zh-hk.js\",\n\t\"./zh-tw\": \"./node_modules/moment/locale/zh-tw.js\",\n\t\"./zh-tw.js\": \"./node_modules/moment/locale/zh-tw.js\"\n};\n\n\nfunction webpackContext(req) {\n\tvar id = webpackContextResolve(req);\n\tvar module = __webpack_require__(id);\n\treturn module;\n}\nfunction webpackContextResolve(req) {\n\tvar id = map[req];\n\tif(!(id + 1)) { // check for number or string\n\t\tvar e = new Error('Cannot find module \"' + req + '\".');\n\t\te.code = 'MODULE_NOT_FOUND';\n\t\tthrow e;\n\t}\n\treturn id;\n}\nwebpackContext.keys = function webpackContextKeys() {\n\treturn Object.keys(map);\n};\nwebpackContext.resolve = webpackContextResolve;\nmodule.exports = webpackContext;\nwebpackContext.id = \"./node_modules/moment/locale sync recursive ^\\\\.\\\\/.*$\";\n\n//# sourceURL=webpack:///./node_modules/moment/locale_sync_^\\.\\/.*$?");

/***/ })

/******/ });