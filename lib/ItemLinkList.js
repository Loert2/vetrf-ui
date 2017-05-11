'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ItemLinkList = function ItemLinkList(_ref) {
   var className = _ref.className,
       href = _ref.href,
       text = _ref.text;
   return _react2.default.createElement(
      'li',
      { className: className },
      _react2.default.createElement(
         _reactRouterDom.Link,
         { to: href },
         text
      )
   );
};

ItemLinkList.propTypes = {
   className: _propTypes2.default.string,
   href: _propTypes2.default.string,
   text: _propTypes2.default.string
};

exports.default = ItemLinkList;