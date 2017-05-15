'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactDocumentTitle = require('react-document-title');

var _reactDocumentTitle2 = _interopRequireDefault(_reactDocumentTitle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SimplePage = function SimplePage(_ref) {
   var title = _ref.title,
       children = _ref.children;
   return _react2.default.createElement(
      _reactDocumentTitle2.default,
      { title: title },
      _react2.default.createElement(
         'div',
         { className: 'main-content-inner' },
         _react2.default.createElement(
            'div',
            { className: 'page-content' },
            _react2.default.createElement(
               'div',
               { className: 'row' },
               _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12' },
                  children
               )
            )
         )
      )
   );
};

SimplePage.propTypes = {
   title: _propTypes2.default.string,
   children: _propTypes2.default.node
};

exports.default = SimplePage;