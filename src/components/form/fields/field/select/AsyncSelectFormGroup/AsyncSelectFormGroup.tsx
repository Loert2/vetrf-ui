import React from 'react';
import PropTypes from 'prop-types';

import AsyncSelect from '../../../base/select/AsyncSelect/AsyncSelect';
import FormGroup from '../../../../containers/FormGroup/FormGroup';
import withValidate from '../../hoc/withValidate';

// TODO: This is old way. Rewrite it!
const AsyncSelectFormGroup = (props) => {
   const {
      labelText,
      require,
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
      field,
      loadOptions,
      ignoreCase,
      searchPromptText,
      loadingPlaceholder,
      selectCache
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
         <AsyncSelect
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
            placeholder={placeholder}
            loadOptions={loadOptions}
            ignoreCase={ignoreCase}
            searchPromptText={searchPromptText}
            loadingPlaceholder={loadingPlaceholder}
            cache={selectCache}
         />
      </FormGroup>
   );
};

AsyncSelectFormGroup.propTypes = {
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
   onChange: PropTypes.func,
   loadOptions: PropTypes.func,
   ignoreCase: PropTypes.bool,
   searchPromptText: PropTypes.string,
   loadingPlaceholder: PropTypes.string,
   selectCache: PropTypes.bool
};

export default withValidate(AsyncSelectFormGroup);
