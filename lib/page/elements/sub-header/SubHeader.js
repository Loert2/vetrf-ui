'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SubHeader = function SubHeader(props) {
   return _react2.default.createElement(
      'div',
      null,
      _react2.default.createElement(
         'div',
         {
            className: (0, _classnames2.default)('widget-header-my', props.underline && 'header blue') },
         _react2.default.createElement(
            'h4',
            { className: props.className || 'lighter' },
            _react2.default.createElement('i', { className: props.icon }),
            '\xA0',
            props.header
         ),
         '\xA0',
         props.toolbar
      ),
      props.description && _react2.default.createElement(
         'p',
         null,
         props.description
      )
   );
};

SubHeader.propTypes = {
   className: _propTypes2.default.string,
   icon: _propTypes2.default.string,
   header: _propTypes2.default.string,
   description: _propTypes2.default.string,
   underline: _propTypes2.default.bool,
   toolbar: _propTypes2.default.node
};

exports.default = SubHeader;