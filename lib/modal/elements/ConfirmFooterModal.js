'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _CustomFooterModal = require('./CustomFooterModal');

var _CustomFooterModal2 = _interopRequireDefault(_CustomFooterModal);

var _Button = require('../../buttons/button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ConfirmFooterModal = function ConfirmFooterModal(_ref) {
   var className = _ref.className,
       confirmBtn = _ref.confirmBtn,
       cancelBtn = _ref.cancelBtn,
       disabledConfirmBtn = _ref.disabledConfirmBtn;

   return _react2.default.createElement(
      _CustomFooterModal2.default,
      { className: className },
      confirmBtn && confirmBtn.action && _react2.default.createElement(_Button2.default, { disabled: disabledConfirmBtn || false,
         onClick: confirmBtn.action,
         className: confirmBtn.className || "btn btn-success",
         icon: confirmBtn.icon,
         text: confirmBtn.text || "Добавить" }),
      _react2.default.createElement(_Button2.default, { onClick: cancelBtn.action,
         href: cancelBtn.href,
         className: 'btn btn-default',
         icon: cancelBtn.icon,
         text: cancelBtn.text || "Отмена" })
   );
};

ConfirmFooterModal.propTypes = {
   className: _propTypes2.default.string,
   confirmBtn: _propTypes2.default.shape({
      disabled: _propTypes2.default.string,
      action: _propTypes2.default.func,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string,
      icon: _propTypes2.default.string
   }),
   cancelBtn: _propTypes2.default.shape({
      action: _propTypes2.default.func,
      text: _propTypes2.default.string,
      icon: _propTypes2.default.string
   })
};

ConfirmFooterModal.defaultProps = { confirmBtn: {}, cancelBtn: {} };

exports.default = ConfirmFooterModal;