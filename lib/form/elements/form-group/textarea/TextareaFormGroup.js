'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Textarea = require('../../simple/textarea/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaFormGroup = function TextareaFormGroup(props) {
   var labelText = props.labelText,
       require = props.require,
       help = props.help,
       additionalBlock = props.additionalBlock,
       value = props.value,
       errorText = props.errorText,
       hasError = props.hasError,
       id = props.id,
       name = props.name,
       style = props.style,
       disabled = props.disabled,
       _onChange = props.onChange,
       className = props.className,
       placeholder = props.placeholder,
       field = props.field;

   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: labelText,
         require: require,
         help: help,
         additionalBlock: additionalBlock,
         hasError: hasError,
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
};

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
   hasError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func
};

exports.default = (0, _withValidate2.default)(TextareaFormGroup);