/******/ (function(modules) { // webpackBootstrap
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
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Dominator = exports.Dominator = function () {
  function Dominator() {
    _classCallCheck(this, Dominator);
  }

  _createClass(Dominator, [{
    key: 'find',

    /****************/
    /*   ELEMENTS   */
    /****************/
    value: function find(selector) {
      return document.querySelectorAll(selector);
    }
  }, {
    key: 'findOne',
    value: function findOne(selector) {
      return this.find(selector)[0];
    }
  }, {
    key: 'findChildren',
    value: function findChildren(element, selector) {
      return element.querySelectorAll(selector);
    }
  }, {
    key: 'findOneChild',
    value: function findOneChild(element, selector) {
      return this.findChildren(element, selector)[0];
    }
  }, {
    key: 'addClass',
    value: function addClass(element, className) {
      if (element.classList) {
        element.classList.add(className);
      } else {
        element.className += ' ' + className;
      }
    }
  }, {
    key: 'removeClass',
    value: function removeClass(element, className) {
      if (element.classList) {
        element.classList.remove(className);
      } else {
        element.className = element.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ');
      }
    }
  }, {
    key: 'getDimensions',
    value: function getDimensions(element) {
      return {
        w: element.offsetWidth,
        h: element.offsetHeight
      };
    }
  }, {
    key: 'getPosition',
    value: function getPosition(element) {
      return {
        page: {
          x: element.offsetLeft,
          y: element.offsetTop
        },
        center: {
          x: element.offsetWidth * 0.5,
          y: element.offsetHeight * 0.5
        }
      };
    }

    /****************/
    /*   VIEWPORT   */
    /****************/

  }, {
    key: 'getPositionInViewport',
    value: function getPositionInViewport(element) {
      var rect = element.getBoundingClientRect();

      return {
        x: rect.left,
        y: rect.top
      };
    }
  }, {
    key: 'getViewportDimensions',
    value: function getViewportDimensions() {
      return {
        w: window.innerWidth,
        h: window.innerHeight,
        center: {
          x: window.innerWidth * 0.5,
          y: window.innerHeight * 0.5
        }
      };
    }
  }, {
    key: 'getViewportScrollPos',
    value: function getViewportScrollPos() {
      return {
        x: window.pageXOffset,
        y: window.pageYOffset
      };
    }
  }]);

  return Dominator;
}();

var dominator = exports.dominator = new Dominator();

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.director = exports.Director = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dominator = __webpack_require__(0);

var _clusterdraw = __webpack_require__(31);

var _canvas = __webpack_require__(30);

var _sectionscroller = __webpack_require__(38);

var _background = __webpack_require__(29);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Director = exports.Director = function () {
  function Director() {
    _classCallCheck(this, Director);

    this.isTickRunning = false;
    this.tickRest = 200;
    this.viewportDimensions = _dominator.dominator.getViewportDimensions();
    this.viewportScrollPos = _dominator.dominator.getViewportScrollPos();

    this.tick = this.tick.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
    this.handleResize = this.handleResize.bind(this);
  }

  _createClass(Director, [{
    key: 'init',
    value: function init() {
      var hasCanvas = _dominator.dominator.find('#dk-kathart-clusters').length > 0;

      if (hasCanvas) {
        this.initCanvas();
      }
    }
  }, {
    key: 'initCanvas',
    value: function initCanvas() {
      _canvas.canvas.init();
      _clusterdraw.clusterDraw.init(_canvas.canvas, this.onClusterChanged);
      _sectionscroller.sectionScroller.init(this.onSectionChanged);
      window.addEventListener('scroll', this.handleScroll);
      window.addEventListener('resize', this.handleResize);

      this.handleResize();
      this.handleScroll();

      this.startTick();
      this.handleResize();
    }
  }, {
    key: 'handleScroll',
    value: function handleScroll(e) {
      this.tickRest = 200;
      var newScroll = _dominator.dominator.getViewportScrollPos();
      var scrollVelocityY = this.viewportScrollPos.y - newScroll.y;
      this.viewportScrollPos = newScroll;

      _sectionscroller.sectionScroller.scroll(this.viewportDimensions, this.viewportScrollPos, scrollVelocityY);
    }
  }, {
    key: 'handleResize',
    value: function handleResize(e) {
      this.tickRest = 200;
      this.viewportDimensions = _dominator.dominator.getViewportDimensions();

      _canvas.canvas.resize(this.viewportDimensions);
      _clusterdraw.clusterDraw.resize(this.viewportDimensions, this.viewportScrollPos);
      _sectionscroller.sectionScroller.resize(this.viewportDimensions, this.viewportScrollPos);
    }
  }, {
    key: 'startTick',
    value: function startTick() {
      this.isTickRunning = true;
      this.tick();
    }
  }, {
    key: 'stopTick',
    value: function stopTick() {
      this.isTickRunning = false;
    }
  }, {
    key: 'tick',
    value: function tick() {
      if (this.tickRest > 0) {
        this.tickRest -= 1;
      }
      if (this.tickRest > 0) {
        _canvas.canvas.clear();
        _clusterdraw.clusterDraw.tick();
      }
      if (this.isTickRunning) {
        window.requestAnimationFrame(this.tick);
      }
    }
  }, {
    key: 'onSectionChanged',
    value: function onSectionChanged(section) {
      _background.background.setColor(section.background);
      var clusterHolder = _dominator.dominator.findOneChild(section.element, '.tricluster');
      if (clusterHolder) {
        var clusterId = clusterHolder.getAttribute('id');
        _clusterdraw.clusterDraw.setCurrentCluster(clusterId);
      }
    }
  }, {
    key: 'onClusterChanged',
    value: function onClusterChanged(cluster) {}
  }]);

  return Director;
}();

var director = exports.director = new Director();

/***/ }),
/* 2 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/instagram.svg";

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/chat-wire.svg";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/chat.svg";

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/design-wire.svg";

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/design.svg";

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/digitalcontent-wire.svg";

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/digitalcontent.svg";

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/footer-wire.svg";

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/footer.svg";

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/heart-wire.svg";

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/heart.svg";

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/kathart-logo-mono.svg";

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/kathart-logo.svg";

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/rocket-wire.svg";

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/rocket.svg";

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/stats-wire.svg";

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/stats.svg";

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/tablet-wire.svg";

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/tablet.svg";

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/trophy-wire.svg";

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/trophy.svg";

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/webdevelopment-wire.svg";

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/svg/webdevelopment.svg";

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/tricluster_4-3.png";

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "images/weloveux-image.png";

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!function(a,b){ true?!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (b(a)),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__)):"object"==typeof exports?module.exports=b(a):a.inlineSVG=b(a)}("undefined"!=typeof global?global:this.window||this.global,function(a){var b,c={},d=!!document.querySelector&&!!a.addEventListener,e={initClass:"js-inlinesvg",svgSelector:"img.svg"},f=function(a,b){return function(){return--a<1?b.apply(this,arguments):void 0}},g=function(){var a={},b=!1,c=0,d=arguments.length;"[object Boolean]"===Object.prototype.toString.call(arguments[0])&&(b=arguments[0],c++);for(var e=function(c){for(var d in c)Object.prototype.hasOwnProperty.call(c,d)&&(b&&"[object Object]"===Object.prototype.toString.call(c[d])?a[d]=g(!0,a[d],c[d]):a[d]=c[d])};d>c;c++){var f=arguments[c];e(f)}return a},h=function(){var a=document.querySelectorAll(b.svgSelector);return a},i=function(a){var c=h(),d=f(c.length,a);Array.prototype.forEach.call(c,function(a,c){var e=a.src||a.getAttribute("data-src"),f=a.attributes,g=new XMLHttpRequest;g.open("GET.html",e,!0),g.onload=function(){if(g.status>=200&&g.status<400){var c=new DOMParser,e=c.parseFromString(g.responseText,"text/xml"),h=e.getElementsByTagName("svg")[0];if(h.removeAttribute("xmlns:a"),h.removeAttribute("width"),h.removeAttribute("height"),h.removeAttribute("x"),h.removeAttribute("y"),h.removeAttribute("enable-background"),h.removeAttribute("xmlns:xlink"),h.removeAttribute("xml:space"),h.removeAttribute("version"),Array.prototype.slice.call(f).forEach(function(a){"src"!==a.name&&"alt"!==a.name&&h.setAttribute(a.name,a.value)}),h.classList?h.classList.add("inlined-svg"):h.className+=" inlined-svg",h.setAttribute("role","img"),f.longdesc){var i=document.createElementNS("http://www.w3.org/2000/svg","desc"),j=document.createTextNode(f.longdesc.value);i.appendChild(j),h.insertBefore(i,h.firstChild)}if(f.alt){h.setAttribute("aria-labelledby","title");var k=document.createElementNS("http://www.w3.org/2000/svg","title"),l=document.createTextNode(f.alt.value);k.appendChild(l),h.insertBefore(k,h.firstChild)}a.parentNode.replaceChild(h,a),d(b.svgSelector)}else console.error("There was an error retrieving the source of the SVG.")},g.onerror=function(){console.error("There was an error connecting to the origin server.")},g.send()})};return c.init=function(a,c){d&&(b=g(e,a||{}),i(c||function(){}),document.documentElement.className+=" "+b.initClass)},c});
/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(40)))

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Background = exports.Background = function () {
  function Background() {
    _classCallCheck(this, Background);
  }

  _createClass(Background, [{
    key: "setColor",
    value: function setColor(color) {
      if (color) {
        document.body.style.background = color;
      }
    }
  }]);

  return Background;
}();

var background = exports.background = new Background();

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.canvas = exports.Canvas = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dominator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Canvas = exports.Canvas = function () {
  function Canvas() {
    _classCallCheck(this, Canvas);

    this.pixelRatio = null;
    this.canvas = null;
    this.context = null;
  }

  _createClass(Canvas, [{
    key: 'init',
    value: function init() {
      this.pixelRatio = window.devicePixelRatio || 1;

      this.canvas = document.getElementById('dk-kathart-clusters');

      this.canvas.style.position = 'fixed';
      this.canvas.style.zIndex = 0;

      this.context = this.canvas.getContext('2d');
      this.context.lineWidth = 1;
    }
  }, {
    key: 'resize',
    value: function resize() {
      var viewportDimensions = _dominator.dominator.getViewportDimensions();
      var mainDimensions = _dominator.dominator.getDimensions(_dominator.dominator.findOne('main'));

      this.canvas.width = mainDimensions.w * this.pixelRatio;
      this.canvas.height = viewportDimensions.h * this.pixelRatio;

      this.canvas.style.width = mainDimensions.w + 'px';
      this.canvas.style.height = viewportDimensions.h + 'px';
      this.canvas.style.left = (viewportDimensions.w - mainDimensions.w) / 2 + 'px';
    }
  }, {
    key: 'clear',
    value: function clear() {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
    }
  }, {
    key: 'drawPoly',
    value: function drawPoly(poly) {
      this.context.globalAlpha = poly.opacity;
      this.context.fillStyle = poly.color;
      this.context.strokeStyle = poly.stroke;
      this.context.beginPath();
      var vertex = void 0;
      for (var j = 0; j < 4; j++) {
        vertex = poly.vertices[j];
        if (j === 0) {
          this.context.moveTo(Math.round(vertex.x * this.pixelRatio), Math.round(vertex.y * this.pixelRatio));
        } else {
          this.context.lineTo(Math.round(vertex.x * this.pixelRatio), Math.round(vertex.y * this.pixelRatio));
        }
      }
      if (poly.stroke) {
        this.context.stroke();
      }
      this.context.fill();
    }
  }]);

  return Canvas;
}();

var canvas = exports.canvas = new Canvas();

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clusterDraw = exports.ClusterDraw = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dominator = __webpack_require__(0);

var _clusters = __webpack_require__(32);

var _polys = __webpack_require__(34);

var _physics = __webpack_require__(33);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ClusterDraw = exports.ClusterDraw = function () {
  function ClusterDraw() {
    _classCallCheck(this, ClusterDraw);

    this.scrollRest = 0;
    this.canvas = null;
    this.currentCluster = null;
    this.onCurrentChanged = null;
    this.canvasOffset = 0;
    this.main = _dominator.dominator.findOne('main');
    this.mainPadding = parseFloat(window.getComputedStyle(this.main, null).getPropertyValue('padding-left'));
  }

  _createClass(ClusterDraw, [{
    key: 'init',
    value: function init(canvas, currentChanged) {
      this.canvas = canvas;
      this.onCurrentChanged = currentChanged;
      _polys.polys.init(190);
      _clusters.clusters.init();
      _physics.physics.init();
    }
  }, {
    key: 'resize',
    value: function resize(viewportDimensions, viewportScroll) {
      _clusters.clusters.updateClusterScales();
      this.canvasOffset = _dominator.dominator.getPositionInViewport(this.canvas.canvas);
      this.mainPadding = parseFloat(window.getComputedStyle(this.main, null).getPropertyValue('padding-left'));
    }
  }, {
    key: 'tick',
    value: function tick() {
      if (this.currentCluster && this.currentCluster.loaded) {
        _physics.physics.update();

        var clusterOffset = _dominator.dominator.getPositionInViewport(this.currentCluster.holder);
        clusterOffset.x += this.canvas.canvas.width * 0.6;

        var poly = null;
        var clusterPoly = null;

        for (var i = 0; i < _polys.polys.polys.length; ++i) {
          poly = _polys.polys.polys[i];
          clusterPoly = this.currentCluster.polys[i];

          _physics.physics.updatePoly(clusterOffset, clusterPoly, poly, this.currentCluster.scale, this.mainPadding);
          this.canvas.drawPoly(poly);
        }
      }
    }
  }, {
    key: 'setCurrentCluster',
    value: function setCurrentCluster(id) {
      this.currentCluster = _clusters.clusters.getClusterById(id);
      this.currentChanged && this.currentChanged();
      _physics.physics.setGlobalFriction(0);
    }
  }]);

  return ClusterDraw;
}();

var clusterDraw = exports.clusterDraw = new ClusterDraw();

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.clusters = exports.Clusters = exports.DEFAULT_DIMENSIONS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dominator = __webpack_require__(0);

var _svgparser = __webpack_require__(35);

var _svgparser2 = _interopRequireDefault(_svgparser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Svg = new _svgparser2.default();

var DEFAULT_DIMENSIONS = exports.DEFAULT_DIMENSIONS = {
  w: 640,
  h: 480
};

var Clusters = exports.Clusters = function () {
  function Clusters() {
    _classCallCheck(this, Clusters);

    this.holders = [];
    this.clusters = [];

    this.parseSvg = this.parseSvg.bind(this);
  }

  _createClass(Clusters, [{
    key: 'init',
    value: function init() {
      this.findHolders();
      this.createClusters();
    }
  }, {
    key: 'findHolders',
    value: function findHolders() {
      this.holders = [].slice.call(_dominator.dominator.find('.tricluster'), 0);
    }
  }, {
    key: 'createClusters',
    value: function createClusters() {
      var _this = this;

      this.clusters = this.holders.map(function (holder) {
        return _this.createCluster(holder);
      });
    }
  }, {
    key: 'createCluster',
    value: function createCluster(holder) {
      var cluster = {
        id: holder.getAttribute('id'),
        loaded: false,
        pos: null,
        dim: null,
        offset: {
          x: 200,
          y: 0
        },
        scale: 1,
        centerDist: -1,
        backgroundColor: holder.getAttribute('data-background'),
        holder: holder,
        svg: null,
        polys: []
      };

      this.loadSvg(cluster, this.parseSvg);

      return cluster;
    }
  }, {
    key: 'loadSvg',
    value: function loadSvg(cluster, cb) {
      var svgPath = this.svgPathInHolder(cluster.holder);

      var request = new XMLHttpRequest();
      request.open('GET.html', svgPath, true);

      request.onload = function () {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          cb(cluster, request.responseText);
        } else {
          // We reached our target server, but it returned an error
        }
      };

      request.onerror = function () {
        // There was a connection error of some sort
      };

      request.send();
    }
  }, {
    key: 'svgPathInHolder',
    value: function svgPathInHolder(holder) {
      return holder.getAttribute('data-svg');
    }
  }, {
    key: 'parseSvg',
    value: function parseSvg(cluster, svg) {
      cluster.svg = svg;
      cluster.polys = Svg.getPolygons(svg);
      cluster.scale = this.getClusterScale(cluster);
      cluster.loaded = true;
    }

    /********************/
    /*      Scale       */
    /********************/

  }, {
    key: 'updateClusterScales',
    value: function updateClusterScales() {
      var _this2 = this;

      this.clusters.forEach(function (cluster) {
        cluster.scale = _this2.getClusterScale(cluster);
      });
    }
  }, {
    key: 'getClusterScale',
    value: function getClusterScale(cluster) {
      cluster.pos = _dominator.dominator.getPosition(cluster.holder);
      cluster.dim = _dominator.dominator.getDimensions(cluster.holder);
      return cluster.dim.w / DEFAULT_DIMENSIONS.w;
    }

    /********************/
    /*    Get cluster   */
    /********************/

  }, {
    key: 'getClusterById',
    value: function getClusterById(id) {
      return this.clusters.filter(function (cluster) {
        return cluster.id === id;
      })[0];
    }
  }]);

  return Clusters;
}();

