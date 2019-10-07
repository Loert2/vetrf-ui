import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import TableCell from '../cell/TableCell';
import HeaderColumn from '../header-column/HeaderColumn';

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
         <TableCell
            key={key}
            className={columns[i].cellClassName}
            data={columns[i].dataFormatter && columns[i].dataFormatter(item, key, rowKey, readOnly)}
         />
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
