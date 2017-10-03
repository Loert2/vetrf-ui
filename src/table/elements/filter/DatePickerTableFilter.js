import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';
import Moment from 'moment';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      const { onChange, delay } = props;
      this.filter = this.filter.bind(this);
      this.validDate = this.validDate.bind(this);
      this.request = debounce(onChange, delay || 800);
   }

   validDate (date) {
      return Moment(date, "DD.MM.YYYY", true).isValid();
   };

   filter (value) {
      const { inputProps, onChange } = this.props;
      if (value === "" || this.validDate(value)) {
         if ( !isEmpty(inputProps) ) {
            inputProps.className = "form-control has-success";
         }
         if(onChange) {
            this.request(value);
         }
      } else {
         if ( !isEmpty(inputProps) ) {
            inputProps.className = "form-control has-error";
         }
      }
   };

   render () {
      const {
         className,
         inputProps,
         id,
         value
      } = this.props;

      return (
         <DatePicker id={ id }
                     value={ value }
                     onChange={ this.filter }
                     className={ className }
                     inputProps={ inputProps }/>
      );
   }
}

DatePickerTableFilter.propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   validate: PropTypes.func,
   inputProps: PropTypes.object,
   delay: PropTypes.number
};

export default DatePickerTableFilter;