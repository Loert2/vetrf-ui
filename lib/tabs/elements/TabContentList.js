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

var _TabContent = require('./TabContent');

var _TabContent2 = _interopRequireDefault(_TabContent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TabContentList = function TabContentList(_ref) {
   var tabs = _ref.tabs,
       selectedName = _ref.selectedName;

   var tabContentList = [];
   for (var i = 0; i < tabs.length; i++) {
      tabContentList.push(_react2.default.createElement(_TabContent2.default, { key: tabs[i].name || (0, _uniqueId2.default)(),
         content: tabs[i].content,
         selected: selectedName === tabs[i].name }));
   }

   return _react2.default.createElement(
      'div',
      { className: 'tab-content' },
      tabContentList
   );
};

TabContentList.propTypes = {
   selectedName: _propTypes2.default.string,
   tabs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      content: _propTypes2.default.node,
      name: _propTypes2.default.string,
      label: _propTypes2.default.string
   }))
};

exports.default = TabContentList;