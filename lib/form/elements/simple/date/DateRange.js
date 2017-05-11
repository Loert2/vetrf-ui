'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _DatePicker = require('./DatePicker');

var _DatePicker2 = _interopRequireDefault(_DatePicker);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DateRange = function DateRange(props) {
   var inputProps = { placeholder: "дд.мм.гггг" };
   if (props.height) {
      inputProps.style = { height: props.height };
   }
   return _react2.default.createElement(
      'div',
      { className: props.className },
      _react2.default.createElement(
         'div',
         { className: 'form-group' },
         _react2.default.createElement(
            'label',
            { className: 'col-sm-5 control-label no-padding-right' },
            props.labelText
         ),
         _react2.default.createElement(
            'div',
            { className: 'col-sm-7' },
            _react2.default.createElement(
               'div',
               { className: 'col-xs-12 col-sm-7 no-padding' },
               _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 no-padding' },
                  _react2.default.createElement(
                     'span',
                     { className: 'col-xs-5 no-padding' },
                     _react2.default.createElement(_DatePicker2.default, { id: props.id, onChange: props.beginChange, value: props.beginDate, inputProps: inputProps })
                  ),
                  _react2.default.createElement(
                     'span',
                     { className: 'col-xs-2 input-group-addon-background', style: { height: props.height || "34px" } },
                     _react2.default.createElement('i', { className: 'fa fa-calendar bigger-130 padding-top-6' })
                  ),
                  _react2.default.createElement(
                     'span',
                     { className: 'col-xs-5 no-padding' },
                     _react2.default.createElement(_DatePicker2.default, { id: props.id, onChange: props.endChange, value: props.endDate, inputProps: inputProps })
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
   beginDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   endDate: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
   className: _propTypes2.default.string
};

exports.default = DateRange;