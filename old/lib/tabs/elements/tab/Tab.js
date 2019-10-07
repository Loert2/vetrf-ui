'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Tab = function Tab(_ref) {
   var name = _ref.name,
       selected = _ref.selected,
       onSelect = _ref.onSelect,
       label = _ref.label;
   return _react2.default.createElement(
      'li',
      { name: name, className: selected ? 'active' : '' },
      _react2.default.createElement(
         'a',
         { onClick: function onClick() {
               return onSelect && onSelect(name);
            } },
         label
      )
   );
};

Tab.propTypes = {
   selected: _propTypes2.default.bool,
   name: _propTypes2.default.string,
   label: _propTypes2.default.string,
   onSelect: _propTypes2.default.func
};

exports.default = Tab;