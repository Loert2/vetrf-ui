'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PageHeader = function PageHeader(_ref) {
   var toolbar = _ref.toolbar,
       toolbarClassName = _ref.toolbarClassName,
       header = _ref.header,
       headerClassName = _ref.headerClassName,
       subHeader = _ref.subHeader,
       additionalInfo = _ref.additionalInfo;
   return _react2.default.createElement(
      'div',
      { className: 'page-header col-xs-12 no-padding-left no-padding-right' },
      _react2.default.createElement(
         'div',
         { className: toolbar ? headerClassName || "col-xs-12 col-lg-8 no-padding-left" : "col-xs-12 no-padding-left" },
         _react2.default.createElement(
            'h1',
            null,
            header,
            subHeader && _react2.default.createElement(
               'small',
               null,
               _react2.default.createElement('i', { className: 'fa fa-angle-double-right' }),
               '\xA0',
               subHeader
            ),
            additionalInfo
         )
      ),
      toolbar && _react2.default.createElement(
         'div',
         { className: toolbarClassName || "col-xs-12 col-lg-4 no-padding-right toolbar-container" },
         toolbar
      )
   );
};

PageHeader.propTypes = {
   toolbar: _propTypes2.default.node,
   additionalInfo: _propTypes2.default.node,
   subHeader: _propTypes2.default.string,
   headerClassName: _propTypes2.default.string,
   toolbarClassName: _propTypes2.default.string,
   header: _propTypes2.default.string
};

exports.default = PageHeader;