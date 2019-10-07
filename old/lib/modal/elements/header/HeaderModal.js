'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HeaderModal = function HeaderModal(_ref) {
   var className = _ref.className,
       onClose = _ref.onClose,
       title = _ref.title;
   return _react2.default.createElement(
      'div',
      { className: className || 'modal-header' },
      _react2.default.createElement(
         'button',
         { type: 'button', className: 'close', onClick: onClose },
         '\xD7'
      ),
      _react2.default.createElement(
         'h4',
         { className: 'modal-title' },
         title
      )
   );
};

HeaderModal.propTypes = {
   title: _propTypes2.default.string,
   className: _propTypes2.default.string,
   onClose: _propTypes2.default.func
};

exports.default = HeaderModal;