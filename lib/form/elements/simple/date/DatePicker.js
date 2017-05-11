'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDatetime = require('react-datetime');

var _reactDatetime2 = _interopRequireDefault(_reactDatetime);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
* */
var DatePicker = function DatePicker(_ref) {
   var value = _ref.value,
       _onChange = _ref.onChange,
       className = _ref.className,
       inputProps = _ref.inputProps,
       id = _ref.id,
       validate = _ref.validate;
   return _react2.default.createElement(_reactDatetime2.default, { dateFormat: 'DD.MM.YYYY',
      id: id,
      locale: 'ru',
      value: value,
      onChange: function onChange(m) {
         return _onChange && _onChange(m && m.format ? m.format("DD.MM.YYYY") : m);
      },
      className: className,
      timeFormat: false,
      onBlur: function onBlur() {
         _moment2.default.locale("ru");
         var formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
         if ((0, _moment2.default)(value, formats).isValid()) {
            _onChange && _onChange((0, _moment2.default)(value, formats).format("DD.MM.YYYY"));
         } else {
            _onChange && _onChange((0, _moment2.default)().format("DD.MM.YYYY"));
         }
      },
      disableOnClickOutside: true,
      inputProps: inputProps || { placeholder: "дд.мм.гггг" } });
};

DatePicker.propTypes = {
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   inputProps: _propTypes2.default.object
};

exports.default = DatePicker;