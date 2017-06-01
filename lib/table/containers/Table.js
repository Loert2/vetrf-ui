'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableHeader = require('../elements/TableHeader');

var _TableHeader2 = _interopRequireDefault(_TableHeader);

var _TableBody = require('../elements/TableBody');

var _TableBody2 = _interopRequireDefault(_TableBody);

var _TableLoadingBlock = require('../elements/TableLoadingBlock');

var _TableLoadingBlock2 = _interopRequireDefault(_TableLoadingBlock);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Table = function Table(props) {
   return _react2.default.createElement(
      'div',
      null,
      props.loading && _react2.default.createElement(_TableLoadingBlock2.default, null),
      _react2.default.createElement(
         'table',
         { id: props.id,
            className: props.loading ? "table table-bordered blur" : props.className || "table table-striped table-bordered table-hover" },
         !props.hideHeader && _react2.default.createElement(_TableHeader2.default, { columns: props.columns,
            sortedId: props.sortedId,
            filterableTable: props.filterableTable }),
         _react2.default.createElement(_TableBody2.default, { dataList: props.dataList,
            keyFunction: props.keyFunction,
            onClickRow: props.onClickRow,
            selectOptions: props.selectOptions,
            emptyText: props.emptyText,
            paginationRow: props.paginationRow,
            columns: props.columns,
            readOnly: props.readOnly,
            getRowClassName: props.getRowClassName,
            addBtn: props.addBtn,
            additionalRow: props.additionalDataRow })
      )
   );
};

Table.propTypes = {
   id: _propTypes2.default.string,
   readOnly: _propTypes2.default.bool,
   loading: _propTypes2.default.bool,
   filterableTable: _propTypes2.default.bool,
   hideHeader: _propTypes2.default.bool,
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
   sortedId: _propTypes2.default.string,
   emptyText: _propTypes2.default.string,
   className: _propTypes2.default.string,
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

exports.default = Table;