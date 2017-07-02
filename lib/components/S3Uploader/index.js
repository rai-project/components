"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _awsSdk = require("aws-sdk");

var _awsSdk2 = _interopRequireDefault(_awsSdk);

var _yeast = require("yeast");

var _yeast2 = _interopRequireDefault(_yeast);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _asyncToGenerator(fn) { return function () { var gen = fn.apply(this, arguments); return new Promise(function (resolve, reject) { function step(key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { return Promise.resolve(value).then(function (value) { step("next", value); }, function (err) { step("throw", err); }); } } return step("next"); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var uploadOptions = { partSize: 10 * 1024 * 1024, queueSize: 1 };

var S3Uploader = function (_React$Component) {
  _inherits(S3Uploader, _React$Component);

  function S3Uploader() {
    var _ref,
        _this2 = this;

    var _temp, _this, _ret;

    _classCallCheck(this, S3Uploader);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = S3Uploader.__proto__ || Object.getPrototypeOf(S3Uploader)).call.apply(_ref, [this].concat(args))), _this), _this.escapeName = function (s) {
      return encodeURIComponent(s).replace(/%20/gim, "+").replace(/%2F/gim, "/").replace(/\"/gim, "%22").replace(/\#/gim, "%23").replace(/\$/gim, "%24").replace(/\&/gim, "%26").replace(/\'/gim, "%27").replace(/\(/gim, "%28").replace(/\)/gim, "%29").replace(/\,/gim, "%2C").replace(/\:/gim, "%3A").replace(/\;/gim, "%3B").replace(/\=/gim, "%3D").replace(/\?/gim, "%3F").replace(/\@/gim, "%40");
    }, _this.getUploadKey = function (s) {
      if (!s) {
        s = (0, _yeast2.default)();
      }
      s = _this.escapeName(s);
      return _this.props.defaultUploadBucketName + "/" + s;
    }, _this.doUpload = function (_ref2) {
      var key = _ref2.key,
          data = _ref2.data;

      key = _this.getUploadKey(key);
      return _this.uploader.upload({
        Key: key,
        ContentType: "text/html",
        Body: data,
        ACL: "public-read"
      }, uploadOptions).promise();
    }, _this.uploadData = _asyncToGenerator(_regenerator2.default.mark(function _callee() {
      var res;
      return _regenerator2.default.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              _context.next = 3;
              return _this.doUpload({ key: "test2.html", data: " fdasfda" });

            case 3:
              res = _context.sent;

              console.log(res);
              _context.next = 10;
              break;

            case 7:
              _context.prev = 7;
              _context.t0 = _context["catch"](0);

              console.log(_context.t0);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, _this2, [[0, 7]]);
    })), _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(S3Uploader, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _props = this.props,
          accessKeyId = _props.accessKeyId,
          secretAccessKey = _props.secretAccessKey,
          region = _props.region,
          defaultUploadBucketBaseURL = _props.defaultUploadBucketBaseURL;

      _awsSdk2.default.config.update(new _awsSdk2.default.Config({
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey,
        region: region
      }));
      this.uploader = new _awsSdk2.default.S3({
        config: this.config,
        params: {
          Bucket: defaultUploadBucketBaseURL
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      return _react2.default.createElement(
        "div",
        { onClick: this.uploadData },
        _react2.default.createElement(
          "small",
          null,
          "You are running this application in ",
          _react2.default.createElement(
            "b",
            null,
            process.env.NODE_ENV
          ),
          " ",
          "mode."
        )
      );
    }
  }]);

  return S3Uploader;
}(_react2.default.Component);

S3Uploader.propTypes = {
  region: _propTypes2.default.string.isRequired,
  accessKeyId: _propTypes2.default.string.isRequired,
  secretAccessKey: _propTypes2.default.string.isRequired,
  defaultUploadBucketBaseURL: _propTypes2.default.string.isRequired,
  defaultUploadBucketName: _propTypes2.default.string.isRequired
};
S3Uploader.defaultProps = {
  region: "" + process.env.REACT_APP_region,
  accessKeyId: "" + process.env.REACT_APP_aws_access_key_id,
  secretAccessKey: "" + process.env.REACT_APP_aws_secret_access_key,
  defaultUploadBucketBaseURL: "" + process.env.REACT_APP_s3_upload_bucket_base_url,
  defaultUploadBucketName: "" + process.env.REACT_APP_s3_upload_bucket_name
};
exports.default = S3Uploader;
module.exports = exports["default"];
//# sourceMappingURL=index.js.map