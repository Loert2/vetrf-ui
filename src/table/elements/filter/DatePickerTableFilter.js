import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import debounce from 'lodash/debounce';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      const { value } = props;
      this.state = {
         value: value || ""
      };
      const { onChange, delay } = props;
      this.filter = this.filter.bind(this);
      this.validDate = this.validDate.bind(this);
      this.request = debounce(onChange, delay || 800);
   }

   validDate (value) {
      const arrayOfDate = value.split(".");
      const date = new Date(arrayOfDate[2], arrayOfDate[1] - 1, arrayOfDate[0]);
      if ((date.getFullYear() == arrayOfDate[2]) && (date.getMonth() == arrayOfDate[1]) && (date.getDate() == arrayOfDate[0])) {
         return true;
      }
      return null;
   }

   filter (value) {
      if (value !== this.state.value && Date.parse(value)) {
         this.setState({ value: value });
         const { onChange } = this.props;
         if(onChange && value !== undefined && value !== null) {
            this.request(value);
         }
      }
      return null;
   };

   render () {
      const {
         className,
         inputProps,
         id,
         validate
      } = this.props;

      const { value } = this.state;
      return (
         <DatePicker id={ id }
                     value={ value }
                     onChange={ this.filter }
                     className={ className }
                     inputProps={ inputProps }
                     validate={ validate }/>
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