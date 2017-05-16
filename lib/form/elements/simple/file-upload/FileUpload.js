'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var FileUpload = function (_Component) {
   _inherits(FileUpload, _Component);

   function FileUpload(props, context) {
      _classCallCheck(this, FileUpload);

      var _this = _possibleConstructorReturn(this, (FileUpload.__proto__ || Object.getPrototypeOf(FileUpload)).call(this, props, context));

      _this.onDragStart = _this.onDragStart.bind(_this);
      _this.onDragEnd = _this.onDragEnd.bind(_this);
      _this.state = {
         dragState: "off",
         defaultMessage: "Выберите файл ..."
      };
      return _this;
   }

   _createClass(FileUpload, [{
      key: 'onDragStart',
      value: function onDragStart() {
         this.setState({
            dragState: "on",
            defaultMessage: ""
         });
      }
   }, {
      key: 'onDragEnd',
      value: function onDragEnd() {
         this.setState({
            dragState: "off",
            defaultMessage: "Выберите файл ..."
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var _props = this.props,
             dataText = _props.dataText,
             value = _props.value,
             className = _props.className,
             _onChange = _props.onChange;
         var _state = this.state,
             dragState = _state.dragState,
             defaultMessage = _state.defaultMessage;

         return _react2.default.createElement(
            'div',
            { className: 'file-upload-container' },
            _react2.default.createElement(
               'div',
               { className: 'file-upload-form',
                  onDragOver: this.onDragStart,
                  onDragLeave: this.onDragEnd },
               _react2.default.createElement(
                  'div',
                  { className: (0, _classnames2.default)("file-upload-wrapper", { "drag-state-on": dragState === "on" }),
                     'data-text': dataText || defaultMessage },
                  _react2.default.createElement('input', { type: 'file',
                     value: value,
                     className: className,
                     onChange: function onChange(e) {
                        _this2.onDragEnd();
                        _onChange && _onChange(e);
                     } })
               )
            )
         );
      }
   }]);

   return FileUpload;
}(_react.Component);

FileUpload.PropTypes = {
   dataText: _propTypes2.default.string,
   value: _propTypes2.default.any,
   className: _propTypes2.default.string,
   onChange: _propTypes2.default.func
};

exports.default = FileUpload;