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

var _uniqueId = require('lodash/uniqueId');

var _uniqueId2 = _interopRequireDefault(_uniqueId);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var TimeLineListContainer = function TimeLineListContainer(_ref) {
   var timeLineList = _ref.timeLineList,
       timeLineContainerClassName = _ref.timeLineContainerClassName;

   var list = timeLineList.map(function (timeLine) {
      return _react2.default.createElement(_TimeLineContainer2.default, {
         key: (0, _uniqueId2.default)(),
         className: timeLineContainerClassName,
         timeline: timeLine
      });
   });
   return _react2.default.createElement(
      'div',
      { className: 'row' },
      _react2.default.createElement(
         'div',
         { className: 'col-xs-12' },
         list
      )
   );
};

TimeLineListContainer.propTypes = {
   timeLineContainerClassName: _propTypes2.default.string,
   timeLineList: _propTypes2.default.arrayOf(_propTypes2.default.shape({
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
   }))
};

exports.default = TimeLineListContainer;