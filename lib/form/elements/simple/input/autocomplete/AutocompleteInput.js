'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var _debounce = require('lodash/debounce');

var _debounce2 = _interopRequireDefault(_debounce);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _isObject = require('lodash/isObject');

var _isObject2 = _interopRequireDefault(_isObject);

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

var _Button = require('../../../../../buttons/button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AutocompleteInput = function (_PureComponent) {
   _inherits(AutocompleteInput, _PureComponent);

   function AutocompleteInput(props, context) {
      _classCallCheck(this, AutocompleteInput);

      var _this = _possibleConstructorReturn(this, (AutocompleteInput.__proto__ || Object.getPrototypeOf(AutocompleteInput)).call(this, props, context));

      _this.state = {
         helpVisible: false
      };
      _this.showHelp = _this.showHelp.bind(_this);
      _this.hideHelp = _this.hideHelp.bind(_this);
      _this.handleClickOutside = _this.handleClickOutside.bind(_this);
      _this.changeHandler = _this.changeHandler.bind(_this);
      _this.requestAutocompleteList = (0, _debounce2.default)(props.onAutocomplete, 500);
      return _this;
   }

   _createClass(AutocompleteInput, [{
      key: 'handleClickOutside',
      value: function handleClickOutside(e) {
         if (!_reactDom2.default.findDOMNode(this).contains(e.target)) {
            this.hideHelp();
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
      key: 'showHelp',
      value: function showHelp() {
         if (!this.state.helpVisible) {
            this.setState({ helpVisible: true });
         }
      }
   }, {
      key: 'hideHelp',
      value: function hideHelp() {
         this.setState({ helpVisible: false });
      }
   }, {
      key: 'changeHandler',
      value: function changeHandler(value) {
         var _props = this.props,
             onChange = _props.onChange,
             name = _props.name,
             searchField = _props.searchField,
             items = _props.items,
             resetAutocompleteList = _props.resetAutocompleteList;

         onChange && onChange(value);
         if (name || searchField) {
            if (value && value.length > 2) {
               this.requestAutocompleteList(name ? _defineProperty({}, name, value) : value, name || searchField);
            } else if (!(0, _isEmpty2.default)(items)) {
               resetAutocompleteList && resetAutocompleteList();
            }
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var _props2 = this.props,
             name = _props2.name,
             id = _props2.id,
             maxLength = _props2.maxLength,
             value = _props2.value,
             style = _props2.style,
             onFocus = _props2.onFocus,
             disabled = _props2.disabled,
             className = _props2.className,
             placeholder = _props2.placeholder,
             onSelect = _props2.onSelect,
             viewKey = _props2.viewKey,
             items = _props2.items,
             searchLabel = _props2.searchLabel,
             button = _props2.button,
             searchField = _props2.searchField,
             selectField = _props2.selectField,
             dpropdownClass = _props2.dpropdownClass;

         var spliceItems = !(0, _isEmpty2.default)(items) && items.length > 10 ? items.slice(0, 10) : items || [];
         var field = name || selectField || searchField;
         var dpropdownClassName = dpropdownClass || "autocomplete-dropdown-content";
         var itemList = spliceItems.map(function (item, index) {
            return _react2.default.createElement(
               'li',
               { key: (0, _uniqueId2.default)(),
                  onClick: function onClick() {
                     _this2.hideHelp();onSelect && onSelect(item, field);
                  } },
               (0, _isObject2.default)(item) ? item[viewKey || "name"] : item
            );
         });
         var label = searchLabel && _react2.default.createElement(
            'span',
            { className: 'input-group-addon' },
            _react2.default.createElement('i', { className: 'fa fa-search' })
         );
         var btn = !(0, _isEmpty2.default)(button) && _react2.default.createElement(
            'span',
            { className: 'input-group-btn' },
            _react2.default.createElement(_Button2.default, { id: button.id,
               disabled: button.disabled,
               className: button.className,
               text: button.text,
               tooltip: button.tooltip,
               icon: button.icon,
               onClick: button.handleClick,
               href: button.href })
         );
         return _react2.default.createElement(
            'div',
            { className: 'autocomplete-dropdown col-xs-12 no-padding' },
            _react2.default.createElement(
               'span',
               { className: (label || btn) && "input-group" },
               label,
               _react2.default.createElement(_Input2.default, { type: 'text',
                  id: id,
                  name: name,
                  maxLength: maxLength,
                  value: value,
                  style: style,
                  onFocus: onFocus,
                  disabled: disabled,
                  onClick: this.showHelp,
                  className: className,
                  placeholder: placeholder,
                  onChange: this.changeHandler }),
               btn
            ),
            _react2.default.createElement(
               'ul',
               { className: dpropdownClassName,
                  style: !(0, _isEmpty2.default)(items) && this.state.helpVisible && value ? { display: "block" } : { display: "none" } },
               itemList
            )
         );
      }
   }]);

   return AutocompleteInput;
}(_react.PureComponent);

AutocompleteInput.propTypes = {
   value: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   searchField: _propTypes2.default.string,
   selectField: _propTypes2.default.string,
   dpropdownClass: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   onFocus: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   onClick: _propTypes2.default.func,
   onSelect: _propTypes2.default.func,
   resetAutocompleteList: _propTypes2.default.func,
   onAutocomplete: _propTypes2.default.func.isRequired,
   className: _propTypes2.default.string,
   viewKey: _propTypes2.default.string,
   searchLabel: _propTypes2.default.bool,
   items: _propTypes2.default.array,
   button: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      className: _propTypes2.default.string,
      text: _propTypes2.default.string,
      tooltip: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      href: _propTypes2.default.string,
      handleClick: _propTypes2.default.func
   })
};

AutocompleteInput.defaultProps = {
   maxLength: 255,
   value: "",
   items: [],
   button: {}
};

exports.default = AutocompleteInput;