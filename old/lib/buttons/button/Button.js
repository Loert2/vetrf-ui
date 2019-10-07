'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Button = function Button(_ref) {
   var id = _ref.id,
       className = _ref.className,
       onClick = _ref.onClick,
       disabled = _ref.disabled,
       href = _ref.href,
       tooltip = _ref.tooltip,
       icon = _ref.icon,
       text = _ref.text;

   var toolTipId = (0, _uniqueId2.default)();
   return _react2.default.createElement(
      'a',
      {
         id: id,
         className: (0, _classnames2.default)('decoration-none', className || ''),
         onClick: disabled ? null : onClick,
         disabled: disabled,
         href: href },
      icon && _react2.default.createElement('i', {
         'data-tip': tooltip,
         'data-for': toolTipId,
         className: (0, _classnames2.default)(text ? 'padding-right-5' : '', icon)
      }),
      text,
      tooltip && _react2.default.createElement(_reactTooltip2.default, {
         id: toolTipId,
         effect: 'solid',
         place: 'top',
         className: 'ace-tooltip',
         globalEventOff: 'click'
      })
   );
};

Button.propTypes = {
   href: _propTypes2.default.string,
   id: _propTypes2.default.string,
   className: _propTypes2.default.string,
   tooltip: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   disabled: _propTypes2.default.bool,
   text: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
   onClick: _propTypes2.default.func
};

exports.default = Button;