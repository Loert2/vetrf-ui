'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _CustomActionButton = require('./CustomActionButton');

var _CustomActionButton2 = _interopRequireDefault(_CustomActionButton);

var _Textarea = require('../../form/elements/simple/Textarea');

var _Textarea2 = _interopRequireDefault(_Textarea);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var PromptConfirmActionButton = function (_Component) {
   _inherits(PromptConfirmActionButton, _Component);

   function PromptConfirmActionButton(props, context) {
      _classCallCheck(this, PromptConfirmActionButton);

      var _this = _possibleConstructorReturn(this, (PromptConfirmActionButton.__proto__ || Object.getPrototypeOf(PromptConfirmActionButton)).call(this, props, context));

      _this.state = {
         showModal: false
      };
      _this.toggleModal = _this.toggleModal.bind(_this);
      _this.onEnableConfirmBtn = _this.onEnableConfirmBtn.bind(_this);
      return _this;
   }

   _createClass(PromptConfirmActionButton, [{
      key: 'toggleModal',
      value: function toggleModal() {
         this.setState({ showModal: !this.state.showModal });
      }
   }, {
      key: 'onEnableConfirmBtn',
      value: function onEnableConfirmBtn() {
         var textAreaValue = this.props.textAreaValue;

         if (textAreaValue && textAreaValue.length > 0) {
            return false;
         }
         return true;
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
             disabled = _props.disabled,
             onConfirm = _props.onConfirm,
             confirmHeaderText = _props.confirmHeaderText,
             confirmBodyText = _props.confirmBodyText,
             confirmBtnText = _props.confirmBtnText,
             confirmBtnClass = _props.confirmBtnClass,
             confirmBtnIcon = _props.confirmBtnIcon,
             cancelBtnIcon = _props.cancelBtnIcon,
             cancelBtnText = _props.cancelBtnText,
             onChangeTextArea = _props.onChangeTextArea,
             textAreaValue = _props.textAreaValue,
             textAreaPlaceholder = _props.textAreaPlaceholder,
             textAreaClassName = _props.textAreaClassName;


         return _react2.default.createElement(
            'div',
            { className: 'inline' },
            _react2.default.createElement(_CustomActionButton2.default, { id: id,
               className: className,
               icon: icon,
               buttonText: buttonText,
               disabled: disabled,
               tooltip: tooltip,
               body: _react2.default.createElement(_Textarea2.default, { value: textAreaValue,
                  onChange: onChangeTextArea,
                  id: "idTextArea",
                  placeholder: textAreaPlaceholder,
                  className: textAreaClassName || "form-control width-300" }),
               confirmHeaderText: confirmHeaderText,
               confirmBodyText: confirmBodyText,
               onConfirm: onConfirm,
               onEnableConfirmBtn: this.onEnableConfirmBtn,
               disabledConfirmBtn: true,
               confirmBtnClass: confirmBtnClass,
               confirmBtnIcon: confirmBtnIcon,
               cancelBtnIcon: cancelBtnIcon,
               confirmBtnText: confirmBtnText,
               cancelBtnText: cancelBtnText })
         );
      }
   }]);

   return PromptConfirmActionButton;
}(_react.Component);

PromptConfirmActionButton.propTypes = {
   id: _propTypes2.default.string,
   className: _propTypes2.default.string,
   buttonText: _propTypes2.default.string,
   body: _propTypes2.default.node,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   tooltip: _propTypes2.default.string,
   confirmHeaderText: _propTypes2.default.string,
   confirmBodyText: _propTypes2.default.string,
   confirmBtnClass: _propTypes2.default.string,
   confirmBtnIcon: _propTypes2.default.string,
   cancelBtnIcon: _propTypes2.default.string,
   confirmBtnText: _propTypes2.default.string,
   cancelBtnText: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   onConfirm: _propTypes2.default.func,
   onChangeTextArea: _propTypes2.default.func,
   textAreaValue: _propTypes2.default.string,
   textAreaPlaceholder: _propTypes2.default.string,
   textAreaClassName: _propTypes2.default.string
};

exports.default = PromptConfirmActionButton;