'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

var _RequireStar = require('./RequireStar');

var _RequireStar2 = _interopRequireDefault(_RequireStar);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormGroup = function FormGroup(props) {
   var hasError = props.hasError,
       errorText = props.errorText,
       errorClassName = props.errorClassName,
       labelText = props.labelText,
       require = props.require,
       help = props.help,
       children = props.children,
       additionalBlock = props.additionalBlock,
       labelClassName = props.labelClassName,
       fieldClassName = props.fieldClassName;

   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)("form-group", hasError ? errorClassName || "has-error" : "") },
      _react2.default.createElement(
         'label',
         { className: labelClassName || "col-sm-3 control-label no-padding-right" },
         labelText,
         require && _react2.default.createElement(_RequireStar2.default, null)
      ),
      _react2.default.createElement(
         'div',
         { className: fieldClassName || "col-sm-9" },
         _react2.default.createElement('span', { className: 'block input-icon input-icon-right' }),
         children,
         help && _react2.default.createElement(
            'p',
            { className: 'help-block' },
            help
         ),
         additionalBlock,
         hasError && errorText && _react2.default.createElement(
            'p',
            { className: 'help-block has-error' },
            errorText
         )
      )
   );
};

FormGroup.propTypes = {
   labelText: _propTypes2.default.string,
   help: _propTypes2.default.node,
   require: _propTypes2.default.bool,
   hasError: _propTypes2.default.bool,
   errorClassName: _propTypes2.default.string,
   labelClassName: _propTypes2.default.string,
   fieldClassName: _propTypes2.default.string,
   errorText: _propTypes2.default.node,
   children: _propTypes2.default.node,
   additionalBlock: _propTypes2.default.node
};

exports.default = FormGroup;