import PropTypes from 'prop-types';
import React from 'react';

import TableHeader from '../../elements/common/table-header/TableHeader';
import TableBody from '../../elements/common/body/TableBody';
import TableLoadingBlock from '../../elements/common/loading-block/TableLoadingBlock';

const Table = (props) => (
   <div>
      {props.loading && <TableLoadingBlock />}
      <table
         id={props.id}
         className={
            props.loading
               ? 'table table-bordered blur'
               : props.className ||
                 'table table-striped table-bordered table-hover'
         }>
         {!props.hideHeader && (
            <TableHeader
               columns={props.columns}
               sortedId={props.sortedId}
               filterableTable={props.filterableTable}
            />
         )}
         <TableBody
            dataList={props.dataList}
            keyFunction={props.keyFunction}
            onClickRow={props.onClickRow}
            selectOptions={props.selectOptions}
            emptyText={props.emptyText}
            paginationRow={props.paginationRow}
            columns={props.columns}
            readOnly={props.readOnly}
            getRowClassName={props.getRowClassName}
            addBtn={props.addBtn}
            additionalDataRow={props.additionalDataRow}
         />
      </table>
   </div>
);

Table.propTypes = {
   id: PropTypes.string,
   readOnly: PropTypes.bool,
   loading: PropTypes.bool,
   filterableTable: PropTypes.bool,
   hideHeader: PropTypes.bool,
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
   sortedId: PropTypes.string,
   emptyText: PropTypes.string,
   className: PropTypes.string,
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

export default Table;
