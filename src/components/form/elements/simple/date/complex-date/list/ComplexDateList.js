import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComplexDate from '../ComplexDate';
import { Button } from "../../../../../../index";
import isEmpty from 'lodash/isEmpty';
import { defaultFormat, defaultStoreFormat } from "../../../../../utils/moment-utils";
import classNames from 'classnames';
import {uniqueId} from "lodash/util";

const keyPrefix = 'complex-date_';

const getDefaultItem = () => ({
   format: defaultFormat,
   key: uniqueId(keyPrefix)
});

const defaultList = [getDefaultItem()];
const defaultHelpText = "Выберите формат для даты и времени";

class ComplexDateList extends Component {
   constructor(props, context) {
      super(props, context);
      this.getComplexDateList = this.getComplexDateList.bind(this);
      this.getView = this.getView.bind(this);
      this.addNewItem = this.addNewItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
      this.generateKeys = this.generateKeys.bind(this);

      const { list } = props;
      if (isEmpty(list)) {
         this.addNewItem();
      } else {
         this.generateKeys();
      }
   }

   getComplexDateList(list) {
      const {
         onChangeDate,
         formatList,
         storeFormat = defaultStoreFormat,
         listPath
      } = this.props;
      return list && list.map(
         (it, index) => {
            const itemField = `${listPath}[${index}]`;
            const key = it.key || index;
            return (
               <div key={ key } className="complex-date-list__item">
                  <div className={ classNames("complex-date-list__item__date", list.length > 1 && "complex-date-list__item__date--with-delete") } >
                     <ComplexDate key={ `complex-date_${key}` }
                                  onChange={ onChangeDate }
                                  formatPath={ `${itemField}.format` }
                                  formatList={ formatList }
                                  storeFormat={ storeFormat }
                                  complexDate={ it }
                                  complexDatePath={ itemField } />
                  </div>
                  {
                     list.length > 1 &&
                     <div className="complex-date-list__item__delete">
                        <Button key={ `btn-delete_${key}` }
                                icon="ace-icon fa fa-times light-grey bigger-150"
                                tooltip="Удалить"
                                onClick={ () => this.deleteItem(it) } />
                     </div>
                  }
               </div>
            );
         }
      );
   }

   getView(list) {
      const { help } = this.props;
      const view = list &&
         list.map(it => it.view || "")
         .filter(it => !isEmpty(it))
         .join("; ");

      return view || help || defaultHelpText;
   }

   addNewItem() {
      const { list, onChangeDate, listPath } = this.props;
      const newList = [ ...list ];
      newList.push(getDefaultItem());
      onChangeDate && onChangeDate(newList, listPath);
   }

   generateKeys() {
      const { list, onChangeDate, listPath } = this.props;
      const newList = [ ...list ];
      newList.forEach(it => it.key = uniqueId(keyPrefix));
      onChangeDate && onChangeDate(newList, listPath);
   }

   deleteItem(item) {
      const { list, onChangeDate, listPath } = this.props;
      const newList = list.filter(it => it !== item);
      onChangeDate && onChangeDate(newList, listPath);
   }

   render() {
      const { list, maxListLength = 5 } = this.props;
      const dateList = isEmpty(list) ? defaultList : list;
      return (
         <div className="complex-date-list">
            { this.getComplexDateList(dateList) }
            <div className="complex-date-list__panel">
               <p className="complex-date-list__panel__info help-block">
                  { this.getView(dateList) }
               </p>
               {
                  dateList.length < maxListLength &&
                  <div className="complex-date-list__panel__add-button">
                     <Button text="Добавить"
                             icon="ace-icon fa fa-plus"
                             onClick={ this.addNewItem }
                             className="btn btn-info btn-xs" />
                  </div>
               }
            </div>
         </div>
      );
   }

}

ComplexDateList.propTypes = {
   list: PropTypes.arrayOf(PropTypes.object),
   listPath: PropTypes.string,
   onChangeDate: PropTypes.func,
   validate: PropTypes.func,
   formatList: PropTypes.arrayOf(PropTypes.object),
   maxListLength: PropTypes.number
};

ComplexDateList.defaultProps = {};

export default ComplexDateList;