import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import CoordinateTableRow from './CoordinateTableRow';

const CoordinateTableBody = ({ rows, columns, readOnly }) => {
   const tableRows = [];

   if (rows && rows.length > 0){
      for (let i = 0; i < rows.length; i++){
         const key = rows[i].header.key || uniqueId();
         tableRows.push(
            <CoordinateTableRow key={ key }
                                rowKey={ key }
                                readOnly={ readOnly }
                                header={ rows[i].header }
                                columns={ columns }
                                item={ rows[i].item } />
         );
      }
   }

   return (
      <tbody className="font-weight-normal">
         { tableRows }
      </tbody>
   );
};

CoordinateTableBody.propTypes = {
   readOnly: PropTypes.bool,
   rows: PropTypes.arrayOf(
      PropTypes.shape({
         header: PropTypes.shape({
            key: PropTypes.string,
            title: PropTypes.string,
            headerColumnClassName: PropTypes.string,
            width: PropTypes.string,
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

export default CoordinateTableBody;
