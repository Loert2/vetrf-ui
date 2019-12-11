import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
 * label в форме флага
 * */
// TODO: This is old way. Rewrite it!
const TimeLineLabel = ({ label = {} }: any) => (
   <div className={classNames('timeline-label', label.containerClassName)}>
      <span className={classNames('label label-lg arrowed-in-right', label.className)}>
         <b>{label.text}</b>
      </span>
   </div>
);

TimeLineLabel.propTypes = {
   label: PropTypes.shape({
      containerClassName: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   })
};

export default TimeLineLabel;
