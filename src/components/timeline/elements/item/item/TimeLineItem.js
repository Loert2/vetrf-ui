import React from 'react';
import PropTypes from 'prop-types';
import TimeLineDate from '../date/TimeLineDate';
import TimeLineInfo from '../info/TimeLineInfo';
import Widget from '../../../../widget/containers/Widget';
import classNames from 'classnames';

const TimeLineItem = ({
   className,
   widgetMetaData = {},
   date = {},
   info = {},
   children
}) => {
   return (
      <div className={classNames('timeline-item clearfix', className)}>
         <TimeLineDate className={date.className} date={date.content} />
         <TimeLineInfo className={info.className} indicator={info.indicator} />
         <Widget
            className={widgetMetaData.className || 'transparent'}
            header={widgetMetaData.header}
            body={widgetMetaData.body}>
            {children}
         </Widget>
      </div>
   );
};

TimeLineItem.propTypes = {
   className: PropTypes.string,
   widgetClassName: PropTypes.string,
   info: PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.node
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
