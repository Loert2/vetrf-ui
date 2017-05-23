'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _Checkbox = require('../simple/Checkbox');

var _Checkbox2 = _interopRequireDefault(_Checkbox);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CheckboxSearch = function CheckboxSearch(props) {
   var _props = undefined.props,
       labelText = _props.labelText,
       value = _props.value,
       name = _props.name,
       id = _props.id,
       style = _props.style,
       disabled = _props.disabled,
       onEnter = _props.onEnter,
       _onChange = _props.onChange,
       className = _props.className,
       field = _props.field;

   return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
         'label',
         { className: 'col-xs-5 control-label no-padding-right' },
         labelText
      ),
      _react2.default.createElement(
         'div',
         { className: 'col-xs-7' },
         _react2.default.createElement(_Checkbox2.default, { name: name,
            id: id,
            value: value,
            style: style,
            disabled: disabled,
            onKeyPress: onEnter,
            onChange: function onChange(value) {
               return _onChange && _onChange(value, field);
            },
            className: className })
      )
   );
};

CheckboxSearch.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   style: _propTypes2.default.object,
   onEnter: _propTypes2.default.func,
   disabled: _propTypes2.default.bool,
   onChange: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = CheckboxSearch;