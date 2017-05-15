import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import Switch from '../simple/switch/Switch';

const SwitchFormGroup = (props) => (
   <FormGroup labelText={ props.labelText } help={ props.help } additionalBlock={ props.additionalBlock } >
      <Switch id={ props.id }
              name={ props.name }
              value={ props.value }
              style={ props.style }
              disabled={ props.disabled }
              onChange={ props.onChange }
              className={ props.className }
              text={ props.text }/>
   </FormGroup>
);

SwitchFormGroup.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   name: PropTypes.string,
   id: PropTypes.string,
   text: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   labelText: PropTypes.string,
   help: PropTypes.string,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default SwitchFormGroup;