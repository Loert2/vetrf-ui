'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../simple/select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _validateUtils = require('../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectFormGroup = function (_PureComponent) {
   _inherits(SelectFormGroup, _PureComponent);

   function SelectFormGroup(props) {
      _classCallCheck(this, SelectFormGroup);

      var _this = _possibleConstructorReturn(this, (SelectFormGroup.__proto__ || Object.getPrototypeOf(SelectFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(SelectFormGroup, [{
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
             errorClassName = _props.errorClassName,
             additionalBlock = _props.additionalBlock,
             errorText = _props.errorText,
             multiple = _props.multiple,
             value = _props.value,
             name = _props.name,
             id = _props.id,
             style = _props.style,
             styleInput = _props.styleInput,
             options = _props.options,
             _onChange = _props.onChange,
             valueKey = _props.valueKey,
             labelKey = _props.labelKey,
             className = _props.className,
             placeholder = _props.placeholder,
             field = _props.field;

         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               hasError: this.state.hasError,
               errorClassName: errorClassName,
               additionalBlock: additionalBlock,
               errorText: errorText },
            _react2.default.createElement(_Select2.default, { multi: multiple,
               value: value,
               name: name,
               id: id,
               style: style,
               styleInput: styleInput,
               options: options,
               onChange: function onChange(value) {
                  return _onChange && _onChange(value, field);
               },
               valueKey: valueKey,
               labelKey: labelKey,
               className: className,
               placeholder: placeholder })
         );
      }
   }]);

   return SelectFormGroup;
}(_react.PureComponent);

SelectFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   errorClassName: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   help: _propTypes2.default.node,
   showError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   multiple: _propTypes2.default.bool,
   validate: _propTypes2.default.bool,
   value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
   field: _propTypes2.default.string,
   style: _propTypes2.default.object,
   styleInput: _propTypes2.default.object,
   valueKey: _propTypes2.default.string,
   labelKey: _propTypes2.default.string,
   className: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   options: _propTypes2.default.array,
   additionalBlock: _propTypes2.default.node,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   onChange: _propTypes2.default.func
};

exports.default = SelectFormGroup;