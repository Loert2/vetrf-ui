'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Select = require('../../simple/select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectFormGroup = function SelectFormGroup(props) {
   var labelText = props.labelText,
       require = props.require,
       disabled = props.disabled,
       help = props.help,
       errorClassName = props.errorClassName,
       additionalBlock = props.additionalBlock,
       errorText = props.errorText,
       hasError = props.hasError,
       labelClassName = props.labelClassName,
       fieldClassName = props.fieldClassName,
       multiple = props.multiple,
       value = props.value,
       name = props.name,
       id = props.id,
       style = props.style,
       styleInput = props.styleInput,
       options = props.options,
       _onChange = props.onChange,
       valueKey = props.valueKey,
       labelKey = props.labelKey,
       className = props.className,
       placeholder = props.placeholder,
       field = props.field;


   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: labelText,
         require: require,
         help: help,
         hasError: hasError,
         errorClassName: errorClassName,
         additionalBlock: additionalBlock,
         errorText: errorText,
         labelClassName: labelClassName,
         fieldClassName: fieldClassName },
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
         disabled: disabled,
         placeholder: placeholder })
   );
};

SelectFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   errorClassName: _propTypes2.default.string,
   labelClassName: _propTypes2.default.string,
   fieldClassName: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   help: _propTypes2.default.node,
   hasError: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   disabled: _propTypes2.default.bool,
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

exports.default = (0, _withValidate2.default)(SelectFormGroup);