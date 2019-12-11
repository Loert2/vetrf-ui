import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import isEmpty from 'lodash/isEmpty';

// TODO: This is old way. Rewrite it!
const WidgetHeader = ({ className, title, toolbar }) => (
   <div className={classNames('widget-header', className)}>
      {!isEmpty(title) && (
         <h5 className={classNames('widget-title', title.className)}>{title.content}</h5>
      )}
      {!isEmpty(toolbar) && (
         <span className={classNames('widget-toolbar', toolbar.className)}>{toolbar.content}</span>
      )}
   </div>
);

WidgetHeader.propTypes = {
   className: PropTypes.string,
   title: PropTypes.shape({
      content: PropTypes.node,
      className: PropTypes.string
   }),
   toolbar: PropTypes.shape({
      content: PropTypes.node,
      className: PropTypes.string
   })
};

WidgetHeader.defaultProps = {
   title: {},
   toolbar: {}
};

export default WidgetHeader;
