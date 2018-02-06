'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment/locale/ru');

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var placeholderProps = { placeholder: "дд.мм.гггг" };
var defaultDateFormat = "DD.MM.YYYY";

/**
* Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
* */
var getValue = function getValue(value, format) {
   if (!(0, _isEmpty2.default)(value)) {
      var newValue = (0, _moment2.default)(value, format, true);
      if (newValue.isValid()) {
         return newValue;
      }
   }

   return value;
};

var DatePicker = function (_PureComponent) {
   _inherits(DatePicker, _PureComponent);

   function DatePicker(props, context) {
      _classCallCheck(this, DatePicker);

      var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props, context));

      _this.validateFormat = props.validate ? (0, _debounce2.default)(props.validate, 600) : null;
      _this.getFormat = _this.getFormat.bind(_this);
      return _this;
   }

   _createClass(DatePicker, [{
      key: 'getFormat',
      value: function getFormat() {
         var _props = this.props,
             _props$dateFormat = _props.dateFormat,
             dateFormat = _props$dateFormat === undefined ? defaultDateFormat : _props$dateFormat,
             timeFormat = _props.timeFormat,
             fullFormat = _props.fullFormat;

         if (fullFormat) {
            return fullFormat;
         }
         return timeFormat ? dateFormat + ' ' + timeFormat : dateFormat;
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var _props2 = this.props,
             value = _props2.value,
             _onChange = _props2.onChange,
             className = _props2.className,
             inputProps = _props2.inputProps,
             id = _props2.id,
             validate = _props2.validate,
             _props2$dateFormat = _props2.dateFormat,
             dateFormat = _props2$dateFormat === undefined ? defaultDateFormat : _props2$dateFormat,
             timeFormat = _props2.timeFormat;


         var format = this.getFormat();

         return _react2.default.createElement(_reactDatetime2.default, { dateFormat: dateFormat,
            id: id,
            locale: 'ru',
            value: getValue(value, format),
            onChange: function onChange(m) {
               var val = m && m.format ? m.format(format) : m;
               _onChange && _onChange(val);
               if (validate) {
                  _this2.validateFormat(val);
               }
            },
            className: className,
            timeFormat: timeFormat || false,
            closeOnSelect: true,
            onBlur: function onBlur() {
               if (validate) {
                  validate(value);
               } else {
                  _moment2.default.locale("ru");
                  var formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
                  if ((0, _moment2.default)(value, formats, true).isValid()) {
                     _onChange && _onChange((0, _moment2.default)(value, formats).format("DD.MM.YYYY"));
                  } else {
                     _onChange && _onChange((0, _moment2.default)().format("DD.MM.YYYY"));
                  }
               }
            },
            disableOnClickOutside: true,
            inputProps: inputProps || placeholderProps });
      }
   }]);

   return DatePicker;
}(_react.PureComponent);

DatePicker.propTypes = {
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   dateFormat: _propTypes2.default.string,
   fullFormat: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   validate: _propTypes2.default.func,
   inputProps: _propTypes2.default.object,
   timeFormat: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
};

exports.default = DatePicker;