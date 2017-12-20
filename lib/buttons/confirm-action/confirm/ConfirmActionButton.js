'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _ConfirmModal = require('../../../modal/containers/confirm-modal/ConfirmModal');

var _ConfirmModal2 = _interopRequireDefault(_ConfirmModal);

var _Button = require('../../button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmActionButton = function (_Component) {
   _inherits(ConfirmActionButton, _Component);

   function ConfirmActionButton(props, context) {
      _classCallCheck(this, ConfirmActionButton);

      var _this = _possibleConstructorReturn(this, (ConfirmActionButton.__proto__ || Object.getPrototypeOf(ConfirmActionButton)).call(this, props, context));

      _this.state = {
         showModal: false
      };
      _this.toggleModal = _this.toggleModal.bind(_this);
      _this.handleClick = _this.handleClick.bind(_this);
      return _this;
   }

   _createClass(ConfirmActionButton, [{
      key: 'toggleModal',
      value: function toggleModal() {
         this.setState({ showModal: !this.state.showModal });
      }
   }, {
      key: 'handleClick',
      value: function handleClick() {
         var checkOpportunityToOpenModal = this.props.checkOpportunityToOpenModal;

         if (checkOpportunityToOpenModal !== undefined && !this.state.showModal) {
            checkOpportunityToOpenModal() && this.toggleModal();
         } else {
            this.toggleModal();
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             id = _props.id,
             className = _props.className,
             icon = _props.icon,
             buttonText = _props.buttonText,
             tooltip = _props.tooltip,
             confirmHeaderText = _props.confirmHeaderText,
             confirmBodyText = _props.confirmBodyText,
             onConfirm = _props.onConfirm,
             disabled = _props.disabled,
             confirmBtnClass = _props.confirmBtnClass,
             confirmBtnIcon = _props.confirmBtnIcon,
             cancelBtnIcon = _props.cancelBtnIcon,
             confirmBtnText = _props.confirmBtnText,
             confirmBtnDisabled = _props.confirmBtnDisabled,
             cancelBtnText = _props.cancelBtnText;


         return _react2.default.createElement(
            'div',
            { className: 'inline' },
            _react2.default.createElement(_Button2.default, { id: id,
               className: className,
               onClick: this.handleClick,
               icon: icon,
               text: buttonText,
               disabled: disabled,
               tooltip: tooltip }),
            this.state.showModal && _react2.default.createElement(_ConfirmModal2.default, { onClose: this.toggleModal,
               header: confirmHeaderText || "Подтверждение",
               bodyText: confirmBodyText || "Вы уверены?",
               confirmBtn: {
                  action: onConfirm,
                  className: confirmBtnClass || "btn btn-danger",
                  text: confirmBtnText || "Удалить",
                  icon: confirmBtnIcon,
                  disabled: confirmBtnDisabled
               },
               cancelBtn: {
                  text: cancelBtnText || "Отмена",
                  icon: cancelBtnIcon
               } })
         );
      }
   }]);

   return ConfirmActionButton;
}(_react.Component);

ConfirmActionButton.propTypes = {
   id: _propTypes2.default.string,
   className: _propTypes2.default.string,
   buttonText: _propTypes2.default.string,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   tooltip: _propTypes2.default.string,
   confirmHeaderText: _propTypes2.default.string,
   confirmBodyText: _propTypes2.default.string,
   confirmBtnClass: _propTypes2.default.string,
   confirmBtnIcon: _propTypes2.default.string,
   confirmBtnDisabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   cancelBtnIcon: _propTypes2.default.string,
   confirmBtnText: _propTypes2.default.string,
   cancelBtnText: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   onConfirm: _propTypes2.default.func,
   checkOpportunityToOpenModal: _propTypes2.default.func
};

exports.default = ConfirmActionButton;