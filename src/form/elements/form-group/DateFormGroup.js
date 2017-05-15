import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Moment from 'moment';

import DatePicker from '../simple/date/DatePicker';
import FormGroup from './FormGroup'

//todo: отрефакторить неочевидную валидацию
class DateFormGroup extends Component {
   constructor(props, context) {
      super(props, context);
      this.validate = this.validate.bind(this);
      this.state = {
         isValid: true
      }
   }

   validate(value) {
      if (Moment(value, "DD.MM.YYYY").isValid()) {
         this.setState({ isValid: true });
      } else {
         this.setState({ isValid: false });
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
         hasError,
         validate,
         validateDateFormat
      } = this.props;
      const { isValid } = this.state;
      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    errorText={ isValid ? errorText : "Введенная дата не соотвествует формату - ДД.ММ.ГГГГ" }
                    hasError={ hasError || !isValid || (validate && require && !value) } >
            <DatePicker value={ value }
                        id={ id }
                        onChange={ onChange }
                        className={ className }
                        validate={ validateDateFormat && this.validate } />
         </FormGroup>
      );
   }
}

DateFormGroup.propTypes = {
   value: PropTypes.string,
   labelText: PropTypes.string,
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