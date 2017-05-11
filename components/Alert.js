import PropTypes from 'prop-types';
import React from 'react';

const Alert = ({ id, className, closeButton, children }) => (
   <div id={ id } className={ className || "alert alert-info" }>
      {
         closeButton &&
         <button type="button" className="close" dataDismiss="alert">
            <i className="ace-icon fa fa-times"/>
         </button>
      }
      { children }
   </div>
);

Alert.propTypes = {
   children: PropTypes.node,
   closeButton: PropTypes.bool,
   className: PropTypes.string,
   id: PropTypes.string
};

export default Alert;