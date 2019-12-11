import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';
import classNames from 'classnames';

// TODO: This is old way. Rewrite it!
const WidgetBody = ({ className, children, toolbox, footer }) => (
   <div className="widget-body">
      {!isEmpty(toolbox) && (
         <div className={classNames('widget-toolbox', toolbox.className)}>{toolbox.content}</div>
      )}
      <div className={classNames('widget-main', className)}>{children}</div>
      {!isEmpty(footer) && (
         <div className={classNames('widget-toolbox', footer.className)}>{footer.content}</div>
      )}
   </div>
);

WidgetBody.propTypes = {
   className: PropTypes.string,
   toolbox: PropTypes.shape({
      content: PropTypes.node,
      className: PropTypes.string
   }),
   footer: PropTypes.shape({
      content: PropTypes.node,
      className: PropTypes.string
   }),
   children: PropTypes.node
};

WidgetBody.defaultProps = {
   toolbox: {},
   footer: {}
};

export default WidgetBody;
