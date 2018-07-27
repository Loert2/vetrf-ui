'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../buttons/button/Button');

var _Button2 = _interopRequireDefault(_Button);

var _FormActionsPanel = require('../form-actions-panel/FormActionsPanel');

var _FormActionsPanel2 = _interopRequireDefault(_FormActionsPanel);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormAction = function FormAction(_ref) {
   var confirmBtn = _ref.confirmBtn,
       resetBtn = _ref.resetBtn;
   return _react2.default.createElement(
      _FormActionsPanel2.default,
      null,
      _react2.default.createElement(_Button2.default, {
         text: confirmBtn.text,
         className: confirmBtn.className || 'btn btn-info',
         icon: confirmBtn.icon || 'ace-icon fa fa-check bigger-110',
         disabled: confirmBtn.disabled,
         onClick: confirmBtn.action
      }),
      '\xA0\xA0\xA0',
      _react2.default.createElement(_Button2.default, {
         onClick: resetBtn.action,
         icon: resetBtn.icon || 'ace-icon fa fa-undo bigger-110',
         className: resetBtn.className || 'btn',
         text: resetBtn.text,
         href: resetBtn.href
      })
   );
};

FormAction.propTypes = {
   confirmBtn: _propTypes2.default.shape({
      className: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      text: _propTypes2.default.string,
      action: _propTypes2.default.func
   }),
   resetBtn: _propTypes2.default.shape({
      href: _propTypes2.default.string,
      className: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      text: _propTypes2.default.string,
      action: _propTypes2.default.func
   })
};

FormAction.defaultProps = { confirmBtn: {}, resetBtn: {} };

exports.default = FormAction;