'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Select = require('../../../form/elements/simple/select/Select');

var _Select2 = _interopRequireDefault(_Select);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SelectSearch = function SelectSearch(props) {
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
         { className: 'col-xs-7 no-padding no-padding-right' },
         _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-7 no-padding-right' },
            _react2.default.createElement(_Select2.default, { value: props.value,
               id: props.id,
               style: props.style,
               styleInput: props.styleInput,
               valueKey: props.valueKey || "id",
               labelKey: props.labelKey || "name",
               options: props.options,
               onChange: props.onChange,
               className: props.className || "select",
               placeholder: props.placeholder })
         )
      )
   );
};

SelectSearch.propTypes = {
   labelText: _propTypes2.default.string,
   id: _propTypes2.default.string,
   value: _propTypes2.default.object,
   style: _propTypes2.default.object,
   styleInput: _propTypes2.default.object,
   valueKey: _propTypes2.default.string,
   labelKey: _propTypes2.default.string,
   className: _propTypes2.default.string,
   placeholder: _propTypes2.default.string,
   options: _propTypes2.default.array,
   onChange: _propTypes2.default.func
};

exports.default = SelectSearch;