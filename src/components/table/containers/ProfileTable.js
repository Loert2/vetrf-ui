import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import ProfileTableRow from '../elements/ProfileTableRow';

const ProfileTable = ({ rows, itemList, tableClassName }) => {
   const tableRows = [];
   if (rows && rows.length){
      for (let i = 0; i < rows.length; i++){
         tableRows.push(
            <ProfileTableRow key={ rows[i].header.key || uniqueId() }
                             first={ i === 0 ? "border-top-solid-profile-table" : "" }
                             header={ rows[i].header }
                             dataFormatter={ rows[i].dataFormatter }
                             field={ rows[i].field }
                             itemList={ itemList } />
         );
      }
   }

   return (
      <table className={ tableClassName || "table color-table-border font-weight-normal" } >
         <thead/>
         <tbody className="font-weight-normal color-table-border">
            { tableRows }
         </tbody>
      </table>
   )
};

ProfileTable.propTypes = {
   tableClassName: PropTypes.string,
   itemList: PropTypes.arrayOf(
      PropTypes.shape({
         key: PropTypes.string,
         cellClassName: PropTypes.string,
         item: PropTypes.any
      })
   ),
   rows: PropTypes.arrayOf(
      PropTypes.shape({
         header: PropTypes.shape({
            key: PropTypes.string,
            title: PropTypes.string,
            headerClassName: PropTypes.string,
            width: PropTypes.string,
         }),
         field: PropTypes.string,
         dataFormatter: PropTypes.func
      })
   )
};

export default ProfileTable;
