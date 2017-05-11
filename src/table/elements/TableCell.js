import PropTypes from 'prop-types';
import React from 'react';

const TableCell = ({ className, data }) => (
   <td className={ className } >{ data }</td>
);

TableCell.propTypes = {
   className: PropTypes.string,
   data: PropTypes.node
};

export default TableCell;