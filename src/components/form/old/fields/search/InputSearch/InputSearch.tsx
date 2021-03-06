import PropTypes from 'prop-types';
import React from 'react';
import Input from '../../base/input/Input/Input';

// TODO: This is old way. Rewrite it!
// @Deprecated
const InputSearch = (props) => (
   <div className="form-group">
      <label className="col-xs-5 control-label no-padding-right">{props.labelText}</label>
      <div className="col-xs-7">
         <Input
            type={props.inputType || 'text'}
            // autocomplete="off" // TODO: вернуть, когда мы перепишем Input на ts и он будет поддерживать стандартные аттрибуты input
            id={props.id}
            name={props.name}
            maxLength={props.maxLength}
            value={props.value}
            style={props.style}
            autoFocus={props.autoFocus}
            onFocus={props.onFocus}
            disabled={props.disabled}
            onKeyPress={props.onEnter}
            onChange={(value) => props.onChange && props.onChange(value, props.field)}
            className={props.className || 'col-xs-12 col-sm-7 input-sm'}
            placeholder={props.placeholder}
         />
      </div>
   </div>
);

InputSearch.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   inputType: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   onKeyUp: PropTypes.func,
   onKeyPress: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   onClick: PropTypes.func,
   className: PropTypes.string
};

export default InputSearch;
