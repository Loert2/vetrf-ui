import React from 'react';
import PropTypes from 'prop-types';
import DocumentTitle from 'react-document-title';

const SimplePage = ({ title, children }) => (
   <DocumentTitle title={title || 'Ирена'}>
      <div className="main-content-inner">
         <div className="page-content">
            <div className="row">
               <div className="col-xs-12">{children}</div>
            </div>
         </div>
      </div>
   </DocumentTitle>
);

SimplePage.propTypes = {
   title: PropTypes.string,
   children: PropTypes.node
};

export default SimplePage;
