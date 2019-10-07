import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WidgetTitle = ({ className, children }) => (
   <h5 className={classNames('widget-title', className)}>{children}</h5>
);

WidgetTitle.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};

export default WidgetTitle;
