import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import debounce from 'lodash/debounce';
import Moment from 'moment';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      const { value, onChange, delay } = props;
      this.state = {
         value: value || ""
      };
      this.filter = this.filter.bind(this);
      this.validDate = this.validDate.bind(this);
      this.returnValidDate = this.returnValidDate.bind(this);
      this.request = debounce(onChange, delay || 800);
   }

   validDate (value) {
      const formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
      return Moment(value, formats, true).isValid();
   };

   returnValidDate (value) {
      const formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
      return Moment(value, formats).format("DD.MM.YYYY")

   }

   filter (value) {
      if (value !== this.state.value &&
         (value === "" || this.validDate(value))) {
         this.setState({ value: this.returnValidDate(value) });
         const { onChange } = this.props;
         if(onChange) {
            this.request(value);
         }
      }
   };

   render () {
      const {
         className,
         inputProps,
         id
      } = this.props;

      const { value } = this.state;
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