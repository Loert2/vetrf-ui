import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComplexDate from '../ComplexDate';
import { Button } from "../../../../../../index";
import isEmpty from 'lodash/isEmpty';
import { defaultFormat, defaultStoreFormat, formatValue } from "../../../../../utils/moment-utils";

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
         getBeginDatePath,
         getEndDatePath,
         getSingleDatePath,
         getFormatPath,
         beginDateField,
         endDateField,
         singleDateField,
         formatField,
         formatList,
         storeFormat = defaultStoreFormat
      } = this.props;
      return list && list.map(
         (it, index) =>
            <div key={ index } className="col-xs-12 no-padding">
               <div className={ `${ list.length > 1 ? "col-xs-11" : "col-xs-12" } no-padding` }>
                  <ComplexDate key={ `complex-date_${index}` }
                               format={ it[formatField] }
                               endDate={ it[endDateField] }
                               beginDate={ it[beginDateField] }
                               onChange={ onChangeDate }
                               beginDateField={ getBeginDatePath && getBeginDatePath(index) }
                               endDateField={ getEndDatePath && getEndDatePath(index) }
                               singleDate={ it[singleDateField] }
                               singleDateField={ getSingleDatePath && getSingleDatePath(index) }
                               formatField={ getFormatPath && getFormatPath(index) }
                               formatList={ formatList }
                               storeFormat={ storeFormat } />
               </div>
               {
                  list.length > 1 &&
                  <div className="col-xs-1 no-padding-left">
                     <Button key={ `btn-delete_${index}` }
                             icon="ace-icon fa fa-times light-grey bigger-150 padding-top-6 pull-right"
                             tooltip="Удалить"
                             onClick={ () => this.deleteItem(it) } />
                  </div>
               }
            </div>
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
      const { list } = this.props;
      const dateList = isEmpty(list) ? defaultList : list;
      return (
         <div className="col-xs-12 no-padding">
            { this.getComplexDateList(dateList) }
            <div className="col-xs-12 no-padding">
               <p className="col-xs-10 no-padding-left padding-top-2 help-block">
                  { this.getView(dateList) }
               </p>
               <div className="col-xs-2 pull-right">
                  <Button text="Добавить"
                          icon="ace-icon fa fa-plus"
                          onClick={ this.addNewItem }
                          className="btn btn-info btn-xs pull-right" />
               </div>
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
   getBeginDatePath: PropTypes.func,
   getEndDatePath: PropTypes.func,
   getSingleDatePath: PropTypes.func,
   getFormatPath: PropTypes.func,
   beginDateField: PropTypes.string,
   endDateField: PropTypes.string,
   singleDateField: PropTypes.string,
   formatField: PropTypes.string,
   formatList: PropTypes.arrayOf(PropTypes.object)
};

ComplexDateList.defaultProps = {};

export default ComplexDateList;