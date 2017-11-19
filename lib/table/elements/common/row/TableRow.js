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

var _some = require('lodash/some');

var _some2 = _interopRequireDefault(_some);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _TableCell = require('../cell/TableCell');

var _TableCell2 = _interopRequireDefault(_TableCell);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableRow = function TableRow(_ref) {
   var columns = _ref.columns,
       item = _ref.item,
       onClick = _ref.onClick,
       selectOptions = _ref.selectOptions,
       getRowClassName = _ref.getRowClassName;

   var cells = [];
   for (var i = 0; i < columns.length; i++) {
      cells.push(_react2.default.createElement(_TableCell2.default, { key: columns[i].key || (0, _uniqueId2.default)(),
         className: columns[i].getClassName ? columns[i].getClassName(item) : columns[i].className,
         data: columns[i].dataFormatter && columns[i].dataFormatter(item) }));
   }

   var onSelect = function onSelect() {
      onClick && onClick(item);
   };

   var isSelected = function isSelected() {
      var selectedItems = selectOptions.selectedItems,
          compare = selectOptions.compare;

      return compare ? compare(selectedItems, item) : !!(selectedItems && item && (0, _some2.default)(selectedItems, ['id', item.id]));
   };

   var getSelectedClassName = function getSelectedClassName() {
      var selectedClassName = selectOptions.selectedClassName;

      return isSelected() ? selectedClassName || "success" : "";
   };

   return _react2.default.createElement(
      'tr',
      { onClick: selectOptions && onSelect,
         className: (0, _classnames2.default)(selectOptions ? "cur-pointer" : "", selectOptions ? getSelectedClassName() : getRowClassName && getRowClassName(item)) },
      cells
   );
};

TableRow.propTypes = {
   item: _propTypes2.default.any,
   onClick: _propTypes2.default.func,
   getRowClassName: _propTypes2.default.func,
   selectOptions: _propTypes2.default.shape({
      selectedClassName: _propTypes2.default.string,
      selectedItems: _propTypes2.default.array,
      compare: _propTypes2.default.func
   }),
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

exports.default = TableRow;