import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

const Badge = ({ colorClass, children }) => (
   <span className={classNames('badge', colorClass)}>{children}</span>
);

Badge.propTypes = {
   children: PropTypes.node,
   colorClass: PropTypes.string
};

export default Badge;
