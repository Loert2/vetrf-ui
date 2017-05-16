import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import AutocompleteInput from '../simple/input/AutocompleteInput';

import validate from '../../utils/validate-utils';

const AutocompleteFormGroup = (props) => {
   return (
      <FormGroup labelText={ props.labelText }
                 require={ props.require }
                 help={ props.help }
                 additionalBlock={ props.additionalBlock }
                 hasError={ validate(props, () => props.require && !props.value ) }
                 errorText={ props.errorText } >
         <AutocompleteInput  name={ props.name }
                             id={ props.id }
                             maxLength={ props.maxLength }
                             value={ props.value }
                             style={ props.style }
                             onFocus={ props.onFocus }
                             disabled={ props.disabled }
                             onAutocomplete={ props.onAutocomplete }
                             resetAutocompleteList={ props.resetAutocompleteList }
                             onKeyPress={ props.onEnter }
                             onChange={ (value) => props.onChange && props.onChange(value, props.field) }
                             onSelect={ props.onSelect }
                             items={ props.items }
                             viewKey={ props.viewKey }
                             className={ props.className ||  "form-control" }
                             searchLabel={ props.searchLabel }
                             placeholder={ props.placeholder } />
      </FormGroup>
   );
};

AutocompleteFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   labelText: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   errorText: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   onFocus: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   onClick: PropTypes.func,
   onSelect: PropTypes.func,
   resetAutocompleteList: PropTypes.func,
   onAutocomplete: PropTypes.func,
   className: PropTypes.string,
   help: PropTypes.string,
   viewKey: PropTypes.string,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   searchLabel: PropTypes.bool,
   additionalBlock: PropTypes.node,
   items: PropTypes.array
};

export default AutocompleteFormGroup;