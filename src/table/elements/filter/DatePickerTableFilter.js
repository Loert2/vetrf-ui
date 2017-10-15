import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import debounce from 'lodash/debounce';
import Moment from 'moment';
import classNames from 'classnames';

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
      this.setState({ value: date, hasError: !this.validDate(date) });
   }

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
         <div className={ classNames("form-group", hasError ? (errorClassName || "has-error") : "" ) }
              style={ { paddingTop: 10 } }>
            <DatePicker id={ id }
                        value={ value }
                        onChange={ this.filter }
                        className={ className }
                        inputProps={ inputProps }
                        validate={ this.validate }/>
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
   delay: PropTypes.number,
   errorClassName: PropTypes.string,
   errorText: PropTypes.node,
};

export default DatePickerTableFilter;