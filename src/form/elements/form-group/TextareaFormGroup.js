import PropTypes from 'prop-types';
import React from 'react';

import Textarea from '../../../form/elements/simple/Textarea';
import FormGroup from './FormGroup';

const TextareaFormGroup = (props) =>  (
   <FormGroup labelText={ props.labelText } require={ props.require } help={ props.help } additionalBlock={ props.additionalBlock } >
      <Textarea value={ props.value }
                id={ props.id }
                name={ props.name }
                style={ props.style }
                disabled={ props.disabled || "" }
                onChange={ props.onChange }
                className={ props.className || "form-control" }
                placeholder={ props.placeholder }
      />
   </FormGroup>
);

TextareaFormGroup.propTypes = {
   value: PropTypes.string,
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
   additionalBlock: PropTypes.node,
   require: PropTypes.bool
};

export default TextareaFormGroup;