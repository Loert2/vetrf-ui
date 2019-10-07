'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Modal = function Modal(_ref) {
   var style = _ref.style,
       children = _ref.children,
       width = _ref.width;
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
         'div',
         { style: style, className: 'bootbox modal fade bootbox-prompt in' },
         _react2.default.createElement(
            'div',
            { className: 'modal-dialog', style: { width: width } },
            _react2.default.createElement(
               'div',
               { className: 'modal-content' },
               children
            )
         )
      ),
      _react2.default.createElement('div', { className: 'modal-backdrop fade in' })
   );
};

Modal.propTypes = {
   style: _propTypes2.default.object,
   children: _propTypes2.default.node,
   width: _propTypes2.default.string
};

exports.default = Modal;