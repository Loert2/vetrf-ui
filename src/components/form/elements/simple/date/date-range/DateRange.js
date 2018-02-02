import PropTypes from 'prop-types';
import React from 'react';

import DatePicker from '../date-picker/DatePicker';

const defaultDateFormat = "DD.MM.YYYY";

const DateRange = (props) => {
   const inputProps = { placeholder: props.placeholder };
   const styleInputGroupAddonBackground = { height: props.height || "34px" };
   if (props.height){
      inputProps.style = { height: props.height };
   }
   const format = props.dateFormat || defaultDateFormat;
   return (
      <div className={ props.className }>
         <div className="form-group no-margin-bottom">
            {
               props.labelText &&
               <label className="col-sm-5 control-label no-padding-right">{ props.labelText }</label>
            }
            <div className={ props.labelText ? "col-sm-7" : "col-xs-12"}>
               <div className={ `col-xs-12 ${ props.labelText ? "col-sm-7" : ""} no-padding` } >
                  <div className="col-xs-12 no-padding">
                  <span className="col-xs-5 no-padding">
                     <DatePicker dateFormat={ format }
                                 id={ props.id }
                                 onChange={ props.beginChange }
                                 value={ props.beginDate }
                                 inputProps={ inputProps }
                                 validate={ props.validate || props.validateBegin }
                                 timeFormat={ props.timeFormat } />
                  </span>
                  <span className="col-xs-2 input-group-addon-background" style={ styleInputGroupAddonBackground } >
                     <i className="fa fa-calendar bigger-130 padding-top-6" />
                  </span>
                  <span className="col-xs-5 no-padding">
                     <DatePicker dateFormat={ format }
                                 id={ props.id }
                                 onChange={ props.endChange }
                                 value={ props.endDate }
                                 inputProps={ inputProps }
                                 validate={ props.validate || props.validateEnd }
                                 timeFormat={ props.timeFormat } />
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
   validate: PropTypes.func,
   validateBegin: PropTypes.func,
   validateEnd: PropTypes.func,
   beginDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   endDate: PropTypes.oneOfType([
      PropTypes.object,
      PropTypes.string
   ]),
   className: PropTypes.string,
   dateFormat: PropTypes.string,
   timeFormat: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   placeholder: PropTypes.string
};

export default DateRange;