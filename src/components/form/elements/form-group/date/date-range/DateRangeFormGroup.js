import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FormGroup} from "../../index";
import {DateRange} from "../../../simple";
import validate, {isValidDate} from "../../../../utils/validate-utils";
import isEmpty from "lodash/isEmpty";

const getOnChange = (onChange, path) => (value) => onChange && onChange(value, path);

const getDefaultInvalidFormatMessage = (formatView) => `Введенная дата не соответствует формату - ${formatView}`;

const getFormatView = (dateFormat, timeFormat, viewFormat) => {
   if (viewFormat) return viewFormat;
   if (dateFormat || timeFormat) return `${dateFormat} ${timeFormat || ''}`;
   return 'ДД.ММ.ГГГГ'
};

class DateRangeFormGroup extends Component {
   constructor(props, context) {
      super(props, context);
      this.validateFormat = this.validateFormat.bind(this);
      this.state = {
         isValid: true,
         hasError: false
      }
   }

   componentWillReceiveProps(nextProps) {
      const { isValid, hasError: oldHasError } = this.state;
      const { require, dateFormat, timeFormat, viewFormat, beginDate, endDate } = nextProps;

      const format = getFormatView(dateFormat, timeFormat, viewFormat);
      const defaultValidate = () => !isValid || (require && !beginDate && !endDate);

      const hasError = validate(nextProps, defaultValidate, oldHasError, getDefaultInvalidFormatMessage(format));
      if (hasError !== oldHasError) {
         this.setState({
            hasError: hasError,
            isValid: isValid
         });
      }
   }

   validateFormat(value) {
      this.setState({
         ...this.state,
         isValid: isValidDate(value) || isEmpty(value),
      });
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
         placeholder
      } = this.props;
      const { isValid, hasError } = this.state;
      const format = getFormatView(dateFormat, timeFormat, viewFormat);

      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    errorText={ isValid ? errorText : (invalidFormatMessage || getDefaultInvalidFormatMessage(format)) }
                    hasError={ !isValid || hasError } >
            <DateRange id={ id }
                       className={ className }
                       dateFormat={ dateFormat }
                       timeFormat={ timeFormat }
                       beginChange={ getOnChange(onChange, beginDatePath) }
                       endChange={ getOnChange(onChange, endDatePath) }
                       beginDate={ beginDate }
                       endDate={ endDate }
                       height={ height }
                       placeholder={ placeholder }
                       validate={ this.validateFormat } />
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
   invalidFormatMessage: PropTypes.string,
   beginDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
   ]),
   endDate: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.object
   ]),
   height: PropTypes.string,
   placeholder: PropTypes.string
};

DateRangeFormGroup.defaultProps = {};

export default DateRangeFormGroup;