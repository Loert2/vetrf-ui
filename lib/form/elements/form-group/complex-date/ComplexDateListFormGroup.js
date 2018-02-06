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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ComplexDateListFormGroup = function (_Component) {
   _inherits(ComplexDateListFormGroup, _Component);

   function ComplexDateListFormGroup() {
      _classCallCheck(this, ComplexDateListFormGroup);

      return _possibleConstructorReturn(this, (ComplexDateListFormGroup.__proto__ || Object.getPrototypeOf(ComplexDateListFormGroup)).apply(this, arguments));
   }

   _createClass(ComplexDateListFormGroup, [{
      key: 'render',
      value: function render() {
         var _props = this.props,
             labelText = _props.labelText,
             help = _props.help,
             additionalBlock = _props.additionalBlock,
             _props$list = _props.list,
             list = _props$list === undefined ? [] : _props$list,
             onChangeDate = _props.onChangeDate,
             beginDateField = _props.beginDateField,
             endDateField = _props.endDateField,
             singleDateField = _props.singleDateField,
             formatField = _props.formatField,
             formatList = _props.formatList,
             listField = _props.listField;

         return _react2.default.createElement(
            _index.FormGroup,
            { labelText: labelText, help: help, additionalBlock: additionalBlock },
            _react2.default.createElement(_index2.ComplexDateList, { list: list,
               onChangeDate: onChangeDate,
               beginDateField: beginDateField,
               endDateField: endDateField,
               singleDateField: singleDateField,
               formatField: formatField,
               formatList: formatList,
               listField: listField })
         );
      }
   }]);

   return ComplexDateListFormGroup;
}(_react.Component);

ComplexDateListFormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.string,
   additionalBlock: _propTypes2.default.node,
   validate: _propTypes2.default.func,
   beginDateField: _propTypes2.default.string,
   endDateField: _propTypes2.default.string,
   singleDateField: _propTypes2.default.string,
   formatField: _propTypes2.default.string,
   listField: _propTypes2.default.string,
   list: _propTypes2.default.arrayOf(_propTypes2.default.object),
   formatList: _propTypes2.default.arrayOf(_propTypes2.default.object),
   onChangeDate: _propTypes2.default.func
};

ComplexDateListFormGroup.defaultProps = {};

exports.default = ComplexDateListFormGroup;