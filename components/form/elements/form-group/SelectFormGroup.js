import PropTypes from 'prop-types';
import React from 'react';

import Select from 'components/form/elements/simple/select/Select';
import FormGroup from './FormGroup';

const SelectFormGroup = (props) => (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              hasError={ props.hasError }
              errorClassName={ props.errorClassName }
              additionalBlock={ props.additionalBlock } >
      <Select multi={ props.multiple }
              value={ props.value }
              name={ props.name }
              id={ props.id }
              style={ props.style }
              styleInput={ props.styleInput }
              options={ props.options }
              onChange={ props.onChange }
              valueKey={ props.valueKey }
              labelKey={ props.labelKey }
              className={ props.className }
              placeholder={ props.placeholder }/>
   </FormGroup>
);

SelectFormGroup.propTypes = {
   labelText: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   errorClassName: PropTypes.string,
   hasError: PropTypes.bool,
   require: PropTypes.bool,
   multiple: PropTypes.bool,
   value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]),
   style: PropTypes.object,
   styleInput: PropTypes.object,
   valueKey: PropTypes.string,
   labelKey: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   options: PropTypes.array,
   additionalBlock: PropTypes.node,
   onChange: PropTypes.func
};

export default SelectFormGroup;
