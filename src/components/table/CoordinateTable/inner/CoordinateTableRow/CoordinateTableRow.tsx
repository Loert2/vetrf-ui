import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import HeaderColumn from '../../../inner/HeaderColumn/HeaderColumn';

// TODO: This is old way. Rewrite it!
const CoordinateTableRow = ({ header, columns, item, rowKey, readOnly }) => {
   const cells = [];
   cells.push(
      <HeaderColumn
         key={header.key}
         className={header.headerColumnClassName}
         width={header.width}
         title={header.title}
      />
   );
   for (let i = 1; i < columns.length; i++) {
      const key = columns[i].key || uniqueId();
      cells.push(
         <td key={key} className={columns[i].cellClassName}>
            {columns[i].dataFormatter && columns[i].dataFormatter(item, key, rowKey, readOnly)}
         </td>
      );
   }
   return <tr>{cells}</tr>;
};

CoordinateTableRow.propTypes = {
   readOnly: PropTypes.bool,
   header: PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      headerColumnClassName: PropTypes.string,
      width: PropTypes.string
   }),
   rowKey: PropTypes.string,
   item: PropTypes.any,
   columns: PropTypes.arrayOf(
      PropTypes.shape({
         key: PropTypes.string,
         cellClassName: PropTypes.string,
         dataFormatter: PropTypes.func
      })
   )
};

export default CoordinateTableRow;
