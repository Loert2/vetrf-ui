import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../../../form/elements/simple/Checkbox';
import FormGroup from './FormGroup'

import validate from '../../utils/validate-utils';

/**
* Одиночный checkbox
* */
const CheckboxFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              additionalBlock={ props.additionalBlock }
              hasError={ validate(props, () => props.require && !props.value ) }
              errorText={ props.errorText } >
      <Checkbox name={ props.name }
                id={ props.id }
                value={ props.value }
                style={ props.style }
                disabled={ props.disabled }
                onKeyPress={ props.onEnter }
                onChange={ (value) => props.onChange && props.onChange(value, props.field) }
                className={ props.className || "form-control" } />
   </FormGroup>
);

CheckboxFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   errorText: PropTypes.string,
   help: PropTypes.string,
   style: PropTypes.object,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default CheckboxFormGroup;