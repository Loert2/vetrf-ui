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

const getComplexDateList = (list, onChange, validate) => list &&
   list.map(
      (it, index) =>
         <ComplexDate key={ index }
                      format={ it.format }
                      endDate={ it.endDate }
                      beginDate={ it.beginDate }
                      onChange={ onChange }
                      beginDateField={ it.beginDateField }
                      endDateField={ it.endDateField }
                      singleDate={ it.singleDate }
                      singleDateField={ it.singleDateField }
                      validate={ validate } />
   );

const getView = (list) => list && list.map(complexDate => {
   if (complexDate.beginDate || complexDate.endDate) {
      return `${complexDate.beginDate || defaultDate} - ${complexDate.endDate || defaultDate}`;
   } else if (complexDate.singleDate) {
      return complexDate.singleDate;
   }
   return "";
}).join(";\n");

class ComplexDateList extends Component {

   render() {
      const { list, onChangeDate, validate, addNewItem } = this.props;
      return (
         <div className="col-xs-12">
            { getComplexDateList((isEmpty(list) ? defaultList : list), onChangeDate, validate) }
            <div className="col-xs-12">
               <p>
                  { getView(list) }
               </p>
               <Button text="Добавить"
                       icon="ace-icon fa fa-plus"
                       onClick={ () => addNewItem && addNewItem(defaultItem) }
                       className="btn btn-success btn-minier pull-right" />
            </div>
         </div>
      );
   }

}

ComplexDateList.propTypes = {
   list: PropTypes.arrayOf(PropTypes.object),
   onChangeDate: PropTypes.func,
   validate: PropTypes.func
};

ComplexDateList.defaultProps = {};

export default ComplexDateList;