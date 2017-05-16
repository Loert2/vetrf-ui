'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = require('./FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _AutocompleteInput = require('../simple/input/AutocompleteInput');

var _AutocompleteInput2 = _interopRequireDefault(_AutocompleteInput);

var _validateUtils = require('../../utils/validate-utils');

var _validateUtils2 = _interopRequireDefault(_validateUtils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutocompleteFormGroup = function AutocompleteFormGroup(props) {
   return _react2.default.createElement(
      _FormGroup2.default,
      { labelText: props.labelText,
         require: props.require,
         help: props.help,
         additionalBlock: props.additionalBlock,
         hasError: (0, _validateUtils2.default)(props, function () {
            return props.require && !props.value;
         }),
         errorText: props.errorText },
      _react2.default.createElement(_AutocompleteInput2.default, { name: props.name,
         id: props.id,
         maxLength: props.maxLength,
         value: props.value,
         style: props.style,
         onFocus: props.onFocus,
         disabled: props.disabled,
         onAutocomplete: props.onAutocomplete,
         resetAutocompleteList: props.resetAutocompleteList,
         onKeyPress: props.onEnter,
         onChange: function onChange(value) {
            return props.onChange && props.onChange(value, props.field);
         },
         onSelect: props.onSelect,
         items: props.items,
         viewKey: props.viewKey,
         className: props.className || "form-control",
         searchLabel: props.searchLabel,
         placeholder: props.placeholder })
   );
};

AutocompleteFormGroup.propTypes = {
   value: _propTypes2.default.string,
   field: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   errorText: _propTypes2.default.string,
   maxLength: _propTypes2.default.number,
   style: _propTypes2.default.object,
   onFocus: _propTypes2.default.func,
   disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   onChange: _propTypes2.default.func,
   onClick: _propTypes2.default.func,
   onSelect: _propTypes2.default.func,
   resetAutocompleteList: _propTypes2.default.func,
   onAutocomplete: _propTypes2.default.func,
   className: _propTypes2.default.string,
   help: _propTypes2.default.string,
   viewKey: _propTypes2.default.string,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   searchLabel: _propTypes2.default.bool,
   additionalBlock: _propTypes2.default.node,
   items: _propTypes2.default.array
};

exports.default = AutocompleteFormGroup;