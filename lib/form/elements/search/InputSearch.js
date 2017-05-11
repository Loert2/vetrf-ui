'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../../form/elements/simple/input/Input');

var _Input2 = _interopRequireDefault(_Input);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputSearch = function InputSearch(props) {
   return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
         'label',
         { className: 'col-xs-5 control-label no-padding-right' },
         props.labelText
      ),
      _react2.default.createElement(
         'div',
         { className: 'col-xs-7' },
         _react2.default.createElement(_Input2.default, { inputType: props.inputType || "text", autocomplete: 'off',
            id: props.id,
            name: props.name,
            maxLength: props.maxLength,
            value: props.value || "",
            style: props.style,
            autoFocus: props.autoFocus,
            onFocus: props.onFocus,
            disabled: props.disabled || "",
            onKeyPress: props.onEnter,
            onChange: props.onChange,
            className: props.className || "col-xs-12 col-sm-7 input-sm",
            placeholder: props.placeholder || props.labelText })
      )
   );
};

InputSearch.propTypes = {
   value: _propTypes2.default.string,
   inputType: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   autoFocus: _propTypes2.default.bool,
   onFocus: _propTypes2.default.func,
   onEnter: _propTypes2.default.func,
   onKeyUp: _propTypes2.default.func,
   onKeyPress: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   onClick: _propTypes2.default.func,
   className: _propTypes2.default.string
};

exports.default = InputSearch;