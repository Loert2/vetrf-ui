import React from 'react';
import PropTypes from 'prop-types';
import TimeLineLabel from '../TimeLineLabel';
import classNames from 'classnames';

const TimeLineLabelContainer = ({ label }) => (
   <div className={classNames('timeline-label', label.containerClassName)}>
      <TimeLineLabel className={label.className} text={label.text} />
   </div>
);

TimeLineLabelContainer.propTypes = {
   label: PropTypes.shape({
      containerClassName: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   })
};

TimeLineLabelContainer.defaultProps = {
   label: {}
};

export default TimeLineLabelContainer;
