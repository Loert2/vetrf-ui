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

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
* */
var DatePicker = function (_PureComponent) {
   _inherits(DatePicker, _PureComponent);

   function DatePicker(props, context) {
      _classCallCheck(this, DatePicker);

      var _this = _possibleConstructorReturn(this, (DatePicker.__proto__ || Object.getPrototypeOf(DatePicker)).call(this, props, context));

      _this.validateFormat = props.validate ? (0, _debounce2.default)(props.validate, 400) : null;
      return _this;
   }

   _createClass(DatePicker, [{
      key: 'render',
      value: function render() {
         var _this2 = this;

         var _props = this.props,
             value = _props.value,
             _onChange = _props.onChange,
             className = _props.className,
             inputProps = _props.inputProps,
             id = _props.id,
             validate = _props.validate;

         return _react2.default.createElement(_reactDatetime2.default, { dateFormat: 'DD.MM.YYYY',
            id: id,
            locale: 'ru',
            value: value || "",
            onChange: function onChange(m) {
               var val = m && m.format ? m.format("DD.MM.YYYY") : m;
               _onChange && _onChange(val);
               _this2.validateFormat(val);
            },
            className: className,
            timeFormat: false,
            onBlur: function onBlur() {
               if (value && validate) {
                  validate(value);
               } else {
                  _moment2.default.locale("ru");
                  var formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
                  if ((0, _moment2.default)(value, formats).isValid()) {
                     _onChange && _onChange((0, _moment2.default)(value, formats).format("DD.MM.YYYY"));
                  } else {
                     _onChange && _onChange((0, _moment2.default)().format("DD.MM.YYYY"));
                  }
               }
            },
            disableOnClickOutside: true,
            inputProps: inputProps || { placeholder: "дд.мм.гггг" } });
      }
   }]);

   return DatePicker;
}(_react.PureComponent);

DatePicker.propTypes = {
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   validate: _propTypes2.default.func,
   inputProps: _propTypes2.default.object
};

exports.default = DatePicker;