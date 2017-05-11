'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Alert = function Alert(_ref) {
   var id = _ref.id,
       className = _ref.className,
       closeButton = _ref.closeButton,
       children = _ref.children;
   return _react2.default.createElement(
      'div',
      { id: id, className: className || "alert alert-info" },
      closeButton && _react2.default.createElement(
         'button',
         { type: 'button', className: 'close', dataDismiss: 'alert' },
         _react2.default.createElement('i', { className: 'ace-icon fa fa-times' })
      ),
      children
   );
};

Alert.propTypes = {
   children: _propTypes2.default.node,
   closeButton: _propTypes2.default.bool,
   className: _propTypes2.default.string,
   id: _propTypes2.default.string
};

exports.default = Alert;