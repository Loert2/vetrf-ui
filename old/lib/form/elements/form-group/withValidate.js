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

var _validateUtils = require('../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var withValidate = function withValidate(WrappedComponent, defaultValidate) {
   var _class, _temp;

   return _temp = _class = function (_React$PureComponent) {
      _inherits(_class, _React$PureComponent);

      function _class(props) {
         _classCallCheck(this, _class);

         var _this = _possibleConstructorReturn(this, (_class.__proto__ || Object.getPrototypeOf(_class)).call(this, props));

         _this.state = { hasError: false };

         _this.validateRequire = _this.validateRequire.bind(_this);
         return _this;
      }

      _createClass(_class, [{
         key: 'validateRequire',
         value: function validateRequire(value) {
            var require = this.props.require;

            return require && !value;
         }
      }, {
         key: 'componentWillReceiveProps',
         value: function componentWillReceiveProps(nextProps) {
            var hasError = (0, _validateUtils2.default)(nextProps, (0, _isFunction2.default)(defaultValidate) ? function (value) {
               return defaultValidate(_extends({}, nextProps, { value: value }));
            } : this.validateRequire, this.state.hasError);
            if (hasError !== this.state.hasError) {
               this.setState({
                  hasError: hasError
               });
            }
         }
      }, {
         key: 'render',
         value: function render() {
            return _react2.default.createElement(WrappedComponent, _extends({}, this.props, { hasError: this.state.hasError }));
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