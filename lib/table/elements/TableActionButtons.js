'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../buttons/Button');

var _Button2 = _interopRequireDefault(_Button);

var _ConfirmActionButton = require('../../buttons/ConfirmActionButton');

var _ConfirmActionButton2 = _interopRequireDefault(_ConfirmActionButton);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableActionButtons = function TableActionButtons(_ref) {
   var viewBtn = _ref.viewBtn,
       editBtn = _ref.editBtn,
       deleteBtn = _ref.deleteBtn,
       item = _ref.item;
   return _react2.default.createElement(
      'div',
      { className: 'inline actions' },
      viewBtn && _react2.default.createElement(_Button2.default, { tooltip: viewBtn.tooltip || "Просмотр",
         href: viewBtn.href,
         onClick: function onClick() {
            return viewBtn.action && viewBtn.action(item);
         },
         icon: viewBtn.icon || "fa fa-bars bigger-130",
         className: viewBtn.className || "green" }),
      editBtn && _react2.default.createElement(_Button2.default, { tooltip: editBtn.tooltip || "Редактировать",
         href: editBtn.href,
         onClick: function onClick() {
            return editBtn.action && editBtn.action(item);
         },
         icon: editBtn.icon || "fa fa-pencil bigger-130",
         className: editBtn.className || "blue" }),
      deleteBtn && _react2.default.createElement(_ConfirmActionButton2.default, { tooltip: deleteBtn.tooltip || "Удалить",
         onConfirm: function onConfirm() {
            return deleteBtn.action && deleteBtn.action(item);
         },
         icon: deleteBtn.icon || "fa fa-trash-o bigger-130",
         header: deleteBtn.confirmHeaderText,
         bodyText: deleteBtn.confirmBodyText,
         confirmClass: deleteBtn.confirmBtnClass,
         confirmText: deleteBtn.confirmBtnText,
         className: deleteBtn.className || "red" })
   );
};

TableActionButtons.propTypes = {
   viewBtn: _propTypes2.default.shape({
      tooltip: _propTypes2.default.string,
      href: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      className: _propTypes2.default.string,
      action: _propTypes2.default.func
   }),
   editBtn: _propTypes2.default.shape({
      tooltip: _propTypes2.default.string,
      href: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      className: _propTypes2.default.string,
      action: _propTypes2.default.func
   }),
   deleteBtn: _propTypes2.default.shape({
      tooltip: _propTypes2.default.string,
      confirmHeaderText: _propTypes2.default.string,
      confirmBodyText: _propTypes2.default.string,
      confirmBtnClass: _propTypes2.default.string,
      confirmBtnText: _propTypes2.default.string,
      icon: _propTypes2.default.string,
      className: _propTypes2.default.string,
      action: _propTypes2.default.func
   }),
   item: _propTypes2.default.any
};

exports.default = TableActionButtons;