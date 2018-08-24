'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TableInfo = require('../table-info/TableInfo');

var _TableInfo2 = _interopRequireDefault(_TableInfo);

var _SizePerPage = require('../size-per-page/SizePerPage');

var _SizePerPage2 = _interopRequireDefault(_SizePerPage);

var _PaginationList = require('../pagination-list/PaginationList');

var _PaginationList2 = _interopRequireDefault(_PaginationList);

var _index = require('../../constants/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PaginationRow = function PaginationRow(props) {
   return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
         'div',
         { className: 'col-xs-7 pull-left' },
         _react2.default.createElement(_TableInfo2.default, { page: props.page, sizePerPage: props.sizePerPage, itemCount: props.itemCount }),
         props.itemCount > props.sizePerPage && _react2.default.createElement(_PaginationList2.default, {
            currPage: props.page,
            sizePerPage: props.sizePerPage,
            changePage: props.onChangePage,
            pageStartIndex: props.pageStartIndex,
            paginationSize: props.paginationSize || _index2.default.PAGINATION_SIZE,
            dataSize: props.itemCount,
            prePage: props.prePage || _index2.default.PRE_PAGE,
            nextPage: props.nextPage || _index2.default.NEXT_PAGE,
            firstPage: props.firstPage || _index2.default.FIRST_PAGE,
            lastPage: props.lastPage || _index2.default.LAST_PAGE
         })
      ),
      _react2.default.createElement(
         'div',
         { className: 'col-xs-5' },
         props.itemCount > _index2.default.SIZE_PER_PAGE && _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
               'div',
               { className: 'pull-right' },
               _react2.default.createElement(
                  'div',
                  null,
                  _react2.default.createElement(_SizePerPage2.default, {
                     onChange: props.onChangeSizePerPage,
                     sizePerPage: props.sizePerPage
                  }),
                  _react2.default.createElement(
                     'span',
                     null,
                     '\xA0\u0437\u0430\u043F\u0438\u0441\u0435\u0439 \u043D\u0430 \u0441\u0442\u0440\u0430\u043D\u0438\u0446\u0435'
                  )
               )
            )
         )
      )
   );
};

PaginationRow.propTypes = {
   page: _propTypes2.default.number,
   paginationSize: _propTypes2.default.number,
   pageStartIndex: _propTypes2.default.number,
   firstPage: _propTypes2.default.string,
   lastPage: _propTypes2.default.string,
   prePage: _propTypes2.default.string,
   itemCount: _propTypes2.default.number,
   sizePerPage: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
   nextPage: _propTypes2.default.string,
   onChangePage: _propTypes2.default.func,
   onChangeView: _propTypes2.default.func
};

exports.default = PaginationRow;