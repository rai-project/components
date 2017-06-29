var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!xterm/dist/xterm.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import Xterm from "xterm";

var XTerm = function (_Component) {
  _inherits(XTerm, _Component);

  function XTerm(props) {
    _classCallCheck(this, XTerm);

    var _this = _possibleConstructorReturn(this, (XTerm.__proto__ || Object.getPrototypeOf(XTerm)).call(this, props));

    _this.onFocus = _this.focusChanged.bind(_this, true);
    _this.onBlur = _this.focusChanged.bind(_this, false);
    _this.focusChanged = _this.focusChanged.bind(_this);
    _this.onInput = _this.onInput.bind(_this);
    _this.onKey = _this.onKey.bind(_this);
    _this.state = {
      isFocused: false
    };
    return _this;
  }

  _createClass(XTerm, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var term = new Xterm();
      term.open(this.xtermElement);
      term.on("focus", this.onFocus);
      term.on("blur", this.onBlur);
      term.on("data", this.onInput);
      this.onInput("key", this.onKey);
      if (this.props.value) {
        term.writeln(this.props.value);
      }
      this.xterm = term;
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.xterm) {
        this.xterm.destroy();
        this.xterm = null;
      }
    }
  }, {
    key: "getXTerm",
    value: function getXTerm() {
      return this.xterm;
    }
  }, {
    key: "proposeGeometry",
    value: function proposeGeometry() {
      var parentElementStyle = window.getComputedStyle(this.element.parentElement);
      var parentElementHeight = parseInt(parentElementStyle.getPropertyValue("height"));
      var parentElementWidth = parseInt(parentElementStyle.getPropertyValue("width"));
      var elementStyle = window.getComputedStyle(this.element);
      var elementPaddingVer = parseInt(elementStyle.getPropertyValue("padding-top")) + parseInt(elementStyle.getPropertyValue("padding-bottom"));
      var elementPaddingHor = parseInt(elementStyle.getPropertyValue("padding-right")) + parseInt(elementStyle.getPropertyValue("padding-left"));
      var availableHeight = parentElementHeight - elementPaddingVer;
      var availableWidth = parentElementWidth - elementPaddingHor;
      var subjectRow = this.rowContainer.firstElementChild;
      var contentBuffer = subjectRow.innerHTML;

      subjectRow.style.display = "inline";
      subjectRow.innerHTML = "W"; // Common character for measuring width, although on monospace
      subjectRow.style.display = ""; // Revert style before calculating height, since they differ.
      subjectRow.innerHTML = contentBuffer;

      var characterWidth = subjectRow.getBoundingClientRect().width;
      var characterHeight = parseInt(subjectRow.offsetHeight);

      var rows = parseInt(availableHeight / characterHeight);
      var cols = parseInt(availableWidth / characterWidth) - 1;

      var geometry = { cols: cols, rows: rows };
      return geometry;
    }
  }, {
    key: "fit",
    value: function fit() {
      var geometry = this.proposeGeometry();
      this.resize(geometry.cols, geometry.rows);
    }
  }, {
    key: "resize",
    value: function resize(cols, rows) {
      if (!this.xterm) {
        return;
      }
      this.xterm.resize(cols, rows);
    }
  }, {
    key: "write",
    value: function write(data) {
      if (!this.xterm) {
        return;
      }
      this.xterm.write(data);
    }
  }, {
    key: "writeln",
    value: function writeln(data) {
      if (!this.xterm) {
        return;
      }
      this.xterm.writeln(data);
    }
  }, {
    key: "focusChanged",
    value: function focusChanged(focused) {
      this.setState({
        isFocused: focused
      });
      this.props.onFocusChange && this.props.onFocusChange(focused);
    }
  }, {
    key: "onKey",
    value: function onKey(key, ev) {
      if (this.props.onKey) {
        return this.props.onKey(key, ev);
      }

      console.log([key, ev]);

      var isPrintable = !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
      if (ev.keyCode == 13) {
        this.prompt();
      } else if (ev.keyCode == 8) {
        // Do not delete the prompt
        if (term.x > 2) {
          term.write("\b \b");
        }
      } else if (isPrintable) {
        this.term.write(key);
      }
    }
  }, {
    key: "prompt",
    value: function prompt() {
      this.write("\r\n" + this.props.prompt);
    }
  }, {
    key: "onInput",
    value: function onInput(data) {
      if (this.props.onInput) {
        return this.props.onInput(data);
      }
      this.write(data);
    }
  }, {
    key: "setCursorBlink",
    value: function setCursorBlink(blink) {
      if (this.xterm && this.xterm.cursorBlink !== blink) {
        this.xterm.cursorBlink = blink;
        this.xterm.refresh(0, this.xterm.rows - 1);
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var xtermClassName = this.state.isFocused ? "xterm" : "xterm-focused";
      return React.createElement(
        "div",
        null,
        React.createElement("div", {
          ref: function ref(node) {
            _this2.xtermElement = node;
          },
          className: xtermClassName
        }),
        " "
      );
    }
  }]);

  return XTerm;
}(Component);

XTerm.propTypes = {
  prompt: PropTypes.string,
  onFocusChange: PropTypes.func,
  onInput: PropTypes.func,
  onKey: PropTypes.func,
  value: PropTypes.string
};

XTerm.defaultProps = {
  prompt: "> "
};

export default XTerm;
module.exports = exports["default"];