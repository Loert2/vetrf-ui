import PropTypes from 'prop-types';
import React from 'react';

import DatePicker from '../../../form/elements/simple/date/DatePicker';
import FormGroup from './FormGroup'

const DateFormGroup = (props) => (
   <FormGroup labelText={ props.labelText } require={ props.require } help={ props.help } additionalBlock={ props.additionalBlock } >
         <DatePicker value={ props.value }
                     id={ props.id }
                     onChange={ props.onChange }
                     className={ props.className } />
   </FormGroup>
);

DateFormGroup.propTypes = {
   value: PropTypes.string,
   labelText: PropTypes.string,
   id: PropTypes.string,
   help: PropTypes.string,
   require: PropTypes.bool,
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default DateFormGroup;