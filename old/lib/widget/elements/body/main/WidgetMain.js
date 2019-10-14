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

var WidgetMain = function WidgetMain(_ref) {
   var className = _ref.className,
       children = _ref.children;
   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('widget-main', className) },
      children
   );
};

WidgetMain.propTypes = {
   className: _propTypes2.default.string,
   children: _propTypes2.default.node
};

exports.default = WidgetMain;