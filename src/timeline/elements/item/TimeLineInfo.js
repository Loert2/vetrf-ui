import React from 'react';
import PropTypes from 'prop-types';

const TimeLineInfo = ({ icon }) => (
   <div className="timeline-info history-item">
      <i className={ icon } />
   </div>
);

TimeLineInfo.propTypes = {
   icon: PropTypes.string
};

export default TimeLineInfo;