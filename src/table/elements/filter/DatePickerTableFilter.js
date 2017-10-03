import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import debounce from 'lodash/debounce';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      const { onChange, delay, value } = props;
      this.state = {
         value: value || ""
      };

      this.filter = this.filter.bind(this);
      this.request = debounce(onChange, delay || 800);
   }

   filter (value) {
      const { value: valueInState } = this.state;
      if ( valueInState !== value ) {
         this.setState({ value: value });

         const { onChange } = this.props;
         if (onChange) {
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