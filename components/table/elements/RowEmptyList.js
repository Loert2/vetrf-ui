import PropTypes from 'prop-types';
import React from 'react';

const RowEmptyList = ({ columnsLength, text }) => (
   <tr>
      <td colSpan={ columnsLength }>
         { text || "Нет записей" }
      </td>
   </tr>
);

RowEmptyList.propTypes = {
   columnsLength: PropTypes.number,
   text: PropTypes.string
};

export default RowEmptyList;