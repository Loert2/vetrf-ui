import PropTypes from 'prop-types';
import React from 'react';

import TableInfo from '../table-info/TableInfo';
import SizePerPage from '../size-per-page/SizePerPage';
import PaginationList from '../pagination-list/PaginationList';
import Const from '../../constants/index';
import SwitchText from '../../../../form/elements/simple/switch/text/SwitchText';

const PaginationRow = (props) => (
   <div className="row">
      <div className="col-xs-7 pull-left">
         <TableInfo page={props.page} sizePerPage={props.sizePerPage} itemCount={props.itemCount} />
         {props.itemCount > props.sizePerPage && (
            <PaginationList
               currPage={props.page}
               sizePerPage={props.sizePerPage}
               changePage={props.onChangePage}
               pageStartIndex={props.pageStartIndex}
               paginationSize={props.paginationSize || Const.PAGINATION_SIZE}
               dataSize={props.itemCount}
               prePage={props.prePage || Const.PRE_PAGE}
               nextPage={props.nextPage || Const.NEXT_PAGE}
               firstPage={props.firstPage || Const.FIRST_PAGE}
               lastPage={props.lastPage || Const.LAST_PAGE}
            />
         )}
      </div>
      <div className="col-xs-5">
         {props.itemCount > Const.SIZE_PER_PAGE && (
            <div className="col-xs-12">
               <div className="pull-right">
                  <div>
                     <SizePerPage
                        onChange={props.onChangeSizePerPage}
                        sizePerPage={props.sizePerPage}
                     />
                     <span>&nbsp;записей на странице</span>
                  </div>
                  {props.switchableView && (
                     <div>
                        <SwitchText onChange={props.onChangeView} />
                     </div>
                  )}
               </div>
            </div>
         )}
      </div>
   </div>
);

PaginationRow.propTypes = {
   page: PropTypes.number,
   paginationSize: PropTypes.number,
   pageStartIndex: PropTypes.number,
   firstPage: PropTypes.string,
   lastPage: PropTypes.string,
   prePage: PropTypes.string,
   itemCount: PropTypes.number,
   sizePerPage: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
   nextPage: PropTypes.string,
   switchableView: PropTypes.bool,
   onChangePage: PropTypes.func,
   onChangeView: PropTypes.func
};

export default PaginationRow;
