import React from 'react';
import PropTypes from 'prop-types';
import isEmpty from 'lodash/isEmpty';

import WidgetHeader from './inner/WidgetHeader/WidgetHeader';
import WidgetBody from './inner/WidgetBody/WidgetBody';
import classNames from 'classnames';

// TODO: This is old way. Rewrite it!
const Widget = ({ className, header, body, children }) => (
   <div className={classNames('widget-box', className)}>
      {!isEmpty(header) && (
         <WidgetHeader className={header.className} title={header.title} toolbar={header.toolbar} />
      )}

      {!body.invisible && (
         <WidgetBody className={body.className} toolbox={body.toolbox} footer={body.footer}>
            {children}
         </WidgetBody>
      )}
   </div>
);

Widget.propTypes = {
   className: PropTypes.string,
   header: PropTypes.shape({
      className: PropTypes.string,
      title: PropTypes.shape({
         content: PropTypes.node,
         className: PropTypes.string
      }),
      toolbar: PropTypes.shape({
         content: PropTypes.node,
         className: PropTypes.string
      })
   }),
   body: PropTypes.shape({
      className: PropTypes.string,
      invisible: PropTypes.bool,
      toolbox: PropTypes.shape({
         content: PropTypes.node,
         className: PropTypes.string
      }),
      footer: PropTypes.shape({
         content: PropTypes.node,
         className: PropTypes.string
      })
   }),
   children: PropTypes.node
};

Widget.defaultProps = {
   header: {},
   body: {}
};

export default Widget;
