import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';
import classNames from 'classnames';

import TableCell from './TableCell';
import HeaderColumn from './HeaderColumn';

const ProfileTableRow = ({ first, header, field, dataFormatter, itemList }) => {
   const cells = [];
   cells.push(
      <HeaderColumn key={ header.key || uniqueId() }
                    className={ classNames(header.headerClassName || "background-color-name align-right", first) }
                    style={ first && {  borderTop: "1px solid #DCEBF7 !important" } }
                    width={ header.width || "260px" }
                    title={ header.title }/>
   );

   for (let i = 0; i < itemList.length; i++){
      cells.push(
         <TableCell key={ uniqueId() }
                    className={ itemList[i].cellClassName }
                    data={
                       (dataFormatter && dataFormatter(itemList[i].item)) ||
                       (field && itemList[i].item[field])
                    } />
      );
   }

   return (
      <tr>{ cells }</tr>
   )
};

ProfileTableRow.propTypes = {
   first: PropTypes.string,
   header: PropTypes.shape({
      key: PropTypes.string,
      title: PropTypes.string,
      headerClassName: PropTypes.string,
      width: PropTypes.string,
   }),
   field: PropTypes.string,
   dataFormatter: PropTypes.func,
   itemList: PropTypes.arrayOf(
      PropTypes.shape({
         key: PropTypes.string,
         cellClassName: PropTypes.string,
         item: PropTypes.any
      })
   )
};

export default ProfileTableRow;
