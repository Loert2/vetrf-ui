import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import AutocompleteInput from '../simple/input/AutocompleteInput';

import validate from '../../utils/validate-utils';

class AutocompleteFormGroup extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      };
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => nextProps.require && !nextProps.value, this.state.hasError);
      if (hasError !== this.state.hasError) {
         this.setState({
            hasError: hasError
         });
      }
   }

   render() {
      const {
         labelText,
         require,
         help,
         additionalBlock,
         value,
         errorText,
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
         field
      } = this.props;
      return (
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <AutocompleteInput  name={ name }
                                id={ id }
                                maxLength={ maxLength }
                                value={ value }
                                style={ style }
                                onFocus={ onFocus }
                                disabled={ disabled }
                                onAutocomplete={ onAutocomplete }
                                resetAutocompleteList={ resetAutocompleteList }
                                onKeyPress={ onEnter }
                                onChange={ (value) => onChange && onChange(value, field) }
                                onSelect={ onSelect }
                                items={ items }
                                viewKey={ viewKey }
                                className={ className ||  "form-control" }
                                searchLabel={ searchLabel }
                                placeholder={ placeholder } />
         </FormGroup>
      );
   }

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