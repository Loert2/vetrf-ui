import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Datetime from 'react-datetime';
import Moment from 'moment';
import debounce from 'lodash/debounce';

/**
* Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
* */
class DatePicker extends PureComponent {
   constructor(props, context) {
      super(props, context);
      this.validateFormat = props.validate ? debounce(props.validate, 300) : null;
   }

   render() {
      const { value, onChange, className, inputProps, id, validate } = this.props;
      return(
         <Datetime dateFormat="DD.MM.YYYY"
                   id={ id }
                   locale="ru"
                   value={ value || "" }
                   onChange={
                      (m) => {
                         const val = m && m.format ? m.format("DD.MM.YYYY") : m;
                         onChange && onChange(val);
                         if (validate) {
                            this.validateFormat(val);
                         }
                      }
                   }
                   className={ className }
                   timeFormat={ false }
                   closeOnSelect
                   onBlur={
                      () => {
                         if (validate) {
                            validate(value);
                         } else {
                            Moment.locale("ru");
                            const formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
                            if (Moment(value, formats, true).isValid()) {
                               onChange && onChange(Moment(value, formats).format("DD.MM.YYYY"));
                            } else {
                               onChange && onChange(Moment().format("DD.MM.YYYY"));
                            }
                         }
                      }
                   }
                   disableOnClickOutside
                   inputProps={ inputProps || { placeholder: "дд.мм.гггг" } } />
      );
   }
}

DatePicker.propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   validate: PropTypes.func,
   inputProps: PropTypes.object
};

export default DatePicker;