'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Textarea = function Textarea(props) {
   return _react2.default.createElement('textarea', { type: 'text',
      id: props.id,
      name: props.name,
      value: props.value || "",
      style: props.style,
      disabled: props.disabled || "",
      onChange: function onChange(e) {
         return props.onChange && props.onChange(e.target.value);
      },
      className: props.className,
      placeholder: props.placeholder });
};

Textarea.propTypes = {
   value: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   style: _propTypes2.default.object,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string,
   placeholder: _propTypes2.default.string
};

exports.default = Textarea;