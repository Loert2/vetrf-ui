import PropTypes from 'prop-types';
import React from 'react';

import Input from '../simple/input/Input';
import FormGroup from './FormGroup';

const InputFormGroup = (props) => (
   <FormGroup labelText={ props.labelText }
              require={ props.require }
              help={ props.help }
              additionalBlock={ props.additionalBlock }
              hasError={ props.hasError || (props.validate && props.require && !props.value) }
              errorText={ props.errorText } >
         <Input type={ props.type || "text" } autocomplete="off"
                name={ props.name }
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
                placeholder={ props.placeholder } />
   </FormGroup>
);

InputFormGroup.propTypes = {
   value: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   help: PropTypes.string,
   errorText: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
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

export default InputFormGroup;