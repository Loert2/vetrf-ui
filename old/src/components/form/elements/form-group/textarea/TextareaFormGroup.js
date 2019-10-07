import React from 'react';
import PropTypes from 'prop-types';

import Textarea from '../../simple/textarea/Textarea';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from './../withValidate';

const TextareaFormGroup = (props) => {
   const {
      labelText,
      require,
      help,
      additionalBlock,
      value,
      errorText,
      hasError,
      id,
      name,
      style,
      disabled,
      onChange,
      className,
      placeholder,
      field
   } = props;
   return (
      <FormGroup
         labelText={labelText}
         require={require}
         help={help}
         additionalBlock={additionalBlock}
         hasError={hasError}
         errorText={errorText}>
         <Textarea
            value={value}
            id={id}
            name={name}
            style={style}
            disabled={disabled}
            onChange={(value) => onChange && onChange(value, field)}
            className={className || 'form-control'}
            placeholder={placeholder}
         />
      </FormGroup>
   );
};

TextareaFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   labelText: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   className: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   additionalBlock: PropTypes.node,
   hasError: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func
};

export default withValidate(TextareaFormGroup);
