import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../simple/input/Input';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from './../withValidate';

const InputFormGroup = (props) => {
   const {
      labelText,
      require,
      help,
      additionalBlock,
      value,
      errorText,
      hasError,
      type,
      name,
      id,
      maxLength,
      style,
      autoFocus,
      onFocus,
      disabled,
      onEnter,
      onChange,
      className,
      placeholder,
      field,
      labelClassName,
      fieldClassName
   } = props;
   return (
      <FormGroup
         labelText={labelText}
         require={require}
         help={help}
         additionalBlock={additionalBlock}
         hasError={hasError}
         errorText={errorText}
         labelClassName={labelClassName}
         fieldClassName={fieldClassName}>
         <Input
            type={type || 'text'}
            autocomplete="off"
            name={name}
            id={id}
            maxLength={maxLength || 255}
            value={value}
            style={style}
            autoFocus={autoFocus}
            onFocus={onFocus}
            disabled={disabled}
            onKeyPress={onEnter}
            onChange={(value) => onChange && onChange(value, field)}
            className={className || 'form-control'}
            placeholder={placeholder}
         />
      </FormGroup>
   );
};

InputFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string,
   labelClassName: PropTypes.string,
   fieldClassName: PropTypes.string
};

export default withValidate(InputFormGroup);
