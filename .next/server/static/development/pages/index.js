module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/generic/generic-form/index.tsx":
/*!***************************************************!*\
  !*** ./components/generic/generic-form/index.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericForm; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GenericForm =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GenericForm, _React$Component);

  function GenericForm(props) {
    var _this;

    _classCallCheck(this, GenericForm);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GenericForm).call(this, props));
    _this.state = {
      email_send: false,
      fields: {}
    };
    return _this;
  }

  _createClass(GenericForm, [{
    key: "handleOnsubmit",
    value: function handleOnsubmit(event) {
      event.preventDefault();
      var fields = this.state.fields; //TODO

      /*
      const api_url = '/post/quote-requests';
      fetch(api_url, {
          method: 'POST',
          headers: {
          'Content-Type': 'application/json'
          },
          body: JSON.stringify( fields )
      }).then( r => {
          if(r.status === 201) {
              this.setState({email_send : true})
          }
      })  
      */
    }
  }, {
    key: "handleChange",
    value: function handleChange(event) {
      var name = event.target.name;
      var value = event.target.value;
      this.setState(function (prevState) {
        return {
          fields: _objectSpread({}, prevState.fields, _defineProperty({}, name, value))
        };
      });
    }
  }, {
    key: "render",
    value: function render() {
      var children = this.props.children;
      var this_component = this;
      var childrenWithProps = react__WEBPACK_IMPORTED_MODULE_0___default.a.Children.map(children, function (child) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.cloneElement(child, {
          handleChange: this_component.handleChange.bind(this_component)
        });
      });

      if (this.state.email_send === false) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
          onSubmit: this.handleOnsubmit.bind(this)
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("fieldset", {
          className: "box"
        }, childrenWithProps, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
          type: "submit",
          className: "button is-success is-outlined"
        }, this.props.title_validate ? this.props.title_validate : 'Valider')));
      } else {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "notification is-primary"
        }, "Email envoy\xE9, merci ! Z\xE9ro-Gachis vous contactera rapidement.");
      }
    }
  }]);

  return GenericForm;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/generic/generic-form/input.tsx":
/*!***************************************************!*\
  !*** ./components/generic/generic-form/input.tsx ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return GenericInput; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }



var GenericInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(GenericInput, _React$Component);

  function GenericInput(props) {
    var _this;

    _classCallCheck(this, GenericInput);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(GenericInput).call(this, props));
    _this.state = {
      validate: false
    };
    return _this;
  }

  _createClass(GenericInput, [{
    key: "handleinternChange",
    value: function handleinternChange(event) {
      var value_length = event.target.value.length;

      if (event.target.checkValidity() && value_length > 2) {
        this.setState({
          validate: true
        });
      } else {
        this.setState({
          validate: false
        });
      }

      this.props.handleChange(event);
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;
      var faclass = "fa fa-";
      var class_input = "";

      if (this.state.validate) {
        checkclass += " is-success";
        class_input += " is-success";
      }

      if (props.className) {
        class_input += props.className;
      }

      if (props.fonta) {
        faclass += props.fonta;
      }

      if (props.type !== "textarea") {
        class_input += " input";
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "field"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "control has-icons-left has-icons-right"
        }, props.title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, props.title) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
          className: class_input,
          id: props.name,
          name: props.name,
          type: props.type,
          value: props.value,
          onChange: this.handleinternChange.bind(this),
          onKeyUp: this.handleinternChange.bind(this),
          placeholder: props.placeholder,
          required: props.required
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
          className: "icon is-small is-left"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("i", {
          className: faclass
        }))));
      } else {
        class_input += " textarea";
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          className: "field"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
          className: "control"
        }, props.title ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("label", null, props.title) : '', react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("textarea", {
          className: class_input,
          id: props.name,
          name: props.name,
          value: props.value,
          onChange: this.handleinternChange.bind(this),
          onKeyUp: this.handleinternChange.bind(this),
          required: props.required
        })));
      }
    }
  }]);

  return GenericInput;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./components/layout/index.tsx":
/*!*************************************!*\
  !*** ./components/layout/index.tsx ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Layout; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _sections_navbar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../sections/navbar */ "./components/sections/navbar.tsx");
