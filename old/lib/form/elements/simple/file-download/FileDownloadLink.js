'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileDownloadLink = function FileDownloadLink(_ref) {
   var href = _ref.href,
       fileName = _ref.fileName;

   var url = process.env.NODE_ENV === 'production' ? { href: href } : 'http://localhost:8080' + href;
   return _react2.default.createElement(
      'a',
      { href: url, className: 'file-download__link-text' },
      _react2.default.createElement(
         'span',
         { className: 'attached-name middle' },
         fileName
      )
   );
};

FileDownloadLink.propTypes = {
   href: _propTypes2.default.string,
   fileName: _propTypes2.default.string
};

exports.default = FileDownloadLink;