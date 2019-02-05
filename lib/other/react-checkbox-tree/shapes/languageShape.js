'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _propTypes2.default.shape({
   collapseAll: _propTypes2.default.string.isRequired,
   expandAll: _propTypes2.default.string.isRequired,
   toggle: _propTypes2.default.string.isRequired
});