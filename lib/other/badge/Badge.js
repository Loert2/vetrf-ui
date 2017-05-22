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

var Badge = function Badge(_ref) {
   var colorClass = _ref.colorClass,
       children = _ref.children;
   return _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)("badge", colorClass) },
      children
   );
};

Badge.propTypes = {
   children: _propTypes2.default.node,
   colorClass: _propTypes2.default.string
};

exports.default = Badge;