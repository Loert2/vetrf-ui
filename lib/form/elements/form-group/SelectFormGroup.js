'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../../form/elements/simple/select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectFormGroup = function SelectFormGroup(props) {
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: props.labelText,
         require: props.require,
         help: props.help,
         hasError: props.hasError || props.validate && props.require && !props.value,
         errorClassName: props.errorClassName,
         additionalBlock: props.additionalBlock,
         errorText: props.errorText },
      _react2.default.createElement(_Select2.default, { multi: props.multiple,
         value: props.value,
         name: props.name,
         id: props.id,
         style: props.style,
         styleInput: props.styleInput,
         options: props.options,
         onChange: props.onChange,
         valueKey: props.valueKey,
         labelKey: props.labelKey,
         className: props.className,
         placeholder: props.placeholder })
   );
};

SelectFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   errorClassName: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   hasError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   multiple: _propTypes2.default.bool,
   validate: _propTypes2.default.bool,
   value: _propTypes2.default.oneOfType([_propTypes2.default.array, _propTypes2.default.object]),
   style: _propTypes2.default.object,
   styleInput: _propTypes2.default.object,
   valueKey: _propTypes2.default.string,
   labelKey: _propTypes2.default.string,
   className: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   options: _propTypes2.default.array,
   additionalBlock: _propTypes2.default.node,
   onChange: _propTypes2.default.func
};

exports.default = SelectFormGroup;