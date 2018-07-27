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

var _HeaderColumn = require('../header-column/HeaderColumn');

var _HeaderColumn2 = _interopRequireDefault(_HeaderColumn);

var _FilterCell = require('../../filter/cell/FilterCell');

var _FilterCell2 = _interopRequireDefault(_FilterCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableHeader = function TableHeader(_ref) {
   var columns = _ref.columns,
       sortedId = _ref.sortedId,
       filterableTable = _ref.filterableTable;

   var headerColumns = [];
   var filterColumns = [];

   for (var i = 0; i < columns.length; i++) {
      var key = columns[i].key || (0, _uniqueId2.default)();
      headerColumns.push(_react2.default.createElement(_HeaderColumn2.default, {
         key: key,
         id: key,
         sortedId: sortedId,
         width: columns[i].width,
         sortable: columns[i].sortable,
         onSort: columns[i].onSort,
         title: columns[i].title
      }));
   }

   if (filterableTable) {
      for (var _i = 0; _i < columns.length; _i++) {
         filterColumns.push(_react2.default.createElement(_FilterCell2.default, {
            key: columns[_i].key || (0, _uniqueId2.default)(),
            filter: columns[_i].filter
         }));
      }
   }

   return _react2.default.createElement(
      'thead',
      null,
      _react2.default.createElement(
         'tr',
         null,
         headerColumns
      ),
      filterableTable && _react2.default.createElement(
         'tr',
         { className: 'filters' },
         filterColumns
      )
   );
};

TableHeader.propTypes = {
   filterableTable: _propTypes2.default.bool,
   sortedId: _propTypes2.default.string,
   columns: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      key: _propTypes2.default.string,
      title: _propTypes2.default.string,
      width: _propTypes2.default.string,
      className: _propTypes2.default.string,
      dataFormatter: _propTypes2.default.func,
      filter: _propTypes2.default.node,
      sortable: _propTypes2.default.bool,
      onSort: _propTypes2.default.func,
      getClassName: _propTypes2.default.func
   }))
};

exports.default = TableHeader;