/* harmony import */ var _static_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../static/styles/index.scss */ "./static/styles/index.scss");
/* harmony import */ var _static_styles_index_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_static_styles_index_scss__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var Layout =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Layout, _React$Component);

  function Layout() {
    _classCallCheck(this, Layout);

    return _possibleConstructorReturn(this, _getPrototypeOf(Layout).apply(this, arguments));
  }

  _createClass(Layout, [{
    key: "render",
    value: function render() {
      var children = this.props.children;
      return react__WEBPACK_IMPORTED_MODULE_0__["createElement"](react__WEBPACK_IMPORTED_MODULE_0__["Fragment"], null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("title", null, "Ecole de musique d'Ancenis"), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("meta", {
        charSet: "utf-8"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
        rel: "stylesheet",
        href: "https://cdnjs.cloudflare.com/ajax/libs/bulma/0.7.1/css/bulma.min.css"
      }), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("link", {
        rel: "stylesheet",
        href: "https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
      })), react__WEBPACK_IMPORTED_MODULE_0__["createElement"]("header", null, react__WEBPACK_IMPORTED_MODULE_0__["createElement"](_sections_navbar__WEBPACK_IMPORTED_MODULE_2__["default"], null)), children);
    }
  }]);

  return Layout;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/sections/article_contact.tsx":
/*!*************************************************!*\
  !*** ./components/sections/article_contact.tsx ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _contact_form__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./contact_form */ "./components/sections/contact_form.tsx");
/* harmony import */ var _googlemap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./googlemap */ "./components/sections/googlemap.tsx");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-fullheight has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container is-fuild"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title has-text-centered"
  }, "Nous contacter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns is-desktop"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://static.wixstatic.com/media/9abaa4_0a6969ee8e1c4c28861b7a5779f58908.jpg/v1/fill/w_525,h_543,al_c,q_80,usm_0.66_1.00_0.01/9abaa4_0a6969ee8e1c4c28861b7a5779f58908.webp",
    className: "image"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_contact_form__WEBPACK_IMPORTED_MODULE_1__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_googlemap__WEBPACK_IMPORTED_MODULE_2__["default"], null))))));
});

/***/ }),

/***/ "./components/sections/article_home.tsx":
/*!**********************************************!*\
  !*** ./components/sections/article_home.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero video is-fullheight has-text-centered "
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-video"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("video", {
    id: "bgvid",
    playsInline: true,
    autoPlay: true,
    muted: true,
    loop: true
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("source", {
    src: "static/videos/presentation.mov"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title"
  }, "Ecole de musique d'Ancenis")));
});

/***/ }),

/***/ "./components/sections/article_presentation.tsx":
/*!******************************************************!*\
  !*** ./components/sections/article_presentation.tsx ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-fullheight hero-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns text-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Vous \xEAtes d\xE9butants ?"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Franchir le pas n\u2019est pas toujours facile, c\u2019est pour cette raison que l\u2019enseignement de L\u2019\xC9cole de Musiques Actuelles est con\xE7ue pour vous initier sans pression. Au rythme d\u2019un cours d\u2019une heure par semaine ou toutes les deux semaines avec trois autres passionn\xE9s et un professeur ouvert et facile d\u2019acc\xE8s. Vous jouerez bient\xF4t les morceaux que vous \xE9coutez tous les jours. Vous toucherez l\u2019instrument d\xE8s le premier cours et apprendrez \xE0 jouer avec ou sans solf\xE8ge selon votre volont\xE9. L\u2019\xC9cole de Musiques Actuelles vous propose des cours de guitare, de basse, de ukulele et des ateliers pour jouer en groupe."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Atelier jeu en groupe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "La musique prend tout son int\xE9r\xEAt lorsqu\u2019on la partage non ? Les ateliers de jeu en groupe (en compagnie d\u2019autres instrumentistes) pour apprendre \xE0 \xE9couter les autres, \xE0 r\xE9agir en fonction de ce qu\u2019ils font et tout simplement pour se faire plaisir \xE0 plusieurs. Cet atelier de groupe est aussi important que les cours. Diff\xE9rents concerts seront bien s\xFBr le couronnement de ces sessions collectives."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://www.lecoledemusiquesactuelles.fr/wp-content/uploads/2018/09/SAM_0016.jpg",
    className: "image"
  }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://www.lecoledemusiquesactuelles.fr/wp-content/uploads/2018/09/SAM_0020.jpg",
    className: "image"
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Vous n\u2019\xEAtes pas d\xE9butant"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Si vous \xEAtes d\xE9j\xE0 un musicien avanc\xE9, L\u2019\xC9cole de Musiques Actuelles aura aussi de quoi vous faire progresser. Par un enseignement adapt\xE9 \xE0 vos besoin, vous pourrez travailler des aspects plus techniques, th\xE9oriques et poser vos questions pr\xE9cises au professeur."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box-img"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "http://www.lecoledemusiquesactuelles.fr/wp-content/uploads/2018/09/SAM_0018.jpg",
    className: "image"
  })))))));
});

/***/ }),

