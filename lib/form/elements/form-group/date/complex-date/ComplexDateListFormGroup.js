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

var _index = require('../../index');

var _index2 = require('../../../index');

var _validateUtils = require('../../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultValidate = function defaultValidate() {
   var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

   var isEmptyList = (0, _isEmpty2.default)(props.value) || (0, _isEmpty2.default)(props.value.filter(function (it) {
      return it.singleDateTime || it.dateInterval && (it.dateInterval.startDateTime || it.dateInterval.endDateTime);
   }));
   return props.require && isEmptyList;
};

var getHasError = function getHasError(props, count, oldHasError) {
   return (0, _validateUtils2.default)(props, function () {
      return count > 0 || defaultValidate(props);
   }, oldHasError);
};

var ComplexDateListFormGroup = function (_Component) {
   _inherits(ComplexDateListFormGroup, _Component);

   function ComplexDateListFormGroup(props) {
      _classCallCheck(this, ComplexDateListFormGroup);

      var _this = _possibleConstructorReturn(this, (ComplexDateListFormGroup.__proto__ || Object.getPrototypeOf(ComplexDateListFormGroup)).call(this, props));

      _this.state = {
         hasError: false,
         invalidityCount: 0
      };

      _this.handleChangeValidity = _this.handleChangeValidity.bind(_this);
      return _this;
   }

   _createClass(ComplexDateListFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var _state = this.state,
             oldHasError = _state.hasError,
             invalidityCount = _state.invalidityCount;


         var hasError = getHasError(nextProps, invalidityCount, oldHasError);
         if (hasError !== oldHasError) {
            this.setState(_extends({}, this.state, {
               hasError: hasError
            }));
         }
      }
   }, {
      key: 'handleChangeValidity',
      value: function handleChangeValidity(isDecrement) {
         var _this2 = this;

         this.setState(function (oldState) {
            var oldHasError = oldState.hasError,
                invalidityCount = oldState.invalidityCount;


            var newCount = isDecrement ? invalidityCount - 1 : invalidityCount + 1;
            var hasError = getHasError(_this2.props, newCount, oldHasError);

            return {
               hasError: hasError,
               invalidityCount: newCount
            };
         });
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             labelText = _props.labelText,
             help = _props.help,
             additionalBlock = _props.additionalBlock,
             _props$value = _props.value,
             value = _props$value === undefined ? [] : _props$value,
             onChangeDate = _props.onChangeDate,
             formatList = _props.formatList,
             require = _props.require,
             errorText = _props.errorText,
             field = _props.field,
             maxListLength = _props.maxListLength;
         var _state2 = this.state,
             hasError = _state2.hasError,
             invalidityCount = _state2.invalidityCount;


         var showError = invalidityCount === 0;

         var errorMassage = showError && (errorText || "Данная форма обязательна для заполнения");

         return _react2.default.createElement(
            _index.FormGroup,
            { labelText: labelText,
               help: help,
               additionalBlock: additionalBlock,
               require: require,
               hasError: showError && hasError,
               errorText: errorMassage },
            _react2.default.createElement(_index2.ComplexDateList, { list: value,
               onChangeDate: onChangeDate,
               formatList: formatList,
               listPath: field,
               maxListLength: maxListLength,
               handleChangeValidity: this.handleChangeValidity })
         );
      }
   }]);

   return ComplexDateListFormGroup;
}(_react.Component);

ComplexDateListFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.string,
   additionalBlock: _propTypes2.default.node,
   field: _propTypes2.default.string,
   value: _propTypes2.default.arrayOf(_propTypes2.default.object),
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   require: _propTypes2.default.bool,
   errorText: _propTypes2.default.string,
   maxListLength: _propTypes2.default.number,
   errorHandler: _propTypes2.default.func,
   onChangeDate: _propTypes2.default.func
};

ComplexDateListFormGroup.defaultProps = {};

exports.default = ComplexDateListFormGroup;