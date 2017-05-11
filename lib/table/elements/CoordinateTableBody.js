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

var _CoordinateTableRow = require('./CoordinateTableRow');

var _CoordinateTableRow2 = _interopRequireDefault(_CoordinateTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoordinateTableBody = function CoordinateTableBody(_ref) {
   var rows = _ref.rows,
       columns = _ref.columns,
       readOnly = _ref.readOnly;

   var tableRows = [];

   if (rows && rows.length > 0) {
      for (var i = 0; i < rows.length; i++) {
         var key = rows[i].header.key || (0, _uniqueId2.default)();
         tableRows.push(_react2.default.createElement(_CoordinateTableRow2.default, { key: key,
            rowKey: key,
            readOnly: readOnly,
            header: rows[i].header,
            columns: columns,
            item: rows[i].item }));
      }
   }

   return _react2.default.createElement(
      'tbody',
      { className: 'font-weight-normal' },
      tableRows
   );
};

CoordinateTableBody.propTypes = {
   readOnly: _propTypes2.default.bool,
   rows: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      header: _propTypes2.default.shape({
         key: _propTypes2.default.string,
         title: _propTypes2.default.string,
         headerColumnClassName: _propTypes2.default.string,
         width: _propTypes2.default.string
      }),
      item: _propTypes2.default.array
   })),
   columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      key: _propTypes2.default.string,
      cellClassName: _propTypes2.default.string,
      dataFormatter: _propTypes2.default.func
   }))
};

exports.default = CoordinateTableBody;