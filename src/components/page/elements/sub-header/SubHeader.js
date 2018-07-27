import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SubHeader = (props) => (
   <div>
      <div
         className={classNames(
            'widget-header-my',
            props.underline && 'header blue'
         )}>
         <h4 className={props.className || 'lighter'}>
            <i className={props.icon} />
            &nbsp;{props.header}
         </h4>&nbsp;
         {props.toolbar}
      </div>
      {props.description && <p>{props.description}</p>}
   </div>
);

SubHeader.propTypes = {
   className: PropTypes.string,
   icon: PropTypes.string,
   header: PropTypes.string,
   description: PropTypes.string,
   underline: PropTypes.bool,
   toolbar: PropTypes.node
};

export default SubHeader;
