'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimeLineLabel = require('./TimeLineLabel');

var _TimeLineLabel2 = _interopRequireDefault(_TimeLineLabel);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineLabelContainer = function TimeLineLabelContainer(_ref) {
   var label = _ref.label;
   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)("timeline-label", label.containerClassName) },
      _react2.default.createElement(_TimeLineLabel2.default, { className: label.className, text: label.text })
   );
};

TimeLineLabelContainer.propTypes = {
   label: _propTypes2.default.shape({
      containerClassName: _propTypes2.default.string,
      className: _propTypes2.default.string,
      text: _propTypes2.default.string
   })
};

TimeLineLabelContainer.defaultProps = {
   label: {}
};

exports.default = TimeLineLabelContainer;