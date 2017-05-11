import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

/**
* label в форме флага
* */
const TimeLineLabel = ({ text, className }) => {
   return (
      <span className={ classNames("label label-lg arrowed-in-right", className) } >
         <b>{ text }</b>
      </span>
   );
};

TimeLineLabel.propTypes = {
   className: PropTypes.string,
   text: PropTypes.string
};

export default TimeLineLabel;