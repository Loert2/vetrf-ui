import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import debounce from 'lodash/debounce';
import Moment from 'moment';
import classNames from 'classnames';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);

      const { value, delay } = props;
      this.state = {
         value: value,
         validValue: value,
         hasError: false
      };
      this.filter = this.filter.bind(this);
      this.validateDate = this.validateDate.bind(this);
      this.validate = this.validate.bind(this);
      this.validateDateAndOnChange = this.validateDateAndOnChange.bind(this);
      this.request = debounce(this.validateDateAndOnChange, delay || 800);
   }

   validateDate (date) {
      return date === "" || Moment(date, "DD.MM.YYYY", true).isValid();
   };

   filter (value) {
      this.request(value);
   };

   validateDateAndOnChange (value) {
      this.validate(value);
      const {
         value: valueFromState,
         hasError: hasErrorFromState,
         validValue
      } = this.state;

      if (value !== valueFromState && this.validateDate(value) && value !== validValue) {
         this.setState({
            value: value,
            hasError: hasErrorFromState,
            validValue: validValue
         });

         const { onChange } = this.props;
         if (onChange) {
            onChange(value);
         }
      }
   };

   validate (date) {
      if (this.validateDate(date)) {
         this.setState({
            value: date,
            hasError: false,
            validValue: date
         });
      } else {
         const { validValue } = this.state;
         this.setState({
            value: date,
            hasError: true,
            validValue: validValue
         });
      }
   };

   render () {
      const {
         className,
         inputProps,
         id,
         errorClassName,
         errorText
      } = this.props;

      const { value, hasError } = this.state;

      return (
         <div className={ classNames("date-filter form-group", hasError ? (errorClassName || "has-error") : "" ) }>
            <DatePicker id={ id }
                        value={ value }
                        onChange={ this.filter }
                        className={ className }
                        inputProps={ inputProps }/>
            {
               hasError &&
               <p className="help-block has-error"
                  style={ { fontSize: 11 } }>
                  { errorText || "Не соотвествует формату - ДД.ММ.ГГГГ" }
               </p>
            }
         </div>
      );
   }
}

DatePickerTableFilter.defaultProps = {
   value: "",
   validValue: ""
};

DatePickerTableFilter.propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   inputProps: PropTypes.object,
   delay: PropTypes.number,
   errorClassName: PropTypes.string,
   errorText: PropTypes.node,
};

export default DatePickerTableFilter;