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

var _Tab = require('../tab/Tab');

var _Tab2 = _interopRequireDefault(_Tab);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabList = function TabList(_ref) {
   var tabs = _ref.tabs,
       selectedName = _ref.selectedName,
       onSelect = _ref.onSelect;

   var tabList = [];
   for (var i = 0; i < tabs.length; i++) {
      tabList.push(_react2.default.createElement(_Tab2.default, { key: tabs[i].name || (0, _uniqueId2.default)(),
         name: tabs[i].name,
         onSelect: onSelect,
         label: tabs[i].label,
         selected: selectedName === tabs[i].name }));
   }

   return _react2.default.createElement(
      'ul',
      { className: 'nav nav-tabs nav-justified' },
      tabList
   );
};

TabList.propTypes = {
   selectedName: _propTypes2.default.string,
   tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      content: _propTypes2.default.node,
      name: _propTypes2.default.string,
      label: _propTypes2.default.string
   })),
   onSelect: _propTypes2.default.func
};

exports.default = TabList;