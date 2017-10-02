'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

/**
* Компонент-обертка для простого select, не требует внешних зависимостей
* */
var SimpleSelect = function (_Component) {
   _inherits(SimpleSelect, _Component);

   function SimpleSelect(props, context) {
      _classCallCheck(this, SimpleSelect);

      var _this = _possibleConstructorReturn(this, (SimpleSelect.__proto__ || Object.getPrototypeOf(SimpleSelect)).call(this, props, context));

      _this.state = { value: _this.props.value };
      _this.handleChange = _this.handleChange.bind(_this);
      return _this;
   }

   _createClass(SimpleSelect, [{
      key: 'handleChange',
      value: function handleChange(event) {
         this.setState({ value: event.target.value });
         this.props.onChange && this.props.onChange(event.target.value);
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             className = _props.className,
             id = _props.id,
             placeholder = _props.placeholder,
             notClearableOptions = _props.notClearableOptions,
             options = _props.options,
             idType = _props.idType,
             valueType = _props.valueType;


         debugger;

         return _react2.default.createElement(
            'select',
            { className: className,
               id: id,
               onChange: this.handleChange,
               value: this.state.value,
               placeholder: placeholder || "Выберите из списка..." },
            !notClearableOptions && _react2.default.createElement('option', null),
            options && options.map(function (option, index) {
               return _react2.default.createElement(
                  'option',
                  { key: (0, _uniqueId2.default)(), value: option[idType || "id"] },
                  option[valueType || "name"]
               );
            })
         );
      }
   }]);

   return SimpleSelect;
}(_react.Component);

SimpleSelect.propTypes = {
   idType: _propTypes2.default.string,
   valueType: _propTypes2.default.string,
   className: _propTypes2.default.string,
   id: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   value: _propTypes2.default.object,
   placeholder: _propTypes2.default.string,
   notClearableOptions: _propTypes2.default.bool,
   options: _propTypes2.default.arrayOf(_propTypes2.default.object)
};

exports.default = SimpleSelect;