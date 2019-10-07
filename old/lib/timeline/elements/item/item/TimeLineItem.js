'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _TimeLineDate = require('../date/TimeLineDate');

var _TimeLineDate2 = _interopRequireDefault(_TimeLineDate);

var _TimeLineInfo = require('../info/TimeLineInfo');

var _TimeLineInfo2 = _interopRequireDefault(_TimeLineInfo);

var _Widget = require('../../../../widget/containers/Widget');

var _Widget2 = _interopRequireDefault(_Widget);

var _classnames = require('classnames');

var _classnames2 = _interopRequireDefault(_classnames);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineItem = function TimeLineItem(_ref) {
   var className = _ref.className,
       _ref$widgetMetaData = _ref.widgetMetaData,
       widgetMetaData = _ref$widgetMetaData === undefined ? {} : _ref$widgetMetaData,
       _ref$date = _ref.date,
       date = _ref$date === undefined ? {} : _ref$date,
       _ref$info = _ref.info,
       info = _ref$info === undefined ? {} : _ref$info,
       children = _ref.children;

   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)('timeline-item clearfix', className) },
      _react2.default.createElement(_TimeLineDate2.default, { className: date.className, date: date.content }),
      _react2.default.createElement(_TimeLineInfo2.default, { className: info.className, indicator: info.indicator }),
      _react2.default.createElement(
         _Widget2.default,
         {
            className: widgetMetaData.className || 'transparent',
            header: widgetMetaData.header,
            body: widgetMetaData.body },
         children
      )
   );
};

TimeLineItem.propTypes = {
   className: _propTypes2.default.string,
   widgetClassName: _propTypes2.default.string,
   info: _propTypes2.default.shape({
      icon: _propTypes2.default.string,
      text: _propTypes2.default.node
   }),
   date: _propTypes2.default.shape({
      className: _propTypes2.default.string,
      content: _propTypes2.default.node
   }),
   widgetMetaData: _propTypes2.default.shape({
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
         toolbox: _propTypes2.default.shape({
            content: _propTypes2.default.node,
            className: _propTypes2.default.string
         }),
         footer: _propTypes2.default.shape({
            content: _propTypes2.default.node,
            className: _propTypes2.default.string
         }),
         invisible: _propTypes2.default.bool
      })
   }),
   children: _propTypes2.default.node
};

TimeLineItem.defaultProps = {
   date: {},
   widget: {}
};

exports.default = TimeLineItem;