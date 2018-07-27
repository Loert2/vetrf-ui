import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';
import some from 'lodash/some';
import classNames from 'classnames';

import TableCell from '../cell/TableCell';

const TableRow = ({
   columns,
   item,
   onClick,
   selectOptions,
   getRowClassName
}) => {
   const cells = [];
   for (let i = 0; i < columns.length; i++) {
      cells.push(
         <TableCell
            key={columns[i].key || uniqueId()}
            className={
               columns[i].getClassName
                  ? columns[i].getClassName(item)
                  : columns[i].className
            }
            data={columns[i].dataFormatter && columns[i].dataFormatter(item)}
         />
      );
   }

   const onSelect = () => {
      onClick && onClick(item);
   };

   const isSelected = () => {
      const { selectedItems, compare } = selectOptions;
      return compare
         ? compare(selectedItems, item)
         : !!(selectedItems && item && some(selectedItems, ['id', item.id]));
   };

   const getSelectedClassName = () => {
      const { selectedClassName } = selectOptions;
      return isSelected() ? selectedClassName || 'success' : '';
   };

   return (
      <tr
         onClick={selectOptions && onSelect}
         className={classNames(
            selectOptions ? 'cur-pointer' : '',
            selectOptions
               ? getSelectedClassName()
               : getRowClassName && getRowClassName(item)
         )}>
         {cells}
      </tr>
   );
};

TableRow.propTypes = {
   item: PropTypes.any,
   onClick: PropTypes.func,
   getRowClassName: PropTypes.func,
   selectOptions: PropTypes.shape({
      selectedClassName: PropTypes.string,
      selectedItems: PropTypes.array,
      compare: PropTypes.func
   }),
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

export default TableRow;
