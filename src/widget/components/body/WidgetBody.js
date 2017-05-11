import React from 'react';
import PropTypes from 'prop-types';
import WidgetMain from './WidgetMain';
import WidgetToolbox from './WidgetToolbox';
import isEmpty from 'lodash/isEmpty';

const WidgetBody = ({ className, children, toolbox, footer }) => (
   <div className="widget-body">
      {
         !isEmpty(toolbox) &&
         <WidgetToolbox className={ toolbox.className }>
            { toolbox.content }
         </WidgetToolbox>
      }
      <WidgetMain className={ className }>
         { children }
      </WidgetMain>
      {
         !isEmpty(footer) &&
         <WidgetToolbox className={ footer.className }>
            { footer.content }
         </WidgetToolbox>
      }
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