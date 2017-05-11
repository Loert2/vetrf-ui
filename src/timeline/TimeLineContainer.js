import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TimeLineLabelContainer from './label/TimeLineLabelContainer';
import TimeLineItemsContainer from './item/TimeLineItemsContainer';

const TimeLineContainer = ({ timeline, className }) => {
   return (
      <div className={ classNames("timeline-container", className) }>
         <TimeLineLabelContainer label={ timeline.label }/>
         <TimeLineItemsContainer timelineItems={ timeline.items } />
      </div>
   );
};

TimeLineContainer.propTypes = {
   className: PropTypes.string,
   timeline: PropTypes.shape({
      label: PropTypes.shape({
         containerClassName: PropTypes.string,
         className: PropTypes.string,
         text: PropTypes.string
      }),
      items: PropTypes.arrayOf(
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
   })
};

TimeLineContainer.defaulProps = {
   timeline: {}
};

export default TimeLineContainer;