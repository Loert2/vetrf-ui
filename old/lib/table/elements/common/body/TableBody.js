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

var _TableRow = require('../row/TableRow');

var _TableRow2 = _interopRequireDefault(_TableRow);

var _RowEmptyList = require('../row-empty-list/RowEmptyList');

var _RowEmptyList2 = _interopRequireDefault(_RowEmptyList);

var _AddInfoRow = require('../add-info-row/AddInfoRow');

var _AddInfoRow2 = _interopRequireDefault(_AddInfoRow);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableBody = function TableBody(props) {
   var rows = [];
   var dataList = props.dataList,
       keyFunction = props.keyFunction,
       columns = props.columns,
       paginationRow = props.paginationRow,
       additionalDataRow = props.additionalDataRow,
       addBtn = props.addBtn,
       readOnly = props.readOnly,
       emptyText = props.emptyText,
       onClickRow = props.onClickRow,
       selectOptions = props.selectOptions,
       getRowClassName = props.getRowClassName;

   var addInfoRow = addBtn && _react2.default.createElement(_AddInfoRow2.default, {
      addAction: addBtn.action,
      btnClassName: addBtn.className,
      text: addBtn.text,
      columnsLength: columns.length
   });
   if (dataList && dataList.length) {
      for (var i = 0; i < dataList.length; i++) {
         rows.push(_react2.default.createElement(_TableRow2.default, {
            key: keyFunction && keyFunction(dataList[i]) || dataList[i].id || (0, _uniqueId2.default)() //TODO: Убрать uniqueId, постараться его не использовать.
            , columns: columns,
            onClick: onClickRow,
            getRowClassName: getRowClassName,
            selectOptions: selectOptions,
            item: dataList[i]
         }));
      }
      return _react2.default.createElement(
         'tbody',
         null,
         rows,
         additionalDataRow && _react2.default.createElement(_TableRow2.default, {
            key: 'additionalRow',
            columns: additionalDataRow.additionalMetadata,
            item: additionalDataRow.additionalData
         }),
         paginationRow && _react2.default.createElement(
            'tr',
            { key: 'pagination' },
            _react2.default.createElement(
               'td',
               { colSpan: columns.length },
               paginationRow
            )
         ),
         addBtn && !readOnly && addInfoRow
      );
   }
   if (addBtn && !readOnly) {
      return _react2.default.createElement(
         'tbody',
         null,
         addInfoRow
      );
   } else {
      return _react2.default.createElement(
         'tbody',
         null,
         _react2.default.createElement(_RowEmptyList2.default, { columnsLength: columns.length, text: emptyText })
      );
   }
};

TableBody.propTypes = {
   readOnly: _propTypes2.default.bool,
   dataList: _propTypes2.default.array,
   keyFunction: _propTypes2.default.func,
   paginationRow: _propTypes2.default.node,
   additionalDataRow: _propTypes2.default.shape({
      additionalMetadata: _propTypes2.default.arrayOf(_propTypes2.default.shape({
         key: _propTypes2.default.string,
         className: _propTypes2.default.string,
         dataFormatter: _propTypes2.default.func
      })),
      additionalData: _propTypes2.default.any
   }),
   addBtn: _propTypes2.default.shape({
      action: _propTypes2.default.func,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string
   }),
   emptyText: _propTypes2.default.string,
   onClickRow: _propTypes2.default.func,
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

exports.default = TableBody;