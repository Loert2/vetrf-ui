'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

var _TimeLineItem = require('../item/TimeLineItem');

var _TimeLineItem2 = _interopRequireDefault(_TimeLineItem);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineItemsContainer = function TimeLineItemsContainer(_ref) {
   var timelineItems = _ref.timelineItems;

   var timeline = timelineItems.map(function (item, index) {
      return _react2.default.createElement(
         _TimeLineItem2.default,
         {
            key: item.key || (0, _uniqueId2.default)(),
            info: {
               indicator: _extends({}, item.indicator || {}, {
                  text: item.indicator && item.indicator.text || ++index
               }),
               className: item.infoClassName
            },
            className: item.className,
            date: item.date,
            widgetMetaData: item.widgetMetaData },
         item.content
      );
   });
   return _react2.default.createElement(
      'div',
      { className: 'timeline-items' },
      timeline
   );
};

TimeLineItemsContainer.propTypes = {
   timelineItems: _propTypes2.default.arrayOf(_propTypes2.default.shape({
      className: _propTypes2.default.string,
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
      indicator: _propTypes2.default.shape({
         icon: _propTypes2.default.string,
         className: _propTypes2.default.string,
         text: _propTypes2.default.node
      }),
      infoClassName: _propTypes2.default.string,
      key: _propTypes2.default.string,
      date: _propTypes2.default.shape({
         className: _propTypes2.default.string,
         content: _propTypes2.default.node
      }),
      content: _propTypes2.default.node
   }))
};

TimeLineItemsContainer.defaultProps = {
   timelineItems: []
};

exports.default = TimeLineItemsContainer;