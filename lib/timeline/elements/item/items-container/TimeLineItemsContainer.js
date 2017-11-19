'use strict';

Object.defineProperty(exports, "__esModule", {
   value: true
});

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

   var timeline = timelineItems.map(function (item) {
      return _react2.default.createElement(
         _TimeLineItem2.default,
         { key: (0, _uniqueId2.default)(),
            icon: item.icon,
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
      icon: _propTypes2.default.string,
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