var clusters = exports.clusters = new Clusters();

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.physics = exports.Physics = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _colorconverter = __webpack_require__(39);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var GLOBAL_FRICTION_ACCELERATION = 0.03;
var MAX_GLOBAL_FRICTION = 1;

var Physics = exports.Physics = function () {
  function Physics() {
    _classCallCheck(this, Physics);

    this.globalFriction = 0;
  }

  _createClass(Physics, [{
    key: 'init',
    value: function init() {
      this.setGlobalFriction(MAX_GLOBAL_FRICTION);
    }
  }, {
    key: 'setGlobalFriction',
    value: function setGlobalFriction(friction) {
      this.globalFriction = friction;
    }
  }, {
    key: 'update',
    value: function update() {
      this.globalFriction += GLOBAL_FRICTION_ACCELERATION;
      this.globalFriction = Math.min(this.globalFriction, MAX_GLOBAL_FRICTION);
    }
  }, {
    key: 'updatePoly',
    value: function updatePoly(offset, clusterPoly, poly, scale, padding) {
      if (clusterPoly) {
        var friction = poly.friction * this.globalFriction;

        poly.opacity += (clusterPoly.opacity - poly.opacity) * friction;
        poly.stroke = clusterPoly.stroke;

        var clusterPolyRGB = _colorconverter.colors.hexToRGB(clusterPoly.color);
        var polyRGB = _colorconverter.colors.hexToRGB(poly.color);
        var rgbDiff = _colorconverter.colors.subtractRGB(clusterPolyRGB, polyRGB);
        var rgbDiffWithFriction = _colorconverter.colors.multiplyRGB(rgbDiff, friction);
        var rgbAdded = _colorconverter.colors.addRGB(polyRGB, rgbDiffWithFriction);
        var color = _colorconverter.colors.roundRGB(rgbAdded);
        poly.color = _colorconverter.colors.RGBToHex(color);
        for (var j = 0; j < 4; j++) {
          var clusterVertex = clusterPoly.vertices[j];
          var polyVertex = poly.vertices[j];
          // const targetX = (((clusterVertex.x * scale) + offset.x) - polyVertex.x - (offset.x * scale)) * friction
          // const targetY = (((clusterVertex.y * scale) + offset.y) - polyVertex.y) * friction
          // polyVertex.x += targetX
          // polyVertex.y += targetY
          var targetX = (clusterVertex.x * scale - polyVertex.x + padding) * friction;
          var targetY = (clusterVertex.y * scale + offset.y - polyVertex.y) * friction;
          polyVertex.x += targetX;
          polyVertex.y += targetY;
        }
      } else {
        poly.opacity = 0;
      }
    }
  }]);

  return Physics;
}();

