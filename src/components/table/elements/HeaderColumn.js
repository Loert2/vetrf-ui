import PropTypes from 'prop-types';
import React, { Component } from 'react';
import classNames from 'classnames';

import Const from '../../table/elements/constants';

const getIconClass = (sortType) => {
   switch (sortType) {
      case Const.SORT_ASC:
         return "fa-sort-asc";
      case Const.SORT_DESC:
         return "fa-sort-desc";
      default:
         return "fa-sort";
   }
};

const initialState = {
   sort: Const.SORT_UNDEFINED,
   sortIcon: "fa-sort"
};

export default class HeaderColumn extends Component {
   constructor(props, context) {
      super(props, context);
      this.changeSort = this.changeSort.bind(this);
      this.onClickHandler = this.onClickHandler.bind(this);
      this.state = initialState;
   }

   componentWillReceiveProps(nextProps) {
      if (nextProps.sortedId !== nextProps.id) {
         this.setState(initialState);
      }
   }

   changeSort() {
      if (this.state.sort !== Const.SORT_UNDEFINED) {
         switch (this.state.sort) {
            case Const.SORT_ASC:
               return Const.SORT_DESC;
            case Const.SORT_DESC:
               return Const.SORT_UNDEFINED;
            default:
               return Const.SORT_ASC;
         }
      }
      return Const.SORT_ASC;
   }

   onClickHandler() {
      const { onSort, id } = this.props;
      const nextSort = this.changeSort();
      const promise = new Promise((resolve, reject) => {
         this.setState({
            sort: nextSort ,
            sortIcon: getIconClass(nextSort)
         });
         resolve();
      });
      promise.then(() => onSort && onSort(nextSort, id));
   }

   render () {
      const { width, title, sortable, onSort, className } = this.props;
      return (
         <th style={{ width: width, minWidth: width, maxWidth: width }}
             className={ className || "header text-align-center" }>
            <span>
               { title }
               &nbsp;
               {
                  sortable && onSort &&
                  <i className={ classNames("sort-caret fa", this.state.sortIcon || "fa-sort" ) }
                     onClick={ this.onClickHandler }/>
               }
            </span>
         </th>
      )
   }
}

HeaderColumn.propTypes = {
   sortable: PropTypes.bool,
   width: PropTypes.string,
   title: PropTypes.string,
   id: PropTypes.string,
   className: PropTypes.string,
   sortedId: PropTypes.string,
   onSort: PropTypes.func
};
