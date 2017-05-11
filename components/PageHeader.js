import PropTypes from 'prop-types';
import React from 'react';

const PageHeader = ({ toolbar, toolbarClassName, header, headerClassName, subHeader, additionalInfo }) => (
   <div className="page-header col-xs-12 no-padding-left no-padding-right">
      <div className={ toolbar ? headerClassName || "col-xs-12 col-lg-8 no-padding-left" : "col-xs-12 no-padding-left" }>
         <h1>
            { header }
            {
               subHeader &&
                  <small>
                     <i className="fa fa-angle-double-right" />&nbsp;{ subHeader }
                  </small>
            }
            { additionalInfo }
         </h1>
      </div>
      {
         toolbar &&
         <div className={ toolbarClassName || "col-xs-12 col-lg-4 no-padding-right toolbar-container" }>
            { toolbar }
         </div>
      }
   </div>
);

PageHeader.propTypes = {
   toolbar: PropTypes.node,
   additionalInfo: PropTypes.node,
   subHeader: PropTypes.string,
   headerClassName: PropTypes.string,
   toolbarClassName: PropTypes.string,
   header: PropTypes.string
};

export default PageHeader;