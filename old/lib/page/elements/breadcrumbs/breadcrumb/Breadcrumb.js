'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = require('react-router-dom');

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumb = function Breadcrumb(_ref) {
   var _ref$elem = _ref.elem,
       active = _ref$elem.active,
       text = _ref$elem.text,
       link = _ref$elem.link;
   return _react2.default.createElement(
      'li',
      { key: (0, _uniqueId2.default)(), className: active ? 'active' : '' },
      link ? _react2.default.createElement(
         _reactRouterDom.Link,
         { to: link },
         ' ',
         text,
         ' '
      ) : _react2.default.createElement(
         'span',
         null,
         ' ',
         text,
         ' '
      )
   );
};

Breadcrumb.propTypes = {
   elem: _propTypes2.default.shape({
      link: _propTypes2.default.string,
      text: _propTypes2.default.string,
      active: _propTypes2.default.bool
   })
};

exports.default = Breadcrumb;