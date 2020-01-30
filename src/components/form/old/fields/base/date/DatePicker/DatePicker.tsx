import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';
import Moment from 'moment';
import 'moment/locale/ru';
import debounce from 'lodash/debounce';
import isEmpty from 'lodash/isEmpty';

const placeholderProps = { placeholder: 'дд.мм.гггг' };
const defaultDateFormat = 'DD.MM.YYYY';

// Конфликты между модульными системами стороннего компонента и нашей библиотеки принуждают к такому
// eslint-disable-next-line @typescript-eslint/no-var-requires
const Datetime = require('react-datetime');

/**
 * Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
 * */
// TODO: This is old way. Rewrite it!
// @Deprecated
const getValue = (value, format) => {
   if (!isEmpty(value)) {
      const newValue = Moment(value, format, true);
      if (newValue.isValid()) {
         return newValue;
      }
   }

   return value;
};

// Deprecated
class DatePicker extends PureComponent<any> {
   validateFormat;

   constructor(props, context) {
      super(props, context);
      this.validateFormat = props.validate ? debounce(props.validate, 600) : null;
      this.getFormat = this.getFormat.bind(this);
   }

   getFormat() {
      const { dateFormat = defaultDateFormat, timeFormat, fullFormat } = this.props;
      if (fullFormat) {
         return fullFormat;
      }
      return timeFormat ? `${dateFormat} ${timeFormat}` : dateFormat;
   }

   render() {
      const {
         value,
         onChange,
         className,
         inputProps,
         validate,
         dateFormat = defaultDateFormat,
         timeFormat
      } = this.props;

      const format = this.getFormat();

      return (
         <Datetime
            dateFormat={dateFormat}
            locale="ru"
            value={getValue(value, format)}
            onChange={(m) => {
               const val = typeof m == 'string' ? m : m.format(format);
               onChange && onChange(val);
               if (validate) {
                  this.validateFormat(val);
               }
            }}
            className={className}
            timeFormat={timeFormat || false}
            closeOnSelect
            onBlur={() => {
               if (validate) {
                  validate(value);
               } else {
                  Moment.locale('ru');
                  const formats = ['DD-MM-YYYY', 'DD/MM/YYYY', 'DD.MM.YYYY'];
                  if (Moment(value, formats, true).isValid()) {
                     onChange && onChange(Moment(value, formats).format('DD.MM.YYYY'));
                  } else {
                     onChange && onChange(Moment().format('DD.MM.YYYY'));
                  }
               }
            }}
            inputProps={inputProps || placeholderProps}
         />
      );
   }
}

(DatePicker as any).propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   dateFormat: PropTypes.string,
   fullFormat: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
   validate: PropTypes.func,
   inputProps: PropTypes.object,
   timeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
};

export default DatePicker;
