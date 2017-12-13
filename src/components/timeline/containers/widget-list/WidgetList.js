import React from 'react';
import PropTypes from 'prop-types';

import TimeLineContainer from '../time-line/TimeLineContainer';
import classNames from "classnames";

const WidgetList = ({ items, listClassName }) => {
   return (
      <div className="row">
         <div className="col-xs-12">
            <TimeLineContainer className={ classNames(listClassName, 'widget-list') } timeline={ items }/>
         </div>
      </div>
   );
};

WidgetList.propTypes = {
   listClassName: PropTypes.string,
   items: PropTypes.arrayOf(
      PropTypes.shape({
         label: PropTypes.shape({
            containerClassName: PropTypes.string,
            className: PropTypes.string,
            text: PropTypes.string
         }),
         items: PropTypes.arrayOf(
            PropTypes.shape({
               className: PropTypes.string,
               widget: PropTypes.shape({
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
                  })
               }),
               icon: PropTypes.string,
               date: PropTypes.shape({
                  className: PropTypes.string,
                  content: PropTypes.node
               }),
               content: PropTypes.node
            })
         )
      })
   )
};

export default WidgetList;