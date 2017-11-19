'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _RadioBtn = require('../../simple/radio/RadioBtn');

var _RadioBtn2 = _interopRequireDefault(_RadioBtn);

var _validateUtils = require('../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Компонент-переключатель из двух радио-кнопок - true или false, по умолчанию не выбрано ничего.
* */
var RadioBtnSwitchFormGroup = function (_PureComponent) {
   _inherits(RadioBtnSwitchFormGroup, _PureComponent);

   function RadioBtnSwitchFormGroup(props) {
      _classCallCheck(this, RadioBtnSwitchFormGroup);

      var _this = _possibleConstructorReturn(this, (RadioBtnSwitchFormGroup.__proto__ || Object.getPrototypeOf(RadioBtnSwitchFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(RadioBtnSwitchFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var hasError = (0, _validateUtils2.default)(nextProps, function () {
            return nextProps.require && nextProps.value !== undefined;
         }, this.state.hasError);
         if (hasError !== this.state.hasError) {
            this.setState({
               hasError: hasError
            });
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             additionalBlock = _props.additionalBlock,
             labelText = _props.labelText,
             require = _props.require,
             help = _props.help,
             itemTrue = _props.itemTrue,
             itemFalse = _props.itemFalse,
             value = _props.value,
             name = _props.name,
             _onChange = _props.onChange,
             errorText = _props.errorText,
             field = _props.field,
             disabled = _props.disabled,
             id = _props.id;

         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               hasError: this.state.hasError,
               errorText: errorText },
            _react2.default.createElement(
               'div',
               null,
               _react2.default.createElement(_RadioBtn2.default, { id: itemTrue.id || id && id + '_true',
                  name: name,
                  value: 'true',
                  onChange: function onChange() {
                     return _onChange && _onChange(true, field);
                  },
                  className: itemTrue.className || "ace form-control",
                  text: itemTrue.text || "Да",
                  checked: value === true,
                  disabled: disabled })
            ),
            _react2.default.createElement(
               'div',
               null,
               _react2.default.createElement(_RadioBtn2.default, { id: itemFalse.id || id && id + '_false',
                  name: name,
                  value: 'false',
                  onChange: function onChange() {
                     return _onChange && _onChange(false, field);
                  },
                  className: itemFalse.className || "ace form-control",
                  text: itemFalse.text || "Нет",
                  checked: value === false,
                  disabled: disabled })
            )
         );
      }
   }]);

   return RadioBtnSwitchFormGroup;
}(_react.PureComponent);

RadioBtnSwitchFormGroup.propTypes = {
   itemTrue: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string
   }),
   itemFalse: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string
   }),
   name: _propTypes2.default.string,
   field: _propTypes2.default.string,
   value: _propTypes2.default.bool,
   help: _propTypes2.default.node,
   labelText: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   onChange: _propTypes2.default.func,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   showError: _propTypes2.default.bool,
   disabled: _propTypes2.default.bool,
   require: _propTypes2.default.bool
};

RadioBtnSwitchFormGroup.defaultProps = {
   itemTrue: {}, itemFalse: {}
};

exports.default = RadioBtnSwitchFormGroup;