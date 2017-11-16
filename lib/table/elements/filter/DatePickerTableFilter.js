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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var errorFontSize = { fontSize: 11 };

var DatePickerTableFilter = function (_Component) {
   _inherits(DatePickerTableFilter, _Component);

   function DatePickerTableFilter(props, context) {
      _classCallCheck(this, DatePickerTableFilter);

      var _this = _possibleConstructorReturn(this, (DatePickerTableFilter.__proto__ || Object.getPrototypeOf(DatePickerTableFilter)).call(this, props, context));

      var value = props.value,
          delay = props.delay;

      _this.state = {
         value: value,
         validValue: value,
         hasError: false
      };
      _this.filter = _this.filter.bind(_this);
      _this.validateDate = _this.validateDate.bind(_this);
      _this.validate = _this.validate.bind(_this);
      _this.validateDateAndOnChange = _this.validateDateAndOnChange.bind(_this);
      _this.request = (0, _debounce2.default)(_this.validateDateAndOnChange, delay || 800);
      return _this;
   }

   _createClass(DatePickerTableFilter, [{
      key: 'validateDate',
      value: function validateDate(date) {
         return date === "" || (0, _moment2.default)(date, "DD.MM.YYYY", true).isValid();
      }
   }, {
      key: 'filter',
      value: function filter(value) {
         this.request(value);
      }
   }, {
      key: 'validateDateAndOnChange',
      value: function validateDateAndOnChange(value) {
         var _state = this.state,
             valueFromState = _state.value,
             validValue = _state.validValue;


         if (!this.validate(value)) {
            return;
         }

         var onChange = this.props.onChange;

         if (value !== valueFromState && value !== validValue && onChange) {
            onChange(value);
         }

         this.setState({
            value: value,
            hasError: false,
            validValue: value
         });
      }
   }, {
      key: 'validate',
      value: function validate(date) {
         if (this.validateDate(date)) {
            return true;
         }

         var validValue = this.state.validValue;

         this.setState({
            value: date,
            hasError: true,
            validValue: validValue
         });
         return false;
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             className = _props.className,
             inputProps = _props.inputProps,
             id = _props.id,
             errorClassName = _props.errorClassName,
             errorText = _props.errorText;
         var _state2 = this.state,
             value = _state2.value,
             hasError = _state2.hasError;


         return _react2.default.createElement(
            'div',
            { className: (0, _classnames2.default)("table-filter table-filter_date", hasError ? errorClassName || "has-error" : "") },
            _react2.default.createElement(_DatePicker2.default, { id: id,
               value: value,
               onChange: this.filter,
               className: className,
               inputProps: inputProps,
               validate: this.validateDate }),
            hasError && _react2.default.createElement(
               'p',
               { className: 'help-block has-error',
                  style: errorFontSize },
               errorText || "Не соответствует формату - ДД.ММ.ГГГГ"
            )
         );
      }
   }]);

   return DatePickerTableFilter;
}(_react.Component);

DatePickerTableFilter.defaultProps = {
   value: "",
   validValue: ""
};

DatePickerTableFilter.propTypes = {
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   onChange: _propTypes2.default.func.isRequired,
   value: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   inputProps: _propTypes2.default.object,
   delay: _propTypes2.default.number,
   errorClassName: _propTypes2.default.string,
   errorText: _propTypes2.default.node
};

exports.default = DatePickerTableFilter;