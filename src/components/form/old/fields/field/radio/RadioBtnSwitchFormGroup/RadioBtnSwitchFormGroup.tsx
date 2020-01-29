import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../../../../containers/FormGroup/FormGroup';
import RadioBtn from '../../../base/radio/RadioBtn/RadioBtn';
import withValidate from '../../hoc/withValidate';

/**
 * Компонент-переключатель из двух радио-кнопок - true или false, по умолчанию не выбрано ничего.
 * */
// TODO: This is old way. Rewrite it!
// @Deprecated
const RadioBtnSwitchFormGroup = (props) => {
   const {
      additionalBlock,
      labelText,
      require,
      help,
      itemTrue,
      itemFalse,
      value, //выбранное значение
      name,
      onChange,
      errorText,
      hasError,
      field,
      disabled,
      id
   } = props;
   return (
      <FormGroup
         labelText={labelText}
         require={require}
         help={help}
         additionalBlock={additionalBlock}
         hasError={hasError}
         errorText={errorText}>
         <div>
            <RadioBtn
               id={itemTrue.id || (id && `${id}_true`)}
               name={name}
               value="true"
               onChange={() => onChange && onChange(true, field)}
               className={itemTrue.className || 'ace form-control'}
               text={itemTrue.text || 'Да'}
               checked={value === true}
               disabled={disabled}
            />
         </div>
         <div>
            <RadioBtn
               id={itemFalse.id || (id && `${id}_false`)}
               name={name}
               value="false"
               onChange={() => onChange && onChange(false, field)}
               className={itemFalse.className || 'ace form-control'}
               text={itemFalse.text || 'Нет'}
               checked={value === false}
               disabled={disabled}
            />
         </div>
      </FormGroup>
   );
};

RadioBtnSwitchFormGroup.propTypes = {
   itemTrue: PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   }),
   itemFalse: PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   }),
   name: PropTypes.string,
   field: PropTypes.string,
   value: PropTypes.bool,
   help: PropTypes.node,
   labelText: PropTypes.string,
   errorText: PropTypes.node,
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   additionalBlock: PropTypes.node,
   showError: PropTypes.bool,
   disabled: PropTypes.bool,
   hasError: PropTypes.bool,
   require: PropTypes.bool
};

RadioBtnSwitchFormGroup.defaultProps = {
   itemTrue: {},
   itemFalse: {}
};

export default withValidate(RadioBtnSwitchFormGroup);
