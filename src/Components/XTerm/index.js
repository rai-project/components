import React, { Component } from "react";
import PropTypes from "prop-types";
import Xterm from "xterm";

import "./styles.css";

class XTerm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isFocused: false
    };
  }
  componentDidMount() {
    const term = new Xterm();
    term.open(terminalContainer);
    term.open(this.refs.container);
    term.on("focus", this.focusChanged.bind(this, true));
    term.on("blur", this.focusChanged.bind(this, false));
    if (this.props.onInput) {
      term.on("data", this.onInput);
    }
    if (this.props.value) {
      term.write(this.props.value);
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
    this.xterm.resize(cols, rows);
  }
  write(data) {
    this.xterm.write(data);
  }
  writeln(data) {
    this.xterm.writeln(data);
  }
  focusChanged(focused) {
    this.setState({
      isFocused: focused
    });
    this.props.onFocusChange && this.props.onFocusChange(focused);
  }
  onInput(data) {
    this.props.onInput && this.props.onInput(data);
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
  value: PropTypes.string
};

XTerm.defaultProps = {
  prompt: "> "
};

export default XTerm;
