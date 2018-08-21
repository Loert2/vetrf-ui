'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withTooltip = function withTooltip(Component) {
   var wrapped = function wrapped(_ref) {
      var tooltip = _ref.tooltip,
          _ref$tooltipId = _ref.tooltipId,
          tooltipId = _ref$tooltipId === undefined ? (0, _uniqueId2.default)() : _ref$tooltipId,
          rest = _objectWithoutProperties(_ref, ['tooltip', 'tooltipId']);

      if (tooltip) {
         return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(Component, _extends({ 'data-tip': tooltip, 'data-for': tooltipId }, rest)),
            _react2.default.createElement(_reactTooltip2.default, {
               id: tooltipId,
               effect: 'solid',
               place: 'top',
               className: 'ace-tooltip',
               globalEventOff: 'click'
            })
         );
      }

      return _react2.default.createElement(Component, rest);
   };

   wrapped.propTypes = {
      tooltip: _propTypes2.default.string,
      tooltipId: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number])
   };

   return wrapped;
};

exports.default = withTooltip;