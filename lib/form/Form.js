'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Form = function Form(_ref) {
   var children = _ref.children,
       name = _ref.name,
       className = _ref.className,
       action = _ref.action;

   return _react2.default.createElement(
      'form',
      { name: name, className: className || "form-horizontal css-form", action: action },
      children
   );
};

Form.propTypes = {
   children: _propTypes2.default.node,
   name: _propTypes2.default.string,
   action: _propTypes2.default.string,
   className: _propTypes2.default.string
};

exports.default = Form;