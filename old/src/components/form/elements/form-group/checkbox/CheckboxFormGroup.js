import React from 'react';
import PropTypes from 'prop-types';

import Checkbox from '../../simple/checkbox/Checkbox';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from './../withValidate';

/**
 * Одиночный checkbox
 * */
const CheckboxFormGroup = (props) => {
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
      style,
      disabled,
      onEnter,
      onChange,
      className,
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
         <Checkbox
            name={name}
            id={id}
            value={value}
            style={style}
            disabled={disabled}
            onKeyPress={onEnter}
            onChange={(value) => onChange && onChange(value, field)}
            className={className || 'form-control'}
         />
      </FormGroup>
   );
};

CheckboxFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   errorText: PropTypes.node,
   help: PropTypes.node,
   hasError: PropTypes.bool,
   style: PropTypes.object,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default withValidate(CheckboxFormGroup);
