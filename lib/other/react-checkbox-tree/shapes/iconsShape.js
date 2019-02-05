'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var icons = _propTypes2.default.shape({
   check: _propTypes2.default.string,
   uncheck: _propTypes2.default.string,
   halfCheck: _propTypes2.default.string,
   expandClose: _propTypes2.default.string,
   expandOpen: _propTypes2.default.string,
   expandAll: _propTypes2.default.string,
   collapseAll: _propTypes2.default.string,
   parentClose: _propTypes2.default.string,
   parentOpen: _propTypes2.default.string,
   leaf: _propTypes2.default.string
});

exports.default = icons;