'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SimpleSelect = require('../../../form/elements/simple/select/SimpleSelect');

var _SimpleSelect2 = _interopRequireDefault(_SimpleSelect);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SelectTableFilter = function (_Component) {
   _inherits(SelectTableFilter, _Component);

   function SelectTableFilter(props, context) {
      _classCallCheck(this, SelectTableFilter);

      var _this = _possibleConstructorReturn(this, (SelectTableFilter.__proto__ || Object.getPrototypeOf(SelectTableFilter)).call(this, props, context));

      _this.filter = _this.filter.bind(_this);
      return _this;
   }

   _createClass(SelectTableFilter, [{
      key: 'filter',
      value: function filter(value) {
         var onChange = this.props.onChange;

         if (onChange && (value || value === "")) {
            onChange(value);
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             id = _props.id,
             className = _props.className,
             optionList = _props.optionList,
             idType = _props.idType,
             valueType = _props.valueType,
             notClearableOptions = _props.notClearableOptions;


         return _react2.default.createElement(_SimpleSelect2.default, { className: className || "input-filter form-control",
            placeholder: '\u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 \u0441\u0442\u0430\u0442\u0443\u0441 \u0438\u0437 \u0441\u043F\u0438\u0441\u043A\u0430...',
            notClearableOptions: notClearableOptions || true,
            options: optionList,
            idType: idType,
            valueType: valueType,
            onChange: this.filter,
            id: id });
      }
   }]);

   return SelectTableFilter;
}(_react.Component);

SelectTableFilter.propTypes = {
   optionList: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      idType: _propTypes2.default.string,
      valueType: _propTypes2.default.string
   })),
   id: _propTypes2.default.string,
   className: _propTypes2.default.string,
   onChange: _propTypes2.default.func,
   notClearableOptions: _propTypes2.default.bool
};

exports.default = SelectTableFilter;