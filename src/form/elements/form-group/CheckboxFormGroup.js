import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from '../../../form/elements/simple/Checkbox';
import FormGroup from './FormGroup'

/**
* Одиночный checkbox
* */
const CheckboxFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              additionalBlock={ props.additionalBlock }
              hasError={ props.hasError || (props.validate && props.require && !props.value) }
              errorText={ props.errorText } >
      <Checkbox name={ props.name }
                id={ props.id }
                value={ props.value }
                style={ props.style }
                disabled={ props.disabled }
                onKeyPress={ props.onEnter }
                onChange={ props.onChange }
                className={ props.className || "form-control" } />
   </FormGroup>
);

CheckboxFormGroup.propTypes = {
   value: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   errorText: PropTypes.string,
   help: PropTypes.string,
   style: PropTypes.object,
   require: PropTypes.bool,
   hasError: PropTypes.bool,
   validate: PropTypes.bool,
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