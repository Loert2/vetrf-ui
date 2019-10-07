'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FileDownload = require('../../simple/file-download/FileDownload');

var _FileDownload2 = _interopRequireDefault(_FileDownload);

var _FileUpload = require('../../simple/file-upload/FileUpload');

var _FileUpload2 = _interopRequireDefault(_FileUpload);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _withValidate = require('../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileFormGroup = function (_PureComponent) {
   _inherits(FileFormGroup, _PureComponent);

   function FileFormGroup(props) {
      _classCallCheck(this, FileFormGroup);

      var _this = _possibleConstructorReturn(this, (FileFormGroup.__proto__ || Object.getPrototypeOf(FileFormGroup)).call(this, props));

      _this.state = { fileName: '' };
      _this.onChangeHandler = _this.onChangeHandler.bind(_this);
      return _this;
   }

   _createClass(FileFormGroup, [{
      key: 'onChangeHandler',
      value: function onChangeHandler(event) {
         var _props = this.props,
             onChange = _props.onChange,
             field = _props.field;

         event.persist();
         var value = (0, _get2.default)(event, 'target.value');
         var fileName = value ? value.replace(/.*(\/|\\)/, '') : '';
         this.setState({
            fileName: fileName
         });
         var file = { file: (0, _get2.default)(event, 'target.files[0]'), name: fileName };
         onChange && onChange(file, field);
      }
   }, {
      key: 'render',
      value: function render() {
         var _props2 = this.props,
             labelText = _props2.labelText,
             require = _props2.require,
             help = _props2.help,
             additionalBlock = _props2.additionalBlock,
             value = _props2.value,
             errorText = _props2.errorText,
             dataText = _props2.dataText,
             id = _props2.id,
             className = _props2.className,
             hasError = _props2.hasError,
             editable = _props2.editable,
             removeAction = _props2.removeAction,
             urlFile = _props2.urlFile;
         var fileName = this.state.fileName;

         return _react2.default.createElement(
            _FormGroup2.default,
            {
               labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               hasError: hasError,
               errorText: errorText },
            value ? _react2.default.createElement(_FileDownload2.default, {
               id: id,
               fileModel: value,
               editable: editable,
               removeAction: removeAction,
               urlFile: urlFile
            }) : _react2.default.createElement(_FileUpload2.default, {
               id: id,
               dataText: dataText || fileName,
               value: value,
               className: className,
               onChange: this.onChangeHandler
            })
         );
      }
   }]);

   return FileFormGroup;
}(_react.PureComponent);

FileFormGroup.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   dataText: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.node,
   errorText: _propTypes2.default.node,
   hasError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string,
   editable: _propTypes2.default.bool,
   removeAction: _propTypes2.default.func,
   urlFile: _propTypes2.default.func
};

FileFormGroup.defaultProps = {};

exports.default = (0, _withValidate2.default)(FileFormGroup);