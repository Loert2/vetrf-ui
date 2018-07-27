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

var _WidgetTitle = require('./title/WidgetTitle');

var _WidgetTitle2 = _interopRequireDefault(_WidgetTitle);

var _WidgetToolbar = require('./toolbar/WidgetToolbar');

var _WidgetToolbar2 = _interopRequireDefault(_WidgetToolbar);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidgetHeader = function WidgetHeader(_ref) {
   var className = _ref.className,
       title = _ref.title,
       toolbar = _ref.toolbar;
   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('widget-header', className) },
      !(0, _isEmpty2.default)(title) && _react2.default.createElement(
         _WidgetTitle2.default,
         { className: title.className },
         title.content
      ),
      !(0, _isEmpty2.default)(toolbar) && _react2.default.createElement(
         _WidgetToolbar2.default,
         { className: toolbar.className },
         toolbar.content
      )
   );
};

WidgetHeader.propTypes = {
   className: _propTypes2.default.string,
   title: _propTypes2.default.shape({
      content: _propTypes2.default.node,
      className: _propTypes2.default.string
   }),
   toolbar: _propTypes2.default.shape({
      content: _propTypes2.default.node,
      className: _propTypes2.default.string
   })
};

WidgetHeader.defaultProps = {
   title: {},
   toolbar: {}
};

exports.default = WidgetHeader;