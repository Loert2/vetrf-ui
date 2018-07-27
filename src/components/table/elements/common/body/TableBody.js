import PropTypes from 'prop-types';
import React from 'react';
import uniqueId from 'lodash/uniqueId';

import TableRow from '../row/TableRow';
import RowEmptyList from '../row-empty-list/RowEmptyList';
import AddInfoRow from '../add-info-row/AddInfoRow';

const TableBody = (props) => {
   const rows = [];
   const {
      dataList,
      keyFunction,
      columns,
      paginationRow,
      additionalDataRow,
      addBtn,
      readOnly,
      emptyText,
      onClickRow,
      selectOptions,
      getRowClassName
   } = props;
   const addInfoRow = addBtn && (
      <AddInfoRow
         addAction={addBtn.action}
         btnClassName={addBtn.className}
         text={addBtn.text}
         columnsLength={columns.length}
      />
   );
   if (dataList && dataList.length) {
      for (let i = 0; i < dataList.length; i++) {
         rows.push(
            <TableRow
               key={
                  (keyFunction && keyFunction(dataList[i])) ||
                  dataList[i].id ||
                  uniqueId()
               } //TODO: Убрать uniqueId, постараться его не использовать.
               columns={columns}
               onClick={onClickRow}
               getRowClassName={getRowClassName}
               selectOptions={selectOptions}
               item={dataList[i]}
            />
         );
      }
      return (
         <tbody>
            {rows}
            {additionalDataRow && (
               <TableRow
                  key="additionalRow"
                  columns={additionalDataRow.additionalMetadata}
                  item={additionalDataRow.additionalData}
               />
            )}
            {paginationRow && (
               <tr key="pagination">
                  <td colSpan={columns.length}>{paginationRow}</td>
               </tr>
            )}
            {addBtn && !readOnly && addInfoRow}
         </tbody>
      );
   }
   if (addBtn && !readOnly) {
      return <tbody>{addInfoRow}</tbody>;
   } else {
      return (
         <tbody>
            <RowEmptyList columnsLength={columns.length} text={emptyText} />
         </tbody>
      );
   }
};

TableBody.propTypes = {
   readOnly: PropTypes.bool,
   dataList: PropTypes.array,
   keyFunction: PropTypes.func,
   paginationRow: PropTypes.node,
   additionalDataRow: PropTypes.shape({
      additionalMetadata: PropTypes.arrayOf(
         PropTypes.shape({
            key: PropTypes.string,
            className: PropTypes.string,
            dataFormatter: PropTypes.func
         })
      ),
      additionalData: PropTypes.any
   }),
   addBtn: PropTypes.shape({
      action: PropTypes.func,
      className: PropTypes.string,
      text: PropTypes.string
   }),
   emptyText: PropTypes.string,
   onClickRow: PropTypes.func,
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

export default TableBody;
