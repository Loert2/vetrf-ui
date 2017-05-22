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

var TabContent = function TabContent(_ref) {
   var content = _ref.content,
       selected = _ref.selected;
   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)("tab-pane", selected ? "active" : "") },
      _react2.default.createElement(
         'div',
         { className: 'row' },
         _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            content
         )
      )
   );
};

TabContent.propTypes = {
   selected: _propTypes2.default.bool,
   content: _propTypes2.default.node
};

exports.default = TabContent;