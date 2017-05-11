'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../../../form/elements/simple/date/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateFormGroup = function DateFormGroup(props) {
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: props.labelText, require: props.require, help: props.help, additionalBlock: props.additionalBlock },
      _react2.default.createElement(_DatePicker2.default, { value: props.value,
         id: props.id,
         onChange: props.onChange,
         className: props.className })
   );
};

DateFormGroup.propTypes = {
   value: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   id: _propTypes2.default.string,
   help: _propTypes2.default.string,
   require: _propTypes2.default.bool,
   onChange: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   className: _propTypes2.default.string
};

exports.default = DateFormGroup;