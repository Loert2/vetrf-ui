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

var NumberEditableForm = function (_Component) {
   _inherits(NumberEditableForm, _Component);

   function NumberEditableForm(props, context) {
      _classCallCheck(this, NumberEditableForm);

      var _this = _possibleConstructorReturn(this, (NumberEditableForm.__proto__ || Object.getPrototypeOf(NumberEditableForm)).call(this, props, context));

      _this.state = {
         value: props.value,
         edit: false
      };
      _this.toggleEdit = _this.toggleEdit.bind(_this);
      _this.cancel = _this.cancel.bind(_this);
      _this.onChangeInput = _this.onChangeInput.bind(_this);
      _this.onBlurHandler = _this.onBlurHandler.bind(_this);
      _this.saveHandler = _this.saveHandler.bind(_this);
      return _this;
   }

   _createClass(NumberEditableForm, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         this.setState({
            value: nextProps.value,
            edit: nextProps.edit
         });
      }
   }, {
      key: 'toggleEdit',
      value: function toggleEdit() {
         this.setState({
            edit: !this.state.edit,
            value: this.state.value
         });
      }
   }, {
      key: 'onChangeInput',
      value: function onChangeInput(e) {
         var val = e.target.value;
         this.setState({
            edit: this.state.edit,
            value: val
         });
         this.props.onChange && this.props.onChange();
      }
   }, {
      key: 'cancel',
      value: function cancel() {
         this.setState({
            value: this.props.value,
            edit: !this.state.edit
         });
      }
   }, {
      key: 'onBlurHandler',
      value: function onBlurHandler() {
         var _this2 = this;

         setTimeout(function () {
            var saveBtn = document.getElementById('saveBtn');
            if (document.activeElement !== saveBtn) {
               _this2.cancel();
            }
         }, 1);
      }
   }, {
      key: 'saveHandler',
      value: function saveHandler() {
         this.setState({
            value: this.state.value,
            edit: !this.state.edit
         });
         this.props.save && this.props.save(this.state.value);
      }
   }, {
      key: 'render',
      value: function render() {
         var _this3 = this;

         var _state = this.state,
             edit = _state.edit,
             value = _state.value;
         var viewReadOnlyFormatter = this.props.viewReadOnlyFormatter;

         if (edit) {
            return _react2.default.createElement(
               'div',
               { className: 'editable-input' },
               _react2.default.createElement(
                  'form',
                  {
                     className: 'form-inline editable-wrap editable-number',
                     role: 'form' },
                  _react2.default.createElement(
                     'div',
                     { className: 'editable-controls form-group' },
                     _react2.default.createElement('input', {
                        type: 'number',
                        value: value ? value : 0,
                        onChange: this.onChangeInput,
                        ref: function ref(input) {
                           _this3.input = input;
                           input && input.focus();
                        },
                        onBlur: this.onBlurHandler,
                        className: 'editable-has-buttons editable-input form-control input-sm',
                        min: '0'
                     }),
                     _react2.default.createElement(
                        'span',
                        { className: 'editable-buttons' },
                        _react2.default.createElement(
                           'button',
                           {
                              id: 'saveBtn',
                              type: 'button',
                              className: 'btn btn-primary btn-sm',
                              onClick: this.saveHandler },
                           _react2.default.createElement('i', { className: 'fa fa-check' })
                        ),
                        _react2.default.createElement(
                           'button',
                           {
                              type: 'button',
                              className: 'btn btn-default btn-sm',
                              onClick: this.cancel },
                           _react2.default.createElement('i', { className: 'fa fa-times' })
                        )
                     )
                  )
               )
            );
         } else {
            var val = value ? value : '';
            if (this.props.readOnly) {
               return viewReadOnlyFormatter && viewReadOnlyFormatter(val);
            } else {
               return _react2.default.createElement(
                  'div',
                  { className: 'editable-input' },
                  _react2.default.createElement(
                     'a',
                     {
                        onClick: this.toggleEdit,
                        className: 'editable editable-click' },
                     _react2.default.createElement(
                        'span',
                        null,
                        '\xA0\xA0\xA0',
                        val,
                        '\xA0\xA0\xA0'
                     )
                  )
               );
            }
         }
      }
   }]);

   return NumberEditableForm;
}(_react.Component);

NumberEditableForm.propTypes = {
   value: _propTypes2.default.oneOfType([_propTypes2.default.number, _propTypes2.default.string]),
   edit: _propTypes2.default.bool,
   readOnly: _propTypes2.default.bool,
   onChange: _propTypes2.default.func,
   save: _propTypes2.default.func,
   viewReadOnlyFormatter: _propTypes2.default.func
};

exports.default = NumberEditableForm;