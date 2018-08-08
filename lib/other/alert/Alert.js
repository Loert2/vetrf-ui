'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alert = function (_React$PureComponent) {
   _inherits(Alert, _React$PureComponent);

   function Alert() {
      _classCallCheck(this, Alert);

      var _this = _possibleConstructorReturn(this, (Alert.__proto__ || Object.getPrototypeOf(Alert)).call(this));

      _this.state = {
         showAlert: true
      };
      _this.closeAlert = _this.closeAlert.bind(_this);
      return _this;
   }

   _createClass(Alert, [{
      key: 'closeAlert',
      value: function closeAlert() {
         this.setState({ showAlert: false });
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             id = _props.id,
             className = _props.className,
             closeButton = _props.closeButton,
             children = _props.children;

         if (this.state.showAlert) {
            return _react2.default.createElement(
               'div',
               { id: id, className: className || 'alert alert-info' },
               closeButton && _react2.default.createElement(
                  'button',
                  { type: 'button', className: 'close', onClick: this.closeAlert },
                  _react2.default.createElement('i', { className: 'ace-icon fa fa-times' })
               ),
               children
            );
         } else {
            return null;
         }
      }
   }]);

   return Alert;
}(_react2.default.PureComponent);

Alert.propTypes = {
   children: _propTypes2.default.node,
   closeButton: _propTypes2.default.bool,
   className: _propTypes2.default.string,
   id: _propTypes2.default.string
};

exports.default = Alert;