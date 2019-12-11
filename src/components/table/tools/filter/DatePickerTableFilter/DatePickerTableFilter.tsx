import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../../form/fields/base/date/DatePicker/DatePicker';
import debounce from 'lodash/debounce';
import Moment from 'moment';
import classNames from 'classnames';

const errorFontSize = { fontSize: 11 };

// TODO: This is old way. Rewrite it!
class DatePickerTableFilter extends Component<any> {
   state = {
      value: null,
      validValue: null,
      hasError: false
   };

   request;

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

   validateDate(date) {
      return date === '' || Moment(date, 'DD.MM.YYYY', true).isValid();
   }

   filter(value) {
      this.request(value);
   }

   validateDateAndOnChange(value) {
      const { value: valueFromState, validValue } = this.state;

      if (!this.validate(value)) {
         return;
      }

      const { onChange } = this.props;
      if (value !== valueFromState && value !== validValue && onChange) {
         onChange(value);
      }

      this.setState({
         value: value,
         hasError: false,
         validValue: value
      });
   }

   validate(date) {
      if (this.validateDate(date)) {
         return true;
      }

      const { validValue } = this.state;
      this.setState({
         value: date,
         hasError: true,
         validValue: validValue
      });
      return false;
   }

   render() {
      const { className, inputProps, id, errorClassName, errorText } = this.props;

      const { value, hasError } = this.state;

      return (
         <div
            className={classNames(
               'table-filter table-filter_date',
               hasError ? errorClassName || 'has-error' : ''
            )}>
            <DatePicker
               id={id}
               value={value}
               onChange={this.filter}
               className={className}
               inputProps={inputProps}
               validate={this.validateDate}
            />
            {hasError && (
               <p className="help-block has-error" style={errorFontSize}>
                  {errorText || 'Не соответствует формату - ДД.ММ.ГГГГ'}
               </p>
            )}
         </div>
      );
   }
}

(DatePickerTableFilter as any).defaultProps = {
   value: '',
   validValue: ''
};

(DatePickerTableFilter as any).propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func.isRequired,
   value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
   inputProps: PropTypes.object,
   delay: PropTypes.number,
   errorClassName: PropTypes.string,
   errorText: PropTypes.node
};

export default DatePickerTableFilter;
