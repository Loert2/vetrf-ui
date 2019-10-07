'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CoordinateTableBody = require('../../elements/common/coordinate-table-body/CoordinateTableBody');

var _CoordinateTableBody2 = _interopRequireDefault(_CoordinateTableBody);

var _TableHeader = require('../../elements/common/table-header/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CoordinateTable = function CoordinateTable(_ref) {
   var id = _ref.id,
       tableClassName = _ref.tableClassName,
       columns = _ref.columns,
       rows = _ref.rows,
       readOnly = _ref.readOnly;
   return _react2.default.createElement(
      'table',
      {
         id: id,
         className: tableClassName || 'table table-striped table-bordered table-hover font-weight-normal' },
      _react2.default.createElement(_TableHeader2.default, { columns: columns }),
      _react2.default.createElement(_CoordinateTableBody2.default, { rows: rows, columns: columns, readOnly: readOnly })
   );
};

CoordinateTable.propTypes = {
   id: _propTypes2.default.string,
   tableClassName: _propTypes2.default.string,
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

exports.default = CoordinateTable;