import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Select from '../simple/select/Select';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

class SelectFormGroup extends PureComponent {
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
         errorClassName,
         additionalBlock,
         errorText,
         multiple,
         value,
         name,
         id,
         style,
         styleInput,
         options,
         onChange,
         valueKey,
         labelKey,
         className,
         placeholder,
         field
      } = this.props;
      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    hasError={ this.state.hasError }
                    errorClassName={ errorClassName }
                    additionalBlock={ additionalBlock }
                    errorText={ errorText } >
            <Select multi={ multiple }
                    value={ value }
                    name={ name }
                    id={ id }
                    style={ style }
                    styleInput={ styleInput }
                    options={ options }
                    onChange={ (value) => onChange && onChange(value, field) }
                    valueKey={ valueKey }
                    labelKey={ labelKey }
                    className={ className }
                    placeholder={ placeholder }/>
         </FormGroup>
      );
   }
}

SelectFormGroup.propTypes = {
   labelText: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   errorClassName: PropTypes.string,
   errorText: PropTypes.string,
   showError: PropTypes.bool,
   require: PropTypes.bool,
   multiple: PropTypes.bool,
   validate: PropTypes.bool,
   value: PropTypes.oneOfType([
      PropTypes.array,
      PropTypes.object
   ]),
   field: PropTypes.string,
   style: PropTypes.object,
   styleInput: PropTypes.object,
   valueKey: PropTypes.string,
   labelKey: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   options: PropTypes.array,
   additionalBlock: PropTypes.node,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onChange: PropTypes.func
};

export default SelectFormGroup;