var physics = exports.physics = new Physics();

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Polys = exports.Polys = function () {
  function Polys() {
    _classCallCheck(this, Polys);

    this.polys = [];
  }

  _createClass(Polys, [{
    key: 'init',
    value: function init(amount) {
      for (var i = 0; i < amount; i++) {
        var poly = {
          vertices: [{
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }, {
            x: 0,
            y: 0
          }],
          color: '#000000',
          opacity: 1,
          friction: 0.2 + Math.random() * 0.5
        };

        this.polys.push(poly);
      }
    }
  }]);

  return Polys;
}();

var polys = exports.polys = new Polys();

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var SVGParser = exports.SVGParser = function () {
  function SVGParser() {
    _classCallCheck(this, SVGParser);
  }

  _createClass(SVGParser, [{
    key: 'getPolygons',
    value: function getPolygons(svg) {
      return this.polygonObjects(svg);
    }
  }, {
    key: 'polygonObjects',
    value: function polygonObjects(svg) {
      var _this = this;

      var polys = this.polyLines(svg);

      return polys.map(function (poly, index) {
        return _this.polygonObject(poly);
      });
    }
  }, {
    key: 'polyLines',
    value: function polyLines(svg) {
      var polyLines = svg.split('\n');

      return polyLines.filter(function (line, index) {
        if (line.indexOf('polygon') > -1) {
          return true;
        }
        return false;
      });
    }
  }, {
    key: 'polygonObject',
    value: function polygonObject(polygon) {
      return {
        vertices: this.getVertices(polygon),
        color: this.getColor(polygon),
        opacity: this.getOpacity(polygon),
        stroke: this.getStroke(polygon)
      };
    }
  }, {
    key: 'getVertices',
    value: function getVertices(polygon) {
      var pointsString = this.getAttributeValue('points', polygon);
      var vertices = this.verticesFromPointsString(pointsString);

      return vertices;
    }
  }, {
    key: 'verticesFromPointsString',
    value: function verticesFromPointsString(points) {
      var pointsSplit = points.split(' ');
      var vertices = [];

      for (var i = 0; i < pointsSplit.length; i += 2) {
        var point = {
          x: parseFloat(pointsSplit[i]),
          y: parseFloat(pointsSplit[i + 1])
        };

        vertices.push(point);
      }

      return vertices;
    }
  }, {
    key: 'getColor',
    value: function getColor(polygon) {
      return this.getAttributeValue('fill', polygon);
    }
  }, {
    key: 'getOpacity',
    value: function getOpacity(polygon) {
      if (polygon.indexOf('opacity') > -1) {
        return this.getAttributeValue('opacity', polygon, 'float');
      }
      return 1;
    }
  }, {
    key: 'getStroke',
    value: function getStroke(polygon) {
      if (polygon.indexOf('stroke="') > -1) {
        return this.getAttributeValue('stroke', polygon);
      }
    }
  }, {
    key: 'getAttributeValue',
    value: function getAttributeValue(attribute, polygon, type) {
      var attrBegin = polygon.split(attribute + '="')[1];
      var attrString = attrBegin.split('"')[0];

      if (type === 'float') {
        return parseFloat(attrString);
      }

      return attrString;
    }
  }]);

  return SVGParser;
}();

