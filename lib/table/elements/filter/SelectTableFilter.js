'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
      value: function filter(event) {
         var filter = void 0;
         var _props = this.props,
             onChange = _props.onChange,
             name = _props.name;

         if (name) {
            event.persist();
            filter = _defineProperty({}, event.target.name, event.target.value);
         } else {
            filter = event;
         }
         onChange(filter);
      }
   }, {
      key: 'render',
      value: function render() {
         var _props2 = this.props,
             id = _props2.id,
             name = _props2.name,
             style = _props2.style,
             className = _props2.className,
             valuesSelect = _props2.valuesSelect,
             multiple = _props2.multiple,
             optionStartText = _props2.optionStartText,
             disabled = _props2.disabled,
             titleText = _props2.titleText;


         var selectOptionList = [_react2.default.createElement(
            'option',
            { disabled: true },
            ' \u0412\u044B\u0431\u0435\u0440\u0438\u0442\u0435 ',
            optionStartText || 'статус',
            ' '
         )];
         if ((0, _isEmpty2.default)(valuesSelect)) {
            // valuesSelect.forEach( (item) => {
            //    const newValue = item.value;
            //    selectOptionList += <option value={ newValue }> { newValue } </option>
            // });
            for (var i = 0; i < valuesSelect.length; i++) {
               var newValue = valuesSelect[{ i: i }].value;
               selectOptionList += _react2.default.createElement(
                  'option',
                  { value: newValue },
                  ' ',
                  newValue,
                  ' '
               );
            }
         }
         return _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
               'select',
               { name: name,
                  disabled: disabled,
                  multiple: multiple || false,
                  style: style,
                  onChange: this.filter,
                  className: className || "input-filter form-control",
                  id: id,
                  title: titleText || "Отфильтравать по статусу" },
               selectOptionList
            )
         );
      }
   }]);

   return SelectTableFilter;
}(_react.Component);

exports.default = SelectTableFilter;


SelectTableFilter.propTypes = {
   valuesSelect: _propTypes2.default.arrayOf(_propTypes2.default.string),
   name: _propTypes2.default.string,
   className: _propTypes2.default.string,
   style: _propTypes2.default.object,
   onChange: _propTypes2.default.func,
   multiple: _propTypes2.default.bool,
   optionStartText: _propTypes2.default.string
};