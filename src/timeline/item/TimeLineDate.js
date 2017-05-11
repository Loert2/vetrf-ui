import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const TimeLineDate = ({ date, className }) => (
   <div className={ classNames("timeline-date history-item", className) }>
      { date }
   </div>
);

TimeLineDate.propTypes = {
   className: PropTypes.string,
   date: PropTypes.node
};

export default TimeLineDate;