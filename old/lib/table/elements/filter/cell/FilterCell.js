'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FilterCell = function FilterCell(_ref) {
   var filter = _ref.filter;
   return _react2.default.createElement(
      'th',
      { className: 'filter' },
      filter
   );
};

FilterCell.propTypes = {
   filter: _propTypes2.default.node
};

exports.default = FilterCell;