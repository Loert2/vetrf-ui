import React from 'react';
import PropTypes from 'prop-types';

import FormGroup from '../container/form-group/FormGroup';
import AutocompleteInput from '../../simple/input/autocomplete/AutocompleteInput';
import withValidate from './../withValidate';

const AutocompleteFormGroup = (props) => {
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
      maxLength,
      style,
      onFocus,
      disabled,
      onAutocomplete,
      resetAutocompleteList,
      onEnter,
      onChange,
      onSelect,
      items,
      viewKey,
      className,
      searchLabel,
      placeholder,
      searchField,
      selectField,
      dpropdownClass
   } = props;

   return (
      <FormGroup labelText={ labelText }
                 require={ require }
                 help={ help }
                 additionalBlock={ additionalBlock }
                 hasError={ hasError }
                 errorText={ errorText } >
         <AutocompleteInput  name={ name }
                             id={ id }
                             maxLength={ maxLength }
                             value={ value }
                             searchField={ searchField }
                             selectField={ selectField }
                             style={ style }
                             onFocus={ onFocus }
                             disabled={ disabled }
                             onAutocomplete={ onAutocomplete }
                             resetAutocompleteList={ resetAutocompleteList }
                             onKeyPress={ onEnter }
                             onChange={ (value) => onChange && onChange(value, searchField, selectField) }
                             onSelect={ onSelect }
                             items={ items }
                             viewKey={ viewKey }
                             className={ className ||  "form-control" }
                             dpropdownClass={ dpropdownClass }
                             searchLabel={ searchLabel }
                             placeholder={ placeholder } />
      </FormGroup>
   );
};

AutocompleteFormGroup.propTypes = {
   value: PropTypes.string,
   searchField: PropTypes.string,
   selectField: PropTypes.string,
   labelText: PropTypes.string,
   dpropdownClass: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   errorText: PropTypes.node,
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
   help: PropTypes.node,
   viewKey: PropTypes.string,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   searchLabel: PropTypes.bool,
   additionalBlock: PropTypes.node,
   items: PropTypes.array
};

export default withValidate(AutocompleteFormGroup);