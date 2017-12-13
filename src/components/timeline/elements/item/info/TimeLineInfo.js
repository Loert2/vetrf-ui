import React from 'react';
import PropTypes from 'prop-types';

const TimeLineInfo = ({ icon, text }) => (
   <div className="timeline-info history-item">
      {
         icon &&
         <i className={ icon } />
      }
      {
         !icon && text &&
         <span className="timeline-indicator btn-primary no-hover">{ text }</span>
      }
   </div>
);

TimeLineInfo.propTypes = {
   icon: PropTypes.string,
   text: PropTypes.node
};

export default TimeLineInfo;