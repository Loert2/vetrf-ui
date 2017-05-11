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

var _RadioBtn = require('../../../form/elements/simple/RadioBtn');

var _RadioBtn2 = _interopRequireDefault(_RadioBtn);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioBtnFormGroup = function RadioBtnFormGroup(props) {
   var additionalBlock = props.additionalBlock,
       labelText = props.labelText,
       require = props.require,
       help = props.help,
       options = props.options,
       value = props.value,
       onChange = props.onChange;

   var radioBtnGroup = options.map(function (item) {
      return _react2.default.createElement(
         'div',
         { key: (0, _uniqueId2.default)() },
         _react2.default.createElement(_RadioBtn2.default, { id: item.id,
            name: props.name,
            value: item.value,
            onChange: onChange,
            className: item.className,
            text: item.text,
            checked: value === item.value,
            disabled: item.disabled })
      );
   });
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: labelText, require: require, help: help, additionalBlock: additionalBlock },
      radioBtnGroup
   );
};

RadioBtnFormGroup.propTypes = {
   options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string,
      value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
   })),
   name: _propTypes2.default.string,
   value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   help: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   require: _propTypes2.default.bool
};

exports.default = RadioBtnFormGroup;