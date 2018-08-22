'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactTooltip = require('react-tooltip');

var _reactTooltip2 = _interopRequireDefault(_reactTooltip);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var withTooltip = function withTooltip(Component, isBlock) {
   var wrapped = function wrapped(_ref) {
      var tooltip = _ref.tooltip,
          _ref$tooltipId = _ref.tooltipId,
          tooltipId = _ref$tooltipId === undefined ? (0, _uniqueId2.default)() : _ref$tooltipId,
          rest = _objectWithoutProperties(_ref, ['tooltip', 'tooltipId']);

      if (tooltip) {
         return _react2.default.createElement(
            _react.Fragment,
            null,
            _react2.default.createElement(
               'div',
               {
                  className: (0, _classnames2.default)({ inline: !isBlock }),
                  'data-tip': tooltip,
                  'data-for': tooltipId },
               _react2.default.createElement(Component, rest)
            ),
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