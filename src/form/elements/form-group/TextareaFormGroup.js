import PropTypes from 'prop-types';
import React from 'react';

import Textarea from '../simple/Textarea';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

const TextareaFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              additionalBlock={ props.additionalBlock }
              hasError={ validate(props, (value) => props.require && !value ) }
              errorText={ props.errorText } >
      <Textarea value={ props.value }
                id={ props.id }
                name={ props.name }
                style={ props.style }
                disabled={ props.disabled }
                onChange={ (value) => props.onChange && props.onChange(value, props.field) }
                className={ props.className || "form-control" }
                placeholder={ props.placeholder }
      />
   </FormGroup>
);

TextareaFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   labelText: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   className: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   help: PropTypes.string,
   errorText: PropTypes.string,
   additionalBlock: PropTypes.node,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func
};

export default TextareaFormGroup;