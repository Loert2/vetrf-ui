'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileInput = function FileInput(props) {
   return _react2.default.createElement('input', {
      type: 'file',
      autoComplete: 'off',
      name: props.name,
      id: props.id,
      value: props.value,
      style: props.style,
      disabled: props.disabled || '',
      onKeyPress: function onKeyPress(e) {
         return (e.which === 10 || e.which === 13) && props.onEnter && props.onEnter();
      },
      onChange: props.name ? props.onChange : function (e) {
         return props.onChange && props.onChange(e.target.files[0]);
      },
      className: props.className,
      placeholder: props.placeholder
   });
};

FileInput.propTypes = {
   value: _propTypes2.default.string,
   type: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = FileInput;