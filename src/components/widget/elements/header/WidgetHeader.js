import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import WidgetTitle from './title/WidgetTitle';
import WidgetToolbar from './toolbar/WidgetToolbar';
import isEmpty from 'lodash/isEmpty';

const WidgetHeader = ({ className, title, toolbar }) => (
   <div className={ classNames("widget-header", className) } >
      {
         !isEmpty(title) &&
         <WidgetTitle className={ title.className } >
            { title.content }
         </WidgetTitle>
      }
      {
         !isEmpty(toolbar) &&
         <WidgetToolbar className={ toolbar.className } >
            { toolbar.content }
         </WidgetToolbar>
      }
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