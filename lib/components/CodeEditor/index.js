import _regeneratorRuntime from "babel-runtime/regenerator";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import { Dropdown, Icon, Menu, Segment } from "semantic-ui-react";
import { If, Then, Else } from "react-if";

import React from "react";
import idx from "idx";
import classNames from "classnames";
import PropTypes from "prop-types";
import CodeMirror from "codemirror";
import { isUndefined, size, keys, head, mapKeys } from "lodash";

import "codemirror/addon/dialog/dialog";
import "codemirror/addon/hint/show-hint";

// eslint-disable-next-line import/no-webpack-loader-syntax
import "codemirror/lib/codemirror.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import "./theme.css";

var CodeEditor = function (_React$Component) {
  _inherits(CodeEditor, _React$Component);

  function CodeEditor() {
    var _ref,
        _this2 = this,
        _arguments = arguments;

    var _temp, _this, _ret;

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _classCallCheck(this, CodeEditor);

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = CodeEditor.__proto__ || Object.getPrototypeOf(CodeEditor)).call.apply(_ref, [this].concat(args))), _this), _this.getMode = function () {
      var _ref2 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee(mode) {
        return _regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                if (mode) {
                  _context.next = 2;
                  break;
                }

                return _context.abrupt("return", "jsx");

              case 2:
                _context.t0 = mode;
                _context.next = _context.t0 === "cuda" ? 5 : _context.t0 === "docker" ? 8 : _context.t0 === "c" ? 11 : _context.t0 === "cpp" ? 11 : _context.t0 === "css" ? 14 : _context.t0 === "html" ? 17 : 20;
                break;

              case 5:
                _context.next = 7;
                return new Promise(function (resolve) {
                  require.ensure([], function (require) {
                    resolve(require("./mode/cuda.js"));
                  });
                });

              case 7:
                return _context.abrupt("return", "text/x-cuda-src");

              case 8:
                _context.next = 10;
                return new Promise(function (resolve) {
                  require.ensure([], function (require) {
                    resolve(require("codemirror/mode/dockerfile/dockerfile.js"));
                  });
                });

              case 10:
                return _context.abrupt("return", "docker");

              case 11:
                _context.next = 13;
                return new Promise(function (resolve) {
                  require.ensure([], function (require) {
                    resolve(require("codemirror/mode/clike/clike.js"));
                  });
                });

              case 13:
                return _context.abrupt("return", mode);

              case 14:
                _context.next = 16;
                return new Promise(function (resolve) {
                  require.ensure([], function (require) {
                    resolve(require("codemirror/mode/css/css"));
                  });
                });

              case 16:
                return _context.abrupt("return", "css");

              case 17:
                _context.next = 19;
                return new Promise(function (resolve) {
                  require.ensure([], function (require) {
                    resolve(require("codemirror/mode/htmlmixed/htmlmixed"));
                  });
                });

              case 19:
                return _context.abrupt("return", "htmlmixed");

              case 20:
                return _context.abrupt("return", "jsx");

              case 21:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, _this2);
      }));

      return function (_x) {
        return _ref2.apply(this, arguments);
      };
    }(), _this.onChange = function () {
      console.log(_arguments);
    }, _this.handleSaveIconClick = function (e) {
      var content = idx(_this.editor, function (_) {
        return _.value;
      });
      if (_this.props.onSaveIconClick) {
        _this.props.onSaveIconClick(e, content);
      }
    }, _this.handleNewIconClick = function (e) {
      if (_this.props.onNewIconClick) {
        _this.props.onNewIconClick(e);
      }
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(CodeEditor, [{
    key: "componentDidMount",
    value: function () {
      var _ref3 = _asyncToGenerator(_regeneratorRuntime.mark(function _callee2() {
        var mode, currentFile, value;
        return _regeneratorRuntime.wrap(function _callee2$(_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.next = 2;
                return this.getMode(this.props.mode);

              case 2:
                mode = _context2.sent;
                currentFile = size(this.props.files) === 1 && this.props.currentFile === "" ? head(keys(this.props.files)) : this.props.currentFile;
                value = idx(this.props, function (_) {
                  return _.files[currentFile].content;
                }) || "";
                // eslint-disable-next-line new-cap

                this.editor = CodeMirror(this.codeElement, {
                  value: value,
                  mode: mode,
                  autofocus: true,
                  theme: "rai",
                  matchTags: {
                    bothTags: true
                  },
                  autoCloseTags: true,
                  lint: false,
                  lineNumbers: true,
                  readOnly: this.props.readOnly ? "nocursor" : false,
                  indentUnit: 2,
                  extraKeys: {
                    Tab: function Tab(cm) {
                      var spaces = Array(cm.getOption("indentUnit") + 1).join(" ");

                      cm.replaceSelection(spaces);
                    }
                  }
                });
                this.editor.on("change", this.onChange);
                //   this.codemirror.on('change', this.onCodeChange)
                //   this.codemirror.on('cursorActivity', this.onCursorChange)

              case 7:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      function componentDidMount() {
        return _ref3.apply(this, arguments);
      }

      return componentDidMount;
    }()
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var fontSize = this.props.fontSize;

      var mainElement = React.createElement("div", {
        ref: function ref(_ref4) {
          return _this3.codeElement = _ref4;
        },
        className: classNames("editor")
      });
      if (this.props.withMenuBar === false) {
        return mainElement;
      }
      if (isUndefined(this.props.onNewIconClick) && isUndefined(this.props.onSaveIconClick) && size(this.props.files) <= 1) {
        return mainElement;
      }

      return React.createElement(
        "div",
        null,
        React.createElement(
          Menu,
          { attached: "top", icon: true },
          React.createElement(
            If,
            { condition: !isUndefined(this.props.onNewIconClick) },
            React.createElement(
              Then,
              null,
              React.createElement(
                Menu.Item,
                { name: "new", onClick: this.handleNewIconClick },
                React.createElement(Icon, { name: "file text outline" })
              )
            )
          ),
          React.createElement(
            If,
            { condition: !isUndefined(this.props.onSaveIconClick) },
            React.createElement(
              Then,
              null,
              React.createElement(
                Menu.Item,
                { name: "save", onClick: this.handleSaveIconClick },
                React.createElement(Icon, { name: "save" })
              )
            )
          ),
          React.createElement(
            If,
            { condition: size(this.props.files) > 1 },
            React.createElement(
              Then,
              null,
              React.createElement(
                Menu.Menu,
                { position: "right" },
                React.createElement(
                  Dropdown,
                  { item: true, simple: true, text: "Files" },
                  React.createElement(
                    Dropdown.Menu,
                    null,
                    keys(this.props.files).map(function (name) {
                      return React.createElement(Dropdown.Item, {
                        text: name,
                        key: _this3.props.files[name].uuid
                      });
                    })
                  )
                )
              )
            )
          )
        ),
        React.createElement(
          Segment,
          { attached: "bottom", style: { paddingTop: 0 } },
          mainElement
        )
      );
    }
  }]);

  return CodeEditor;
}(React.Component);

CodeEditor.defaultProps = {
  mode: "cuda",
  currentFile: "",
  withMenuBar: false,
  files: {},
  fontSize: 14,
  readOnly: false,
  onNewIconClick: undefined,
  onSaveIconClick: undefined
};


export default CodeEditor;
module.exports = exports["default"];