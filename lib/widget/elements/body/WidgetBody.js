'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _WidgetMain = require('./main/WidgetMain');

var _WidgetMain2 = _interopRequireDefault(_WidgetMain);

var _WidgetToolbox = require('./toolbox/WidgetToolbox');

var _WidgetToolbox2 = _interopRequireDefault(_WidgetToolbox);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidgetBody = function WidgetBody(_ref) {
   var className = _ref.className,
       children = _ref.children,
       toolbox = _ref.toolbox,
       footer = _ref.footer;
   return _react2.default.createElement(
      'div',
      { className: 'widget-body' },
      !(0, _isEmpty2.default)(toolbox) && _react2.default.createElement(
         _WidgetToolbox2.default,
         { className: toolbox.className },
         toolbox.content
      ),
      _react2.default.createElement(
         _WidgetMain2.default,
         { className: className },
         children
      ),
      !(0, _isEmpty2.default)(footer) && _react2.default.createElement(
         _WidgetToolbox2.default,
         { className: footer.className },
         footer.content
      )
   );
};

WidgetBody.propTypes = {
   className: _propTypes2.default.string,
   toolbox: _propTypes2.default.shape({
      content: _propTypes2.default.node,
      className: _propTypes2.default.string
   }),
   footer: _propTypes2.default.shape({
      content: _propTypes2.default.node,
      className: _propTypes2.default.string
   }),
   children: _propTypes2.default.node
};

WidgetBody.defaultProps = {
   toolbox: {},
   footer: {}
};

exports.default = WidgetBody;