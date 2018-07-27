'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TableLoadingBlock = function TableLoadingBlock(_ref) {
   var text = _ref.text,
       icon = _ref.icon,
       style = _ref.style,
       backgroundClassName = _ref.backgroundClassName;
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
         'div',
         { className: 'animated loading-block', style: style },
         _react2.default.createElement(
            'h4',
            null,
            _react2.default.createElement('i', { className: icon || 'fa fa-spinner fa-spin bigger-220 blue' }),
            ' ',
            text || 'Загрузка...'
         )
      ),
      _react2.default.createElement('div', {
         className: backgroundClassName || 'modal-backdrop fade in loading-background'
      })
   );
};

TableLoadingBlock.propTypes = {
   text: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   style: _propTypes2.default.object,
   backgroundClassName: _propTypes2.default.string
};

exports.default = TableLoadingBlock;