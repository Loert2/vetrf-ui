'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RowEmptyList = function RowEmptyList(_ref) {
   var columnsLength = _ref.columnsLength,
       text = _ref.text;
   return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
         'td',
         { colSpan: columnsLength },
         text || "Нет записей"
      )
   );
};

RowEmptyList.propTypes = {
   columnsLength: _propTypes2.default.number,
   text: _propTypes2.default.string
};

exports.default = RowEmptyList;