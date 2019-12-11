import PropTypes from 'prop-types';
import React from 'react';
import Breadcrumb from './inner/Breadcrumb/Breadcrumb';
import uniqueId from 'lodash/uniqueId';

// TODO: This is old way. Rewrite it!
const Breadcrumbs = ({ breadcrumbs }) => (
   <div className="breadcrumbs">
      <ul className="breadcrumb">
         {breadcrumbs.map(elem => <Breadcrumb key={uniqueId()} elem={elem} />)}
      </ul>
   </div>
);

Breadcrumbs.propTypes = {
   breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
         link: PropTypes.string,
         text: PropTypes.string,
         active: PropTypes.bool
      })
   ),
   search: PropTypes.object
};

export default Breadcrumbs;
