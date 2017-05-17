import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Textarea from '../simple/Textarea';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

class TextareaFormGroup extends Component {
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
            hasError: hasError,
            isValid: this.state.isValid
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
         id,
         name,
         style,
         disabled,
         onChange,
         className,
         placeholder,
         field
      } = this.props;
      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
      <Textarea value={ value }
                id={ id }
                name={ name }
                style={ style }
                disabled={ disabled }
                onChange={ (value) => onChange && onChange(value, field) }
                className={ className || "form-control" }
                placeholder={ placeholder }
      />
         </FormGroup>
      );
   }
}

TextareaFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   labelText: PropTypes.string,
   style: PropTypes.object,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   className: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   help: PropTypes.string,
   errorText: PropTypes.string,
   additionalBlock: PropTypes.node,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func
};

export default TextareaFormGroup;