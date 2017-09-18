import React, { Component } from 'react';
import PropTypes from 'prop-types';
import DatePicker from '../../../form/elements/simple/date/DatePicker';
import Const from '../../elements/constants';

class DatePickerTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
      this.timeout = null;
   }

   componentWillUnmount() {
      this.timeout && clearTimeout(this.timeout);
   }

   filter (value) {
      const { onChange, delay } = this.props;
      if(onChange && value !== undefined && value !== null){
         this.timeout && clearTimeout(this.timeout);
         this.timeout = setTimeout(() => {
            onChange(value)
            }, delay || Const.FILTER_DELAY);
      }
      return null;
   };

   render () {
      const {
         value,
         className,
         inputProps,
         id,
         validate
      } = this.props;
      return (
         <DatePicker id={ id }
                     value={ value }
                     onChange={ this.filter }
                     className={ className }
                     inputProps={ inputProps }
                     validate={ validate }/>
      );
   }
}

DatePickerTableFilter.propTypes = {
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   validate: PropTypes.func,
   inputProps: PropTypes.object,
   delay: PropTypes.number
};

export default DatePickerTableFilter;