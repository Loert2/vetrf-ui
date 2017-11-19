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

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _validateUtils = require('../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RadioBtnFormGroup = function (_PureComponent) {
   _inherits(RadioBtnFormGroup, _PureComponent);

   function RadioBtnFormGroup(props) {
      _classCallCheck(this, RadioBtnFormGroup);

      var _this = _possibleConstructorReturn(this, (RadioBtnFormGroup.__proto__ || Object.getPrototypeOf(RadioBtnFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(RadioBtnFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var hasError = (0, _validateUtils2.default)(nextProps, function () {
            return nextProps.require && !nextProps.value;
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
             options = _props.options,
             value = _props.value,
             name = _props.name,
             _onChange = _props.onChange,
             errorText = _props.errorText,
             field = _props.field;

         var radioBtnGroup = options.map(function (item) {
            return _react2.default.createElement(
               'div',
               { key: (0, _uniqueId2.default)() },
               _react2.default.createElement(_RadioBtn2.default, { id: item.id,
                  name: name,
                  value: item.value,
                  onChange: function onChange(value) {
                     return _onChange && _onChange(value, field);
                  },
                  className: item.className,
                  text: item.text,
                  checked: value === item.value,
                  disabled: item.disabled })
            );
         });
         return _react2.default.createElement(
            _FormGroup2.default,
            { labelText: labelText,
               require: require,
               help: help,
               additionalBlock: additionalBlock,
               hasError: this.state.hasError,
               errorText: errorText },
            radioBtnGroup
         );
      }
   }]);

   return RadioBtnFormGroup;
}(_react.PureComponent);

RadioBtnFormGroup.propTypes = {
   options: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      id: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string,
      value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string])
   })),
   name: _propTypes2.default.string,
   field: _propTypes2.default.string,
   value: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   help: _propTypes2.default.node,
   labelText: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   onChange: _propTypes2.default.func,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   additionalBlock: _propTypes2.default.node,
   showError: _propTypes2.default.bool,
   require: _propTypes2.default.bool
};

exports.default = RadioBtnFormGroup;