import React from 'react';
import PropTypes from 'prop-types';

import WidgetBox from './components/WidgetBox';
import WidgetHeader from './components/header/WidgetHeader';
import WidgetBody from  './components/body/WidgetBody';

const Widget = ({ className, header, body, children }) => (
   <WidgetBox className={ className }>
      <WidgetHeader className={ header.className } title={ header.title } toolbar={ header.toolbar } />
      {
         !body.invisible &&
         <WidgetBody className={ body.className } toolbox={ body.toolbox } footer={ body.footer }>
            { children }
         </WidgetBody>
      }
   </WidgetBox>
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