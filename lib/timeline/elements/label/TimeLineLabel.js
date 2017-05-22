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

/**
* label в форме флага
* */
var TimeLineLabel = function TimeLineLabel(_ref) {
   var text = _ref.text,
       className = _ref.className;

   return _react2.default.createElement(
      'span',
      { className: (0, _classnames2.default)("label label-lg arrowed-in-right", className) },
      _react2.default.createElement(
         'b',
         null,
         text
      )
   );
};

TimeLineLabel.propTypes = {
   className: _propTypes2.default.string,
   text: _propTypes2.default.string
};

exports.default = TimeLineLabel;