import PropTypes from 'prop-types';
import React from 'react';
import NavSearch from 'components/form/elements/simple/NavSearch';
import Breadcrumb from './Breadcrumb';
import uniqueId from 'lodash/uniqueId';

const Breadcrumbs = ({ breadcrumbs }) => (
   <div className="breadcrumbs">
      <ul className="breadcrumb">
         { breadcrumbs.map((elem, index) => <Breadcrumb key={ uniqueId() } elem={ elem } />) }
      </ul>
     <NavSearch />
   </div>
);

Breadcrumbs.propTypes = {
   breadcrumbs: PropTypes.arrayOf(
      PropTypes.shape({
         link: PropTypes.string,
         text: PropTypes.string,
         active: PropTypes.bool
      })
   )
};

export default Breadcrumbs;