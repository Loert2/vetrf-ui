'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableInfo = function TableInfo(_ref) {
   var page = _ref.page,
       sizePerPage = _ref.sizePerPage,
       itemCount = _ref.itemCount;


   var firstResultIndex = function firstResultIndex() {
      var currentPage = (page - 1) * sizePerPage + 1;
      if (page === 1) {
         return page;
      } else if (currentPage < itemCount) {
         return currentPage;
      }
      return itemCount;
   };
   var to = Math.min(page * sizePerPage - 1, itemCount);
   if (to >= itemCount) to--;
   return _react2.default.createElement(
      'p',
      { className: 'padding-top-6' },
      '\u0417\u0430\u043F\u0438\u0441\u0438 \u0441 ',
      _react2.default.createElement(
         'strong',
         null,
         firstResultIndex
      ),
      ' \u043F\u043E ',
      _react2.default.createElement(
         'strong',
         null,
         to + 1
      ),
      '\xA0\u0438\u0437 ',
      _react2.default.createElement(
         'strong',
         null,
         itemCount
      ),
      '\xA0\u0437\u0430\u043F\u0438\u0441\u0435\u0439'
   );
};

TableInfo.propTypes = {
   page: _propTypes2.default.number,
   itemCount: _propTypes2.default.number,
   sizePerPage: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = TableInfo;