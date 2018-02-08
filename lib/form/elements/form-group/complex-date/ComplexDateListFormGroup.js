'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _index = require('../index');

var _index2 = require('../../index');

var _validateUtils = require('../../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

var _isEmpty = require('lodash/isEmpty');

var _isEmpty2 = _interopRequireDefault(_isEmpty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var defaultValidate = function defaultValidate() {
   var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

   var isEmptyList = (0, _isEmpty2.default)(props.list) || (0, _isEmpty2.default)(props.list.filter(function (it) {
      return !it.singleDateTime || !it.dateInterval || !it.dateInterval.startDateTime && !it.dateInterval.endDateTime;
   }));
   return props.require && isEmptyList;
};

var ComplexDateListFormGroup = function (_Component) {
   _inherits(ComplexDateListFormGroup, _Component);

   function ComplexDateListFormGroup(props) {
      _classCallCheck(this, ComplexDateListFormGroup);

      var _this = _possibleConstructorReturn(this, (ComplexDateListFormGroup.__proto__ || Object.getPrototypeOf(ComplexDateListFormGroup)).call(this, props));

      _this.state = {
         hasError: false
      };
      return _this;
   }

   _createClass(ComplexDateListFormGroup, [{
      key: 'componentWillReceiveProps',
      value: function componentWillReceiveProps(nextProps) {
         var hasError = (0, _validateUtils2.default)(nextProps, function () {
            return defaultValidate(nextProps);
         }, this.state.hasError);
         if (hasError !== this.state.hasError) {
            this.setState({
               hasError: hasError
            });
         }
      }
   }, {
      key: 'render',
      value: function render() {
         var _props = this.props,
             labelText = _props.labelText,
             help = _props.help,
             additionalBlock = _props.additionalBlock,
             _props$list = _props.list,
             list = _props$list === undefined ? [] : _props$list,
             onChangeDate = _props.onChangeDate,
             formatList = _props.formatList,
             require = _props.require,
             errorText = _props.errorText,
             listPath = _props.listPath,
             maxListLength = _props.maxListLength;


         return _react2.default.createElement(
            _index.FormGroup,
            { labelText: labelText,
               help: help,
               additionalBlock: additionalBlock,
               require: require,
               hasError: this.state.hasError,
               errorText: errorText },
            _react2.default.createElement(_index2.ComplexDateList, { list: list,
               onChangeDate: onChangeDate,
               formatList: formatList,
               listPath: listPath,
               maxListLength: maxListLength })
         );
      }
   }]);

   return ComplexDateListFormGroup;
}(_react.Component);

ComplexDateListFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.string,
   additionalBlock: _propTypes2.default.node,
   listPath: _propTypes2.default.string,
   list: _propTypes2.default.arrayOf(_propTypes2.default.object),
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   require: _propTypes2.default.bool,
   errorText: _propTypes2.default.string,
   maxListLength: _propTypes2.default.number,
   onChangeDate: _propTypes2.default.func
};

ComplexDateListFormGroup.defaultProps = {};

exports.default = ComplexDateListFormGroup;