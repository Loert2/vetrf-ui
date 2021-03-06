import PropTypes from 'prop-types';
import React from 'react';

import SubHeader from '../../../../page/SubHeader/SubHeader';

// TODO: This is old way. Rewrite it!
// @Deprecated
const FormBlock = ({ header, description, icon, children }) => (
   <div className="col-xs-12">
      <SubHeader header={header} description={description} icon={icon || 'fa fa-book orange'} />
      {children}
   </div>
);

FormBlock.propTypes = {
   header: PropTypes.string,
   description: PropTypes.string,
   icon: PropTypes.string,
   children: PropTypes.node
};

export default FormBlock;
