'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

var _DatePicker = require('../simple/date/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _validateUtils = require('../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DateFormGroup = function (_Component) {
   _inherits(DateFormGroup, _Component);

   function DateFormGroup(props, context) {
      _classCallCheck(this, DateFormGroup);

      var _this = _possibleConstructorReturn(this, (DateFormGroup.__proto__ || Object.getPrototypeOf(DateFormGroup)).call(this, props, context));

      _this.validateFormat = _this.validateFormat.bind(_this);
      _this.state = {
         isValid: true
      };
      return _this;
   }

   _createClass(DateFormGroup, [{
      key: 'validateFormat',
      value: function validateFormat(value) {
         if ((0, _moment2.default)(value, "DD.MM.YYYY").isValid()) {
            this.setState({ isValid: true });
         } else {
            this.setState({ isValid: false });
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             labelText = _props.labelText,
             require = _props.require,
             help = _props.help,
             additionalBlock = _props.additionalBlock,
             value = _props.value,
             id = _props.id,
             _onChange = _props.onChange,
             className = _props.className,
             errorText = _props.errorText,
             field = _props.field,
             validateDateFormat = _props.validateDateFormat;
         var isValid = this.state.isValid;

         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               errorText: isValid ? errorText : "Введенная дата не соотвествует формату - ДД.ММ.ГГГГ",
               hasError: !isValid || (0, _validateUtils2.default)(this.props, function () {
                  return require && !value;
               }) },
            _react2.default.createElement(_DatePicker2.default, { value: value,
               id: id,
               onChange: function onChange(value) {
                  return _onChange && _onChange(value, field);
               },
               className: className,
               validate: validateDateFormat && this.validateFormat })
         );
      }
   }]);

   return DateFormGroup;
}(_react.Component);

DateFormGroup.propTypes = {
   value: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   field: _propTypes2.default.string,
   id: _propTypes2.default.string,
   help: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   require: _propTypes2.default.bool,
   hasError: _propTypes2.default.bool,
   validate: _propTypes2.default.bool,
   validateDateFormat: _propTypes2.default.bool,
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string
};

exports.default = DateFormGroup;