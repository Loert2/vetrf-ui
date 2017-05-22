'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

var _Breadcrumbs = require('../elements/breadcrumbs/Breadcrumbs');

var _Breadcrumbs2 = _interopRequireDefault(_Breadcrumbs);

var _PageHeader = require('../elements/PageHeader');

var _PageHeader2 = _interopRequireDefault(_PageHeader);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Page = function Page(props) {
   return _react2.default.createElement(
      _reactDocumentTitle2.default,
      { title: props.title || 'Ирена' },
      _react2.default.createElement(
         'div',
         { className: 'main-content-inner' },
         _react2.default.createElement(_Breadcrumbs2.default, { breadcrumbs: props.breadcrumbs }),
         _react2.default.createElement(
            'div',
            { className: 'page-content' },
            _react2.default.createElement(
               'div',
               { className: 'row' },
               _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  _react2.default.createElement(_PageHeader2.default, { header: props.header,
                     headerClassName: props.headerClassName,
                     additionalInfo: props.additionalInfo,
                     toolbar: props.toolbar,
                     toolbarClassName: props.toolbarClassName,
                     subHeader: props.subHeader }),
                  props.children
               )
            )
         )
      )
   );
};

Page.propTypes = {
   breadcrumbs: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      link: _propTypes2.default.string,
      text: _propTypes2.default.string,
      home: _propTypes2.default.bool,
      active: _propTypes2.default.bool
   })),
   children: _propTypes2.default.node,
   title: _propTypes2.default.string,
   toolbar: _propTypes2.default.node,
   additionalInfo: _propTypes2.default.node,
   subHeader: _propTypes2.default.string,
   headerClassName: _propTypes2.default.string,
   toolbarClassName: _propTypes2.default.string,
   header: _propTypes2.default.string
};

exports.default = Page;