exports.default = SVGParser;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _main = __webpack_require__(2);

var _main2 = _interopRequireDefault(_main);

var _director = __webpack_require__(1);

var _inlineSvg = __webpack_require__(28);

var _inlineSvg2 = _interopRequireDefault(_inlineSvg);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// SVG
__webpack_require__(7);
__webpack_require__(6);
__webpack_require__(9);
__webpack_require__(8);
__webpack_require__(5);
__webpack_require__(4);
__webpack_require__(11);
__webpack_require__(10);
__webpack_require__(13);
__webpack_require__(12);
__webpack_require__(17);
__webpack_require__(16);
__webpack_require__(19);
__webpack_require__(18);
__webpack_require__(21);
__webpack_require__(20);
__webpack_require__(23);
__webpack_require__(22);
__webpack_require__(25);
__webpack_require__(24);
__webpack_require__(15);
__webpack_require__(14);
__webpack_require__(3);

// PNG
__webpack_require__(26);
__webpack_require__(27);

// JPG

//eslint-disable-line


_director.director.init();

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sections = exports.Sections = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dominator = __webpack_require__(0);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Sections = exports.Sections = function () {
  function Sections() {
    _classCallCheck(this, Sections);

    this.elements = [];
    this.sections = [];
  }

  _createClass(Sections, [{
    key: 'init',
    value: function init() {
      this.findSections();
      this.createSections();
    }
  }, {
    key: 'findSections',
    value: function findSections() {
      this.elements = [].slice.call(_dominator.dominator.find('.scrolling-section'), 0); // Converts from NodeList to Array
    }
  }, {
    key: 'createSections',
    value: function createSections() {
      this.sections = this.elements.map(function (element, index) {
        return {
          index: index,
          element: element,
          inViewport: 0,
          background: element.getAttribute('data-scrolling-section-background'),
          invertMenu: element.hasAttribute('data-menu-invert')
        };
      });
    }

    /********************/
    /*  Current section */
    /********************/

  }, {
    key: 'getCurrentSection',
    value: function getCurrentSection(windowDimensions, windowScroll) {
      var filteredSections = this.getCurrentSectionCandidates(windowDimensions);
      filteredSections.sort(function (a, b) {
        if (a.inViewport < b.inViewport) {
          return 1;
        }
        if (a.inViewport > b.inViewport) {
          return -1;
        }
        return 0;
      });

      return filteredSections[0] || null;
    }
  }, {
    key: 'getCurrentSectionCandidates',
    value: function getCurrentSectionCandidates(windowDimensions) {
      return this.sections.filter(function (section, index) {
        var sectionPos = _dominator.dominator.getPositionInViewport(section.element);
        var sectionDim = _dominator.dominator.getDimensions(section.element);
        var sectionTop = Math.max(sectionPos.y, 0);
        var sectionBottom = Math.min(sectionPos.y + sectionDim.h, windowDimensions.h);

        if (sectionTop <= 0 && sectionBottom <= 0) {
          return false;
        } else if (sectionTop >= windowDimensions.h && sectionBottom >= windowDimensions.h) {
          return false;
        } else if (sectionTop <= 0 && sectionBottom >= windowDimensions.h) {
          section.inViewport = 1;
          return true;
        }
        section.inViewport = (sectionBottom - sectionTop) / windowDimensions.h;
        return true;
      });
    }
  }]);

  return Sections;
}();

