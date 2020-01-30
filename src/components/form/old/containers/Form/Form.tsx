import React from 'react';
import PropTypes from 'prop-types';

// TODO: This is old way. Rewrite it!
// @Deprecated
const Form = ({ children, name, className, action }) => {
   return (
      <form name={name} className={className || 'form-horizontal css-form'} action={action}>
         {children}
      </form>
   );
};

Form.propTypes = {
   children: PropTypes.node,
   name: PropTypes.string,
   action: PropTypes.string,
   className: PropTypes.string
};

export default Form;
