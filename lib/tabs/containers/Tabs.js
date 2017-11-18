'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _TabList = require('../elements/tab-list/TabList');

var _TabList2 = _interopRequireDefault(_TabList);

var _TabContentList = require('../elements/content-list/TabContentList');

var _TabContentList2 = _interopRequireDefault(_TabContentList);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Tabs = function (_Component) {
   _inherits(Tabs, _Component);

   function Tabs(props, context) {
      _classCallCheck(this, Tabs);

      var _this = _possibleConstructorReturn(this, (Tabs.__proto__ || Object.getPrototypeOf(Tabs)).call(this, props, context));

      var selectedName = props.selectedName,
          tabs = props.tabs;

      _this.state = {
         selectedName: selectedName || tabs && tabs.length > 0 && tabs[0].name || ""
      };
      _this.onSelect = _this.onSelect.bind(_this);
      return _this;
   }

   _createClass(Tabs, [{
      key: 'onSelect',
      value: function onSelect(name) {
         this.setState({ selectedName: name });
      }
   }, {
      key: 'render',
      value: function render() {
         var tabs = this.props.tabs;
         var selectedName = this.state.selectedName;

         return _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(_TabList2.default, { tabs: tabs,
               onSelect: this.onSelect,
               selectedName: selectedName }),
            _react2.default.createElement(_TabContentList2.default, { tabs: tabs,
               selectedName: selectedName })
         );
      }
   }]);

   return Tabs;
}(_react.Component);

exports.default = Tabs;


Tabs.propTypes = {
   selectedName: _propTypes2.default.string,
   tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      content: _propTypes2.default.node,
      name: _propTypes2.default.string,
      label: _propTypes2.default.string
   }))
};