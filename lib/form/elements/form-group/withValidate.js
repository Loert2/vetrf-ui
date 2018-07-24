'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _isFunction = require('lodash/isFunction');

var _isFunction2 = _interopRequireDefault(_isFunction);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withValidate = function withValidate(WrappedComponent, customValidate) {
   var _class, _temp;

   return _temp = _class = function (_React$PureComponent) {
      _inherits(_class, _React$PureComponent);

      function _class(props) {
         _classCallCheck(this, _class);

         var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

         _this.state = { hasError: false };

         _this.validate = _this.validate.bind(_this);
         return _this;
      }

      _createClass(_class, [{
         key: 'componentWillReceiveProps',
         value: function componentWillReceiveProps(nextProps) {
            var hasError = this.validate(nextProps, (0, _isFunction2.default)(customValidate) ? function () {
               return customValidate(nextProps);
            } : function () {
               return nextProps.require && !nextProps.value;
            }, this.state.hasError);
            if (hasError !== this.state.hasError) {
               this.setState({
                  hasError: hasError
               });
            }
         }
      }, {
         key: 'validate',
         value: function validate() {
            var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
            var defaultValidate = arguments[1];
            var oldHasError = arguments[2];
            var defaultErrorText = arguments[3];
            var showError = props.showError,
                value = props.value,
                customValidate = props.customValidate,
                errorHandler = props.errorHandler,
                field = props.field,
                labelText = props.labelText,
                errorText = props.errorText;

            var hasError = showError && (customValidate ? customValidate(value) : defaultValidate && defaultValidate(value));
            if (oldHasError !== hasError && errorHandler) {
               errorHandler(hasError, field, labelText, errorText || defaultErrorText);
            }
            return hasError;
         }
      }, {
         key: 'render',
         value: function render() {
            return _react2.default.createElement(WrappedComponent, _extends({}, this.props, {
               hasError: this.state.hasError }));
         }
      }]);

      return _class;
   }(_react2.default.PureComponent), _class.propTypes = {
      showError: _propTypes2.default.bool,
      value: _propTypes2.default.any,
      customValidate: _propTypes2.default.func,
      errorHandler: _propTypes2.default.func,
      errorText: _propTypes2.default.string,
      field: _propTypes2.default.string,
      labelText: _propTypes2.default.string
   }, _temp;
};

exports.default = withValidate;