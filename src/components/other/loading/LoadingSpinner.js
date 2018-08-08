import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const LoadingSpinner = ({ className, style, icon, text }) => (
   <span className={classNames('animated', className)} style={style}>
      <i className={icon || 'fa fa-spinner fa-spin blue'} /> {text || 'Загрузка...'}
   </span>
);

LoadingSpinner.propTypes = {
   text: PropTypes.string,
   icon: PropTypes.string,
   style: PropTypes.object,
   className: PropTypes.string
};

export default LoadingSpinner;
