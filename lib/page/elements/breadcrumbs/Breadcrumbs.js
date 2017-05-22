'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Breadcrumb = require('./Breadcrumb');

var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Breadcrumbs = function Breadcrumbs(_ref) {
   var breadcrumbs = _ref.breadcrumbs,
       search = _ref.search;
   return _react2.default.createElement(
      'div',
      { className: 'breadcrumbs' },
      _react2.default.createElement(
         'ul',
         { className: 'breadcrumb' },
         breadcrumbs.map(function (elem, index) {
            return _react2.default.createElement(_Breadcrumb2.default, { key: (0, _uniqueId2.default)(), elem: elem });
         })
      )
   );
};

Breadcrumbs.propTypes = {
   breadcrumbs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      link: _propTypes2.default.string,
      text: _propTypes2.default.string,
      active: _propTypes2.default.bool
   })),
   search: _propTypes2.default.object
};

exports.default = Breadcrumbs;