'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Modal = require('../elements/Modal');

var _Modal2 = _interopRequireDefault(_Modal);

var _HeaderModal = require('../elements/HeaderModal');

var _HeaderModal2 = _interopRequireDefault(_HeaderModal);

var _BodyModal = require('../elements/BodyModal');

var _BodyModal2 = _interopRequireDefault(_BodyModal);

var _ConfirmFooterModal = require('../elements/ConfirmFooterModal');

var _ConfirmFooterModal2 = _interopRequireDefault(_ConfirmFooterModal);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ConfirmModal = function (_Component) {
   _inherits(ConfirmModal, _Component);

   function ConfirmModal(props, context) {
      _classCallCheck(this, ConfirmModal);

      var _this = _possibleConstructorReturn(this, (ConfirmModal.__proto__ || Object.getPrototypeOf(ConfirmModal)).call(this, props, context));

      _this.hide = _this.hide.bind(_this);
      _this.state = {
         show: true
      };
      return _this;
   }

   _createClass(ConfirmModal, [{
      key: 'hide',
      value: function hide() {
         this.setState({ show: false });
      }
   }, {
      key: 'render',
      value: function render() {
         var _this2 = this;

         var _props = this.props,
             header = _props.header,
             body = _props.body,
             confirmBtn = _props.confirmBtn,
             _onClose = _props.onClose,
             cancelBtn = _props.cancelBtn,
             bodyText = _props.bodyText;


         return _react2.default.createElement(
            _Modal2.default,
            { style: { display: this.state.show ? "block" : "none" } },
            _react2.default.createElement(_HeaderModal2.default, { title: header,
               onClose: function onClose() {
                  _this2.hide();_onClose && _onClose();
               } }),
            _react2.default.createElement(
               _BodyModal2.default,
               null,
               _react2.default.createElement(
                  'p',
                  { style: { whiteSpace: "normal" } },
                  bodyText
               ),
               body
            ),
            _react2.default.createElement(_ConfirmFooterModal2.default, { confirmBtn: confirmBtn,
               cancelBtn: {
                  action: function action() {
                     _this2.hide();_onClose && _onClose();
                  },
                  text: cancelBtn && cancelBtn.cancelText,
                  icon: cancelBtn && cancelBtn.cancelIcon
               } })
         );
      }
   }]);

   return ConfirmModal;
}(_react.Component);

_ConfirmFooterModal2.default.propTypes = {
   header: _propTypes2.default.string,
   bodyText: _propTypes2.default.string,
   body: _propTypes2.default.node,
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

exports.default = ConfirmModal;