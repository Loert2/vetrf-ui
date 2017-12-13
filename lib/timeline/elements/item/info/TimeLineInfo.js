'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultClassName = 'timeline-indicator no-hover';

var TimeLineInfo = function TimeLineInfo(_ref) {
   var className = _ref.className,
       _ref$indicator = _ref.indicator,
       indicator = _ref$indicator === undefined ? {} : _ref$indicator;

   var content = null;
   if (indicator.icon) {
      content = _react2.default.createElement('i', { className: (0, _classnames2.default)(defaultClassName, indicator.icon) });
   } else if (indicator.text) {
      content = _react2.default.createElement(
         'span',
         { className: (0, _classnames2.default)(defaultClassName, indicator.className || 'btn-primary') },
         indicator.text
      );
   }

   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('timeline-info', className) },
      content
   );
};

TimeLineInfo.propTypes = {
   indicator: {
      icon: _propTypes2.default.string,
      text: _propTypes2.default.node,
      className: _propTypes2.default.string
   },
   className: _propTypes2.default.string
};

exports.default = TimeLineInfo;