'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageButton = function PageButton(_ref) {
   var active = _ref.active,
       disable = _ref.disable,
       hidden = _ref.hidden,
       changePage = _ref.changePage,
       children = _ref.children;

   var classes = (0, _classnames2.default)({
      active: active,
      disabled: disable,
      hidden: hidden,
      'page-item': true
   });
   return _react2.default.createElement(
      'li',
      { className: classes },
      _react2.default.createElement(
         'a',
         {
            onClick: function onClick(e) {
               e.preventDefault();
               changePage(e.currentTarget.textContent);
            },
            className: 'page-link' },
         children
      )
   );
};

PageButton.propTypes = {
   active: _propTypes2.default.bool,
   disable: _propTypes2.default.bool,
   hidden: _propTypes2.default.bool,
   changePage: _propTypes2.default.func,
   children: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string])
};

exports.default = PageButton;