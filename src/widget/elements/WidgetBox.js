import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const WidgetBox = ({ className, children }) => {
   return (
      <div className={ classNames("widget-box", className ) }>
         { children }
      </div>
   );
};

WidgetBox.propTypes = {
   className: PropTypes.string,
   children: PropTypes.node
};

export default WidgetBox;