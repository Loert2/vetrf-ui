import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../simple/Checkbox';

const CheckboxSearch = (props) => {
   const {
      labelText,
      value,
      name,
      id,
      style,
      disabled,
      onEnter,
      onChange,
      className,
      field
   } = props;
   return (
      <div className="form-group">
         <label className="col-xs-5 control-label no-padding-right">{ labelText }</label>
         <div className="col-xs-7">
            <Checkbox name={ name }
                      id={ id }
                      value={ value }
                      style={ style }
                      disabled={ disabled }
                      onKeyPress={ onEnter }
                      onChange={ (value) => onChange && onChange(value, field) }
                      className={ className } />
         </div>
      </div>
   );
};

CheckboxSearch.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   style: PropTypes.object,
   onEnter: PropTypes.func,
   disabled: PropTypes.bool,
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default CheckboxSearch;