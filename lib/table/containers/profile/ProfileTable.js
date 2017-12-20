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

var _ProfileTableRow = require('../../elements/common/profile-table-row/ProfileTableRow');

var _ProfileTableRow2 = _interopRequireDefault(_ProfileTableRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileTable = function ProfileTable(_ref) {
   var rows = _ref.rows,
       itemList = _ref.itemList,
       tableClassName = _ref.tableClassName;

   var tableRows = [];
   if (rows && rows.length) {
      for (var i = 0; i < rows.length; i++) {
         tableRows.push(_react2.default.createElement(_ProfileTableRow2.default, { key: rows[i].header.key || (0, _uniqueId2.default)(),
            first: i === 0 ? "border-top-solid-profile-table" : "",
            header: rows[i].header,
            dataFormatter: rows[i].dataFormatter,
            getCellClass: rows[i].getCellClass,
            field: rows[i].field,
            itemList: itemList }));
      }
   }

   return _react2.default.createElement(
      'table',
      { className: tableClassName || "table color-table-border font-weight-normal" },
      _react2.default.createElement('thead', null),
      _react2.default.createElement(
         'tbody',
         { className: 'font-weight-normal color-table-border' },
         tableRows
      )
   );
};

ProfileTable.propTypes = {
   tableClassName: _propTypes2.default.string,
   itemList: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      key: _propTypes2.default.string,
      cellClassName: _propTypes2.default.string,
      item: _propTypes2.default.any
   })),
   rows: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      header: _propTypes2.default.shape({
         key: _propTypes2.default.string,
         title: _propTypes2.default.string,
         headerClassName: _propTypes2.default.string,
         width: _propTypes2.default.string
      }),
      field: _propTypes2.default.string,
      dataFormatter: _propTypes2.default.func,
      getCellClass: _propTypes2.default.func
   }))
};

exports.default = ProfileTable;