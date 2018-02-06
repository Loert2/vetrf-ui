'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../../index');

var _moment = require('moment/moment');

var _moment2 = _interopRequireDefault(_moment);

var _DateRange = require('../date-range/DateRange');

var _DateRange2 = _interopRequireDefault(_DateRange);

var _validateUtils = require('../../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _setIn = require('../../../../utils/setIn');

var _setIn2 = _interopRequireDefault(_setIn);

var _momentUtils = require('../../../../utils/moment-utils');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var notValidFormatText = "Введенная дата не соотвествует выбранному формату";
var defaultPlaceholder = { placeholder: "" };

var formatInputProps = { style: { height: "32px" } };

var ComplexDate = function (_Component) {
   _inherits(ComplexDate, _Component);

   function ComplexDate(props, context) {
      _classCallCheck(this, ComplexDate);

      var _this = _possibleConstructorReturn(this, (ComplexDate.__proto__ || Object.getPrototypeOf(ComplexDate)).call(this, props, context));

      _this.state = {
         isInterval: false,
         isValidSingleDate: true,
         isValidBeginDate: true,
         isValidEndDate: true,
         hasError: false
      };

      _this.toggleForm = _this.toggleForm.bind(_this);
      _this.validateFormat = _this.validateFormat.bind(_this);
      _this.updateDateFormat = _this.updateDateFormat.bind(_this);
      _this.isValid = _this.isValid.bind(_this);
      _this.getChangeDateHandler = _this.getChangeDateHandler.bind(_this);
      _this.postToggleValidate = _this.postToggleValidate.bind(_this);
      return _this;
   }

   _createClass(ComplexDate, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         var _props = this.props,
             _props$format = _props.format,
             format = _props$format === undefined ? {} : _props$format,
             formatField = _props.formatField,
             onChange = _props.onChange;

         if ((0, _isEmpty2.default)(format)) {
            onChange && onChange(_momentUtils.defaultFormat, formatField);
         }
      }
   }, {
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var hasError = this.state.hasError;

         var isValid = this.isValid();
         var nextHasError = (0, _validateUtils2.default)(nextProps, function () {
            return !isValid || nextProps.require && !nextProps.value;
         }, hasError, notValidFormatText);
         if (nextHasError !== this.state.hasError) {
            this.setState(_extends({}, this.state, {
               hasError: nextHasError
            }));
         }
         var _props2 = this.props,
             onChange = _props2.onChange,
             formatField = _props2.formatField;
         var _nextProps$format = nextProps.format,
             newFormat = _nextProps$format === undefined ? {} : _nextProps$format;

         if (!newFormat) {
            onChange && onChange(_momentUtils.defaultFormat, formatField);
         }
      }
   }, {
      key: 'isValid',
      value: function isValid() {
         var _state = this.state,
             isValidSingleDate = _state.isValidSingleDate,
             isValidBeginDate = _state.isValidBeginDate,
             isValidEndDate = _state.isValidEndDate,
             isInterval = _state.isInterval;

         return isInterval ? isValidBeginDate && isValidEndDate : isValidSingleDate;
      }
   }, {
      key: 'updateDateFormat',
      value: function updateDateFormat(value, field) {
         var oldFormat = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
         var newFormat = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : {};
         var isValidField = arguments[4];
         var onChange = this.props.onChange;

         var newFormatDate = (0, _moment2.default)(value, [oldFormat.view]).format(newFormat.view);
         var isEmptyValue = (0, _isEmpty2.default)(value);
         var isValid = (0, _moment2.default)(newFormatDate, newFormat.view, true).isValid() || isEmptyValue;
         if (!isValid || isEmptyValue) {
            newFormatDate = value;
         }
         onChange && onChange(newFormatDate, field);
         this.setState(function (oldState) {
            return (0, _setIn2.default)(oldState, isValidField, isValid);
         });
      }
   }, {
      key: 'toggleForm',
      value: function toggleForm() {
         var _this2 = this;

         var _props3 = this.props,
             onChange = _props3.onChange,
             singleDate = _props3.singleDate,
             beginDate = _props3.beginDate,
             singleDateField = _props3.singleDateField,
             beginDateField = _props3.beginDateField,
             endDateField = _props3.endDateField;

         var isInterval = !this.state.isInterval;
         this.setState(function (oldState) {
            if (onChange) {
               if (isInterval) {
                  onChange(singleDate, beginDateField);
                  onChange(null, singleDateField);
               } else {
                  //TODO: это временно
                  onChange(beginDate, singleDateField);
                  onChange(null, beginDateField);
                  onChange(null, endDateField);
               }
            }
            return _extends({}, oldState, {
               isInterval: isInterval,
               isValidEndDate: true
            });
         }, function () {
            return _this2.postToggleValidate(isInterval, beginDate, singleDate);
         });
      }
   }, {
      key: 'postToggleValidate',
      value: function postToggleValidate(isInterval, beginDate, singleDate) {
         var _props4 = this.props,
             _props4$storeFormat = _props4.storeFormat,
             storeFormat = _props4$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props4$storeFormat,
             _props4$format = _props4.format,
             format = _props4$format === undefined ? _momentUtils.defaultFormat : _props4$format;

         if (isInterval) {
            this.validateFormat("isValidBeginDate")((0, _momentUtils.formatValue)(singleDate, storeFormat, format));
         } else {
            this.validateFormat("isValidSingleDate")((0, _momentUtils.formatValue)(beginDate, storeFormat, format));
         }
      }
   }, {
      key: 'validateFormat',
      value: function validateFormat(isValidField) {
         var _this3 = this;

         return function (value) {
            var _props$format2 = _this3.props.format,
                format = _props$format2 === undefined ? _momentUtils.defaultFormat : _props$format2;

            _this3.setState(function (oldState) {
               return _extends({}, oldState, _defineProperty({}, isValidField, (0, _moment2.default)(value, format.view, true).isValid() || (0, _isEmpty2.default)(value)));
            });
         };
      }
   }, {
      key: 'getChangeDateHandler',
      value: function getChangeDateHandler(field) {
         var _props5 = this.props,
             onChange = _props5.onChange,
             _props5$storeFormat = _props5.storeFormat,
             storeFormat = _props5$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props5$storeFormat,
             _props5$format = _props5.format,
             format = _props5$format === undefined ? _momentUtils.defaultFormat : _props5$format;

         return function (value) {
            return onChange && onChange((0, _momentUtils.formatValue)(value, format, storeFormat), field);
         };
      }
   }, {
      key: 'render',
      value: function render() {
         var _state2 = this.state,
             isInterval = _state2.isInterval,
             hasError = _state2.hasError;
         var _props6 = this.props,
             singleDate = _props6.singleDate,
             beginDate = _props6.beginDate,
             endDate = _props6.endDate,
             _onChange = _props6.onChange,
             singleDateField = _props6.singleDateField,
             beginDateField = _props6.beginDateField,
             endDateField = _props6.endDateField,
             help = _props6.help,
             formatPlaceholder = _props6.formatPlaceholder,
             errorText = _props6.errorText,
             _props6$format = _props6.format,
             format = _props6$format === undefined ? _momentUtils.defaultFormat : _props6$format,
             _props6$storeFormat = _props6.storeFormat,
             storeFormat = _props6$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props6$storeFormat,
             formatField = _props6.formatField,
             formatList = _props6.formatList;


         var dateForm = null;
         if (isInterval) {
            dateForm = _react2.default.createElement(_DateRange2.default, { beginChange: this.getChangeDateHandler(beginDateField),
               beginDate: (0, _momentUtils.formatValue)(beginDate, storeFormat, format),
               endChange: this.getChangeDateHandler(endDateField),
               endDate: (0, _momentUtils.formatValue)(endDate, storeFormat, format),
               dateFormat: format.dateFormat,
               validateBegin: this.validateFormat("isValidBeginDate"),
               validateEnd: this.validateFormat("isValidEndDate"),
               timeFormat: format.timeFormat || false });
         } else {
            dateForm = _react2.default.createElement(_index.DatePicker, { value: (0, _momentUtils.formatValue)(singleDate, storeFormat, format),
               dateFormat: format.dateFormat,
               onChange: this.getChangeDateHandler(singleDateField),
               validate: this.validateFormat("isValidSingleDate")
               //требует явно указать false, если не нужно время, null и undefined воспринимает как пустой шаблон
               , timeFormat: format.timeFormat || false,
               inputProps: defaultPlaceholder });
         }

         var showError = hasError || !this.isValid();

         return _react2.default.createElement(
            'div',
            { className: 'col-xs-12 no-padding' },
            _react2.default.createElement(
               'div',
               { className: 'col-xs-3 no-padding-left no-margin-bottom' },
               _react2.default.createElement(_index.Select, { options: formatList,
                  valueKey: 'id',
                  labelKey: 'view',
                  inputProps: formatInputProps,
                  clearable: false,
                  onChange: function onChange(format) {
                     return _onChange && _onChange(format, formatField);
                  },
                  value: format,
                  placeholder: formatPlaceholder || "Формат даты..." })
            ),
            _react2.default.createElement(
               'div',
               { className: (0, _classnames2.default)("col-xs-6 no-padding-right no-margin-bottom form-group", showError && "has-error") },
               dateForm,
               showError && _react2.default.createElement(
                  'p',
                  { className: 'help-block has-error' },
                  this.isValid() ? errorText : notValidFormatText
               )
            ),
            _react2.default.createElement(
               'div',
               { className: 'col-xs-3 option-switch pull-right no-padding-right' },
               _react2.default.createElement(
                  'span',
                  { className: 'option-switch__element option-switch__element--text' },
                  '\u0414\u0430\u0442\u0430'
               ),
               '\xA0',
               _react2.default.createElement(
                  'span',
                  { className: 'option-switch__element option-switch__element--switch' },
                  _react2.default.createElement(_index.Switch, { value: isInterval,
                     text: '',
                     onChange: this.toggleForm })
               ),
               '\xA0',
               _react2.default.createElement(
                  'span',
                  { className: 'option-switch__element option-switch__element--text' },
                  '\u0418\u043D\u0442\u0435\u0440\u0432\u0430\u043B'
               )
            ),
            help && _react2.default.createElement(
               'p',
               { className: 'help-block col-xs-12 no-padding' },
               help
            )
         );
      }
   }]);

   return ComplexDate;
}(_react.Component);

ComplexDate.propTypes = {
   singleDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   beginDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   endDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   singleDateField: _propTypes2.default.string,
   beginDateField: _propTypes2.default.string,
   help: _propTypes2.default.string,
   formatPlaceholder: _propTypes2.default.string,
   format: _propTypes2.default.object,
   storeFormat: _propTypes2.default.object,
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   formatField: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   showError: _propTypes2.default.bool,
   endDateField: _propTypes2.default.string
};

ComplexDate.defaultProps = {};

exports.default = ComplexDate;