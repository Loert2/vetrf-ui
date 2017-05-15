'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Textarea = require('../simple/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TextareaFormGroup = function TextareaFormGroup(props) {
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: props.labelText,
         require: props.require,
         help: props.help,
         additionalBlock: props.additionalBlock,
         hasError: props.hasError || props.validate && props.require && !props.value,
         errorText: props.errorText },
      _react2.default.createElement(_Textarea2.default, { value: props.value,
         id: props.id,
         name: props.name,
         style: props.style,
         disabled: props.disabled,
         onChange: props.onChange,
         className: props.className || "form-control",
         placeholder: props.placeholder
      })
   );
};

TextareaFormGroup.propTypes = {
   value: _propTypes2.default.string,
   name: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   style: _propTypes2.default.object,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   help: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   additionalBlock: _propTypes2.default.node,
   require: _propTypes2.default.bool,
   hasError: _propTypes2.default.bool,
   validate: _propTypes2.default.bool
};

exports.default = TextareaFormGroup;