'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Input = function Input(props) {
   return _react2.default.createElement('input', { type: props.type || "text", autoComplete: 'off',
      name: props.name,
      id: props.id,
      maxLength: props.maxLength,
      value: props.value || "",
      style: props.style,
      autoFocus: props.autoFocus,
      onFocus: props.onFocus,
      disabled: props.disabled || "",
      onKeyUp: props.onKeyUp,
      onKeyPress: function onKeyPress(e) {
         return (e.which === 10 || e.which === 13) && props.onEnter ? props.onEnter() : props.onKeyPress && props.onKeyPress();
      },
      onChange: function onChange(e) {
         return props.onChange && props.onChange(e.target.value);
      },
      onClick: props.onClick,
      className: props.className,
      placeholder: props.placeholder });
};

Input.propTypes = {
   value: _propTypes2.default.string,
   type: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   autoFocus: _propTypes2.default.bool,
   onFocus: _propTypes2.default.func,
   onEnter: _propTypes2.default.func,
   onKeyUp: _propTypes2.default.func,
   onKeyPress: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   onClick: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = Input;