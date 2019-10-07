'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Input = require('../../simple/input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputFormGroup = function InputFormGroup(props) {
   var labelText = props.labelText,
       require = props.require,
       help = props.help,
       additionalBlock = props.additionalBlock,
       value = props.value,
       errorText = props.errorText,
       hasError = props.hasError,
       type = props.type,
       name = props.name,
       id = props.id,
       maxLength = props.maxLength,
       style = props.style,
       autoFocus = props.autoFocus,
       onFocus = props.onFocus,
       disabled = props.disabled,
       onEnter = props.onEnter,
       _onChange = props.onChange,
       className = props.className,
       placeholder = props.placeholder,
       field = props.field,
       labelClassName = props.labelClassName,
       fieldClassName = props.fieldClassName;

   return _react2.default.createElement(
      _FormGroup2.default,
      {
         labelText: labelText,
         require: require,
         help: help,
         additionalBlock: additionalBlock,
         hasError: hasError,
         errorText: errorText,
         labelClassName: labelClassName,
         fieldClassName: fieldClassName },
      _react2.default.createElement(_Input2.default, {
         type: type || 'text',
         autocomplete: 'off',
         name: name,
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
         className: className || 'form-control',
         placeholder: placeholder
      })
   );
};

InputFormGroup.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   type: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.node,
   errorText: _propTypes2.default.node,
   placeholder: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   autoFocus: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   onFocus: _propTypes2.default.func,
   onEnter: _propTypes2.default.func,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string,
   labelClassName: _propTypes2.default.string,
   fieldClassName: _propTypes2.default.string
};

exports.default = (0, _withValidate2.default)(InputFormGroup);