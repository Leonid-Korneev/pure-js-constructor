// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"utils.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.row = row;
exports.col = col;
exports.css = css;
exports.block = block;
exports.blockTitle = blockTitle;
exports.blockImg = blockImg;

function row(content) {
  var styles = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
  return "<div class=\"row\" style=\"".concat(styles, "\">\n        ").concat(content, "\n    </div>");
}

function col(content) {
  return "<div class=\"col-sm\">\n      ".concat(content, "\n    </div>");
}

function css() {
  var styles = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

  if (typeof styles === "string") {
    return styles;
  } else return Object.keys(styles).map(function (key) {
    return "".concat(key, ":").concat(styles[key]);
  }).join(";");
}

function block(type) {
  return "\n    <form name=\"".concat(type, "\">\n      <h5>Add new ").concat(type.toUpperCase(), "</h5>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </form>\n    <hr />\n   ");
}

function blockTitle(type) {
  return "\n    <form name=\"".concat(type, "\">\n      <h5> Add new ").concat(type.toUpperCase(), "</h5>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"value\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n      </div>\n        <div class=\"form-group\">\n        <label>Choose the size of title </label>\n        <select class=\"form-control form-control-sm\" name=\"size\" placeholder=\"styles\">\n        <option>1</option>\n        <option>2</option>\n        <option>3</option>\n        <option>4</option>\n        <option>5</option>\n        <option>6</option>\n              \n        </select>\n      \n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </form>\n    <hr />\n   ");
}

function blockImg(type) {
  return "\n    <form name=\"".concat(type, "\">\n      <h5>Add new ").concat(type.toUpperCase(), "</h5>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"value\" placeholder=\"Image URL\">\n      </div>\n      <div class=\"form-group\">\n        <input class=\"form-control form-control-sm\" name=\"styles\" placeholder=\"styles\">\n                <br>\n                <label>Image size</label>\n             <input type=\"number\" class=\"form-control form-control-sm\" name=\"width\" placeholder=\"Image size % of content page\"  max=\"100\" min=\"10\"  >\n   \n        \n                <br>\n        \n             <label>Image align</label>\n             <p><input name=\"align\" type=\"radio\" value=\"center\" checked> Center</p>\n             <p><input name=\"align\" type=\"radio\" value=\"left\"> Left</p>\n             <p><input name=\"align\" type=\"radio\" value=\"right\" > Right</p>\n      </div>\n      <button type=\"submit\" class=\"btn btn-primary btn-sm\">\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C</button>\n    </form>\n    <hr />\n   ");
}
},{}],"classes/block.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ColumnsBlock = exports.ImageBlock = exports.TextBlock = exports.TitleBlock = void 0;

var _utils = require("../utils");

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Block = /*#__PURE__*/function () {
  function Block(value, options) {
    _classCallCheck(this, Block);

    this.value = value;
    this.options = options;
  }

  _createClass(Block, [{
    key: "toHTML",
    value: function toHTML() {
      throw new Error("toHTML method must be released");
    }
  }]);

  return Block;
}();

var TitleBlock = /*#__PURE__*/function (_Block) {
  _inherits(TitleBlock, _Block);

  var _super = _createSuper(TitleBlock);

  function TitleBlock(value, options) {
    _classCallCheck(this, TitleBlock);

    return _super.call(this, value, options);
  }

  _createClass(TitleBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options = this.options,
          _this$options$tag = _this$options.tag,
          tag = _this$options$tag === void 0 ? 1 : _this$options$tag,
          styles = _this$options.styles;
      console.log(tag);
      return (0, _utils.row)((0, _utils.col)("<h".concat(tag, ">").concat(this.value, "<h").concat(tag, "/>")), (0, _utils.css)(styles));
    }
  }]);

  return TitleBlock;
}(Block);

exports.TitleBlock = TitleBlock;

