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
      _this.getNewComplexDate = _this.getNewComplexDate.bind(_this);
      return _this;
   }

   _createClass(ComplexDate, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         var _props = this.props,
             _props$format = _props.format,
             format = _props$format === undefined ? {} : _props$format,
             formatPath = _props.formatPath,
             onChange = _props.onChange;

         if ((0, _isEmpty2.default)(format)) {
            onChange && onChange(_momentUtils.defaultFormat, formatPath);
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
             formatPath = _props2.formatPath;
         var _nextProps$format = nextProps.format,
             newFormat = _nextProps$format === undefined ? {} : _nextProps$format;

         if (!newFormat) {
            onChange && onChange(_momentUtils.defaultFormat, formatPath);
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
      value: function updateDateFormat() {
         var newFormat = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
         var _props3 = this.props,
             onChange = _props3.onChange,
             formatField = _props3.formatField,
             singleDateField = _props3.singleDateField,
             beginDateField = _props3.beginDateField,
             endDateField = _props3.endDateField,
             _props3$complexDate = _props3.complexDate,
             complexDate = _props3$complexDate === undefined ? {} : _props3$complexDate,
             complexDatePath = _props3.complexDatePath;

         var newComplexDate = _extends({}, complexDate, _defineProperty({}, formatField, newFormat));
         newComplexDate.view = (0, _momentUtils.getFormattedComplexDateView)(newComplexDate, beginDateField, endDateField, singleDateField);
         onChange && onChange(newComplexDate, complexDatePath);
      }
   }, {
      key: 'toggleForm',
      value: function toggleForm() {
         var _this2 = this;

         var _props4 = this.props,
             onChange = _props4.onChange,
             singleDate = _props4.singleDate,
             beginDate = _props4.beginDate,
             singleDateField = _props4.singleDateField,
             beginDateField = _props4.beginDateField,
             endDateField = _props4.endDateField,
             _props4$complexDate = _props4.complexDate,
             complexDate = _props4$complexDate === undefined ? {} : _props4$complexDate,
             complexDatePath = _props4.complexDatePath;


         var isInterval = !this.state.isInterval;
         this.setState(function (oldState) {
            if (onChange) {
               var newComplexDate = void 0;
               if (isInterval) {
                  var _extends3;

                  newComplexDate = _extends({}, complexDate, (_extends3 = {}, _defineProperty(_extends3, beginDateField, singleDate), _defineProperty(_extends3, singleDateField, null), _extends3));
               } else {
                  var _extends4;

                  newComplexDate = _extends({}, complexDate, (_extends4 = {}, _defineProperty(_extends4, singleDateField, beginDate), _defineProperty(_extends4, beginDateField, null), _defineProperty(_extends4, endDateField, null), _extends4));
               }
               newComplexDate.view = (0, _momentUtils.getFormattedComplexDateView)(newComplexDate, beginDateField, endDateField, singleDateField);
               onChange(newComplexDate, complexDatePath);
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
         var _props5 = this.props,
             _props5$storeFormat = _props5.storeFormat,
             storeFormat = _props5$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props5$storeFormat,
             _props5$format = _props5.format,
             format = _props5$format === undefined ? _momentUtils.defaultFormat : _props5$format;

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
         var _this4 = this;

         var _props6 = this.props,
             onChange = _props6.onChange,
             complexDatePath = _props6.complexDatePath;

         return function (value) {
            return onChange && onChange(_this4.getNewComplexDate(value, field), complexDatePath);
         };
      }
   }, {
      key: 'getNewComplexDate',
      value: function getNewComplexDate(value, field) {
         var _props7 = this.props,
             _props7$storeFormat = _props7.storeFormat,
             storeFormat = _props7$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props7$storeFormat,
             _props7$format = _props7.format,
             format = _props7$format === undefined ? _momentUtils.defaultFormat : _props7$format,
             _props7$complexDate = _props7.complexDate,
             complexDate = _props7$complexDate === undefined ? {} : _props7$complexDate,
             singleDateField = _props7.singleDateField,
             beginDateField = _props7.beginDateField,
             endDateField = _props7.endDateField;


         var newComplexDate = _extends({}, complexDate, _defineProperty({}, field, (0, _momentUtils.formatValue)(value, format, storeFormat)));
         newComplexDate.view = (0, _momentUtils.getFormattedComplexDateView)(newComplexDate, beginDateField, endDateField, singleDateField);

         return newComplexDate;
      }
   }, {
      key: 'render',
      value: function render() {
         var _state2 = this.state,
             isInterval = _state2.isInterval,
             hasError = _state2.hasError;
         var _props8 = this.props,
             singleDate = _props8.singleDate,
             beginDate = _props8.beginDate,
             endDate = _props8.endDate,
             singleDateField = _props8.singleDateField,
             beginDateField = _props8.beginDateField,
             endDateField = _props8.endDateField,
             help = _props8.help,
             formatPlaceholder = _props8.formatPlaceholder,
             errorText = _props8.errorText,
             _props8$format = _props8.format,
             format = _props8$format === undefined ? _momentUtils.defaultFormat : _props8$format,
             _props8$storeFormat = _props8.storeFormat,
             storeFormat = _props8$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props8$storeFormat,
             formatList = _props8.formatList;


         var dateForm = null;
         if (isInterval) {
            dateForm = _react2.default.createElement(_DateRange2.default, { beginChange: this.getChangeDateHandler(beginDateField),
               beginDate: (0, _momentUtils.formatValue)(beginDate, storeFormat, format),
               endChange: this.getChangeDateHandler(endDateField),
               endDate: (0, _momentUtils.formatValue)(endDate, storeFormat, format),
               dateFormat: format.dateFormat,
               validateBegin: this.validateFormat("isValidBeginDate"),
               validateEnd: this.validateFormat("isValidEndDate"),
               timeFormat: format.timeFormat });
         } else {
            dateForm = _react2.default.createElement(_index.DatePicker, { value: (0, _momentUtils.formatValue)(singleDate, storeFormat, format),
               dateFormat: format.dateFormat,
               onChange: this.getChangeDateHandler(singleDateField),
               validate: this.validateFormat("isValidSingleDate"),
               timeFormat: format.timeFormat,
               inputProps: defaultPlaceholder });
         }

         var showError = hasError || !this.isValid();

         return _react2.default.createElement(
            'div',
            { className: 'complex-date' },
            _react2.default.createElement(
               'div',
               { className: 'complex-date__format' },
               _react2.default.createElement(_index.Select, { options: formatList,
                  valueKey: 'id',
                  labelKey: 'view',
                  inputProps: formatInputProps,
                  clearable: false,
                  onChange: this.updateDateFormat,
                  value: format,
                  placeholder: formatPlaceholder || "Формат даты..." })
            ),
            _react2.default.createElement(
               'div',
               { className: (0, _classnames2.default)("form-group complex-date__date", showError && "has-error") },
               dateForm,
               showError && _react2.default.createElement(
                  'p',
                  { className: 'help-block has-error' },
                  this.isValid() ? errorText : notValidFormatText
               )
            ),
            _react2.default.createElement(
               'div',
               { className: 'complex-date__switch' },
               _react2.default.createElement(
                  'span',
                  { className: 'option-switch__element option-switch__element--text' },
                  '\u0434\u0430\u0442\u0430'
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
                  '\u043F\u0435\u0440\u0438\u043E\u0434'
               )
            )
         );
      }
   }]);

   return ComplexDate;
}(_react.Component);

ComplexDate.propTypes = {
   complexDate: _propTypes2.default.shape({
      singleDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
      beginDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
      endDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
      format: _propTypes2.default.object
   }),
   singleDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   beginDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   endDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   singleDatePath: _propTypes2.default.string,
   beginDatePath: _propTypes2.default.string,
   help: _propTypes2.default.string,
   formatPlaceholder: _propTypes2.default.string,
   format: _propTypes2.default.object,
   storeFormat: _propTypes2.default.object,
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   formatPath: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   showError: _propTypes2.default.bool,
   endDatePath: _propTypes2.default.string,
   complexDatePath: _propTypes2.default.string,
   singleDateField: _propTypes2.default.string,
   beginDateField: _propTypes2.default.string,
   endDateField: _propTypes2.default.string,
   formatField: _propTypes2.default.string
};

ComplexDate.defaultProps = {};

exports.default = ComplexDate;