'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _SubHeader = require('../../../../../page/elements/sub-header/SubHeader');

var _SubHeader2 = _interopRequireDefault(_SubHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FormBlock = function FormBlock(_ref) {
   var header = _ref.header,
       description = _ref.description,
       icon = _ref.icon,
       children = _ref.children;
   return _react2.default.createElement(
      'div',
      { className: 'col-xs-12' },
      _react2.default.createElement(_SubHeader2.default, {
         header: header,
         description: description,
         icon: icon || 'fa fa-book orange'
      }),
      children
   );
};

FormBlock.propTypes = {
   header: _propTypes2.default.string,
   description: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   children: _propTypes2.default.node
};

exports.default = FormBlock;