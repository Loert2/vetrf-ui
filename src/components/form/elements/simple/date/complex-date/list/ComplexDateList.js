import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ComplexDate from '../ComplexDate';
import { Button } from "../../../../../../index";
import isEmpty from 'lodash/isEmpty';

const defaultFormat = "DD.MM.YYYY";

const defaultItem = {
   format: defaultFormat
};

const defaultList = [defaultItem];
const defaultDate = '...';

class ComplexDateList extends Component {
   constructor(props, context) {
      super(props, context);
      this.getComplexDateList = this.getComplexDateList.bind(this);
      this.getView = this.getView.bind(this);
   }

   getComplexDateList(list) {
      const {
         validate,
         onChangeDate,
         getBeginDatePath,
         getEndDatePath,
         getSingleDatePath,
         getFormatPath,
         beginDateField,
         endDateField,
         singleDateField,
         formatField
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
                         validate={ validate }
                         formatField={ getFormatPath && getFormatPath(index) } />
      );
   }

   getView(list) {
      const {
         beginDateField,
         endDateField,
         singleDateField
      } = this.props;
      return list && list.map(complexDate => {
         if (complexDate[beginDateField] || complexDate[endDateField]) {
            return `${complexDate[beginDateField] || defaultDate} - ${complexDate[endDateField] || defaultDate}`;
         } else if (complexDate[singleDateField]) {
            return complexDate[singleDateField];
         }
         return "";
      }).join(";\n");
   }

   render() {
      const { list, addNewItem } = this.props;
      const dateList = (isEmpty(list) ? defaultList : list);
      return (
         <div className="col-xs-12">
            { this.getComplexDateList(dateList) }
            <div className="col-xs-12">
               <p className="col-xs-10 no-padding">
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
   formatField: PropTypes.string
};

ComplexDateList.defaultProps = {};

export default ComplexDateList;