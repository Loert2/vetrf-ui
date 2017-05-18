'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _NumberInput = require('../simple/input/NumberInput');

var _NumberInput2 = _interopRequireDefault(_NumberInput);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _validateUtils = require('../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NumberFormGroup = function (_PureComponent) {
   _inherits(NumberFormGroup, _PureComponent);

   function NumberFormGroup(props) {
      _classCallCheck(this, NumberFormGroup);

      var _this = _possibleConstructorReturn(this, (NumberFormGroup.__proto__ || Object.getPrototypeOf(NumberFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(NumberFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var hasError = (0, _validateUtils2.default)(nextProps, function () {
            return nextProps.require && !nextProps.value;
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
             additionalBlock = _props.additionalBlock,
             value = _props.value,
             errorText = _props.errorText,
             name = _props.name,
             id = _props.id,
             maxLength = _props.maxLength,
             style = _props.style,
             autoFocus = _props.autoFocus,
             onFocus = _props.onFocus,
             disabled = _props.disabled,
             onEnter = _props.onEnter,
             _onChange = _props.onChange,
             className = _props.className,
             placeholder = _props.placeholder,
             float = _props.float,
             field = _props.field;

         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               hasError: this.state.hasError,
               errorText: errorText },
            _react2.default.createElement(_NumberInput2.default, { name: name,
               id: id,
               maxLength: maxLength || 255,
               value: value,
               style: style,
               autoFocus: autoFocus,
               onFocus: onFocus,
               disabled: disabled,
               onKeyPress: onEnter,
               onChange: function onChange(value) {
                  return _onChange && _onChange(value, field);
               },
               className: className || "form-control",
               placeholder: placeholder,
               float: float })
         );
      }
   }]);

   return NumberFormGroup;
}(_react.PureComponent);

NumberFormGroup.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   help: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   autoFocus: _propTypes2.default.bool,
   float: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   onFocus: _propTypes2.default.func,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string
};

exports.default = NumberFormGroup;