import PropTypes from 'prop-types';
import React from 'react';

import NumberInput from '../simple/input/NumberInput';
import FormGroup from './FormGroup';

const NumberFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              additionalBlock={ props.additionalBlock }
              hasError={ props.hasError || (props.validate && props.require && !props.value) }
              errorText={ props.errorText } >
      <NumberInput name={ props.name }
                   id={ props.id }
                   maxLength={ props.maxLength || 255 }
                   value={ props.value || "" }
                   style={ props.style }
                   autoFocus={ props.autoFocus }
                   onFocus={ props.onFocus }
                   disabled={ props.disabled || "" }
                   onKeyPress={ props.onEnter }
                   onChange={ props.onChange }
                   className={ props.className || "form-control" }
                   placeholder={ props.placeholder }
                   float={ props.float } />
   </FormGroup>
);

NumberFormGroup.propTypes = {
   value: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   help: PropTypes.string,
   errorText: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   float: PropTypes.bool,
   require: PropTypes.bool,
   hasError: PropTypes.bool,
   validate: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default NumberFormGroup;