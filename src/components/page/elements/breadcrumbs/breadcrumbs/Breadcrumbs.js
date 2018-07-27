import PropTypes from 'prop-types';
import React from 'react';
import Breadcrumb from '../breadcrumb/Breadcrumb';
import uniqueId from 'lodash/uniqueId';

const Breadcrumbs = ({ breadcrumbs, search }) => (
   <div className="breadcrumbs">
      <ul className="breadcrumb">
         {breadcrumbs.map((elem, index) => (
            <Breadcrumb key={uniqueId()} elem={elem} />
         ))}
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