/***/ "./components/sections/article_price.tsx":
/*!***********************************************!*\
  !*** ./components/sections/article_price.tsx ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("section", {
    className: "hero is-fullheight hero-image"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "hero-body formule-part"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "container"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", {
    className: "title has-text-centered"
  }, "Formules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "box has-text-centered"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", {
    className: "sub-title"
  }, "A PARTIR DE 18.75\u20AC / heure")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "columns text-left"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Cours d'instrument")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "has-text-centered"
  }, "235\u20AC/trimestre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cours collectif de 4 \xE9l\xE8ves maximum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "De niveau et d\u2019\xE2ge proche"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Avec ou sans solf\xE8ge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Morceaux choisis avec les \xE9l\xE8ves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "+ de 15 morceaux appris sur l\u2019ann\xE9e")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, "Cours d'instrument"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "has-text-centered"
  }, "150\u20AC/trimestre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cours collectif de 4 \xE9l\xE8ves maximum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "De niveau et d\u2019\xE2ge proche"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Avec ou sans solf\xE8ge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Morceaux choisis avec les \xE9l\xE8ves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "+ de 15 morceaux appris sur l\u2019ann\xE9e"))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, "Enfants 8-10 ans"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "has-text-centered"
  }, "143\u20AC/trimestre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cours entier jou\xE9 sur la guitare"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cours collectif de 4 \xE9l\xE8ves maximum"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Avec ou sans solf\xE8ge"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Morceaux choisis avec les \xE9l\xE8ves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "+ de 10 morceaux appris sur l\u2019ann\xE9e")))))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "column"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-header"
  }, "Atelier Groupe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "card-body"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "content"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "has-text-centered"
  }, "143\u20AC/trimestre"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("hr", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Atelier jeu en groupe"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "De niveau et d\u2019\xE2ge proche"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Diff\xE9rents instrumentistes r\xE9unis"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Morceaux choisis avec les \xE9l\xE8ves"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Concert de fin d\u2019ann\xE9e"))))))))));
});

/***/ }),

/***/ "./components/sections/contact_form.tsx":
/*!**********************************************!*\
  !*** ./components/sections/contact_form.tsx ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _generic_generic_form_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../generic/generic-form/index */ "./components/generic/generic-form/index.tsx");
/* harmony import */ var _generic_generic_form_input__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../generic/generic-form/input */ "./components/generic/generic-form/input.tsx");



/* harmony default export */ __webpack_exports__["default"] = (function () {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_generic_form_index__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_generic_form_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fonta: "user",
    placeholder: "Nom",
    name: "first_name",
    type: "text",
    title: "",
    className: " is-half"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_generic_form_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fonta: "user",
    placeholder: "Prenom",
    name: "last_name",
    type: "text",
    title: "",
    className: " is-half"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_generic_form_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fonta: "phone",
    placeholder: "T\xE9l\xE9phone",
    name: "phone",
    type: "tel",
    title: ""
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_generic_form_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fonta: "envelope",
    placeholder: "Email",
    name: "email",
    type: "email",
    title: "",
    required: true
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_generic_generic_form_input__WEBPACK_IMPORTED_MODULE_2__["default"], {
    fonta: "user",
    placeholder: "Position",
    name: "contact_position",
    type: "text",
    title: ""
  })));
});

/***/ }),

/***/ "./components/sections/googlemap.tsx":
/*!*******************************************!*\
  !*** ./components/sections/googlemap.tsx ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SimpleHoverMap; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! google-map-react */ "google-map-react");
