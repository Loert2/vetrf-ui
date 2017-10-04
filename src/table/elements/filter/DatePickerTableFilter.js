import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import FormGroup from '../../../form/elements/form-group/FormGroup';
import debounce from 'lodash/debounce';
import Moment from 'moment';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);

      const { value, onChange, delay } = props;
      this.state = {
         value: value || "",
         hasError: false
      };
      this.filter = this.filter.bind(this);
      this.validDate = this.validDate.bind(this);
      this.validate = this.validate.bind(this);
      this.request = debounce(onChange, delay || 800);
   }

   validDate (date) {
      return date === "" || Moment(date, "DD.MM.YYYY", true).isValid();
   };

   filter (value) {
      const {
         value: valueFromState,
         hasError: hasErrorFromState
      } = this.state;

      if (value !== valueFromState && this.validDate(value)) {
         this.setState({ value: value, hasError: hasErrorFromState });
         const { onChange } = this.props;
         if(onChange) {
            this.request(value);
         }
      }
   };

   validate (date) {
      if (this.validDate(date)) {
         this.setState({ value: date, hasError: false });
      } else {
         this.setState({ value: date, hasError: true });
      }
   }

   render () {
      const {
         className,
         inputProps,
         id
      } = this.props;

      const { value, hasError } = this.state;

      return (
         <FormGroup hasError={ hasError }
                    labelClassName="col-sm-0"
                    fieldClassName="col-sm-13" >
            <DatePicker id={ id }
                        value={ value }
                        onChange={ this.filter }
                        className={ className }
                        inputProps={ inputProps }
                        validate={ this.validate }/>
         </FormGroup>
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