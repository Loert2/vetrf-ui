import React from 'react';
import PropTypes from 'prop-types';

import Select from '../../simple/select/Select';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from './../withValidate';

const SelectFormGroup = (props) => {
   const {
      labelText,
      require,
      disabled,
      help,
      errorClassName,
      additionalBlock,
      errorText,
      hasError,
      labelClassName,
      fieldClassName,
      multiple,
      value,
      name,
      id,
      style,
      styleInput,
      options,
      onChange,
      valueKey,
      labelKey,
      className,
      placeholder,
      field
   } = props;

   return (
      <FormGroup
         labelText={labelText}
         require={require}
         help={help}
         hasError={hasError}
         errorClassName={errorClassName}
         additionalBlock={additionalBlock}
         errorText={errorText}
         labelClassName={labelClassName}
         fieldClassName={fieldClassName}>
         <Select
            multi={multiple}
            value={value}
            name={name}
            id={id}
            style={style}
            styleInput={styleInput}
            options={options}
            onChange={(value) => onChange && onChange(value, field)}
            valueKey={valueKey}
            labelKey={labelKey}
            className={className}
            disabled={disabled}
            placeholder={placeholder}
         />
      </FormGroup>
   );
};

SelectFormGroup.propTypes = {
   labelText: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   errorClassName: PropTypes.string,
   labelClassName: PropTypes.string,
   fieldClassName: PropTypes.string,
   errorText: PropTypes.node,
   help: PropTypes.node,
   hasError: PropTypes.bool,
   showError: PropTypes.bool,
   require: PropTypes.bool,
   disabled: PropTypes.bool,
   multiple: PropTypes.bool,
   validate: PropTypes.bool,
   value: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
   field: PropTypes.string,
   style: PropTypes.object,
   styleInput: PropTypes.object,
   valueKey: PropTypes.string,
   labelKey: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   options: PropTypes.array,
   additionalBlock: PropTypes.node,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onChange: PropTypes.func
};

export default withValidate(SelectFormGroup);
