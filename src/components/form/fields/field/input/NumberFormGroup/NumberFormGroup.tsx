import React from 'react';
import PropTypes from 'prop-types';

import NumberInput from '../../../base/input/NumberInput/NumberInput';
import FormGroup from '../../../../containers/FormGroup/FormGroup';
import withValidate from '../../hoc/withValidate';

// TODO: This is old way. Rewrite it!
const NumberFormGroup = (props) => {
   const {
      labelText,
      require,
      help,
      additionalBlock,
      value,
      errorText,
      hasError,
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
      float,
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
         labelClassName={labelClassName}
         fieldClassName={fieldClassName}
         errorText={errorText}>
         <NumberInput
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
            float={float}
         />
      </FormGroup>
   );
};

NumberFormGroup.propTypes = {
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   field: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   float: PropTypes.bool,
   hasError: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string,
   labelClassName: PropTypes.string,
   fieldClassName: PropTypes.string
};

export default withValidate(NumberFormGroup);
