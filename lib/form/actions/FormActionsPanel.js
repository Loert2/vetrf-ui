"use strict";

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormActionsPanel = function FormActionsPanel(_ref) {
   var children = _ref.children;
   return _react2.default.createElement(
      "div",
      { className: "clearfix form-actions no-margin-bottom col-xs-12" },
      _react2.default.createElement(
         "div",
         { className: "col-md-offset-5 col-md-7" },
         children
      )
   );
};

FormActionsPanel.propTypes = {
   children: PropTypes.node
};

FormActionsPanel.defaultProps = {};

exports.default = FormActionsPanel;