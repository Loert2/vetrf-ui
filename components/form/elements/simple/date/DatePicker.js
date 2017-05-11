import PropTypes from 'prop-types';
import React from 'react';
import Datetime from 'react-datetime';
import Moment from 'moment';
/**
* Компонент-обертка для Datetime из react-datetime: https://github.com/YouCanBookMe/react-datetime
* */
const DatePicker = ({ value, onChange, className, inputProps, id, validate }) => (
   <Datetime dateFormat="DD.MM.YYYY"
             id={ id }
             locale="ru"
             value={ value }
             onChange={
                (m) => onChange && onChange(m && m.format ? m.format("DD.MM.YYYY") : m)
             }
             className={ className }
             timeFormat={ false }
             onBlur={
                () => {
                   Moment.locale("ru");
                   const formats = ["DD-MM-YYYY", "DD/MM/YYYY", "DD.MM.YYYY"];
                   if (Moment(value, formats).isValid()) {
                      onChange && onChange(Moment(value, formats).format("DD.MM.YYYY"));
                   } else {
                      onChange && onChange(Moment().format("DD.MM.YYYY"));
                   }
                }
             }
             disableOnClickOutside
             inputProps={ inputProps || { placeholder: "дд.мм.гггг" } } />
);

DatePicker.propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   inputProps: PropTypes.object
};

export default DatePicker;