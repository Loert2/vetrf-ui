'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _inputFilters = require('../filters/inputFilters');

var _Input = require('../Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
 * Компонет-обертка над input для чисел
 * если есть name, то в onChange передается сам event, иначе только его value
 * */
var NumberInput = function (_Component) {
   _inherits(NumberInput, _Component);

   function NumberInput(props, context) {
      _classCallCheck(this, NumberInput);

      var _this = _possibleConstructorReturn(this, (NumberInput.__proto__ || Object.getPrototypeOf(NumberInput)).call(this, props, context));

      _this.state = {
         validValue: props.value || ''
      };

      _this.getOnChangeHandler = _this.getOnChangeHandler.bind(_this);
      _this.setValidValue = _this.setValidValue.bind(_this);
      return _this;
   }

   _createClass(NumberInput, [{
      key: 'setValidValue',
      value: function setValidValue(value) {
         this.setState({ validValue: value });
      }
   }, {
      key: 'getOnChangeHandler',
      value: function getOnChangeHandler() {
         var _this2 = this;

         var _props = this.props,
             name = _props.name,
             onChange = _props.onChange,
             float = _props.float;

         var filter = float ? _inputFilters.onlyFloatFilter : _inputFilters.onlyNumbersFilter;
         if (name) {
            return function (e) {
               e.target.value = filter(e.target.value, _this2.state.validValue);
               _this2.setValidValue(e.target.value);
               onChange && onChange(e);
            };
         } else {
            return function (value) {
               var val = filter(value, _this2.state.validValue);
               _this2.setValidValue(val);
               onChange && onChange(val);
            };
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props2 = this.props,
             id = _props2.id,
             name = _props2.name,
             maxLength = _props2.maxLength,
             value = _props2.value,
             style = _props2.style,
             autoFocus = _props2.autoFocus,
             onFocus = _props2.onFocus,
             disabled = _props2.disabled,
             onEnter = _props2.onEnter,
             className = _props2.className,
             placeholder = _props2.placeholder;

         return _react2.default.createElement(_Input2.default, {
            type: 'text',
            id: id,
            name: name,
            maxLength: maxLength || 255,
            value: value || '',
            style: style,
            autoFocus: autoFocus,
            onFocus: onFocus,
            disabled: disabled || '',
            onKeyPress: onEnter,
            onChange: this.getOnChangeHandler(),
            className: className,
            placeholder: placeholder
         });
      }
   }]);

   return NumberInput;
}(_react.Component);

NumberInput.propTypes = {
   value: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   autoFocus: _propTypes2.default.bool,
   float: _propTypes2.default.bool,
   onFocus: _propTypes2.default.func,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = NumberInput;