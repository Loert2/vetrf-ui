'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Checkbox = require('../../../form/elements/simple/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Одиночный checkbox
* */
var CheckboxFormGroup = function CheckboxFormGroup(props) {
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: props.labelText,
         require: props.require,
         help: props.help,
         additionalBlock: props.additionalBlock,
         hasError: props.hasError || props.validate && props.require && !props.value,
         errorText: props.errorText },
      _react2.default.createElement(_Checkbox2.default, { name: props.name,
         id: props.id,
         value: props.value,
         style: props.style,
         disabled: props.disabled,
         onKeyPress: props.onEnter,
         onChange: props.onChange,
         className: props.className || "form-control" })
   );
};

CheckboxFormGroup.propTypes = {
   value: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   help: _propTypes2.default.string,
   style: _propTypes2.default.object,
   require: _propTypes2.default.bool,
   hasError: _propTypes2.default.bool,
   validate: _propTypes2.default.bool,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string
};

exports.default = CheckboxFormGroup;