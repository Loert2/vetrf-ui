import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComplexDate from '../ComplexDate';
import { Button } from "../../../../../../index";
import isEmpty from 'lodash/isEmpty';
import { defaultFormat, defaultStoreFormat, formatValue } from "../../../../../utils/moment-utils";
import classNames from 'classnames';

const getDefaultItem = () => ({
   format: defaultFormat
});

const defaultList = [getDefaultItem()];
const defaultDate = '...';
const defaultHelpText = "Выберите формат для даты и времени";

class ComplexDateList extends Component {
   constructor(props, context) {
      super(props, context);
      this.getComplexDateList = this.getComplexDateList.bind(this);
      this.getView = this.getView.bind(this);
      this.addNewItem = this.addNewItem.bind(this);
      this.deleteItem = this.deleteItem.bind(this);
   }

   componentDidMount() {
      const { list } = this.props;
      if (isEmpty(list)) {
         this.addNewItem();
      }
   }


   getComplexDateList(list) {
      const {
         onChangeDate,
         beginDateField,
         endDateField,
         singleDateField,
         formatField,
         formatList,
         storeFormat = defaultStoreFormat,
         listField
      } = this.props;
      return list && list.map(
         (it, index) => {
            const itemField = `${listField}[${index}]`;
            return (
               <div key={ index } className="complex-date-list__item">
                  <div className={ classNames("complex-date-list__item__date", list.length > 1 && "complex-date-list__item__date--with-delete") } >
                     <ComplexDate key={ `complex-date_${index}` }
                                  format={ it[formatField] }
                                  endDate={ it[endDateField] }
                                  beginDate={ it[beginDateField] }
                                  onChange={ onChangeDate }
                                  beginDatePath={ `${itemField}.${beginDateField}` }
                                  endDatePath={ `${itemField}.${endDateField}` }
                                  singleDate={ it[singleDateField] }
                                  singleDatePath={ `${itemField}.${singleDateField}` }
                                  formatPath={ `${itemField}.${formatField}` }
                                  formatList={ formatList }
                                  storeFormat={ storeFormat }
                                  complexDate={ it }
                                  complexDatePath={ itemField }
                                  endDateField={ endDateField }
                                  beginDateField={ beginDateField }
                                  singleDateField={ singleDateField }
                                  formatField={ formatField } />
                  </div>
                  {
                     list.length > 1 &&
                     <div className="complex-date-list__item__delete">
                        <Button key={ `btn-delete_${index}` }
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
      const {
         beginDateField,
         endDateField,
         singleDateField,
         formatField,
         storeFormat = defaultStoreFormat,
         help
      } = this.props;
      const view = list && list.map(it => {
         const format = it[formatField] || defaultFormat;
         if (it[beginDateField] || it[endDateField]) {
            return `${formatValue(it[beginDateField], storeFormat, format) || defaultDate}-${formatValue(it[endDateField], storeFormat, format) || defaultDate}`;
         } else if (it[singleDateField]) {
            return formatValue(it[singleDateField], storeFormat, format);
         }
         return "";
      }).filter(it => !isEmpty(it)).join("; ");

      return view || help || defaultHelpText;
   }

   addNewItem() {
      const { list, onChangeDate, listField } = this.props;
      const newList = [ ...list ];
      newList.push(getDefaultItem());
      onChangeDate && onChangeDate(newList, listField);
   }

   deleteItem(item) {
      const { list, onChangeDate, listField } = this.props;
      const newList = [ ...list ].filter(it => it !== item);
      onChangeDate && onChangeDate(newList, listField);
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
   listField: PropTypes.string,
   onChangeDate: PropTypes.func,
   validate: PropTypes.func,
   beginDateField: PropTypes.string,
   endDateField: PropTypes.string,
   singleDateField: PropTypes.string,
   formatField: PropTypes.string,
   formatList: PropTypes.arrayOf(PropTypes.object),
   maxListLength: PropTypes.number
};

ComplexDateList.defaultProps = {};

export default ComplexDateList;