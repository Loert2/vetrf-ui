import PropTypes from 'prop-types';
import React from 'react';

import Checkbox from 'components/form/elements/simple/Checkbox';
import FormGroup from './FormGroup'

const CheckboxFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText } require={ props.require } help={ props.help } additionalBlock={ props.additionalBlock } >
      <Checkbox name={ props.name }
                id={ props.id }
                value={ props.value || "" }
                style={ props.style }
                disabled={ props.disabled || "" }
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
   help: PropTypes.string,
   style: PropTypes.object,
   require: PropTypes.bool,
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