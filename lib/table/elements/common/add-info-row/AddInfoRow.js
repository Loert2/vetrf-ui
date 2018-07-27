'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Button = require('../../../../buttons/button/Button');

var _Button2 = _interopRequireDefault(_Button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AddInfoRow = function AddInfoRow(_ref) {
   var columnsLength = _ref.columnsLength,
       href = _ref.href,
       btnClassName = _ref.btnClassName,
       addAction = _ref.addAction,
       text = _ref.text;
   return _react2.default.createElement(
      'tr',
      null,
      _react2.default.createElement(
         'td',
         { colSpan: columnsLength },
         _react2.default.createElement(_Button2.default, {
            href: href,
            className: btnClassName || 'btn btn-minier btn-info',
            onClick: addAction,
            icon: 'fa fa-plus',
            text: text || 'Добавить информацию'
         })
      )
   );
};

AddInfoRow.propTypes = {
   columnsLength: _propTypes2.default.number,
   href: _propTypes2.default.string,
   btnClassName: _propTypes2.default.string,
   text: _propTypes2.default.string,
   addAction: _propTypes2.default.func
};

exports.default = AddInfoRow;