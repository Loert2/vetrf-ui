import React from 'react';
import PropTypes from 'prop-types';
import uniqueId from 'lodash/uniqueId';

import FormGroup from '../../../../containers/FormGroup/FormGroup';
import RadioBtn from '../../../base/radio/RadioBtn/RadioBtn';
import withValidate from '../../hoc/withValidate';

// TODO: This is old way. Rewrite it!
// @Deprecated
const RadioBtnFormGroup = (props) => {
   const {
      additionalBlock,
      labelText,
      require,
      help,
      options,
      value, //выбранное значение
      name,
      onChange,
      errorText,
      hasError,
      field
   } = props;
   const radioBtnGroup = options.map((item) => (
      <div key={uniqueId()}>
         <RadioBtn
            id={item.id}
            name={name}
            value={item.value}
            onChange={(value) => onChange && onChange(value, field)}
            className={item.className}
            text={item.text}
            checked={value === item.value}
            disabled={item.disabled}
         />
      </div>
   ));
   return (
      <FormGroup
         labelText={labelText}
         require={require}
         help={help}
         additionalBlock={additionalBlock}
         hasError={hasError}
         errorText={errorText}>
         {radioBtnGroup}
      </FormGroup>
   );
};

RadioBtnFormGroup.propTypes = {
   options: PropTypes.arrayOf(
      PropTypes.shape({
         id: PropTypes.string,
         className: PropTypes.string,
         text: PropTypes.string,
         value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
         disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string])
      })
   ),
   name: PropTypes.string,
   field: PropTypes.string,
   value: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   labelText: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   hasError: PropTypes.bool,
   showError: PropTypes.bool,
   require: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   additionalBlock: PropTypes.node
};

export default withValidate(RadioBtnFormGroup);
