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

var _simple = require('../../../simple');

var _validateUtils = require('../../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getOnChange = function getOnChange(onChange, path) {
   return function (value) {
      return onChange && onChange(value, path);
   };
};

var getDefaultInvalidFormatMessage = function getDefaultInvalidFormatMessage(formatView) {
   return '\u0412\u0432\u0435\u0434\u0435\u043D\u043D\u0430\u044F \u0434\u0430\u0442\u0430 \u043D\u0435 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u0435\u0442 \u0444\u043E\u0440\u043C\u0430\u0442\u0443 - ' + formatView;
};

var getFormatView = function getFormatView(dateFormat, timeFormat, viewFormat) {
   if (viewFormat) return viewFormat;
   if (dateFormat || timeFormat) return dateFormat + ' ' + (timeFormat || '');
   return 'ДД.ММ.ГГГГ';
};

var DateRangeFormGroup = function (_Component) {
   _inherits(DateRangeFormGroup, _Component);

   function DateRangeFormGroup(props, context) {
      _classCallCheck(this, DateRangeFormGroup);

      var _this = _possibleConstructorReturn(this, (DateRangeFormGroup.__proto__ || Object.getPrototypeOf(DateRangeFormGroup)).call(this, props, context));

      _this.validateFormat = _this.validateFormat.bind(_this);
      _this.state = {
         isValid: true,
         hasError: false
      };
      return _this;
   }

   _createClass(DateRangeFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var _state = this.state,
             isValid = _state.isValid,
             oldHasError = _state.hasError;
         var require = nextProps.require,
             dateFormat = nextProps.dateFormat,
             timeFormat = nextProps.timeFormat,
             viewFormat = nextProps.viewFormat,
             beginDate = nextProps.beginDate,
             endDate = nextProps.endDate;


         var format = getFormatView(dateFormat, timeFormat, viewFormat);
         var defaultValidate = function defaultValidate() {
            return !isValid || require && !beginDate && !endDate;
         };

         var hasError = (0, _validateUtils2.default)(nextProps, defaultValidate, oldHasError, getDefaultInvalidFormatMessage(format));
         if (hasError !== oldHasError) {
            this.setState({
               hasError: hasError,
               isValid: isValid
            });
         }
      }
   }, {
      key: 'validateFormat',
      value: function validateFormat(value) {
         this.setState(_extends({}, this.state, {
            isValid: (0, _validateUtils.isValidDate)(value) || (0, _isEmpty2.default)(value)
         }));
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             labelText = _props.labelText,
             require = _props.require,
             help = _props.help,
             additionalBlock = _props.additionalBlock,
             id = _props.id,
             onChange = _props.onChange,
             className = _props.className,
             errorText = _props.errorText,
             beginDatePath = _props.beginDatePath,
             endDatePath = _props.endDatePath,
             dateFormat = _props.dateFormat,
             timeFormat = _props.timeFormat,
             viewFormat = _props.viewFormat,
             beginDate = _props.beginDate,
             endDate = _props.endDate,
             height = _props.height,
             invalidFormatMessage = _props.invalidFormatMessage,
             placeholder = _props.placeholder,
             fieldClassName = _props.fieldClassName,
             labelClassName = _props.labelClassName;
         var _state2 = this.state,
             isValid = _state2.isValid,
             hasError = _state2.hasError;

         var format = getFormatView(dateFormat, timeFormat, viewFormat);

         return _react2.default.createElement(
            _index.FormGroup,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               errorText: isValid ? errorText : invalidFormatMessage || getDefaultInvalidFormatMessage(format),
               hasError: !isValid || hasError,
               fieldClassName: fieldClassName,
               labelClassName: labelClassName },
            _react2.default.createElement(_simple.DateRange, { id: id,
               className: className,
               dateFormat: dateFormat,
               timeFormat: timeFormat,
               beginChange: getOnChange(onChange, beginDatePath),
               endChange: getOnChange(onChange, endDatePath),
               beginDate: beginDate,
               endDate: endDate,
               height: height,
               placeholder: placeholder,
               validate: this.validateFormat })
         );
      }
   }]);

   return DateRangeFormGroup;
}(_react.Component);

DateRangeFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   require: _propTypes2.default.bool,
   help: _propTypes2.default.string,
   additionalBlock: _propTypes2.default.node,
   id: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   beginDatePath: _propTypes2.default.string,
   endDatePath: _propTypes2.default.string,
   dateFormat: _propTypes2.default.string,
   timeFormat: _propTypes2.default.string,
   viewFormat: _propTypes2.default.string,
   fieldClassName: _propTypes2.default.string,
   labelClassName: _propTypes2.default.string,
   invalidFormatMessage: _propTypes2.default.string,
   beginDate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
   endDate: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.object]),
   height: _propTypes2.default.string,
   placeholder: _propTypes2.default.string
};

DateRangeFormGroup.defaultProps = {};

exports.default = DateRangeFormGroup;