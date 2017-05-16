import PropTypes from 'prop-types';
import React from 'react';

import NumberInput from '../simple/input/NumberInput';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

const NumberFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              additionalBlock={ props.additionalBlock }
              hasError={ validate(props, () => props.require && !props.value) }
              errorText={ props.errorText } >
      <NumberInput name={ props.name }
                   id={ props.id }
                   maxLength={ props.maxLength || 255 }
                   value={ props.value }
                   style={ props.style }
                   autoFocus={ props.autoFocus }
                   onFocus={ props.onFocus }
                   disabled={ props.disabled }
                   onKeyPress={ props.onEnter }
                   onChange={ (value) => props.onChange && props.onChange(value, props.field) }
                   className={ props.className || "form-control" }
                   placeholder={ props.placeholder }
                   float={ props.float } />
   </FormGroup>
);

NumberFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
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
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
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