import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Datetime from 'react-datetime';
import Moment from 'moment';
import 'moment/locale/ru';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

const placeholderProps = { placeholder: "дд.мм.гггг" };
const defaultDateFormat = "DD.MM.YYYY";

/**
* Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
* */
class DatePicker extends PureComponent {
   constructor(props, context) {
      super(props, context);
      this.validateFormat = props.validate ? debounce(props.validate, 600) : null;
      this.getValue = this.getValue.bind(this);
   }

   getValue(value, format) {
      if (!isEmpty(value)) {
         let newValue = Moment(value, format, true);
         if (newValue.isValid()) {
            return newValue;
         }
      }

      return value;
   }

   render() {
      const {
         value,
         onChange,
         className,
         inputProps,
         id,
         validate,
         dateFormat,
         timeFormat
      } = this.props;

      const format = dateFormat || defaultDateFormat;

      return(
         <Datetime dateFormat={ format }
                   id={ id }
                   locale="ru"
                   value={ this.getValue(value, format) }
                   onChange={
                      (m) => {
                         const val = m && m.format ? m.format(format) : m;
                         onChange && onChange(val);
                         if (validate) {
                            this.validateFormat(val);
                         }
                      }
                   }
                   className={ className }
                   timeFormat={ timeFormat }
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
                   inputProps={ inputProps || placeholderProps } />
      );
   }
}

DatePicker.propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   dateFormat: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   validate: PropTypes.func,
   inputProps: PropTypes.object,
   timeFormat: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ])
};

export default DatePicker;