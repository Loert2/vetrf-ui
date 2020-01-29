import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import isEmpty from 'lodash/isEmpty';

import DatePicker from '../../../base/date/DatePicker/DatePicker';
import FormGroup from '../../../../containers/FormGroup/FormGroup';

import validate, { isValidDate } from '../../../../utils/validate-utils';

// TODO: This is old way. Rewrite it!
// @Deprecated
class DateFormGroup extends PureComponent<any> {
   state = {
      isValid: true,
      hasError: false
   };

   constructor(props, context) {
      super(props, context);
      this.validateFormat = this.validateFormat.bind(this);
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(
         nextProps,
         () => !this.state.isValid || (nextProps.require && !nextProps.value),
         this.state.hasError,
         'Введенная дата не соотвествует формату - ДД.ММ.ГГГГ'
      );
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError,
            isValid: this.state.isValid
         });
      }
   }

   validateFormat(value) {
      this.setState({ isValid: isValidDate(value) || isEmpty(value), hasError: this.state.hasError });
   }

   render() {
      const {
         labelText,
         require,
         help,
         additionalBlock,
         value,
         id,
         onChange,
         className,
         errorText,
         field,
         validateDateFormat
      } = this.props;
      const { isValid, hasError } = this.state;
      return (
         <FormGroup
            labelText={labelText}
            require={require}
            help={help}
            additionalBlock={additionalBlock}
            errorText={isValid ? errorText : 'Введенная дата не соотвествует формату - ДД.ММ.ГГГГ'}
            hasError={!isValid || hasError}>
            <DatePicker
               value={value}
               id={id}
               onChange={(value) => onChange && onChange(value, field)}
               className={className}
               validate={validateDateFormat && this.validateFormat}
            />
         </FormGroup>
      );
   }
}

(DateFormGroup as any).propTypes = {
   value: PropTypes.string,
   labelText: PropTypes.string,
   field: PropTypes.string,
   id: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   require: PropTypes.bool,
   hasError: PropTypes.bool,
   validate: PropTypes.bool,
   validateDateFormat: PropTypes.bool,
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default DateFormGroup;
