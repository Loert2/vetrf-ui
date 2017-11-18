import PropTypes from 'prop-types';
import React from 'react';

import SubHeader from '../../../../../page/elements/sub-header/SubHeader';

const FormBlock = ({ header, description, icon, children }) =>  (
   <div className="col-xs-12" >
      <SubHeader header={ header }
                 description={ description }
                 icon={ icon || "fa fa-book orange" }  />
      { children }
   </div>
);

FormBlock.propTypes = {
   header: PropTypes.string,
   description: PropTypes.string,
   icon: PropTypes.string,
   children: PropTypes.node
};

export default FormBlock;