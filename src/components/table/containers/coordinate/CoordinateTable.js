import PropTypes from 'prop-types';
import React from 'react';

import CoordinateTableBody from '../../elements/common/coordinate-table-body/CoordinateTableBody';
import TableHeader from '../../elements/common/table-header/TableHeader';

const CoordinateTable = ({ id, tableClassName, columns, rows, readOnly }) => (
   <table
      id={id}
      className={
         tableClassName ||
         'table table-striped table-bordered table-hover font-weight-normal'
      }>
      <TableHeader columns={columns} />
      <CoordinateTableBody rows={rows} columns={columns} readOnly={readOnly} />
   </table>
);

CoordinateTable.propTypes = {
   id: PropTypes.string,
   tableClassName: PropTypes.string,
   readOnly: PropTypes.bool,
   rows: PropTypes.arrayOf(
      PropTypes.shape({
         header: PropTypes.shape({
            key: PropTypes.string,
            title: PropTypes.string,
            headerColumnClassName: PropTypes.string,
            width: PropTypes.string
         }),
         item: PropTypes.array
      })
   ),
   columns: PropTypes.arrayOf(
      PropTypes.shape({
         key: PropTypes.string,
         cellClassName: PropTypes.string,
         dataFormatter: PropTypes.func
      })
   )
};

export default CoordinateTable;
