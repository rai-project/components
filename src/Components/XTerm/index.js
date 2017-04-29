// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style!css!xterm/dist/xterm.css";

import React, { Component } from "react";
import PropTypes from "prop-types";
import Xterm from "xterm";

import "./styles.css";

class XTerm extends Component {
  constructor(props) {
    super(props);
    this.onFocus = this.focusChanged.bind(this, true);
    this.onBlur = this.focusChanged.bind(this, false);
    this.focusChanged = this.focusChanged.bind(this);
    this.onInput = this.onInput.bind(this);
    this.onKey = this.onKey.bind(this);
    this.state = {
      isFocused: false
    };
  }
  componentDidMount() {
    const term = new Xterm();
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
  componentWillUnmount() {
    if (this.xterm) {
      this.xterm.destroy();
      this.xterm = null;
    }
  }
  getXTerm() {
    return this.xterm;
  }
  proposeGeometry() {
    const parentElementStyle = window.getComputedStyle(
      this.element.parentElement
    ),
      parentElementHeight = parseInt(
        parentElementStyle.getPropertyValue("height")
      ),
      parentElementWidth = parseInt(
        parentElementStyle.getPropertyValue("width")
      ),
      elementStyle = window.getComputedStyle(this.element),
      elementPaddingVer =
        parseInt(elementStyle.getPropertyValue("padding-top")) +
        parseInt(elementStyle.getPropertyValue("padding-bottom")),
      elementPaddingHor =
        parseInt(elementStyle.getPropertyValue("padding-right")) +
        parseInt(elementStyle.getPropertyValue("padding-left")),
      availableHeight = parentElementHeight - elementPaddingVer,
      availableWidth = parentElementWidth - elementPaddingHor,
      subjectRow = this.rowContainer.firstElementChild,
      contentBuffer = subjectRow.innerHTML;
    let characterHeight, rows, characterWidth, cols, geometry;

    subjectRow.style.display = "inline";
    subjectRow.innerHTML = "W"; // Common character for measuring width, although on monospace
    characterWidth = subjectRow.getBoundingClientRect().width;
    subjectRow.style.display = ""; // Revert style before calculating height, since they differ.
    characterHeight = parseInt(subjectRow.offsetHeight);
    subjectRow.innerHTML = contentBuffer;

    rows = parseInt(availableHeight / characterHeight);
    cols = parseInt(availableWidth / characterWidth) - 1;

    geometry = { cols: cols, rows: rows };
    return geometry;
  }
  fit() {
    const geometry = this.proposeGeometry();
    this.resize(geometry.cols, geometry.rows);
  }
  resize(cols, rows) {
    if (!this.xterm) {
      return;
    }
    this.xterm.resize(cols, rows);
  }
  write(data) {
    if (!this.xterm) {
      return;
    }
    this.xterm.write(data);
  }
  writeln(data) {
    if (!this.xterm) {
      return;
    }
    this.xterm.writeln(data);
  }
  focusChanged(focused) {
    this.setState({
      isFocused: focused
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  }
  onKey(key, ev) {
    if (this.props.onKey) {
      return this.props.onKey(key, ev);
    }

    console.log([key, ev]);

    const isPrintable =
      !ev.altKey && !ev.altGraphKey && !ev.ctrlKey && !ev.metaKey;
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
  prompt() {
    this.write("\r\n" + this.props.prompt);
  }
  onInput(data) {
    if (this.props.onInput) {
      return this.props.onInput(data);
    }
    this.write(data);
  }
  setCursorBlink(blink) {
    if (this.xterm && this.xterm.cursorBlink !== blink) {
      this.xterm.cursorBlink = blink;
      this.xterm.refresh(0, this.xterm.rows - 1);
    }
  }
  render() {
    const xtermClassName = this.state.isFocused ? "xterm" : "xterm-focused";
    return (
      <div>
        <div
          ref={node => {
            this.xtermElement = node;
          }}
          className={xtermClassName}
        />
        {" "}
      </div>
    );
  }
}

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
