import PropTypes from 'prop-types';
import React from 'react';

const TableInfo = ({ page, sizePerPage, itemCount }) => {
   const firstResultIndex = page === 1 ? page : (page  - 1) * sizePerPage + 1;
   let to = Math.min((page * sizePerPage) - 1, itemCount);
   if (to >= itemCount) to--;
   return (
      <p className="padding-top-6">
         Записи с <strong>{ firstResultIndex }</strong> по <strong>{ to + 1 }</strong>
         &nbsp;из <strong>{ itemCount }</strong>
         &nbsp;записей
      </p>
   );
};

TableInfo.propTypes = {
   page: PropTypes.number,
   itemCount: PropTypes.number,
   sizePerPage: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.string
   ])
};

export default TableInfo;