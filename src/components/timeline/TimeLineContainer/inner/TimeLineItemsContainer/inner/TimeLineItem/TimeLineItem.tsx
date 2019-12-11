import React from 'react';
import PropTypes from 'prop-types';
import TimeLineInfo from './inner/TimeLineInfo/TimeLineInfo';
import Widget from '../../../../../../widget/Widget/Widget';
import classNames from 'classnames';

// TODO: This is old way. Rewrite it!
const TimeLineItem = ({ className, widgetMetaData = {}, date = {}, info = {}, children }: any) => (
   <div className={classNames('timeline-item clearfix', className)}>
      <div className={classNames('timeline-date', date.className)}>{date.content}</div>
      <TimeLineInfo className={info.className} indicator={info.indicator} />
      <Widget
         className={widgetMetaData.className || 'transparent'}
         header={widgetMetaData.header}
         body={widgetMetaData.body}>
         {children}
      </Widget>
   </div>
);

TimeLineItem.propTypes = {
   className: PropTypes.string,
   widgetClassName: PropTypes.string,
   info: PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.node,
      indicator: PropTypes.object,
      className: PropTypes.string
   }),
   date: PropTypes.shape({
      className: PropTypes.string,
      content: PropTypes.node
   }),
   widgetMetaData: PropTypes.shape({
      className: PropTypes.string,
      header: PropTypes.shape({
         className: PropTypes.string,
         title: PropTypes.shape({
            content: PropTypes.node,
            className: PropTypes.string
         }),
         toolbar: PropTypes.shape({
            content: PropTypes.node,
            className: PropTypes.string
         })
      }),
      body: PropTypes.shape({
         className: PropTypes.string,
         toolbox: PropTypes.shape({
            content: PropTypes.node,
            className: PropTypes.string
         }),
         footer: PropTypes.shape({
            content: PropTypes.node,
            className: PropTypes.string
         }),
         invisible: PropTypes.bool
      })
   }),
   children: PropTypes.node
};

TimeLineItem.defaultProps = {
   date: {},
   widget: {}
};

export default TimeLineItem;
