'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineInfo = function TimeLineInfo(_ref) {
   var icon = _ref.icon;
   return _react2.default.createElement(
      'div',
      { className: 'timeline-info history-item' },
      _react2.default.createElement('i', { className: icon })
   );
};

TimeLineInfo.propTypes = {
   icon: _propTypes2.default.string
};

exports.default = TimeLineInfo;