var sections = exports.sections = new Sections();

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.sectionScroller = exports.SectionScroller = exports.ACTIVE_CLASS = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _dominator = __webpack_require__(0);

var _sections = __webpack_require__(37);

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ACTIVE_CLASS = exports.ACTIVE_CLASS = 'scrolling-section-active';

var SectionScroller = exports.SectionScroller = function () {
  function SectionScroller() {
    _classCallCheck(this, SectionScroller);

    this.scrollRest = 0;
    this.currentSection = null;
    this.onCurrentChanged = null;
  }

  _createClass(SectionScroller, [{
    key: 'init',
    value: function init(currentChanged) {
      this.onCurrentChanged = currentChanged;
      _sections.sections.init();
    }
  }, {
    key: 'scroll',
    value: function scroll(viewportDimensions, viewportScroll) {
      if (this.scrollRest > 0) {
        this.scrollRest -= 1;
      }
      if (this.scrollRest === 0) {
        this.scrollRest = 4;
        this.detectCurrentSection(viewportDimensions, viewportScroll);
      }
    }
  }, {
    key: 'resize',
    value: function resize(viewportDimensions, viewportScroll) {
      this.detectCurrentSection(viewportDimensions, viewportScroll);
    }
  }, {
    key: 'detectCurrentSection',
    value: function detectCurrentSection(viewportDimensions, viewportScroll) {
      var newSection = _sections.sections.getCurrentSection(viewportDimensions, viewportScroll);
      this.setCurrentSection(newSection);
    }
  }, {
    key: 'setCurrentSection',
    value: function setCurrentSection(section) {
      if (section && section !== this.currentSection) {
        if (this.currentSection) {
          _dominator.dominator.removeClass(this.currentSection.element, ACTIVE_CLASS);
        }
        _dominator.dominator.addClass(section.element, ACTIVE_CLASS);
        this.currentSection = section;

        if (this.onCurrentChanged) {
          this.onCurrentChanged(section);
        }
      }
    }
  }]);

  return SectionScroller;
}();

