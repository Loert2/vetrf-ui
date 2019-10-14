import React from 'react';
import PropTypes from 'prop-types';

import Input from '../../simple/input/Input';
import NumberInput from '../../simple/input/number/NumberInput';
import Select from '../../simple/select/Select';
import FormGroup from '../container/form-group/FormGroup';
import withValidate from './../withValidate';

const InputSelectFormGroup = (props) => {
   const { labelText, require, help, input, select, additionalBlock, errorText, hasError } = props;

   return (
      <FormGroup
         labelText={labelText}
         hasError={hasError}
         require={require}
         help={help}
         additionalBlock={additionalBlock}
         errorText={errorText}>
         <div className="form-group row">
            <div className="col-md-12 no-padding">
               <span className="col-md-6">
                  {input.number || input.float ? (
                     <NumberInput
                        name={input.name}
                        id={input.id}
                        maxLength={input.maxLength || 255}
                        value={input.value}
                        style={input.style}
                        autoFocus={input.autoFocus}
                        onFocus={input.onFocus}
                        disabled={input.disabled}
                        onKeyPress={input.onEnter}
                        onChange={(value) => input.onChange && input.onChange(value, input.field)}
                        className={input.className || 'form-control'}
                        placeholder={input.placeholder}
                        float={input.float}
                     />
                  ) : (
                     <Input
                        type={input.type || 'text'}
                        autocomplete="off"
                        name={input.name}
                        id={input.id}
                        maxLength={input.maxLength || 255}
                        value={input.value || ''}
                        style={input.style}
                        autoFocus={input.autoFocus}
                        onFocus={input.onFocus}
                        disabled={input.disabled || ''}
                        onKeyPress={input.onEnter}
                        onChange={(value) => input.onChange && input.onChange(value, input.field)}
                        className={input.className || 'form-control'}
                        placeholder={input.placeholder}
                     />
                  )}
               </span>
               <span className="col-md-6">
                  <Select
                     value={select.value}
                     name={select.name}
                     id={select.id}
                     style={select.style}
                     styleInput={select.styleInput}
                     options={select.options}
                     onChange={(value) => select.onChange && select.onChange(value, select.field)}
                     valueKey={select.valueKey}
                     labelKey={select.labelKey}
                     className={select.className}
                     placeholder={select.placeholder}
                  />
               </span>
            </div>
         </div>
      </FormGroup>
   );
};

InputSelectFormGroup.propTypes = {
   labelText: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   hasError: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   additionalBlock: PropTypes.node,
   input: PropTypes.shape({
      value: PropTypes.string,
      field: PropTypes.string,
      name: PropTypes.string,
      id: PropTypes.string,
      placeholder: PropTypes.string,
      maxLength: PropTypes.number,
      className: PropTypes.string,
      style: PropTypes.object,
      autoFocus: PropTypes.bool,
      number: PropTypes.bool,
      float: PropTypes.bool,
      onFocus: PropTypes.func,
      onEnter: PropTypes.func,
      disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
      onChange: PropTypes.func
   }),
   select: PropTypes.shape({
      id: PropTypes.string,
      value: PropTypes.object,
      field: PropTypes.string,
      style: PropTypes.object,
      styleInput: PropTypes.object,
      valueKey: PropTypes.string,
      labelKey: PropTypes.string,
      className: PropTypes.string,
      placeholder: PropTypes.string,
      options: PropTypes.array,
      onChange: PropTypes.func
   })
};

InputSelectFormGroup.defaultProps = { input: {}, select: {} };

export default withValidate(
   InputSelectFormGroup,
   (props) => props.require && (!props.input.value || !props.select.value)
);