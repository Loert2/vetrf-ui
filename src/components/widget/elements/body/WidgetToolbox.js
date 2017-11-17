import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WidgetToolbox = ({ className, children }) => (
   <div className={ classNames("widget-toolbox", className ) }>
      { children }
   </div>
);

WidgetToolbox.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};

export default WidgetToolbox;