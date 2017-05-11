import PropTypes from 'prop-types';
import React from 'react';

const FilterCell = ({ filter }) => (
   <th className="filter">
      { filter }
   </th>
);

FilterCell.propTypes = {
   filter: PropTypes.node
};

export default FilterCell;