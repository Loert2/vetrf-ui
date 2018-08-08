import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import HeaderColumn from '../header-column/HeaderColumn';
import FilterCell from '../../filter/cell/FilterCell';

const TableHeader = ({ columns, sortedId, filterableTable }) => {
   const headerColumns = [];
   const filterColumns = [];

   for (let i = 0; i < columns.length; i++) {
      const key = columns[i].key || uniqueId();
      headerColumns.push(
         <HeaderColumn
            key={key}
            id={key}
            sortedId={sortedId}
            width={columns[i].width}
            sortable={columns[i].sortable}
            onSort={columns[i].onSort}
            title={columns[i].title}
         />
      );
   }

   if (filterableTable) {
      for (let i = 0; i < columns.length; i++) {
         filterColumns.push(
            <FilterCell key={columns[i].key || uniqueId()} filter={columns[i].filter} />
         );
      }
   }

   return (
      <thead>
         <tr>{headerColumns}</tr>
         {filterableTable && <tr className="filters">{filterColumns}</tr>}
      </thead>
   );
};

TableHeader.propTypes = {
   filterableTable: PropTypes.bool,
   sortedId: PropTypes.string,
   columns: PropTypes.arrayOf(
      PropTypes.shape({
         key: PropTypes.string,
         title: PropTypes.string,
         width: PropTypes.string,
         className: PropTypes.string,
         dataFormatter: PropTypes.func,
         filter: PropTypes.node,
         sortable: PropTypes.bool,
         onSort: PropTypes.func,
         getClassName: PropTypes.func
      })
   )
};

export default TableHeader;