var sectionScroller = exports.sectionScroller = new SectionScroller();

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ColorConverter = exports.ColorConverter = function () {
  function ColorConverter() {
    _classCallCheck(this, ColorConverter);
  }

  _createClass(ColorConverter, [{
    key: 'hexToRGB',
    value: function hexToRGB(hex) {
      var validHex = this.validHexString(hex);
      var result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(validHex);
      return result ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16)
      } : null;
    }
  }, {
    key: 'componentToHex',
    value: function componentToHex(c) {
      var hex = c.toString(16);
      return hex.length === 1 ? '0' + hex : hex;
    }
  }, {
    key: 'validHexString',
    value: function validHexString(hexString) {
      if (hexString.length < 7) {
        var lastChar = hexString.substr(3, 1);
        var result = '' + hexString + lastChar + lastChar + lastChar;
        return result;
      }
      return hexString;
    }
  }, {
    key: 'RGBToHex',
    value: function RGBToHex(rgb) {
      return '#' + this.componentToHex(rgb.r) + this.componentToHex(rgb.g) + this.componentToHex(rgb.b);
    }
  }, {
    key: 'subtractRGB',
    value: function subtractRGB(rgb1, rgb2) {
      return {
        r: rgb1.r - rgb2.r,
        g: rgb1.g - rgb2.g,
        b: rgb1.b - rgb2.b
      };
    }
  }, {
    key: 'addRGB',
    value: function addRGB(rgb1, rgb2) {
      return {
        r: rgb1.r + rgb2.r,
        g: rgb1.g + rgb2.g,
        b: rgb1.b + rgb2.b
      };
    }
  }, {
    key: 'multiplyRGB',
    value: function multiplyRGB(rgb, factor) {
      return {
        r: rgb.r * factor,
        g: rgb.g * factor,
        b: rgb.b * factor
      };
    }
  }, {
    key: 'roundRGB',
    value: function roundRGB(rgb) {
      return {
        r: Math.round(rgb.r),
        g: Math.round(rgb.g),
        b: Math.round(rgb.b)
      };
    }
  }]);

  return ColorConverter;
}();

var colors = exports.colors = new ColorConverter();

/***/ }),
/* 40 */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || Function("return this")() || (1,eval)("this");
} catch(e) {
	// This works if the window reference is available
	if(typeof window === "object")
		g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


/***/ })
/******/ ]);
//# sourceMappingURL=bundle.js.map