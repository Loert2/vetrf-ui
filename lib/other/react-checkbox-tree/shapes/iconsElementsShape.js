'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var iconsElementsShape = _propTypes2.default.shape({
   check: _propTypes2.default.node,
   uncheck: _propTypes2.default.node,
   halfCheck: _propTypes2.default.node,
   expandClose: _propTypes2.default.node,
   expandOpen: _propTypes2.default.node,
   expandAll: _propTypes2.default.node,
   collapseAll: _propTypes2.default.node,
   parentClose: _propTypes2.default.node,
   parentOpen: _propTypes2.default.node,
   leaf: _propTypes2.default.node
});

exports.default = iconsElementsShape;