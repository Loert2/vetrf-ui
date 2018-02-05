'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Switch = function Switch(props) {
   return _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement('input', { type: 'checkbox',
         id: props.id,
         name: props.name,
         value: props.value,
         style: props.style,
         disabled: props.disabled || "",
         onChange: props.name ? props.onChange : function (e) {
            return props.onChange && props.onChange(e.target.checked);
         },
         className: props.className || "ace ace-switch ace-switch-4" }),
      _react2.default.createElement('span', { className: 'lbl', 'data-lbl': props.text })
   );
};

Switch.propTypes = {
   value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   text: _propTypes2.default.string,
   style: _propTypes2.default.object,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = Switch;