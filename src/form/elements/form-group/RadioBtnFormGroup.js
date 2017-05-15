import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import RadioBtn from '../simple/RadioBtn';
import uniqueId from 'lodash/uniqueId';

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
      hasError,
      validate,
      errorText
   } = props;
   const radioBtnGroup = options.map(
      (item) =>
         <div key={ uniqueId() } >
            <RadioBtn id={ item.id }
                      name={ name }
                      value={ item.value }
                      onChange={ onChange }
                      className={ item.className }
                      text={ item.text }
                      checked={ value === item.value }
                      disabled={ item.disabled } />
         </div>
   );
   return (
      <FormGroup labelText={ labelText }
                 require={ require }
                 help={ help }
                 additionalBlock={ additionalBlock }
                 hasError={ hasError || (validate && require && !value) }
                 errorText={ errorText } >
         { radioBtnGroup }
      </FormGroup>
   );
};

RadioBtnFormGroup.propTypes = {
   options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ]),
      disabled: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ])
   })),
   name: PropTypes.string,
   value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   help: PropTypes.string,
   labelText: PropTypes.string,
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   require: PropTypes.bool
};

export default RadioBtnFormGroup;