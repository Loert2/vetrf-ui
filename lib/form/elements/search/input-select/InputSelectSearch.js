'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Input = require('../../simple/input/Input');

var _Input2 = _interopRequireDefault(_Input);

var _Select = require('../../simple/select/Select');

var _Select2 = _interopRequireDefault(_Select);

var _AutocompleteInput = require('../../simple/input/autocomplete/AutocompleteInput');

var _AutocompleteInput2 = _interopRequireDefault(_AutocompleteInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var InputSelectSearch = function InputSelectSearch(_ref) {
   var autocomplete = _ref.autocomplete,
       labelText = _ref.labelText,
       input = _ref.input,
       select = _ref.select;
   return _react2.default.createElement(
      'div',
      { className: 'form-group' },
      _react2.default.createElement(
         'label',
         { className: 'col-sm-5 control-label no-padding-right' },
         labelText
      ),
      _react2.default.createElement(
         'div',
         { className: 'col-sm-7' },
         _react2.default.createElement(
            'span',
            { className: 'col-xs-12 col-sm-7 no-padding' },
            autocomplete ? _react2.default.createElement(
               'span',
               { className: 'col-xs-8 no-padding' },
               _react2.default.createElement(_AutocompleteInput2.default, {
                  name: input.name,
                  id: input.id,
                  value: input.value,
                  selectField: input.selectField,
                  searchField: input.searchField,
                  items: input.autocompleteItems,
                  onSelect: input.onSelectItem,
                  onChange: function onChange(value) {
                     return input.onChange && input.onChange(value, input.searchField);
                  },
                  maxLength: input.maxLength,
                  style: input.styleInput,
                  onAutocomplete: input.onAutocomplete,
                  resetAutocompleteList: input.resetAutocompleteList,
                  onFocus: input.onFocus,
                  disabled: input.disabled,
                  onKeyPress: input.onEnter,
                  className: input.className || 'input-sm col-xs-12',
                  dpropdownClass: input.dpropdownClass,
                  placeholder: input.placeholder || labelText
               })
            ) : _react2.default.createElement(_Input2.default, {
               type: 'text',
               maxLength: input.maxLength,
               name: input.name,
               value: input.value,
               style: input.styleInput,
               autoFocus: input.autoFocus,
               onFocus: input.onFocus,
               disabled: input.disabled,
               onKeyPress: input.onEnter,
               onChange: function onChange(value) {
                  return input.onChange && input.onChange(value, input.field);
               },
               className: input.className || 'input-sm col-xs-8',
               placeholder: input.placeholder || labelText
            }),
            _react2.default.createElement(_Select2.default, {
               value: select.value,
               id: select.id,
               style: select.style || { height: '28px' },
               inputProps: { style: select.styleInput || { height: '28px' } },
               valueKey: select.valueKey || 'id',
               labelKey: select.labelKey || 'name',
               options: select.options,
               onChange: function onChange(value) {
                  return select.onChange && select.onChange(value, select.field);
               },
               className: select.className || 'col-xs-4 no-padding',
               placeholder: select.placeholder || ''
            })
         )
      )
   );
};

InputSelectSearch.propTypes = {
   autocomplete: _propTypes2.default.bool,
   labelText: _propTypes2.default.string,
   input: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      value: _propTypes2.default.string,
      field: _propTypes2.default.string,
      selectField: _propTypes2.default.string,
      searchField: _propTypes2.default.string,
      name: _propTypes2.default.string,
      placeholder: _propTypes2.default.string,
      maxLength: _propTypes2.default.number,
      className: _propTypes2.default.string,
      dpropdownClass: _propTypes2.default.string,
      style: _propTypes2.default.object,
      autoFocus: _propTypes2.default.bool,
      onFocus: _propTypes2.default.func,
      onEnter: _propTypes2.default.func,
      disabled: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
      onChange: _propTypes2.default.func,
      onSelectItem: _propTypes2.default.func,
      onAutocomplete: _propTypes2.default.func,
      resetAutocompleteList: _propTypes2.default.func,
      autocompleteItems: _propTypes2.default.array
   }),
   select: _propTypes2.default.shape({
      id: _propTypes2.default.string,
      value: _propTypes2.default.object,
      field: _propTypes2.default.string,
      style: _propTypes2.default.object,
      styleInput: _propTypes2.default.object,
      valueKey: _propTypes2.default.string,
      labelKey: _propTypes2.default.string,
      className: _propTypes2.default.string,
      placeholder: _propTypes2.default.string,
      options: _propTypes2.default.array,
      onChange: _propTypes2.default.func
   })
};

InputSelectSearch.defaultProps = { input: {}, select: {} };

exports.default = InputSelectSearch;