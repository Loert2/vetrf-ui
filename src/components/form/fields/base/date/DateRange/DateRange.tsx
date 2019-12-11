import PropTypes from 'prop-types';
import React from 'react';
import classNames from 'classnames';

import DatePicker from '../DatePicker/DatePicker';

const defaultDateFormat = 'DD.MM.YYYY';

// TODO: This is old way. Rewrite it!
const DateRange = (props: any) => {
   const inputProps: any = { placeholder: props.placeholder };
   const styleInputGroupAddonBackground = { height: props.height || '34px' };
   if (props.height) {
      inputProps.style = { height: props.height };
   }
   const format = props.dateFormat || defaultDateFormat;
   return (
      <div className={classNames('date-range', props.className)}>
         <span className="date-range__begin col-xs-5 no-padding">
            <DatePicker
               dateFormat={format}
               id={props.id}
               onChange={props.beginChange}
               value={props.beginDate}
               inputProps={inputProps}
               validate={props.validate || props.validateBegin}
               timeFormat={props.timeFormat}
            />
         </span>
         <span
            className="date-range__separator col-xs-2 input-group-addon-background"
            style={styleInputGroupAddonBackground}>
            <i className="fa fa-calendar bigger-130 padding-top-6" />
         </span>
         <span className="date-range__end col-xs-5 no-padding">
            <DatePicker
               dateFormat={format}
               id={props.id}
               onChange={props.endChange}
               value={props.endDate}
               inputProps={inputProps}
               validate={props.validate || props.validateEnd}
               timeFormat={props.timeFormat}
            />
         </span>
      </div>
   );
};

DateRange.propTypes = {
   id: PropTypes.string,
   height: PropTypes.string,
   beginChange: PropTypes.func,
   endChange: PropTypes.func,
   validate: PropTypes.func,
   validateBegin: PropTypes.func,
   validateEnd: PropTypes.func,
   beginDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
   endDate: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
   className: PropTypes.string,
   dateFormat: PropTypes.string,
   timeFormat: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   placeholder: PropTypes.string
};

export default DateRange;
