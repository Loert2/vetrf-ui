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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getDefaultItem = function getDefaultItem() {
   return {
      format: _momentUtils.defaultFormat
   };
};

var defaultList = [getDefaultItem()];
var defaultDate = '...';
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
      return _this;
   }

   _createClass(ComplexDateList, [{
      key: 'componentDidMount',
      value: function componentDidMount() {
         var list = this.props.list;

         if ((0, _isEmpty2.default)(list)) {
            this.addNewItem();
         }
      }
   }, {
      key: 'getComplexDateList',
      value: function getComplexDateList(list) {
         var _this2 = this;

         var _props = this.props,
             onChangeDate = _props.onChangeDate,
             beginDateField = _props.beginDateField,
             endDateField = _props.endDateField,
             singleDateField = _props.singleDateField,
             formatField = _props.formatField,
             formatList = _props.formatList,
             _props$storeFormat = _props.storeFormat,
             storeFormat = _props$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props$storeFormat,
             listField = _props.listField;

         return list && list.map(function (it, index) {
            var itemField = listField + '[' + index + ']';
            return _react2.default.createElement(
               'div',
               { key: index, className: 'complex-date-list__item' },
               _react2.default.createElement(
                  'div',
                  { className: (0, _classnames2.default)("complex-date-list__item__date", list.length > 1 && "complex-date-list__item__date--with-delete") },
                  _react2.default.createElement(_ComplexDate2.default, { key: 'complex-date_' + index,
                     format: it[formatField],
                     endDate: it[endDateField],
                     beginDate: it[beginDateField],
                     onChange: onChangeDate,
                     beginDatePath: itemField + '.' + beginDateField,
                     endDatePath: itemField + '.' + endDateField,
                     singleDate: it[singleDateField],
                     singleDatePath: itemField + '.' + singleDateField,
                     formatPath: itemField + '.' + formatField,
                     formatList: formatList,
                     storeFormat: storeFormat,
                     complexDate: it,
                     complexDatePath: itemField,
                     endDateField: endDateField,
                     beginDateField: beginDateField,
                     singleDateField: singleDateField,
                     formatField: formatField })
               ),
               list.length > 1 && _react2.default.createElement(
                  'div',
                  { className: 'complex-date-list__item__delete' },
                  _react2.default.createElement(_index.Button, { key: 'btn-delete_' + index,
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
         var _props2 = this.props,
             beginDateField = _props2.beginDateField,
             endDateField = _props2.endDateField,
             singleDateField = _props2.singleDateField,
             formatField = _props2.formatField,
             _props2$storeFormat = _props2.storeFormat,
             storeFormat = _props2$storeFormat === undefined ? _momentUtils.defaultStoreFormat : _props2$storeFormat,
             help = _props2.help;

         var view = list && list.map(function (it) {
            var format = it[formatField] || _momentUtils.defaultFormat;
            if (it[beginDateField] || it[endDateField]) {
               return ((0, _momentUtils.formatValue)(it[beginDateField], storeFormat, format) || defaultDate) + '-' + ((0, _momentUtils.formatValue)(it[endDateField], storeFormat, format) || defaultDate);
            } else if (it[singleDateField]) {
               return (0, _momentUtils.formatValue)(it[singleDateField], storeFormat, format);
            }
            return "";
         }).filter(function (it) {
            return !(0, _isEmpty2.default)(it);
         }).join("; ");

         return view || help || defaultHelpText;
      }
   }, {
      key: 'addNewItem',
      value: function addNewItem() {
         var _props3 = this.props,
             list = _props3.list,
             onChangeDate = _props3.onChangeDate,
             listField = _props3.listField;

         var newList = [].concat(_toConsumableArray(list));
         newList.push(getDefaultItem());
         onChangeDate && onChangeDate(newList, listField);
      }
   }, {
      key: 'deleteItem',
      value: function deleteItem(item) {
         var _props4 = this.props,
             list = _props4.list,
             onChangeDate = _props4.onChangeDate,
             listField = _props4.listField;

         var newList = [].concat(_toConsumableArray(list)).filter(function (it) {
            return it !== item;
         });
         onChangeDate && onChangeDate(newList, listField);
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
   listField: _propTypes2.default.string,
   onChangeDate: _propTypes2.default.func,
   validate: _propTypes2.default.func,
   beginDateField: _propTypes2.default.string,
   endDateField: _propTypes2.default.string,
   singleDateField: _propTypes2.default.string,
   formatField: _propTypes2.default.string,
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   maxListLength: _propTypes2.default.number
};

ComplexDateList.defaultProps = {};

exports.default = ComplexDateList;