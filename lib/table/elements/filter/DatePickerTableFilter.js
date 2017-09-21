'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _DatePicker = require('../../../form/elements/simple/date/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DatePickerTableFilter = function (_Component) {
   _inherits(DatePickerTableFilter, _Component);

   function DatePickerTableFilter(props, context) {
      _classCallCheck(this, DatePickerTableFilter);

      var _this = _possibleConstructorReturn(this, (DatePickerTableFilter.__proto__ || Object.getPrototypeOf(DatePickerTableFilter)).call(this, props, context));

      var value = props.value,
          onChange = props.onChange,
          delay = props.delay;

      _this.state = {
         value: value || ""
      };
      _this.filter = _this.filter.bind(_this);
      _this.validDate = _this.validDate.bind(_this);
      _this.request = (0, _debounce2.default)(onChange, delay || 800);
      return _this;
   }

   _createClass(DatePickerTableFilter, [{
      key: 'validDate',
      value: function validDate(value) {
         var formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
         return (0, _moment2.default)(value, formats, true).isValid();
      }
   }, {
      key: 'filter',
      value: function filter(value) {
         if (value !== this.state.value && (value === "" || this.validDate(value))) {
            this.setState({ value: value });
            var onChange = this.props.onChange;

            if (onChange) {
               this.request(value);
            }
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             className = _props.className,
             inputProps = _props.inputProps,
             id = _props.id,
             validate = _props.validate;
         var value = this.state.value;

         return _react2.default.createElement(_DatePicker2.default, { id: id,
            value: value,
            onChange: this.filter,
            className: className,
            inputProps: inputProps,
            validate: validate });
      }
   }]);

   return DatePickerTableFilter;
}(_react.Component);

DatePickerTableFilter.propTypes = {
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   validate: _propTypes2.default.func,
   inputProps: _propTypes2.default.object,
   delay: _propTypes2.default.number
};

exports.default = DatePickerTableFilter;