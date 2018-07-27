import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { FormGroup } from '../../index';
import { DateRange } from '../../../simple';
import validate, { isValidDate } from '../../../../utils/validate-utils';
import isEmpty from 'lodash/isEmpty';

const getOnChange = (onChange, path) => (value) =>
   onChange && onChange(value, path);

const getDefaultInvalidFormatMessage = (formatView) =>
   `Введенная дата не соответствует формату - ${formatView}`;

const getFormatView = (dateFormat, timeFormat, viewFormat) => {
   if (viewFormat) return viewFormat;
   if (dateFormat || timeFormat) return `${dateFormat} ${timeFormat || ''}`;
   return 'ДД.ММ.ГГГГ';
};

class DateRangeFormGroup extends Component {
   constructor(props, context) {
      super(props, context);

      this.validateFormat = this.validateFormat.bind(this);
      this.getValidateFormat = this.getValidateFormat.bind(this);
      this.isValid = this.isValid.bind(this);

      this.state = {
         isValidBeginDate: true,
         isValidEndDate: true,
         hasError: false
      };
   }

   componentWillReceiveProps(nextProps) {
      const { hasError: oldHasError } = this.state;
      const {
         require,
         dateFormat,
         timeFormat,
         viewFormat,
         beginDate,
         endDate
      } = nextProps;

      const format = getFormatView(dateFormat, timeFormat, viewFormat);
      const defaultValidate = () =>
         !this.isValid() || (require && !beginDate && !endDate);

      const hasError = validate(
         nextProps,
         defaultValidate,
         oldHasError,
         getDefaultInvalidFormatMessage(format)
      );
      if (hasError !== oldHasError) {
         this.setState({
            ...this.state,
            hasError: hasError
         });
      }
   }

   validateFormat(value, validField) {
      this.setState({
         ...this.state,
         [validField]: isValidDate(value) || isEmpty(value)
      });
   }

   getValidateFormat(validField) {
      return (value) => this.validateFormat(value, validField);
   }

   isValid() {
      const { isValidBeginDate, isValidEndDate } = this.state;
      return isValidBeginDate && isValidEndDate;
   }

   render() {
      const {
         labelText,
         require,
         help,
         additionalBlock,
         id,
         onChange,
         className,
         errorText,
         beginDatePath,
         endDatePath,
         dateFormat,
         timeFormat,
         viewFormat,
         beginDate,
         endDate,
         height,
         invalidFormatMessage,
         placeholder,
         fieldClassName,
         labelClassName
      } = this.props;
      const { hasError } = this.state;
      const format = getFormatView(dateFormat, timeFormat, viewFormat);
      const isValid = this.isValid();

      return (
         <FormGroup
            labelText={labelText}
            require={require}
            help={help}
            additionalBlock={additionalBlock}
            errorText={
               isValid
                  ? errorText
                  : invalidFormatMessage ||
                    getDefaultInvalidFormatMessage(format)
            }
            hasError={!isValid || hasError}
            fieldClassName={fieldClassName}
            labelClassName={labelClassName}>
            <DateRange
               id={id}
               className={className}
               dateFormat={dateFormat}
               timeFormat={timeFormat}
               beginChange={getOnChange(onChange, beginDatePath)}
               endChange={getOnChange(onChange, endDatePath)}
               beginDate={beginDate}
               endDate={endDate}
               height={height}
               placeholder={placeholder}
               validateBegin={this.getValidateFormat('isValidBeginDate')}
               validateEnd={this.getValidateFormat('isValidEndDate')}
            />
         </FormGroup>
      );
   }
}

DateRangeFormGroup.propTypes = {
   labelText: PropTypes.string,
   require: PropTypes.bool,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   id: PropTypes.string,
   onChange: PropTypes.func,
   className: PropTypes.string,
   errorText: PropTypes.string,
   beginDatePath: PropTypes.string,
   endDatePath: PropTypes.string,
   dateFormat: PropTypes.string,
   timeFormat: PropTypes.string,
   viewFormat: PropTypes.string,
   fieldClassName: PropTypes.string,
   labelClassName: PropTypes.string,
   invalidFormatMessage: PropTypes.string,
   beginDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   endDate: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
   height: PropTypes.string,
   placeholder: PropTypes.string
};

DateRangeFormGroup.defaultProps = {};

export default DateRangeFormGroup;
