import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComplexDate from '../ComplexDate';
import { Button } from "../../../../../../index";
import isEmpty from 'lodash/isEmpty';
import { defaultFormat, defaultStoreFormat, formatValue } from "../../../../../utils/moment-utils";

const defaultItem = {
   format: defaultFormat
};

const defaultList = [defaultItem];
const defaultDate = '...';
const defaultHelpText = "Выберите формат для даты и времени";

class ComplexDateList extends Component {
   constructor(props, context) {
      super(props, context);
      this.getComplexDateList = this.getComplexDateList.bind(this);
      this.getView = this.getView.bind(this);
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
            <ComplexDate key={ index }
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
            return `${formatValue(it[beginDateField], storeFormat, format) || defaultDate} - ${formatValue(it[endDateField], storeFormat, format) || defaultDate}`;
         } else if (it[singleDateField]) {
            return formatValue(it[singleDateField], storeFormat, format);
         }
         return "";
      }).join(";\n");
      return view || help || defaultHelpText;
   }

   render() {
      const { list, addNewItem } = this.props;
      const dateList = (isEmpty(list) ? defaultList : list);
      return (
         <div className="col-xs-12">
            { this.getComplexDateList(dateList) }
            <div className="col-xs-12">
               <p className="col-xs-10 no-padding-left padding-top-2 help-block">
                  { this.getView(dateList) }
               </p>
               <div className="col-xs-2">
                  <Button text="Добавить"
                          icon="ace-icon fa fa-plus"
                          onClick={ () => addNewItem && addNewItem(defaultItem) }
                          className="btn btn-info btn-minier pull-right" />
               </div>
            </div>
         </div>
      );
   }

}

ComplexDateList.propTypes = {
   list: PropTypes.arrayOf(PropTypes.object),
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