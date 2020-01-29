import PropTypes from 'prop-types';
import React from 'react';
import Select from '../../base/select/Select/Select';

const defaultStyleInput = { height: '30px' };

// TODO: This is old way. Rewrite it!
// @Deprecated
const SelectSearch = (props) => (
   <div className="form-group">
      <label className="col-xs-5 control-label no-padding-right">{props.labelText}</label>
      <div className="col-xs-7 no-padding no-padding-right">
         <div className="col-xs-12 col-sm-7 padding-right-2">
            <Select
               value={props.value}
               multi={props.multiple}
               id={props.id}
               style={props.style}
               styleInput={props.styleInput || defaultStyleInput}
               valueKey={props.valueKey || 'id'}
               labelKey={props.labelKey || 'name'}
               options={props.options}
               onChange={(value) => props.onChange && props.onChange(value, props.field)}
               className={props.className || 'select'}
               placeholder={props.placeholder}
            />
         </div>
      </div>
   </div>
);

SelectSearch.propTypes = {
   labelText: PropTypes.string,
   field: PropTypes.string,
   id: PropTypes.string,
   value: PropTypes.oneOfType([PropTypes.object, PropTypes.array]),
   style: PropTypes.object,
   styleInput: PropTypes.object,
   valueKey: PropTypes.string,
   labelKey: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   options: PropTypes.array,
   onChange: PropTypes.func,
   multiple: PropTypes.bool
};

export default SelectSearch;
