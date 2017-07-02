"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(["\n  height: ", ";\n  opacity: ", ";\n  transition: all cubic-bezier(0, 0, 0, 1.05) 100ms;\n  overflow: hidden;\n"], ["\n  height: ", ";\n  opacity: ", ";\n  transition: all cubic-bezier(0, 0, 0, 1.05) 100ms;\n  overflow: hidden;\n"]),
    _templateObject2 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  :hover {\n    background-color: #ddd;\n  }\n"], ["\n  cursor: pointer;\n  :hover {\n    background-color: #ddd;\n  }\n"]),
    _templateObject3 = _taggedTemplateLiteral(["padding-left: 5px;"], ["padding-left: 5px;"]),
    _templateObject4 = _taggedTemplateLiteral(["\n  cursor: pointer;\n  margin-left: 6px;\n  border-left: 1px dashed #d6d6d6;\n  padding-left: 6px;\n"], ["\n  cursor: pointer;\n  margin-left: 6px;\n  border-left: 1px dashed #d6d6d6;\n  padding-left: 6px;\n"]);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _hedron = require("hedron");

var _reactDnd = require("react-dnd");

var _styledComponents = require("styled-components");

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _File = require("./File");

var _File2 = _interopRequireDefault(_File);

var _Directory = require("./Directory");

var _Directory2 = _interopRequireDefault(_Directory);

var _yeast = require("yeast");

var _yeast2 = _interopRequireDefault(_yeast);

var _caretDown = require("react-icons/lib/fa/caret-down");

var _caretDown2 = _interopRequireDefault(_caretDown);

var _caretRight = require("react-icons/lib/fa/caret-right");

var _caretRight2 = _interopRequireDefault(_caretRight);

var _folderO = require("react-icons/lib/fa/folder-o");

var _folderO2 = _interopRequireDefault(_folderO);

var _folderOpenO = require("react-icons/lib/fa/folder-open-o");

var _folderOpenO2 = _interopRequireDefault(_folderOpenO);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var Opener = _styledComponents2.default.div(_templateObject, function (props) {
  return props.open ? "100%" : "0px";
}, function (props) {
  return props.open ? 1 : 0;
});

var Label = _styledComponents2.default.div(_templateObject2);
var LabelName = _styledComponents2.default.span(_templateObject3);
var DirectoryLevel = _styledComponents2.default.div(_templateObject4);

var Directory = function (_React$Component) {
  _inherits(Directory, _React$Component);

  function Directory(props) {
    _classCallCheck(this, Directory);

    var _this = _possibleConstructorReturn(this, (Directory.__proto__ || Object.getPrototypeOf(Directory)).call(this, props));

    _this.handleOnClick = function () {
      // eslint-disable-next-line
      _this.setState({
        isOpen: !_this.state.isOpen // eslint-disable-line
      });
    };

    _this.state = { isOpen: props.isOpen || false };
    return _this;
  }

  _createClass(Directory, [{
    key: "render",
    value: function render() {
      var _props = this.props,
          debug = _props.debug,
          uuid = _props.uuid,
          content = _props.content,
          name = _props.name,
          connectDropTarget = _props.connectDropTarget,
          connectDragSource = _props.connectDragSource;
      var isOpen = this.state.isOpen;

      var body = content.map(function (p) {
        return p.isDirectory ? _react2.default.createElement(_Directory2.default, _extends({ debug: debug, key: p.name + uuid }, p)) : _react2.default.createElement(_File2.default, _extends({ debug: debug, key: p.name + uuid }, p));
      });
      var caretIcon = isOpen ? _react2.default.createElement(_caretDown2.default, null) : _react2.default.createElement(_caretRight2.default, null);
      var folderIcon = isOpen ? _react2.default.createElement(_folderOpenO2.default, null) : _react2.default.createElement(_folderO2.default, null);
      return connectDragSource(_react2.default.createElement(
        "div",
        null,
        _react2.default.createElement(
          _hedron.Row,
          { debug: debug, divisions: 2 },
          _react2.default.createElement(
            _hedron.Column,
            { debug: debug, fluid: true },
            _react2.default.createElement(
              Label,
              { onClick: this.handleOnClick },
              caretIcon,
              folderIcon,
              _react2.default.createElement(
                LabelName,
                null,
                name
              )
            ),
            _react2.default.createElement(
              DirectoryLevel,
              null,
              _react2.default.createElement(
                Opener,
                { open: isOpen },
                body
              )
            )
          )
        )
      ));
    }
  }]);

  return Directory;
}(_react2.default.Component);

Directory.propTypes = {
  debug: _propTypes2.default.bool,
  uuid: _propTypes2.default.string,
  name: _propTypes2.default.string,
  content: _propTypes2.default.array,
  isOpen: _propTypes2.default.bool
};
Directory.defaultProps = {
  debug: false,
  uuid: (0, _yeast2.default)(),
  name: ".",
  content: [],
  isOpen: false
};


var entrySource = {
  beginDrag: function beginDrag(props) {
    return {
      text: props.text
    };
  }
};

var entryTarget = {
  drop: function drop(props, monitor) {
    if (monitor == null) return;

    // Check if only child is selected:
    if (!monitor.isOver({ shallow: true })) return;

    var sourceItem = monitor.getItem();

    if (sourceItem.directory) {
      props.sandboxActions.moveDirectoryToDirectory(props.sandboxId, sourceItem.id, props.shortid);
    } else {
      props.sandboxActions.moveModuleToDirectory(props.sandboxId, sourceItem.id, props.shortid);
    }
  },

  canDrop: function canDrop(props, monitor) {
    if (monitor == null) return false;
    var source = monitor.getItem();
    if (source == null) return false;

    if (source.id === props.id) return false;
    return true;
  }
};

var collectTarget = function collectTarget(connectMonitor, monitor) {
  return {
    // Call this function inside render()
    // to let React DnD handle the drag events:
    connectDropTarget: connectMonitor.dropTarget(),
    // You can ask the monitor about the current drag state:
    isOver: monitor.isOver({ shallow: true }),
    canDrop: monitor.canDrop(),
    itemType: monitor.getItemType()
  };
};
var collectSource = function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  };
};

// eslint-disable-next-line
exports.default = (0, _reactDnd.DragSource)('Directory', entrySource, collectSource)(
// eslint-disable-next-line
(0, _reactDnd.DropTarget)('Directory', entryTarget, collectTarget)(Directory));
module.exports = exports["default"];
//# sourceMappingURL=Directory.js.map