import PropTypes from 'prop-types';
import React from 'react';

import DatePicker from 'components/form/elements/simple/date/DatePicker';

const DateRange = (props) => {
   const inputProps = { placeholder: "дд.мм.гггг" };
   if (props.height){
      inputProps.style = { height: props.height };
   }
   return (
      <div className={ props.className }>
         <div className="form-group">
            <label className="col-sm-5 control-label no-padding-right">{ props.labelText }</label>
            <div className="col-sm-7">
               <div className="col-xs-12 col-sm-7 no-padding" >
                  <div className="col-xs-12 no-padding">
                  <span className="col-xs-5 no-padding">
                     <DatePicker id={ props.id } onChange={ props.beginChange } value={ props.beginDate } inputProps={ inputProps } />
                  </span>
                     <span className="col-xs-2 input-group-addon-background" style={{ height: props.height || "34px" }}  >
                     <i className="fa fa-calendar bigger-130 padding-top-6" />
                  </span>
                  <span className="col-xs-5 no-padding">
                     <DatePicker id={ props.id } onChange={ props.endChange } value={ props.endDate } inputProps={ inputProps } />
                  </span>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

DateRange.propTypes = {
   labelText: PropTypes.string,
   id: PropTypes.string,
   height: PropTypes.string,
   beginChange: PropTypes.func,
   endChange: PropTypes.func,
   beginDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   endDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   className: PropTypes.string
};

export default DateRange;