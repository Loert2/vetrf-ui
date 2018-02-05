'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('../date-picker/DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var defaultDateFormat = "DD.MM.YYYY";

var DateRange = function DateRange(props) {
   var inputProps = { placeholder: props.placeholder };
   var styleInputGroupAddonBackground = { height: props.height || "34px" };
   if (props.height) {
      inputProps.style = { height: props.height };
   }
   var format = props.dateFormat || defaultDateFormat;
   return _react2.default.createElement(
      'div',
      { className: props.className },
      _react2.default.createElement(
         'div',
         { className: 'form-group no-margin-bottom' },
         props.labelText && _react2.default.createElement(
            'label',
            { className: 'col-sm-5 control-label no-padding-right' },
            props.labelText
         ),
         _react2.default.createElement(
            'div',
            { className: props.labelText ? "col-sm-7" : "col-xs-12" },
            _react2.default.createElement(
               'div',
               { className: 'col-xs-12 ' + (props.labelText ? "col-sm-7" : "") + ' no-padding' },
               _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 no-padding' },
                  _react2.default.createElement(
                     'span',
                     { className: 'col-xs-5 no-padding' },
                     _react2.default.createElement(_DatePicker2.default, { dateFormat: format,
                        id: props.id,
                        onChange: props.beginChange,
                        value: props.beginDate,
                        inputProps: inputProps,
                        validate: props.validate || props.validateBegin,
                        timeFormat: props.timeFormat })
                  ),
                  _react2.default.createElement(
                     'span',
                     { className: 'col-xs-2 input-group-addon-background', style: styleInputGroupAddonBackground },
                     _react2.default.createElement('i', { className: 'fa fa-calendar bigger-130 padding-top-6' })
                  ),
                  _react2.default.createElement(
                     'span',
                     { className: 'col-xs-5 no-padding' },
                     _react2.default.createElement(_DatePicker2.default, { dateFormat: format,
                        id: props.id,
                        onChange: props.endChange,
                        value: props.endDate,
                        inputProps: inputProps,
                        validate: props.validate || props.validateEnd,
                        timeFormat: props.timeFormat })
                  )
               )
            )
         )
      )
   );
};

DateRange.propTypes = {
   labelText: _propTypes2.default.string,
   id: _propTypes2.default.string,
   height: _propTypes2.default.string,
   beginChange: _propTypes2.default.func,
   endChange: _propTypes2.default.func,
   validate: _propTypes2.default.func,
   validateBegin: _propTypes2.default.func,
   validateEnd: _propTypes2.default.func,
   beginDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   endDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   className: _propTypes2.default.string,
   dateFormat: _propTypes2.default.string,
   timeFormat: _propTypes2.default.oneOfType([_propTypes2.default.bool, _propTypes2.default.string]),
   placeholder: _propTypes2.default.string
};

exports.default = DateRange;