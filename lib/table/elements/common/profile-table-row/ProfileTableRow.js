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

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableCell = require('../cell/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

var _HeaderColumn = require('../header-column/HeaderColumn');

var _HeaderColumn2 = _interopRequireDefault(_HeaderColumn);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ProfileTableRow = function ProfileTableRow(_ref) {
   var first = _ref.first,
       header = _ref.header,
       field = _ref.field,
       dataFormatter = _ref.dataFormatter,
       itemList = _ref.itemList;

   var cells = [];
   cells.push(_react2.default.createElement(_HeaderColumn2.default, { key: header.key || (0, _uniqueId2.default)(),
      className: (0, _classnames2.default)(header.headerClassName || "background-color-name align-right", first),
      style: first && { borderTop: "1px solid #DCEBF7 !important" },
      width: header.width || "260px",
      title: header.title }));

   for (var i = 0; i < itemList.length; i++) {
      cells.push(_react2.default.createElement(_TableCell2.default, { key: (0, _uniqueId2.default)(),
         className: itemList[i].cellClassName,
         data: dataFormatter && dataFormatter(itemList[i].item) || field && itemList[i].item[field] }));
   }

   return _react2.default.createElement(
      'tr',
      null,
      cells
   );
};

ProfileTableRow.propTypes = {
   first: _propTypes2.default.string,
   header: _propTypes2.default.shape({
      key: _propTypes2.default.string,
      title: _propTypes2.default.string,
      headerClassName: _propTypes2.default.string,
      width: _propTypes2.default.string
   }),
   field: _propTypes2.default.string,
   dataFormatter: _propTypes2.default.func,
   itemList: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      key: _propTypes2.default.string,
      cellClassName: _propTypes2.default.string,
      item: _propTypes2.default.any
   }))
};

exports.default = ProfileTableRow;