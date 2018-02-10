'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimeLineContainer = require('../time-line/TimeLineContainer');

var _TimeLineContainer2 = _interopRequireDefault(_TimeLineContainer);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var WidgetList = function WidgetList(_ref) {
   var items = _ref.items,
       listClassName = _ref.listClassName;

   return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
         'div',
         { className: 'col-xs-12' },
         _react2.default.createElement(_TimeLineContainer2.default, { className: (0, _classnames2.default)(listClassName, 'widget-list'), timeline: items })
      )
   );
};

WidgetList.propTypes = {
   listClassName: _propTypes2.default.string,
   items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      label: _propTypes2.default.shape({
         containerClassName: _propTypes2.default.string,
         className: _propTypes2.default.string,
         text: _propTypes2.default.string
      }),
      items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
         className: _propTypes2.default.string,
         widget: _propTypes2.default.shape({
            className: _propTypes2.default.string,
            header: _propTypes2.default.shape({
               className: _propTypes2.default.string,
               title: _propTypes2.default.shape({
                  content: _propTypes2.default.node,
                  className: _propTypes2.default.string
               }),
               toolbar: _propTypes2.default.shape({
                  content: _propTypes2.default.node,
                  className: _propTypes2.default.string
               })
            }),
            body: _propTypes2.default.shape({
               className: _propTypes2.default.string,
               invisible: _propTypes2.default.bool,
               toolbox: _propTypes2.default.shape({
                  content: _propTypes2.default.node,
                  className: _propTypes2.default.string
               }),
               footer: _propTypes2.default.shape({
                  content: _propTypes2.default.node,
                  className: _propTypes2.default.string
               })
            })
         }),
         icon: _propTypes2.default.string,
         date: _propTypes2.default.shape({
            className: _propTypes2.default.string,
            content: _propTypes2.default.node
         }),
         content: _propTypes2.default.node
      }))
   }))
};

exports.default = WidgetList;