import React from 'react';


const FormActionsPanel = ({children}) => (
   <div className="clearfix form-actions no-margin-bottom col-xs-12">
      <div className="col-md-offset-5 col-md-7">
         {children}
      </div>
   </div>
);

FormActionsPanel.propTypes = {
   children: PropTypes.node
};

FormActionsPanel.defaultProps = { };

export default FormActionsPanel;

