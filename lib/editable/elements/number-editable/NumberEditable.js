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

var NumberEditable = function (_Component) {
   _inherits(NumberEditable, _Component);

   function NumberEditable(props, context) {
      _classCallCheck(this, NumberEditable);

      var _this = _possibleConstructorReturn(this, (NumberEditable.__proto__ || Object.getPrototypeOf(NumberEditable)).call(this, props, context));

      _this.state = {
         edit: props.editId === props.id
      };
      _this.onChangeInput = _this.onChangeInput.bind(_this);
      return _this;
   }

   _createClass(NumberEditable, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         this.setState({ edit: nextProps.editId === nextProps.id });
      }
   }, {
      key: 'onChangeInput',
      value: function onChangeInput(e) {
         var val = e.target.value;
         var onChange = this.props.onChange;

         onChange && onChange(val);
      }
   }, {
      key: 'render',
      value: function render() {
         var edit = this.state.edit;
         var _props = this.props,
             viewFormatter = _props.viewFormatter,
             value = _props.value;

         if (edit) {
            return _react2.default.createElement(
               'div',
               { className: 'editable-wrap editable-number', role: 'form' },
               _react2.default.createElement(
                  'div',
                  { className: 'editable-controls form-group' },
                  _react2.default.createElement('input', {
                     type: 'number',
                     value: value ? value : 0,
                     onChange: this.onChangeInput,
                     className: 'editable-input form-control input-sm',
                     min: '0'
                  })
               )
            );
         } else {
            var val = value ? value : '';
            if (viewFormatter) {
               return viewFormatter(val);
            } else {
               return _react2.default.createElement(
                  'div',
                  { className: 'editable-input' },
                  _react2.default.createElement(
                     'span',
                     null,
                     '\xA0\xA0',
                     val,
                     '\xA0\xA0'
                  )
               );
            }
         }
      }
   }]);

   return NumberEditable;
}(_react.Component);

NumberEditable.propTypes = {
   value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   id: _propTypes2.default.string,
   editId: _propTypes2.default.string,
   viewFormatter: _propTypes2.default.func
};

exports.default = NumberEditable;