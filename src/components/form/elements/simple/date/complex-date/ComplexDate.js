import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {DatePicker, Switch} from "../../index";
import {SelectFormGroup} from "../../../index";
import Moment from "moment/moment";
import DateRange from "../date-range/DateRange";

const formatList = [
   { id: "DD.MM.YYYY", view: "DD.MM.YYYY" },
   { id: "DD-MM-YYYY", view: "DD-MM-YYYY" },
   { id: "DD/MM/YYYY", view: "DD/MM/YYYY" },
   { id: "MM/YYYY", view: "MM/YYYY" },
   { id: "MM.YYYY", view: "MM.YYYY" },
   { id: "YYYY", view: "YYYY" },
   { id: "DD.MM.YYYY HH:mm", view: "DD.MM.YYYY HH:mm" },
   { id: "DD/MM/YYYY HH:mm", view: "DD/MM/YYYY HH:mm" }
];

const defaultFormat = "DD.MM.YYYY";

const getFormatObj = (format) => ({ id: format, view: format });

class ComplexDate extends Component {
   constructor(props, context) {
      super(props, context);

      this.state = {
         isInterval: false,
         format: props.format || defaultFormat
      };

      this.changeFormat = this.changeFormat.bind(this);
      this.toggleForm = this.toggleForm.bind(this);
      this.validateFormat = this.validateFormat.bind(this);
   }

   toggleForm() {
      this.setState({ ...this.state, isInterval: !this.state.isInterval });
   }

   changeFormat(newFormat) {
      const {
         singleDate,
         beginDate,
         endDate,
         onChange,
         singleDateField,
         beginDateField,
         endDateField
      } = this.props;
      const { isInterval } = this.state;
      if (isInterval) {
         if (onChange) {
            onChange(Moment(beginDate).format(newFormat), newFormat, beginDateField);
            onChange(Moment(endDate).format(newFormat), newFormat, endDateField);
         }
      } else {
         onChange && onChange(Moment(singleDate).format(newFormat), newFormat, singleDateField);
      }
      this.setState({ ...this.state, format: newFormat });
   }

   validateFormat(value) {
      const { format } = this.state;
      if (Moment(value, format).isValid()) {

      }
   }

   render() {
      const { isInterval, format } = this.state;
      const {
         singleDate,
         beginDate,
         endDate,
         onChange,
         singleDateField,
         beginDateField,
         endDateField,
         validate
      } = this.props;

      let dateForm = null;
      if (isInterval) {
         dateForm = <DateRange beginChange={ (value) => onChange && onChange(value, format, beginDateField) }
                               beginDate={ beginDate }
                               endChange={ (value) => onChange && onChange(value, format, endDateField) }
                               endDate={ endDate }
                               validate={ validate } />
      } else {
         dateForm = <DatePicker value={ singleDate }
                                dateFormat={ format }
                                onChange={ (value) => onChange && onChange(value, format, singleDateField) }
                                validate={ validate } />;
      }

      return (
         <div className="col-xs-12">
            <div className="col-xs-12">
               Дата&nbsp;<Switch value={ isInterval } text="" onChange={ this.toggleForm } />&nbsp;Интервал
            </div>
            <div className="col-xs-12">
               <div className="col-xs-4">
                  <SelectFormGroup labelText="Формат"
                                   options={ formatList }
                                   valueKey="id"
                                   labelKey="view"
                                   onChange={ (format) => this.changeFormat(format && format.view) }
                                   field="format"
                                   value={ getFormatObj(format) }
                                   placeholder="Формат даты..."
                                   help="Выберите формат для даты и времени" />
               </div>
               <div className="col-xs-8">
                  { dateForm }
               </div>
            </div>
         </div>
      );
   }

}

ComplexDate.propTypes = {
   singleDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   beginDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   endDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   validate: PropTypes.func,
   singleDateField: PropTypes.string,
   beginDateField: PropTypes.string,
   endDateField: PropTypes.string
};

ComplexDate.defaultProps = {};

export default ComplexDate;