'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FormGroup = require('../container/form-group/FormGroup');

var _FormGroup2 = _interopRequireDefault(_FormGroup);

var _AutocompleteInput = require('../../simple/input/autocomplete/AutocompleteInput');

var _AutocompleteInput2 = _interopRequireDefault(_AutocompleteInput);

var _withValidate = require('./../withValidate');

var _withValidate2 = _interopRequireDefault(_withValidate);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutocompleteFormGroup = function AutocompleteFormGroup(props) {
   var labelText = props.labelText,
       require = props.require,
       help = props.help,
       additionalBlock = props.additionalBlock,
       value = props.value,
       errorText = props.errorText,
       hasError = props.hasError,
       name = props.name,
       id = props.id,
       maxLength = props.maxLength,
       style = props.style,
       onFocus = props.onFocus,
       disabled = props.disabled,
       onAutocomplete = props.onAutocomplete,
       resetAutocompleteList = props.resetAutocompleteList,
       onEnter = props.onEnter,
       _onChange = props.onChange,
       onSelect = props.onSelect,
       items = props.items,
       viewKey = props.viewKey,
       className = props.className,
       searchLabel = props.searchLabel,
       placeholder = props.placeholder,
       searchField = props.searchField,
       selectField = props.selectField,
       dpropdownClass = props.dpropdownClass;


   return _react2.default.createElement(
      _FormGroup2.default,
      {
         labelText: labelText,
         require: require,
         help: help,
         additionalBlock: additionalBlock,
         hasError: hasError,
         errorText: errorText },
      _react2.default.createElement(_AutocompleteInput2.default, {
         name: name,
         id: id,
         maxLength: maxLength,
         value: value,
         searchField: searchField,
         selectField: selectField,
         style: style,
         onFocus: onFocus,
         disabled: disabled,
         onAutocomplete: onAutocomplete,
         resetAutocompleteList: resetAutocompleteList,
         onKeyPress: onEnter,
         onChange: function onChange(value) {
            return _onChange && _onChange(value, searchField, selectField);
         },
         onSelect: onSelect,
         items: items,
         viewKey: viewKey,
         className: className || 'form-control',
         dpropdownClass: dpropdownClass,
         searchLabel: searchLabel,
         placeholder: placeholder
      })
   );
};

AutocompleteFormGroup.propTypes = {
   value: _propTypes2.default.string,
   searchField: _propTypes2.default.string,
   selectField: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   dpropdownClass: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
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
   help: _propTypes2.default.node,
   viewKey: _propTypes2.default.string,
   require: _propTypes2.default.bool,
   showError: _propTypes2.default.bool,
   customValidate: _propTypes2.default.func,
   errorHandler: _propTypes2.default.func,
   searchLabel: _propTypes2.default.bool,
   additionalBlock: _propTypes2.default.node,
   items: _propTypes2.default.array
};

exports.default = (0, _withValidate2.default)(AutocompleteFormGroup);