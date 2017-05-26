import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import TimeLineItem from './TimeLineItem';

const TimeLineItemsContainer = ({ timelineItems }) => {
   const timeline = timelineItems.map(
      (item) =>
         <TimeLineItem key={ uniqueId() }
                       icon={ item.icon }
                       className={ item.className }
                       date={ item.date }
                       widgetMetaData={ item.widgetMetaData }>
            { item.content }
         </TimeLineItem>
   );
   return (
      <div className="timeline-items">
         { timeline }
      </div>
   );
};

TimeLineItemsContainer.propTypes = {
   timelineItems: PropTypes.arrayOf(
      PropTypes.shape({
         className: PropTypes.string,
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
               invisible: PropTypes.bool,
               toolbox: PropTypes.shape({
                  content: PropTypes.node,
                  className: PropTypes.string
               }),
               footer: PropTypes.shape({
                  content: PropTypes.node,
                  className: PropTypes.string
               })
            })
         }),
         icon: PropTypes.string,
         date: PropTypes.shape({
            className: PropTypes.string,
            content: PropTypes.node
         }),
         content: PropTypes.node
      })
   )
};

TimeLineItemsContainer.defaultProps = {
   timelineItems: []
};

export default TimeLineItemsContainer;