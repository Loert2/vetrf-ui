'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CustomFooterModal = function CustomFooterModal(_ref) {
   var className = _ref.className,
       children = _ref.children;
   return _react2.default.createElement(
      'div',
      { className: className || 'modal-footer' },
      children
   );
};

CustomFooterModal.propTypes = {
   className: _propTypes2.default.string,
   children: _propTypes2.default.node
};

exports.default = CustomFooterModal;