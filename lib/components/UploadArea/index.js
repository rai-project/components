var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

import React from "react";
import yeast from "yeast";
// eslint-disable-next-line
import Uppy, { Core, DragDrop, Tus10, Dashboard, Webcam, Informer } from 'uppy';

// eslint-disable-next-line import/no-webpack-loader-syntax
import "!style-loader!css-loader!uppy/dist/uppy.min.css";

var UploadArea = function (_React$Component) {
  _inherits(UploadArea, _React$Component);

  function UploadArea(props) {
    var _arguments = arguments;

    _classCallCheck(this, UploadArea);

    var _this = _possibleConstructorReturn(this, (UploadArea.__proto__ || Object.getPrototypeOf(UploadArea)).call(this, props));

    _this.addFile = function () {};

    _this.onFileAdd = function () {
      console.log(_arguments);
    };

    _this.onFileAdded = function () {
      console.log(_arguments);
    };

    _this.addFile = function (addFile) {
      return function (file) {
        console.log("file ", file);
        addFile({
          id: yeast(),
          source: "React input",
          name: file.name,
          type: file.type,
          alt: file.name,
          data: file.data
        });
      };
    };

    _this.state = {
      progress: 0
    };
    return _this;
  }

  _createClass(UploadArea, [{
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.uppy = null;
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      this.uppy = new Core({ debug: false, autoProceed: false });
      this.uppy.use(Dashboard, {
        target: this.uppyElement,
        maxHeight: 300,
        inline: true
      }).use(Webcam, { target: Dashboard }).use(Informer, { target: Dashboard }).use(Tus10, {
        endpoint: "/api/upload/",
        resume: true
      }).run();

      this.uppy.addFile = this.addFile(this.uppy.addFile);

      this.uppy.on("core:file-add", this.onFileAdd);
      this.uppy.on("file-added", this.onFileAdded);
      this.uppy.on("core:upload-success", function (fileID, uploadURL) {
        // console.log(fileID, uploadURL);
        // console.log(uploadURL);
        // console.log(Utils.getFileType);
        // console.log(Utils.getFileType(fileID));
        // this.uppy.addThumbnail(fileID);
        console.log("logging state", _this2.uppy.state);
        // const newImgArray = this.state.images.slice();
        // newImgArray.push(uploadURL);
        // this.setState({
        //   images: newImgArray,
        // });
      });

      this.uppy.on("core:success", function () {
        var newProgress = _this2.uppy.getState().totalProgress;
        console.log("upload progress = " + newProgress);
        _this2.setState({
          progress: newProgress
        });
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return React.createElement("div", {
        ref: function ref(node) {
          _this3.uppyElement = node;
        }
      });
    }
  }]);

  return UploadArea;
}(React.Component);

UploadArea.defaultProps = {};
export default UploadArea;
module.exports = exports["default"];