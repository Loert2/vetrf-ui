'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ComplexDate = require('../ComplexDate');

var _ComplexDate2 = _interopRequireDefault(_ComplexDate);

var _index = require('../../../../../../index');

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _momentUtils = require('../../../../../utils/moment-utils');

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _util = require('lodash/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var keyPrefix = 'complex-date_';

var getDefaultItem = function getDefaultItem() {
   return {
      format: _momentUtils.defaultFormat,
      key: (0, _util.uniqueId)(keyPrefix)
   };
};

var defaultList = [getDefaultItem()];
var defaultHelpText = "Выберите формат для даты и времени";

var ComplexDateList = function (_Component) {
   _inherits(ComplexDateList, _Component);

   function ComplexDateList(props, context) {
      _classCallCheck(this, ComplexDateList);

      var _this = _possibleConstructorReturn(this, (ComplexDateList.__proto__ || Object.getPrototypeOf(ComplexDateList)).call(this, props, context));

      _this.getComplexDateList = _this.getComplexDateList.bind(_this);
      _this.getView = _this.getView.bind(_this);
      _this.addNewItem = _this.addNewItem.bind(_this);
      _this.deleteItem = _this.deleteItem.bind(_this);
      _this.generateKeys = _this.generateKeys.bind(_this);

      var list = props.list;

      if ((0, _isEmpty2.default)(list)) {
         _this.addNewItem();
      } else {
         _this.generateKeys();
      }
      return _this;
   }

   _createClass(ComplexDateList, [{
      key: 'getComplexDateList',
      value: function getComplexDateList(list) {
         var _this2 = this;

         var _props = this.props,
             onChangeDate = _props.onChangeDate,
             formatList = _props.formatList,
             _props$storeFormat = _props.storeFormat,
             storeFormat = _props$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props$storeFormat,
             listPath = _props.listPath;

         return list && list.map(function (it, index) {
            var itemField = listPath + '[' + index + ']';
            var key = it.key || index;
            return _react2.default.createElement(
               'div',
               { key: key, className: 'complex-date-list__item' },
               _react2.default.createElement(
                  'div',
                  { className: (0, _classnames2.default)("complex-date-list__item__date", list.length > 1 && "complex-date-list__item__date--with-delete") },
                  _react2.default.createElement(_ComplexDate2.default, { key: 'complex-date_' + key,
                     onChange: onChangeDate,
                     formatPath: itemField + '.format',
                     formatList: formatList,
                     storeFormat: storeFormat,
                     complexDate: it,
                     complexDatePath: itemField })
               ),
               list.length > 1 && _react2.default.createElement(
                  'div',
                  { className: 'complex-date-list__item__delete' },
                  _react2.default.createElement(_index.Button, { key: 'btn-delete_' + key,
                     icon: 'ace-icon fa fa-times light-grey bigger-150',
                     tooltip: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C',
                     onClick: function onClick() {
                        return _this2.deleteItem(it);
                     } })
               )
            );
         });
      }
   }, {
      key: 'getView',
      value: function getView(list) {
         var help = this.props.help;

         var view = list && list.map(function (it) {
            return it.view || "";
         }).filter(function (it) {
            return !(0, _isEmpty2.default)(it);
         }).join("; ");

         return view || help || defaultHelpText;
      }
   }, {
      key: 'addNewItem',
      value: function addNewItem() {
         var _props2 = this.props,
             list = _props2.list,
             onChangeDate = _props2.onChangeDate,
             listPath = _props2.listPath;

         var newList = [].concat(_toConsumableArray(list));
         newList.push(getDefaultItem());
         onChangeDate && onChangeDate(newList, listPath);
      }
   }, {
      key: 'generateKeys',
      value: function generateKeys() {
         var _props3 = this.props,
             list = _props3.list,
             onChangeDate = _props3.onChangeDate,
             listPath = _props3.listPath;

         var newList = [].concat(_toConsumableArray(list));
         newList.forEach(function (it) {
            return it.key = (0, _util.uniqueId)(keyPrefix);
         });
         onChangeDate && onChangeDate(newList, listPath);
      }
   }, {
      key: 'deleteItem',
      value: function deleteItem(item) {
         var _props4 = this.props,
             list = _props4.list,
             onChangeDate = _props4.onChangeDate,
             listPath = _props4.listPath;

         var newList = list.filter(function (it) {
            return it !== item;
         });
         onChangeDate && onChangeDate(newList, listPath);
      }
   }, {
      key: 'render',
      value: function render() {
         var _props5 = this.props,
             list = _props5.list,
             _props5$maxListLength = _props5.maxListLength,
             maxListLength = _props5$maxListLength === undefined ? 5 : _props5$maxListLength;

         var dateList = (0, _isEmpty2.default)(list) ? defaultList : list;
         return _react2.default.createElement(
            'div',
            { className: 'complex-date-list' },
            this.getComplexDateList(dateList),
            _react2.default.createElement(
               'div',
               { className: 'complex-date-list__panel' },
               _react2.default.createElement(
                  'p',
                  { className: 'complex-date-list__panel__info help-block' },
                  this.getView(dateList)
               ),
               dateList.length < maxListLength && _react2.default.createElement(
                  'div',
                  { className: 'complex-date-list__panel__add-button' },
                  _react2.default.createElement(_index.Button, { text: '\u0414\u043E\u0431\u0430\u0432\u0438\u0442\u044C',
                     icon: 'ace-icon fa fa-plus',
                     onClick: this.addNewItem,
                     className: 'btn btn-info btn-xs' })
               )
            )
         );
      }
   }]);

   return ComplexDateList;
}(_react.Component);

ComplexDateList.propTypes = {
   list: _propTypes2.default.arrayOf(_propTypes2.default.object),
   listPath: _propTypes2.default.string,
   onChangeDate: _propTypes2.default.func,
   validate: _propTypes2.default.func,
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   maxListLength: _propTypes2.default.number
};

ComplexDateList.defaultProps = {};

exports.default = ComplexDateList;