'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _AutocompleteInput = require('../simple/input/AutocompleteInput');

var _AutocompleteInput2 = _interopRequireDefault(_AutocompleteInput);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AutocompleteInputSearch = function AutocompleteInputSearch(props) {
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
         _react2.default.createElement(_AutocompleteInput2.default, { name: props.name,
            id: props.id,
            maxLength: props.maxLength,
            value: props.value,
            searchField: props.searchField,
            selectField: props.selectField,
            style: props.style,
            onFocus: props.onFocus,
            disabled: props.disabled,
            onAutocomplete: props.onAutocomplete,
            resetAutocompleteList: props.resetAutocompleteList,
            onKeyPress: props.onEnter,
            onChange: function onChange(value) {
               return props.onChange && props.onChange(value, props.searchField, props.selectField);
            },
            onSelect: props.onSelect,
            items: props.items,
            viewKey: props.viewKey,
            className: props.className || "col-xs-12 col-sm-7 input-sm",
            dpropdownClass: props.dpropdownClass,
            placeholder: props.placeholder || props.labelText })
      )
   );
};

AutocompleteInputSearch.propTypes = {
   value: _propTypes2.default.string,
   searchField: _propTypes2.default.string,
   selectField: _propTypes2.default.string,
   labelText: _propTypes2.default.string,
   dpropdownClass: _propTypes2.default.string,
   name: _propTypes2.default.string,
   id: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
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
   viewKey: _propTypes2.default.string,
   items: _propTypes2.default.array
};

exports.default = AutocompleteInputSearch;