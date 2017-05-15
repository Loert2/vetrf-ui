'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _Switch = require('../simple/switch/Switch');

var _Switch2 = _interopRequireDefault(_Switch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwitchFormGroup = function SwitchFormGroup(props) {
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: props.labelText, help: props.help, additionalBlock: props.additionalBlock },
      _react2.default.createElement(_Switch2.default, { id: props.id,
         name: props.name,
         value: props.value,
         style: props.style,
         disabled: props.disabled,
         onChange: props.onChange,
         className: props.className,
         text: props.text })
   );
};

SwitchFormGroup.propTypes = {
   value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   text: _propTypes2.default.string,
   style: _propTypes2.default.object,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.string,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string
};

exports.default = SwitchFormGroup;