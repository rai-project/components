// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style!css!codemirror/lib/codemirror.css";
// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style!css!./theme.css";

import React from "react";
import PropTypes from "prop-types";
import CodeMirror from "codemirror";

import "./styles.css";

import "codemirror/mode/clike/clike.js";
import "codemirror/mode/dockerfile/dockerfile.js";

import "./mode/cuda";

class CodeEditor extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // eslint-disable-next-line new-cap
    this.codemirror = CodeMirror(this.codeElement, {
      value: this.props.content || "",
      mode: "text/x-cuda-src",
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
        Tab(cm) {
          const spaces = Array(cm.getOption("indentUnit") + 1).join(" ");

          cm.replaceSelection(spaces);
        }
      }
    });
    //   this.codemirror.on('change', this.onCodeChange)
    //   this.codemirror.on('cursorActivity', this.onCursorChange)
  }
  render() {
    return (
      <div className="wrapper">
        <div
          ref={node => {
            this.codeElement = node;
          }}
          className="editor"
        />{" "}
      </div>
    );
  }
}

CodeEditor.propTypes = {
  content: PropTypes.string,
  readOnly: PropTypes.bool
};

CodeEditor.defaultProps = {
  content: ""
};

export default CodeEditor;
