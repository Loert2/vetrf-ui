import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Moment from 'moment';

import DatePicker from '../simple/date/DatePicker';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

class DateFormGroup extends Component {
   constructor(props, context) {
      super(props, context);
      this.validateFormat = this.validateFormat.bind(this);
      this.state = {
         isValid: true,
         hasError: false
      }
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => nextProps.require && !nextProps.value, this.state.hasError);
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError,
            isValid: this.state.isValid
         });
      }
   }

   validateFormat(value) {
      if (Moment(value, "DD.MM.YYYY").isValid()) {
         this.setState({ isValid: true, hasError: this.state.hasError });
      } else {
         this.setState({ isValid: false, hasError: this.state.hasError });
      }
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
      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    errorText={ isValid ? errorText : "Введенная дата не соотвествует формату - ДД.ММ.ГГГГ" }
                    hasError={ !isValid || hasError } >
            <DatePicker value={ value }
                        id={ id }
                        onChange={ (value) => onChange && onChange(value, field) }
                        className={ className }
                        validate={ validateDateFormat && this.validateFormat } />
         </FormGroup>
      );
   }
}

DateFormGroup.propTypes = {
   value: PropTypes.string,
   labelText: PropTypes.string,
   field: PropTypes.string,
   id: PropTypes.string,
   help: PropTypes.string,
   errorText: PropTypes.string,
   require: PropTypes.bool,
   hasError: PropTypes.bool,
   validate: PropTypes.bool,
   validateDateFormat: PropTypes.bool,
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default DateFormGroup;