var TextBlock = /*#__PURE__*/function (_Block2) {
  _inherits(TextBlock, _Block2);

  var _super2 = _createSuper(TextBlock);

  function TextBlock(value, options) {
    _classCallCheck(this, TextBlock);

    return _super2.call(this, value, options);
  }

  _createClass(TextBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options2 = this.options,
          _this$options2$tag = _this$options2.tag,
          tag = _this$options2$tag === void 0 ? "p" : _this$options2$tag,
          styles = _this$options2.styles;
      return (0, _utils.row)((0, _utils.col)("<".concat(tag, ">").concat(this.value, "<").concat(tag, "/>")), (0, _utils.css)(styles));
    }
  }]);

  return TextBlock;
}(Block);

exports.TextBlock = TextBlock;

var ImageBlock = /*#__PURE__*/function (_Block3) {
  _inherits(ImageBlock, _Block3);

  var _super3 = _createSuper(ImageBlock);

  function ImageBlock(value, options) {
    _classCallCheck(this, ImageBlock);

    return _super3.call(this, value, options);
  }

  _createClass(ImageBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var _this$options3 = this.options,
          styles = _this$options3.styles,
          alt = _this$options3.alt,
          imgStyles = _this$options3.imgStyles;
      return (0, _utils.row)("<img src=\"".concat(this.value, "\" alt=").concat(alt, " style=").concat((0, _utils.css)(imgStyles), "  >"), (0, _utils.css)(styles));
    }
  }]);

  return ImageBlock;
}(Block);

exports.ImageBlock = ImageBlock;

var ColumnsBlock = /*#__PURE__*/function (_Block4) {
  _inherits(ColumnsBlock, _Block4);

  var _super4 = _createSuper(ColumnsBlock);

  function ColumnsBlock(value, options) {
    _classCallCheck(this, ColumnsBlock);

    return _super4.call(this, value, options);
  }

  _createClass(ColumnsBlock, [{
    key: "toHTML",
    value: function toHTML() {
      var styles = this.options.styles;
      var html = this.value.map(_utils.col).join("");
      return (0, _utils.row)("".concat(html), (0, _utils.css)(styles));
    }
  }]);

  return ColumnsBlock;
}(Block);

exports.ColumnsBlock = ColumnsBlock;
},{"../utils":"utils.js"}],"model.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.model = void 0;

var _block = require("./classes/block");

var img = "data:image/jpeg;base64,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";
var model = [new _block.TitleBlock('Pure JS web-site constructor!', {
  tag: "h2",
  styles: {
    background: "linear-gradient(to left,#e66465, #9198e5)",
    color: "white",
    "text-align": "center"
  }
}), new _block.TextBlock('sometext', {
  tag: "p",
  styles: {
    color: "green"
  }
}), new _block.ColumnsBlock(["str1", "str2", "str3"], {
  tag: "p",
  styles: {
    color: "green"
  }
}), new _block.ImageBlock(img, {
  styles: {
    display: "flex",
    "justify-content": "center"
  },
  imgStyles: {
    width: "30%"
  },
  alt: "picture"
})];
exports.model = model;
},{"./classes/block":"classes/block.js"}],"../node_modules/parcel-bundler/src/builtins/bundle-url.js":[function(require,module,exports) {
var bundleURL = null;

function getBundleURLCached() {
  if (!bundleURL) {
    bundleURL = getBundleURL();
  }

  return bundleURL;
}

function getBundleURL() {
  // Attempt to find the URL of the current script and use that as the base URL
  try {
    throw new Error();
  } catch (err) {
    var matches = ('' + err.stack).match(/(https?|file|ftp|chrome-extension|moz-extension):\/\/[^)\n]+/g);

    if (matches) {
      return getBaseURL(matches[0]);
    }
  }

  return '/';
}

function getBaseURL(url) {
  return ('' + url).replace(/^((?:https?|file|ftp|chrome-extension|moz-extension):\/\/.+)\/[^/]+$/, '$1') + '/';
}

exports.getBundleURL = getBundleURLCached;
exports.getBaseURL = getBaseURL;
},{}],"../node_modules/parcel-bundler/src/builtins/css-loader.js":[function(require,module,exports) {
var bundle = require('./bundle-url');

function updateLink(link) {
  var newLink = link.cloneNode();

  newLink.onload = function () {
    link.remove();
  };

  newLink.href = link.href.split('?')[0] + '?' + Date.now();
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;

function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function () {
    var links = document.querySelectorAll('link[rel="stylesheet"]');

    for (var i = 0; i < links.length; i++) {
      if (bundle.getBaseURL(links[i].href) === bundle.getBundleURL()) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

module.exports = reloadCSS;
},{"./bundle-url":"../node_modules/parcel-bundler/src/builtins/bundle-url.js"}],"styles/main.css":[function(require,module,exports) {
var reloadCSS = require('_css_loader');

module.hot.dispose(reloadCSS);
module.hot.accept(reloadCSS);
},{"_css_loader":"../node_modules/parcel-bundler/src/builtins/css-loader.js"}],"classes/site.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Site = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Site = /*#__PURE__*/function () {
  function Site(selector) {
    _classCallCheck(this, Site);

    this.$el = document.querySelector(selector);
  }

  _createClass(Site, [{
    key: "render",
    value: function render(model) {
      var _this = this;

      this.$el.innerHTML = "";
      debugger;
      model.forEach(function (block) {
        _this.$el.insertAdjacentHTML("beforeend", block.toHTML());
      });
    }
  }]);

  return Site;
}();

exports.Site = Site;
},{}],"classes/sidebar.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Sidebar = void 0;

