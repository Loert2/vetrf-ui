'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../simple/input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _NumberInput = require('../simple/input/NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _Select = require('../simple/select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _validateUtils = require('../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputSelectFormGroup = function (_PureComponent) {
   _inherits(InputSelectFormGroup, _PureComponent);

   function InputSelectFormGroup(props) {
      _classCallCheck(this, InputSelectFormGroup);

      var _this = _possibleConstructorReturn(this, (InputSelectFormGroup.__proto__ || Object.getPrototypeOf(InputSelectFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(InputSelectFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var hasError = (0, _validateUtils2.default)(nextProps, function () {
            return nextProps.require && (!nextProps.input.value || !nextProps.select.value);
         }, this.state.hasError);
         if (hasError !== this.state.hasError) {
            this.setState({
               hasError: hasError
            });
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             labelText = _props.labelText,
             require = _props.require,
             help = _props.help,
             input = _props.input,
             select = _props.select,
             additionalBlock = _props.additionalBlock,
             errorText = _props.errorText;

         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               hasError: this.state.hasError,
               errorText: errorText },
            _react2.default.createElement(
               'div',
               { className: 'form-group row' },
               _react2.default.createElement(
                  'div',
                  { className: 'col-md-12 no-padding' },
                  _react2.default.createElement(
                     'span',
                     { className: 'col-md-6' },
                     input.number || input.float ? _react2.default.createElement(_NumberInput2.default, { name: input.name,
                        id: input.id,
                        maxLength: input.maxLength || 255,
                        value: input.value,
                        style: input.style,
                        autoFocus: input.autoFocus,
                        onFocus: input.onFocus,
                        disabled: input.disabled,
                        onKeyPress: input.onEnter,
                        onChange: function onChange(value) {
                           return input.onChange && input.onChange(value, input.field);
                        },
                        className: input.className || "form-control",
                        placeholder: input.placeholder,
                        float: input.float }) : _react2.default.createElement(_Input2.default, { type: input.type || "text", autocomplete: 'off',
                        name: input.name,
                        id: input.id,
                        maxLength: input.maxLength || 255,
                        value: input.value || "",
                        style: input.style,
                        autoFocus: input.autoFocus,
                        onFocus: input.onFocus,
                        disabled: input.disabled || "",
                        onKeyPress: input.onEnter,
                        onChange: function onChange(value) {
                           return input.onChange && input.onChange(value, input.field);
                        },
                        className: input.className || "form-control",
                        placeholder: input.placeholder })
                  ),
                  _react2.default.createElement(
                     'span',
                     { className: 'col-md-6' },
                     _react2.default.createElement(_Select2.default, { value: select.value,
                        name: select.name,
                        id: select.id,
                        style: select.style,
                        styleInput: select.styleInput,
                        options: select.options,
                        onChange: function onChange(value) {
                           return select.onChange && select.onChange(value, select.field);
                        },
                        valueKey: select.valueKey,
                        labelKey: select.labelKey,
                        className: select.className,
                        placeholder: select.placeholder })
                  )
               )
            )
         );
      }
   }]);

   return InputSelectFormGroup;
}(_react.PureComponent);

InputSelectFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   input: _propTypes2.default.shape({
      value: _propTypes2.default.string,
      field: _propTypes2.default.string,
      name: _propTypes2.default.string,
      id: _propTypes2.default.string,
      placeholder: _propTypes2.default.string,
      maxLength: _propTypes2.default.number,
      className: _propTypes2.default.string,
      style: _propTypes2.default.object,
      autoFocus: _propTypes2.default.bool,
      number: _propTypes2.default.bool,
      float: _propTypes2.default.bool,
      onFocus: _propTypes2.default.func,
      onEnter: _propTypes2.default.func,
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      onChange: _propTypes2.default.func
   }),
   select: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      value: _propTypes2.default.object,
      field: _propTypes2.default.string,
      style: _propTypes2.default.object,
      styleInput: _propTypes2.default.object,
      valueKey: _propTypes2.default.string,
      labelKey: _propTypes2.default.string,
      className: _propTypes2.default.string,
      placeholder: _propTypes2.default.string,
      options: _propTypes2.default.array,
      onChange: _propTypes2.default.func
   })
};

InputSelectFormGroup.defaultProps = { input: {}, select: {} };

exports.default = InputSelectFormGroup;