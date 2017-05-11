'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('./elements/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _HeaderModal = require('./elements/HeaderModal');

var _HeaderModal2 = _interopRequireDefault(_HeaderModal);

var _BodyModal = require('./elements/BodyModal');

var _BodyModal2 = _interopRequireDefault(_BodyModal);

var _CustomFooterModal = require('./elements/CustomFooterModal');

var _CustomFooterModal2 = _interopRequireDefault(_CustomFooterModal);

var _ConfirmFooterModal = require('./elements/ConfirmFooterModal');

var _ConfirmFooterModal2 = _interopRequireDefault(_ConfirmFooterModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ModalDialog = function (_Component) {
   _inherits(ModalDialog, _Component);

   function ModalDialog(props, context) {
      _classCallCheck(this, ModalDialog);

      var _this = _possibleConstructorReturn(this, (ModalDialog.__proto__ || Object.getPrototypeOf(ModalDialog)).call(this, props, context));

      _this.hide = _this.hide.bind(_this);
      _this.state = { show: true };
      return _this;
   }

   _createClass(ModalDialog, [{
      key: 'hide',
      value: function hide() {
         this.setState({ show: false });
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var _props = this.props,
             headerClass = _props.headerClass,
             header = _props.header,
             _onClose = _props.onClose,
             footerClass = _props.footerClass,
             footer = _props.footer,
             bodyStyle = _props.bodyStyle,
             confirmBtn = _props.confirmBtn,
             cancelBtn = _props.cancelBtn,
             width = _props.width,
             children = _props.children;


         return _react2.default.createElement(
            _Modal2.default,
            { style: { display: this.state.show ? "block" : "none" }, width: width },
            _react2.default.createElement(_HeaderModal2.default, { className: headerClass,
               title: header,
               onClose: function onClose() {
                  _this2.hide();_onClose && _onClose();
               } }),
            _react2.default.createElement(
               _BodyModal2.default,
               { style: bodyStyle },
               children
            ),
            footer ? _react2.default.createElement(
               _CustomFooterModal2.default,
               { className: footerClass },
               footer
            ) : _react2.default.createElement(_ConfirmFooterModal2.default, { confirmBtn: confirmBtn,
               cancelBtn: {
                  action: function action() {
                     _this2.hide();_onClose && _onClose();
                  },
                  text: cancelBtn && cancelBtn.text,
                  icon: cancelBtn && cancelBtn.icon
               },
               className: footerClass })
         );
      }
   }]);

   return ModalDialog;
}(_react.Component);

ModalDialog.propTypes = {
   header: _propTypes2.default.string,
   headerClass: _propTypes2.default.string,
   footerClass: _propTypes2.default.string,
   width: _propTypes2.default.string,
   footer: _propTypes2.default.node,
   bodyStyle: _propTypes2.default.object,
   children: _propTypes2.default.node,
   onClose: _propTypes2.default.func,
   confirmBtn: _propTypes2.default.shape({
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      action: _propTypes2.default.func,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string,
      icon: _propTypes2.default.string
   }),
   cancelBtn: _propTypes2.default.shape({
      text: _propTypes2.default.string,
      icon: _propTypes2.default.string
   })
};

exports.default = ModalDialog;