'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _index = require('../../constants/index');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var InputTableFilter = function (_Component) {
   _inherits(InputTableFilter, _Component);

   function InputTableFilter(props, context) {
      _classCallCheck(this, InputTableFilter);

      var _this = _possibleConstructorReturn(this, (InputTableFilter.__proto__ || Object.getPrototypeOf(InputTableFilter)).call(this, props, context));

      _this.filter = _this.filter.bind(_this);
      _this.timeout = null;
      return _this;
   }

   _createClass(InputTableFilter, [{
      key: 'componentWillUnmount',
      value: function componentWillUnmount() {
         this.timeout && clearTimeout(this.timeout);
      }
   }, {
      key: 'filter',
      value: function filter(event) {
         var filter = void 0;
         var _props = this.props,
             onChange = _props.onChange,
             delay = _props.delay,
             name = _props.name;

         if (name) {
            event.persist();
            filter = _defineProperty({}, event.target.name, event.target.value);
         } else {
            filter = event;
         }
         this.timeout && clearTimeout(this.timeout);
         this.timeout = setTimeout(function () {
            onChange(filter);
         }, delay || _index2.default.FILTER_DELAY);
      }
   }, {
      key: 'render',
      value: function render() {
         var _props2 = this.props,
             placeholder = _props2.placeholder,
             name = _props2.name,
             style = _props2.style,
             onEnter = _props2.onEnter,
             className = _props2.className;

         return _react2.default.createElement('input', { placeholder: placeholder,
            name: name,
            type: 'text',
            style: style,
            onKeyPress: onEnter,
            onChange: this.filter,
            className: className || "input-filter form-control" });
      }
   }]);

   return InputTableFilter;
}(_react.Component);

InputTableFilter.propTypes = {
   placeholder: _propTypes2.default.string,
   name: _propTypes2.default.string,
   className: _propTypes2.default.string,
   style: _propTypes2.default.object,
   delay: _propTypes2.default.number,
   onEnter: _propTypes2.default.func,
   onChange: _propTypes2.default.func
};

exports.default = InputTableFilter;