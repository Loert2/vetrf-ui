import React from 'react';
import PropTypes from 'prop-types';
import TimeLineContainer from '../time-line/TimeLineContainer';
import uniqueId from 'lodash/uniqueId';

const TimeLineListContainer = ({ timeLineList, timeLineContainerClassName }) => {
   const list = timeLineList.map(
      (timeLine) =>
         <TimeLineContainer key={ uniqueId() } className={ timeLineContainerClassName } timeline={ timeLine }/>
   );
   return (
      <div className="row">
         <div className="col-xs-12">
            { list }
         </div>
      </div>
   );
};

TimeLineListContainer.propTypes = {
   timeLineContainerClassName: PropTypes.string,
   timeLineList: PropTypes.arrayOf(
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
               indicator: PropTypes.shape({
                  icon: PropTypes.string,
                  className: PropTypes.string,
                  text: PropTypes.node
               }),
               infoClassName: PropTypes.string,
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

export default TimeLineListContainer;