'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableCell = function TableCell(_ref) {
   var className = _ref.className,
       data = _ref.data;
   return _react2.default.createElement(
      'td',
      { className: className },
      data
   );
};

TableCell.propTypes = {
   className: _propTypes2.default.string,
   data: _propTypes2.default.node
};

exports.default = TableCell;