'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Компонет-обертка над input
 * если есть name, то в onChange передается сам event, иначе только его checked
 * */
var Checkbox = function Checkbox(props) {
   return _react2.default.createElement(
      'label',
      null,
      _react2.default.createElement('input', { type: 'checkbox',
         id: props.id,
         name: props.name,
         value: props.value,
         style: props.style,
         disabled: props.disabled,
         onKeyPress: function onKeyPress(e) {
            return (e.which === 10 || e.which === 13) && props.onEnter && props.onEnter();
         },
         onChange: function onChange(e) {
            return props.onChange && props.onChange(e.target.checked);
         },
         className: (0, _classnames2.default)("ace input-sm", props.className),
         checked: props.value }),
      _react2.default.createElement(
         'span',
         { className: 'lbl padding-top-6' },
         props.text
      )
   );
};

Checkbox.propTypes = {
   value: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   text: _propTypes2.default.string,
   style: _propTypes2.default.object,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = Checkbox;