/* harmony import */ var google_map_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(google_map_react__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



var mapCenter = {
  lat: 47.3645066,
  lng: -1.1823906
};

var SimpleHoverMap =
/*#__PURE__*/
function (_Component) {
  _inherits(SimpleHoverMap, _Component);

  function SimpleHoverMap() {
    _classCallCheck(this, SimpleHoverMap);

    return _possibleConstructorReturn(this, _getPrototypeOf(SimpleHoverMap).apply(this, arguments));
  }

  _createClass(SimpleHoverMap, [{
    key: "render",
    value: function render() {
      var center = mapCenter;
      var zoom = 16;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          height: '45vh',
          width: '100%'
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(google_map_react__WEBPACK_IMPORTED_MODULE_1___default.a, {
        defaultCenter: center,
        defaultZoom: zoom
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Marker, {
        lat: mapCenter.lat,
        lng: mapCenter.lng
      })));
    }
  }]);

  return SimpleHoverMap;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

_defineProperty(SimpleHoverMap, "defaultProps", {});



var Marker = function Marker() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "SuperAwesomePin"
  }, "On est ICI ");
};

/***/ }),

/***/ "./components/sections/navbar.tsx":
/*!****************************************!*\
  !*** ./components/sections/navbar.tsx ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NavBar; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-anchor-link-smooth-scroll */ "react-anchor-link-smooth-scroll");
/* harmony import */ var react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var NavBar =
/*#__PURE__*/
function (_React$Component) {
  _inherits(NavBar, _React$Component);

  function NavBar() {
    _classCallCheck(this, NavBar);

    return _possibleConstructorReturn(this, _getPrototypeOf(NavBar).apply(this, arguments));
  }

  _createClass(NavBar, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
        className: "navbar is-fixed-top",
        role: "navigation",
        "aria-label": "main navigation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-brand"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "navbar-item",
        href: "#ref-presentation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        className: "image",
        src: "http://www.lecoledemusiquesactuelles.fr/wp-content/uploads/2018/06/Logo-jpeg.jpg",
        alt: "Z\xE9ro-G\xE2chis"
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        id: "navbarBasic",
        className: "navbar-menu"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "navbar-end"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "navbar-item",
        href: "#ref-home"
      }, "Acceuil"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "navbar-item",
        href: "#ref-presentation"
      }, "Pr\xE9sentation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "navbar-item",
        href: "#ref-price"
      }, "Formules"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_anchor_link_smooth_scroll__WEBPACK_IMPORTED_MODULE_1___default.a, {
        className: "navbar-item",
        href: "#ref-contact"
      }, "Nous contacter"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
        className: "navbar-item",
        target: "_blank",
        href: "http://localhost:8000"
      }, "Espaces El\xE8ves"))));
    }
  }]);

  return NavBar;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./pages/index.tsx":
/*!*************************!*\
  !*** ./pages/index.tsx ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Index; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_layout_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/layout/index */ "./components/layout/index.tsx");
/* harmony import */ var _components_sections_article_home__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/sections/article_home */ "./components/sections/article_home.tsx");
/* harmony import */ var _components_sections_article_presentation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/sections/article_presentation */ "./components/sections/article_presentation.tsx");
/* harmony import */ var _components_sections_article_price__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/sections/article_price */ "./components/sections/article_price.tsx");
/* harmony import */ var _components_sections_article_contact__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/sections/article_contact */ "./components/sections/article_contact.tsx");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var Index =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Index, _React$Component);

  function Index() {
    _classCallCheck(this, Index);

    return _possibleConstructorReturn(this, _getPrototypeOf(Index).apply(this, arguments));
  }

  _createClass(Index, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_layout_index__WEBPACK_IMPORTED_MODULE_1__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "article-home",
        id: "ref-home"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sections_article_home__WEBPACK_IMPORTED_MODULE_2__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "article-presentation",
        id: "ref-presentation"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sections_article_presentation__WEBPACK_IMPORTED_MODULE_3__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "article-price",
        id: "ref-price"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sections_article_price__WEBPACK_IMPORTED_MODULE_4__["default"], null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("article", {
        className: "article-contact",
        id: "ref-contact"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_sections_article_contact__WEBPACK_IMPORTED_MODULE_5__["default"], null)));
    }
  }]);

  return Index;
}(react__WEBPACK_IMPORTED_MODULE_0___default.a.Component);



/***/ }),

/***/ "./static/styles/index.scss":
/*!**********************************!*\
  !*** ./static/styles/index.scss ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ 3:
/*!*******************************!*\
  !*** multi ./pages/index.tsx ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.tsx */"./pages/index.tsx");


/***/ }),

/***/ "google-map-react":
/*!***********************************!*\
  !*** external "google-map-react" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-map-react");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-anchor-link-smooth-scroll":
/*!**************************************************!*\
  !*** external "react-anchor-link-smooth-scroll" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-anchor-link-smooth-scroll");

/***/ })

/******/ });
//# sourceMappingURL=index.js.map