'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _WidgetBox = require('../elements/box/WidgetBox');

var _WidgetBox2 = _interopRequireDefault(_WidgetBox);

var _WidgetHeader = require('../elements/header/WidgetHeader');

var _WidgetHeader2 = _interopRequireDefault(_WidgetHeader);

var _WidgetBody = require('../elements/body/WidgetBody');

var _WidgetBody2 = _interopRequireDefault(_WidgetBody);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Widget = function Widget(_ref) {
   var className = _ref.className,
       header = _ref.header,
       body = _ref.body,
       children = _ref.children;
   return _react2.default.createElement(
      _WidgetBox2.default,
      { className: className },
      !(0, _isEmpty2.default)(header) && _react2.default.createElement(_WidgetHeader2.default, { className: header.className, title: header.title, toolbar: header.toolbar }),
      !body.invisible && _react2.default.createElement(
         _WidgetBody2.default,
         { className: body.className, toolbox: body.toolbox, footer: body.footer },
         children
      )
   );
};

Widget.propTypes = {
   className: _propTypes2.default.string,
   header: _propTypes2.default.shape({
      className: _propTypes2.default.string,
      title: _propTypes2.default.shape({
         content: _propTypes2.default.node,
         className: _propTypes2.default.string
      }),
      toolbar: _propTypes2.default.shape({
         content: _propTypes2.default.node,
         className: _propTypes2.default.string
      })
   }),
   body: _propTypes2.default.shape({
      className: _propTypes2.default.string,
      invisible: _propTypes2.default.bool,
      toolbox: _propTypes2.default.shape({
         content: _propTypes2.default.node,
         className: _propTypes2.default.string
      }),
      footer: _propTypes2.default.shape({
         content: _propTypes2.default.node,
         className: _propTypes2.default.string
      })
   }),
   children: _propTypes2.default.node
};

Widget.defaultProps = {
   header: {},
   body: {}
};

exports.default = Widget;