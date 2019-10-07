'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('../../simple/checkbox/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Одиночный checkbox
 * */
var CheckboxFormGroup = function CheckboxFormGroup(props) {
   var labelText = props.labelText,
       require = props.require,
       help = props.help,
       additionalBlock = props.additionalBlock,
       value = props.value,
       errorText = props.errorText,
       hasError = props.hasError,
       name = props.name,
       id = props.id,
       style = props.style,
       disabled = props.disabled,
       onEnter = props.onEnter,
       _onChange = props.onChange,
       className = props.className,
       field = props.field;

   return _react2.default.createElement(
      _FormGroup2.default,
      {
         labelText: labelText,
         require: require,
         help: help,
         additionalBlock: additionalBlock,
         hasError: hasError,
         errorText: errorText },
      _react2.default.createElement(_Checkbox2.default, {
         name: name,
         id: id,
         value: value,
         style: style,
         disabled: disabled,
         onKeyPress: onEnter,
         onChange: function onChange(value) {
            return _onChange && _onChange(value, field);
         },
         className: className || 'form-control'
      })
   );
};

CheckboxFormGroup.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   help: _propTypes2.default.node,
   hasError: _propTypes2.default.bool,
   style: _propTypes2.default.object,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string
};

exports.default = (0, _withValidate2.default)(CheckboxFormGroup);