var _utils = require("../utils");

var _block = require("./block");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Sidebar = /*#__PURE__*/function () {
  function Sidebar(selector, update) {
    _classCallCheck(this, Sidebar);

    this.$el = document.querySelector(selector);
    this.init();
    this.update = update;
  }

  _createClass(Sidebar, [{
    key: "init",
    value: function init() {
      this.$el.insertAdjacentHTML("afterbegin", this.template);
      this.$el.addEventListener("submit", this.add.bind(this));
    }
  }, {
    key: "add",
    value: function add(event) {
      event.preventDefault();
      var value = event.target.value.value;
      var type = event.target.name;
      var styles = event.target.styles.value;
      var newBLock;

      if (type === "text") {
        newBLock = new _block.TextBlock(value, {
          styles: styles
        });
        event.target.value.value = "";
      } else if (type === "title") {
        var size = event.target.size.value;
        newBLock = new _block.TitleBlock(value, {
          styles: styles,
          tag: size
        });
        event.target.value.value = "";
        event.target.size.value = 0;
      } else if (type === "image") {
        var align = event.target.align.value;
        var width = event.target.width.value;

        var _size = "width:".concat(width, "px;");

        console.log(_size);

        switch (align) {
          case "left":
            "justify-content:flex-end;";
            break;

          case "right":
            styles += "justify-content:flex-end;";
            break;

          case "center":
            styles += "justify-content:center;";
            break;
        }

        styles += "margin:100px;";
        newBLock = new _block.ImageBlock(value, {
          styles: styles,
          alt: "INVALID_URL",
          imgStyles: {
            width: "".concat(width, "%")
          }
        });
        event.target.value.value = "";
      }

      this.update(newBLock);
      console.log(newBLock);
    }
  }, {
    key: "template",
    get: function get() {
      return [(0, _utils.block)("text"), (0, _utils.blockTitle)("title"), (0, _utils.blockImg)("image")].join("");
    }
  }]);

  return Sidebar;
}();

exports.Sidebar = Sidebar;
},{"../utils":"utils.js","./block":"classes/block.js"}],"classes/app.js":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.App = void 0;

var _site = require("./site");

var _sidebar = require("./sidebar");

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var App = /*#__PURE__*/function () {
  function App(model) {
    _classCallCheck(this, App);

    this.model = model;
  }

  _createClass(App, [{
    key: "init",
    value: function init() {
      var _this = this;

      var site = new _site.Site("#site");
      site.render(this.model);
      new _sidebar.Sidebar("#sidebar", function (newBlock) {
        _this.model.push(newBlock);

        site.render(_this.model);
      });
    }
  }]);

  return App;
}();

