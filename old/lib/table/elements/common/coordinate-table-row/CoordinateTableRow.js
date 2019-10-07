'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _TableCell = require('../cell/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _HeaderColumn = require('../header-column/HeaderColumn');

var _HeaderColumn2 = _interopRequireDefault(_HeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoordinateTableRow = function CoordinateTableRow(_ref) {
   var header = _ref.header,
       columns = _ref.columns,
       item = _ref.item,
       rowKey = _ref.rowKey,
       readOnly = _ref.readOnly;

   var cells = [];
   cells.push(_react2.default.createElement(_HeaderColumn2.default, {
      key: header.key,
      className: header.headerColumnClassName,
      width: header.width,
      title: header.title
   }));
   for (var i = 1; i < columns.length; i++) {
      var key = columns[i].key || (0, _uniqueId2.default)();
      cells.push(_react2.default.createElement(_TableCell2.default, {
         key: key,
         className: columns[i].cellClassName,
         data: columns[i].dataFormatter && columns[i].dataFormatter(item, key, rowKey, readOnly)
      }));
   }
   return _react2.default.createElement(
      'tr',
      null,
      cells
   );
};

CoordinateTableRow.propTypes = {
   readOnly: _propTypes2.default.bool,
   header: _propTypes2.default.shape({
      key: _propTypes2.default.string,
      title: _propTypes2.default.string,
      headerColumnClassName: _propTypes2.default.string,
      width: _propTypes2.default.string
   }),
   rowKey: _propTypes2.default.string,
   item: _propTypes2.default.any,
   columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      key: _propTypes2.default.string,
      cellClassName: _propTypes2.default.string,
      dataFormatter: _propTypes2.default.func
   }))
};

exports.default = CoordinateTableRow;