import PropTypes from 'prop-types';
import React from 'react';
import DocumentTitle        from 'react-document-title';

import Breadcrumbs          from './breadcrumbs/Breadcrumbs';
import PageHeader           from './PageHeader';

const Page = (props) => (
   <DocumentTitle title={ props.title || 'Ирена'}>
      <div className="main-content-inner">
         <Breadcrumbs breadcrumbs={ props.breadcrumbs } />
         <div className="page-content">
            <div className="row">
               <div className="col-xs-12">
                  <PageHeader header={ props.header }
                              headerClassName={ props.headerClassName }
                              additionalInfo={ props.additionalInfo }
                              toolbar={ props.toolbar }
                              toolbarClassName={ props.toolbarClassName }
                              subHeader={ props.subHeader }/>
                  { props.children }
               </div>
            </div>
         </div>
      </div>
   </DocumentTitle>
);

Page.propTypes = {
   breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
         link: PropTypes.string,
         text: PropTypes.string,
         home: PropTypes.bool,
         active: PropTypes.bool
      })
   ),
   children: PropTypes.node,
   title: PropTypes.string,
   toolbar: PropTypes.node,
   additionalInfo: PropTypes.node,
   subHeader: PropTypes.string,
   headerClassName: PropTypes.string,
   toolbarClassName: PropTypes.string,
   header: PropTypes.string
};

export default Page;