exports.App = App;
},{"./site":"classes/site.js","./sidebar":"classes/sidebar.js"}],"index.js":[function(require,module,exports) {
"use strict";

var _model = require("./model");

require("./styles/main.css");

var _app = require("./classes/app");

new _app.App(_model.model).init();
},{"./model":"model.js","./styles/main.css":"styles/main.css","./classes/app":"classes/app.js"}],"../node_modules/parcel-bundler/src/builtins/hmr-runtime.js":[function(require,module,exports) {
var global = arguments[3];
var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function (fn) {
      this._acceptCallbacks.push(fn || function () {});
    },
    dispose: function (fn) {
      this._disposeCallbacks.push(fn);
    }
  };
  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept;
var parent = module.bundle.parent;

if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = "" || location.hostname;
  var protocol = location.protocol === 'https:' ? 'wss' : 'ws';
  var ws = new WebSocket(protocol + '://' + hostname + ':' + "60766" + '/');

  ws.onmessage = function (event) {
    checkedAssets = {};
    assetsToAccept = [];
    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      var handled = false;
      data.assets.forEach(function (asset) {
        if (!asset.isNew) {
          var didAccept = hmrAcceptCheck(global.parcelRequire, asset.id);

          if (didAccept) {
            handled = true;
          }
        }
      }); // Enable HMR for CSS by default.

      handled = handled || data.assets.every(function (asset) {
        return asset.type === 'css' && asset.generated.js;
      });

      if (handled) {
        console.clear();
        data.assets.forEach(function (asset) {
          hmrApply(global.parcelRequire, asset);
        });
        assetsToAccept.forEach(function (v) {
          hmrAcceptRun(v[0], v[1]);
        });
      } else if (location.reload) {
        // `location` global exists in a web worker context but lacks `.reload()` function.
        location.reload();
      }
    }

    if (data.type === 'reload') {
      ws.close();

      ws.onclose = function () {
        location.reload();
      };
    }

    if (data.type === 'error-resolved') {
      console.log('[parcel] ✨ Error resolved');
      removeErrorOverlay();
    }

    if (data.type === 'error') {
      console.error('[parcel] 🚨  ' + data.error.message + '\n' + data.error.stack);
      removeErrorOverlay();
      var overlay = createErrorOverlay(data);
      document.body.appendChild(overlay);
    }
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);

  if (overlay) {
    overlay.remove();
  }
}

function createErrorOverlay(data) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID; // html encode message and stack trace

  var message = document.createElement('div');
  var stackTrace = document.createElement('pre');
  message.innerText = data.error.message;
  stackTrace.innerText = data.error.stack;
  overlay.innerHTML = '<div style="background: black; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; opacity: 0.85; font-family: Menlo, Consolas, monospace; z-index: 9999;">' + '<span style="background: red; padding: 2px 4px; border-radius: 2px;">ERROR</span>' + '<span style="top: 2px; margin-left: 5px; position: relative;">🚨</span>' + '<div style="font-size: 18px; font-weight: bold; margin-top: 20px;">' + message.innerHTML + '</div>' + '<pre>' + stackTrace.innerHTML + '</pre>' + '</div>';
  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) {
        parents.push(k);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    var fn = new Function('require', 'module', 'exports', asset.generated.js);
    asset.isNew = !modules[asset.id];
    modules[asset.id] = [fn, asset.deps];
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;
  var cached = bundle.cache[id];
  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(global.parcelRequire, id).some(function (id) {
    return hmrAcceptCheck(global.parcelRequire, id);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};

  if (cached) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function (cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);
  cached = bundle.cache[id];

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function (cb) {
      cb();
    });

    return true;
  }
}
},{}]},{},["../node_modules/parcel-bundler/src/builtins/hmr-runtime.js","index.js"], null)
//# sourceMappingURL=/src.e31bb0bc.js.map