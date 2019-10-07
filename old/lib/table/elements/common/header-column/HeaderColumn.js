'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _index = require('../../constants/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var getIconClass = function getIconClass(sortType) {
   switch (sortType) {
      case _index2.default.SORT_ASC:
         return 'fa-sort-asc';
      case _index2.default.SORT_DESC:
         return 'fa-sort-desc';
      default:
         return 'fa-sort';
   }
};

var initialState = {
   sort: _index2.default.SORT_UNDEFINED,
   sortIcon: 'fa-sort'
};

var HeaderColumn = function (_Component) {
   _inherits(HeaderColumn, _Component);

   function HeaderColumn(props, context) {
      _classCallCheck(this, HeaderColumn);

      var _this = _possibleConstructorReturn(this, (HeaderColumn.__proto__ || Object.getPrototypeOf(HeaderColumn)).call(this, props, context));

      _this.changeSort = _this.changeSort.bind(_this);
      _this.onClickHandler = _this.onClickHandler.bind(_this);
      _this.state = initialState;
      return _this;
   }

   _createClass(HeaderColumn, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         if (nextProps.sortedId !== nextProps.id) {
            this.setState(initialState);
         }
      }
   }, {
      key: 'changeSort',
      value: function changeSort() {
         if (this.state.sort !== _index2.default.SORT_UNDEFINED) {
            switch (this.state.sort) {
               case _index2.default.SORT_ASC:
                  return _index2.default.SORT_DESC;
               case _index2.default.SORT_DESC:
                  return _index2.default.SORT_UNDEFINED;
               default:
                  return _index2.default.SORT_ASC;
            }
         }
         return _index2.default.SORT_ASC;
      }
   }, {
      key: 'onClickHandler',
      value: function onClickHandler() {
         var _this2 = this;

         var _props = this.props,
             onSort = _props.onSort,
             id = _props.id;

         var nextSort = this.changeSort();
         var promise = new Promise(function (resolve, reject) {
            _this2.setState({
               sort: nextSort,
               sortIcon: getIconClass(nextSort)
            });
            resolve();
         });
         promise.then(function () {
            return onSort && onSort(nextSort, id);
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var _props2 = this.props,
             width = _props2.width,
             title = _props2.title,
             sortable = _props2.sortable,
             onSort = _props2.onSort,
             className = _props2.className;

         return _react2.default.createElement(
            'th',
            {
               style: { width: width, minWidth: width, maxWidth: width },
               className: className || 'header text-align-center' },
            _react2.default.createElement(
               'span',
               null,
               title,
               '\xA0',
               sortable && onSort && _react2.default.createElement('i', {
                  className: (0, _classnames2.default)('sort-caret fa', this.state.sortIcon || 'fa-sort'),
                  onClick: this.onClickHandler
               })
            )
         );
      }
   }]);

   return HeaderColumn;
}(_react.Component);

exports.default = HeaderColumn;


HeaderColumn.propTypes = {
   sortable: _propTypes2.default.bool,
   width: _propTypes2.default.string,
   title: _propTypes2.default.string,
   id: _propTypes2.default.string,
   className: _propTypes2.default.string,
   sortedId: _propTypes2.default.string,
   onSort: _propTypes2.default.func
};