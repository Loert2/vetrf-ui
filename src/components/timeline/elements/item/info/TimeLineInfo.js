import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const defaultClassName = 'timeline-indicator no-hover';

const TimeLineInfo = ({ className, indicator = {} }) => {
   let content = null;
   if (indicator.icon) {
      content = <i className={classNames(defaultClassName, indicator.icon)} />;
   } else if (indicator.text) {
      content = (
         <span
            className={classNames(
               defaultClassName,
               indicator.className || 'btn-primary'
            )}>
            {indicator.text}
         </span>
      );
   }

   return (
      <div className={classNames('timeline-info', className)}>{content}</div>
   );
};

TimeLineInfo.propTypes = {
   indicator: PropTypes.shape({
      icon: PropTypes.string,
      text: PropTypes.node,
      className: PropTypes.string
   }),
   className: PropTypes.string
};

export default TimeLineInfo;
