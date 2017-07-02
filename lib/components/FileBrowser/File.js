"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  margin-left: 6px;\n  border-left: 1px dashed #d6d6d6;\n  padding-left: 6px;\n  :hover {\n    background-color: #ddd;\n  }\n"], ["\n  margin-left: 6px;\n  border-left: 1px dashed #d6d6d6;\n  padding-left: 6px;\n  :hover {\n    background-color: #ddd;\n  }\n"]),
    _templateObject2 = _taggedTemplateLiteral(["padding-left: 5px;"], ["padding-left: 5px;"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hedron = require("hedron");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _yeast = require("yeast");

var _yeast2 = _interopRequireDefault(_yeast);

var _fileCodeO = require("react-icons/lib/fa/file-code-o");

var _fileCodeO2 = _interopRequireDefault(_fileCodeO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }
// import { DragSource } from 'react-dnd';


var Node = _styledComponents2.default.div(_templateObject);

var Name = _styledComponents2.default.span(_templateObject2);

var File = function (_React$Component) {
  _inherits(File, _React$Component);

  function File() {
    _classCallCheck(this, File);

    return _possibleConstructorReturn(this, (File.__proto__ || Object.getPrototypeOf(File)).apply(this, arguments));
  }

  _createClass(File, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          debug = _props.debug,
          name = _props.name;

      return _react2.default.createElement(
        _hedron.Row,
        { debug: debug },
        _react2.default.createElement(
          Node,
          null,
          _react2.default.createElement(_fileCodeO2.default, null),
          _react2.default.createElement(
            Name,
            null,
            name
          )
        )
      );
    }
  }]);

  return File;
}(_react2.default.Component);

File.propTypes = {
  debug: _propTypes2.default.bool,
  uuid: _propTypes2.default.string,
  type: _propTypes2.default.string,
  name: _propTypes2.default.string,
  url: _propTypes2.default.string
};
File.defaultProps = {
  debug: false,
  uuid: (0, _yeast2.default)()
};
exports.default = File;
module.exports = exports["default"];
//# sourceMappingURL=File.js.map