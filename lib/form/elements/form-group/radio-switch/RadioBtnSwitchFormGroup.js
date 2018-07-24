'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _RadioBtn = require('../../simple/radio/RadioBtn');

var _RadioBtn2 = _interopRequireDefault(_RadioBtn);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
* Компонент-переключатель из двух радио-кнопок - true или false, по умолчанию не выбрано ничего.
* */
var RadioBtnSwitchFormGroup = function RadioBtnSwitchFormGroup(props) {
   var additionalBlock = props.additionalBlock,
       labelText = props.labelText,
       require = props.require,
       help = props.help,
       itemTrue = props.itemTrue,
       itemFalse = props.itemFalse,
       value = props.value,
       name = props.name,
       _onChange = props.onChange,
       errorText = props.errorText,
       hasError = props.hasError,
       field = props.field,
       disabled = props.disabled,
       id = props.id;

   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: labelText,
         require: require,
         help: help,
         additionalBlock: additionalBlock,
         hasError: hasError,
         errorText: errorText },
      _react2.default.createElement(
         'div',
         null,
         _react2.default.createElement(_RadioBtn2.default, { id: itemTrue.id || id && id + '_true',
            name: name,
            value: 'true',
            onChange: function onChange() {
               return _onChange && _onChange(true, field);
            },
            className: itemTrue.className || "ace form-control",
            text: itemTrue.text || "Да",
            checked: value === true,
            disabled: disabled })
      ),
      _react2.default.createElement(
         'div',
         null,
         _react2.default.createElement(_RadioBtn2.default, { id: itemFalse.id || id && id + '_false',
            name: name,
            value: 'false',
            onChange: function onChange() {
               return _onChange && _onChange(false, field);
            },
            className: itemFalse.className || "ace form-control",
            text: itemFalse.text || "Нет",
            checked: value === false,
            disabled: disabled })
      )
   );
};

RadioBtnSwitchFormGroup.propTypes = {
   itemTrue: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string
   }),
   itemFalse: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string
   }),
   name: _propTypes2.default.string,
   field: _propTypes2.default.string,
   value: _propTypes2.default.bool,
   help: _propTypes2.default.node,
   labelText: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   onChange: _propTypes2.default.func,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   showError: _propTypes2.default.bool,
   disabled: _propTypes2.default.bool,
   hasError: _propTypes2.default.bool,
   require: _propTypes2.default.bool
};

RadioBtnSwitchFormGroup.defaultProps = {
   itemTrue: {},
   itemFalse: {}
};

exports.default = (0, _withValidate2.default)(RadioBtnSwitchFormGroup);