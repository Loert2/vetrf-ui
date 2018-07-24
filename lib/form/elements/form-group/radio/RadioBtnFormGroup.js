'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _RadioBtn = require('../../simple/radio/RadioBtn');

var _RadioBtn2 = _interopRequireDefault(_RadioBtn);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RadioBtnFormGroup = function RadioBtnFormGroup(props) {
   var additionalBlock = props.additionalBlock,
       labelText = props.labelText,
       require = props.require,
       help = props.help,
       options = props.options,
       value = props.value,
       name = props.name,
       _onChange = props.onChange,
       errorText = props.errorText,
       hasError = props.hasError,
       field = props.field;

   var radioBtnGroup = options.map(function (item) {
      return _react2.default.createElement(
         'div',
         { key: (0, _uniqueId2.default)() },
         _react2.default.createElement(_RadioBtn2.default, { id: item.id,
            name: name,
            value: item.value,
            onChange: function onChange(value) {
               return _onChange && _onChange(value, field);
            },
            className: item.className,
            text: item.text,
            checked: value === item.value,
            disabled: item.disabled })
      );
   });
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: labelText,
         require: require,
         help: help,
         additionalBlock: additionalBlock,
         hasError: hasError,
         errorText: errorText },
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
   field: _propTypes2.default.string,
   value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.node,
   errorText: _propTypes2.default.node,
   hasError: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   require: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node
};

exports.default = (0, _withValidate2.default)(RadioBtnFormGroup);