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

var _TimeLineLabelContainer = require('../../elements/label/container/TimeLineLabelContainer');

var _TimeLineLabelContainer2 = _interopRequireDefault(_TimeLineLabelContainer);

var _TimeLineItemsContainer = require('../../elements/item/items-container/TimeLineItemsContainer');

var _TimeLineItemsContainer2 = _interopRequireDefault(_TimeLineItemsContainer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineContainer = function TimeLineContainer(_ref) {
   var timeline = _ref.timeline,
       className = _ref.className;

   return _react2.default.createElement(
      'div',
      { className: (0, _classnames2.default)("timeline-container", className) },
      timeline.label && _react2.default.createElement(_TimeLineLabelContainer2.default, { label: timeline.label }),
      _react2.default.createElement(_TimeLineItemsContainer2.default, { timelineItems: timeline.items })
   );
};

TimeLineContainer.propTypes = {
   className: _propTypes2.default.string,
   timeline: _propTypes2.default.shape({
      label: _propTypes2.default.shape({
         containerClassName: _propTypes2.default.string,
         className: _propTypes2.default.string,
         text: _propTypes2.default.string
      }),
      items: _propTypes2.default.arrayOf(_propTypes2.default.shape({
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
         date: _propTypes2.default.shape({
            className: _propTypes2.default.string,
            content: _propTypes2.default.node
         }),
         content: _propTypes2.default.node
      }))
   })
};

TimeLineContainer.defaulProps = {
   timeline: {}
};

exports.default = TimeLineContainer;