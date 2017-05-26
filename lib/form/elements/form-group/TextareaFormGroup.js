'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('../simple/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _validateUtils = require('../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TextareaFormGroup = function (_PureComponent) {
   _inherits(TextareaFormGroup, _PureComponent);

   function TextareaFormGroup(props) {
      _classCallCheck(this, TextareaFormGroup);

      var _this = _possibleConstructorReturn(this, (TextareaFormGroup.__proto__ || Object.getPrototypeOf(TextareaFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(TextareaFormGroup, [{
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
             id = _props.id,
             name = _props.name,
             style = _props.style,
             disabled = _props.disabled,
             _onChange = _props.onChange,
             className = _props.className,
             placeholder = _props.placeholder,
             field = _props.field;

         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               hasError: this.state.hasError,
               errorText: errorText },
            _react2.default.createElement(_Textarea2.default, { value: value,
               id: id,
               name: name,
               style: style,
               disabled: disabled,
               onChange: function onChange(value) {
                  return _onChange && _onChange(value, field);
               },
               className: className || "form-control",
               placeholder: placeholder
            })
         );
      }
   }]);

   return TextareaFormGroup;
}(_react.PureComponent);

TextareaFormGroup.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   name: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   style: _propTypes2.default.object,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   help: _propTypes2.default.node,
   errorText: _propTypes2.default.node,
   additionalBlock: _propTypes2.default.node,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func
};

exports.default = TextareaFormGroup;