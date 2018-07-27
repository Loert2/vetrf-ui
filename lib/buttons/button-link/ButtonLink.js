'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ButtonLink = function ButtonLink(_ref) {
   var id = _ref.id,
       href = _ref.href,
       className = _ref.className,
       tooltip = _ref.tooltip,
       icon = _ref.icon,
       text = _ref.text;

   var toolTipId = (0, _uniqueId2.default)();
   return _react2.default.createElement(
      _reactRouterDom.Link,
      {
         id: id,
         to: href,
         className: (0, _classnames2.default)('decoration-none', className) },
      _react2.default.createElement('i', { 'data-tip': tooltip, 'data-for': toolTipId, className: icon }),
      ' ',
      text,
      tooltip && _react2.default.createElement(_reactTooltip2.default, {
         id: toolTipId,
         effect: 'solid',
         place: 'top',
         className: 'ace-tooltip'
      })
   );
};

ButtonLink.propTypes = {
   id: _propTypes2.default.string,
   href: _propTypes2.default.string,
   className: _propTypes2.default.string,
   tooltip: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   text: _propTypes2.default.string
};

exports.default = ButtonLink;