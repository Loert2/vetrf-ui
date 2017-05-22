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

var LoadingSpinner = function LoadingSpinner(_ref) {
   var className = _ref.className,
       style = _ref.style,
       icon = _ref.icon,
       text = _ref.text;
   return _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)("animated", className), style: style },
      _react2.default.createElement('i', { className: icon || "fa fa-spinner fa-spin blue" }),
      ' ',
      text || "Загрузка..."
   );
};

LoadingSpinner.propTypes = {
   text: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   style: _propTypes2.default.object,
   className: _propTypes2.default.string
};

exports.default = LoadingSpinner;