import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WidgetToolbar = ({ className, children }) => (
   <span className={ classNames("widget-toolbar", className) }>
      { children }
   </span>
);

WidgetToolbar.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};

export default WidgetToolbar;