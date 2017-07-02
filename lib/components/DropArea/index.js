'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _templateObject = _taggedTemplateLiteral(['\n\twidth: 100%;\n\tfont-size: 200%;\n\tcolor: #2d3e50;\n\tfont-weight: 400;\n\tmargin: 2em 0;\n\tvertical-align: baseline;\n'], ['\n\twidth: 100%;\n\tfont-size: 200%;\n\tcolor: #2d3e50;\n\tfont-weight: 400;\n\tmargin: 2em 0;\n\tvertical-align: baseline;\n']),
    _templateObject2 = _taggedTemplateLiteral(['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 10vh;\n\tbackground: url(', ');\n\tbackground-attachment: initial;\n\tbackground-position-x: center;\n\tbackground-position-y: center;\n\n\tbackground-size: contain;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\n\tborder-width: 1;\n\tborder-color: "#ddd";\n\tborder-style: "solid";\n\tborder-radius: 2;\n'], ['\n\tdisplay: flex;\n\tjustify-content: center;\n\talign-items: center;\n\tmin-height: 10vh;\n\tbackground: url(', ');\n\tbackground-attachment: initial;\n\tbackground-position-x: center;\n\tbackground-position-y: center;\n\n\tbackground-size: contain;\n\tbackground-position: center;\n\tbackground-repeat: no-repeat;\n\n\tborder-width: 1;\n\tborder-color: "#ddd";\n\tborder-style: "solid";\n\tborder-radius: 2;\n']),
    _templateObject3 = _taggedTemplateLiteral(['margin: auto auto auto 16px;'], ['margin: auto auto auto 16px;']);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _semanticUiReact = require('semantic-ui-react');

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _formsySemanticUiReact = require('formsy-semantic-ui-react');

var _reactDropzone = require('react-dropzone');

var _reactDropzone2 = _interopRequireDefault(_reactDropzone);

var _styledComponents = require('styled-components');

var _styledComponents2 = _interopRequireDefault(_styledComponents);

var _icon = require('./icon.svg');

var _icon2 = _interopRequireDefault(_icon);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _taggedTemplateLiteral(strings, raw) { return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var DroppedFilesWrapper = _styledComponents2.default.div(_templateObject);

var DropAreaWrapper = _styledComponents2.default.div(_templateObject2, function (props) {
	return props.icon || _icon2.default;
});

var Preview = _styledComponents2.default.div(_templateObject3);

var DropArea = function (_React$Component) {
	_inherits(DropArea, _React$Component);

	function DropArea() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, DropArea);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = DropArea.__proto__ || Object.getPrototypeOf(DropArea)).call.apply(_ref, [this].concat(args))), _this), _this.onFileDrop = function (files) {
			console.log(files);
			// const upload = uploadProfilePicture(files[0])
			// // track progress
			// upload.on('state_changed', snapshot => {
			//   this.setState({ uploadProgress: Math.floor((snapshot.bytesTransferred / snapshot.totalBytes) * 100) })
			// })
		}, _this.renderFiles = function () {
			var value = _this.props.value;

			if (value && value[0]) {
				return _react2.default.createElement(
					DroppedFilesWrapper,
					null,
					_react2.default.createElement(_semanticUiReact.Icon, { name: 'fileFilled' }),
					_react2.default.createElement(
						Preview,
						{ active: true },
						value[0].name
					)
				);
			} else {
				return _react2.default.createElement(
					DroppedFilesWrapper,
					null,
					_react2.default.createElement(
						Preview,
						null,
						'Drop a file here, or click to browse.'
					)
				);
			}
		}, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(DropArea, [{
		key: 'render',
		value: function render() {
			var _props = this.props,
			    onChange = _props.onChange,
			    value = _props.value,
			    required = _props.required,
			    disabled = _props.disabled,
			    className = _props.className,
			    id = _props.id;

			console.log(DropAreaWrapper);
			return _react2.default.createElement(
				DropAreaWrapper,
				{ icon: _icon2.default },
				_react2.default.createElement(
					_reactDropzone2.default,
					{
						multiple: false,
						style: {},
						accept: 'image/*',
						onDrop: this.onFileDrop,
						activeStyle: { color: '#00bcec' },
						rejectStyle: {},
						required: required,
						disabled: disabled,
						className: className,
						id: id },
					this.renderFiles()
				)
			);
		}
	}]);

	return DropArea;
}(_react2.default.Component);

DropArea.propTypes = {
	/**
    * Handler for the onChange event on the input.
    */
	onChange: _propTypes2.default.func.isRequired,
	/**
    * Marks that this input is required for form submission.
    */
	required: _propTypes2.default.bool,
	/**
    * Marks that the user cannot change this input.
    */
	disabled: _propTypes2.default.bool,
	/**
    * Adds a class name to the input element.
    */
	className: _propTypes2.default.string,
	/**
    * Adds an id to the input element.
    */
	id: _propTypes2.default.string,

	icon: _propTypes2.default.string
};
DropArea.defaultProps = {
	required: false,
	disabled: false,
	className: null,
	id: null,
	icon: _icon2.default
};
exports.default = DropArea;
module.exports = exports['default'];
//# sourceMappingURL=index.js.map