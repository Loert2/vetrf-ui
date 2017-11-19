'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _Input = require('../input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* todo: Непроверенный компонет-заготовка для глобального поиска
* */
var NavSearch = function (_Component) {
   _inherits(NavSearch, _Component);

   function NavSearch(props, context) {
      _classCallCheck(this, NavSearch);

      var _this = _possibleConstructorReturn(this, (NavSearch.__proto__ || Object.getPrototypeOf(NavSearch)).call(this, props, context));

      _this.state = {
         showSearchModal: false
      };
      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      return _this;
   }

   _createClass(NavSearch, [{
      key: 'handleClickOutside',
      value: function handleClickOutside(e) {
         if (!_reactDom2.default.findDOMNode(this).contains(e.target)) {
            this.setState({ showSearchModal: false });
         }
      }
   }, {
      key: 'componentDidMount',
      value: function componentDidMount() {
         document.addEventListener('click', this.handleClickOutside, false);
      }
   }, {
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
         document.removeEventListener('click', this.handleClickOutside, false);
      }
   }, {
      key: 'closeOnSelect',
      value: function closeOnSelect() {
         if (this.props.closeOnSelect) {
            this.setState({ showSearchModal: false });
         }
      }
   }, {
      key: 'showSearchModal',
      value: function showSearchModal(self) {
         return function () {
            self.setState({ showSearchModal: true });
         };
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var content = this.props.content && this.props.content.content && this.props.content.content.filter(function (elem) {
            if (_this2.props.selected) {
               return !_this2.props.selected.some(function (e) {
                  return e[_this2.props.idType] === elem[[_this2.props.idType]];
               });
            }
            return true;
         });
         return _react2.default.createElement(
            'div',
            { id: 'nav-search', className: 'nav-search' },
            _react2.default.createElement(
               'form',
               { className: 'form-search' },
               _react2.default.createElement(
                  'span',
                  { className: 'input-icon' },
                  _react2.default.createElement(_Input2.default, { className: 'nav-search-input width-260',
                     autoComplete: 'off',
                     autoFocus: this.props.autoFocus,
                     onEnter: function onEnter() {
                        return _this2.props.changeTerm(_this2.props.term);
                     },
                     onFocus: this.showSearchModal(this),
                     value: this.props.term,
                     onChange: this.props.changeTerm,
                     placeholder: '\u041F\u043E\u0438\u0441\u043A ...' }),
                  _react2.default.createElement('i', { className: 'ace-icon fa fa-search nav-search-icon' })
               )
            ),
            this.state.showSearchModal && _react2.default.createElement(
               'div',
               { className: 'result' },
               _react2.default.createElement(
                  'ul',
                  null,
                  this.props.content && this.props.content.error && _react2.default.createElement(
                     'li',
                     { className: 'error' },
                     '\u041E\u0448\u0438\u0431\u043A\u0430 \u0437\u0430\u0433\u0440\u0443\u0437\u043A\u0438'
                  ),
                  this.props.content && this.props.content.loading && _react2.default.createElement(
                     'li',
                     { className: 'loading' },
                     '\u0417\u0430\u0433\u0440\u0443\u0437\u043A\u0430...'
                  ),
                  this.props.content && !this.props.content.loading && !this.props.content.error && content.length === 0 && _react2.default.createElement(
                     'li',
                     { className: 'not-found' },
                     '\u041D\u0438\u0447\u0435\u0433\u043E \u043D\u0435 \u043D\u0430\u0439\u0434\u0435\u043D\u043E'
                  ),
                  this.props.content && this.props.content.content && content.map(function (elem, index) {
                     return _react2.default.createElement(
                        'li',
                        { key: index,
                           onClick: function onClick() {
                              _this2.closeOnSelect();
                              if (_this2.props.onSelect) {
                                 _this2.props.onSelect(elem[_this2.props.idType]);
                              }
                           } },
                        _react2.default.createElement(_this2.props.template, elem)
                     );
                  })
               )
            )
         );
      }
   }]);

   return NavSearch;
}(_react.Component);

exports.default = NavSearch;