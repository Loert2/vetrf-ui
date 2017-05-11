import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WidgetMain = ({ className, children }) => (
   <div className={ classNames("widget-main", className) }>
      { children }
   </div>
);

WidgetMain.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};

export default WidgetMain;