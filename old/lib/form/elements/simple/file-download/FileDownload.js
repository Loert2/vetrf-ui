'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _FileDownloadLink = require('./FileDownloadLink');

var _FileDownloadLink2 = _interopRequireDefault(_FileDownloadLink);

var _ConfirmActionButton = require('../../../../buttons/confirm-action/confirm/ConfirmActionButton');

var _ConfirmActionButton2 = _interopRequireDefault(_ConfirmActionButton);

var _get = require('lodash/get');

var _get2 = _interopRequireDefault(_get);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var FileDownload = function FileDownload(_ref) {
   var fileModel = _ref.fileModel,
       editable = _ref.editable,
       removeAction = _ref.removeAction,
       urlFile = _ref.urlFile;
   return _react2.default.createElement(
      'div',
      { className: 'file-download-container' },
      _react2.default.createElement(
         'div',
         { className: 'file-download-form' },
         _react2.default.createElement(_FileDownloadLink2.default, { href: urlFile(fileModel), fileName: (0, _get2.default)(fileModel, 'file.name') }),
         editable && _react2.default.createElement(
            'div',
            { className: 'file-download__btn-delete' },
            _react2.default.createElement(_ConfirmActionButton2.default, {
               confirmBodyText: '\u0412\u044B \u0443\u0432\u0435\u0440\u0435\u043D\u044B, \u0447\u0442\u043E \u0445\u043E\u0442\u0438\u0442\u0435 \u0443\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B ' + (0, _get2.default)(fileModel, 'file.name') + '?',
               confirmHeaderText: '\u041F\u043E\u0434\u0442\u0432\u0435\u0440\u0436\u0434\u0435\u043D\u0438\u0435 \u0443\u0434\u0430\u043B\u0435\u043D\u0438\u044F \u0444\u0430\u0439\u043B\u0430',
               icon: 'fa fa-trash-o white fa-lg file-download__btn-delete_size',
               onConfirm: function onConfirm() {
                  return removeAction(fileModel.id, fileModel && fileModel.requestEntry && fileModel.requestEntry.id);
               },
               tooltip: '\u0423\u0434\u0430\u043B\u0438\u0442\u044C \u0444\u0430\u0439\u043B'
            })
         )
      )
   );
};

FileDownload.propTypes = {
   fileModel: _propTypes2.default.object,
   editable: _propTypes2.default.bool,
   removeAction: _propTypes2.default.func,
   urlFile: _propTypes2.default.func
};

FileDownload.defaultProps = { fileModel: {} };

exports.default = FileDownload;