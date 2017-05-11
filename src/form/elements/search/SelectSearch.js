import PropTypes from 'prop-types';
import React from 'react';
import Select from '../../../form/elements/simple/select/Select';

const SelectSearch = (props) => (
   <div className="form-group">
      <label className="col-xs-5 control-label no-padding-right">{ props.labelText }</label>
      <div className="col-xs-7 no-padding no-padding-right">
         <div className="col-xs-12 col-sm-7 no-padding-right">
            <Select value={ props.value }
                    id={ props.id }
                    style={ props.style }
                    styleInput={ props.styleInput }
                    valueKey={ props.valueKey || "id" }
                    labelKey={ props.labelKey || "name" }
                    options={ props.options }
                    onChange={ props.onChange }
                    className={ props.className || "select" }
                    placeholder={ props.placeholder }/>
         </div>
      </div>
   </div>
);

SelectSearch.propTypes = {
   labelText: PropTypes.string,
   id: PropTypes.string,
   value: PropTypes.object,
   style: PropTypes.object,
   styleInput: PropTypes.object,
   valueKey: PropTypes.string,
   labelKey: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   options: PropTypes.array,
   onChange: PropTypes.func
};

export default SelectSearch;
