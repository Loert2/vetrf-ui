import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Input from '../simple/input/Input';
import FormGroup from './FormGroup';

import validate from '../../utils/validate-utils';

class InputFormGroup extends Component {
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
         type,
         name,
         id,
         maxLength,
         style,
         autoFocus,
         onFocus,
         disabled,
         onEnter,
         onChange,
         className,
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
            <Input type={ type || "text" } autocomplete="off"
                   name={ name }
                   id={ id }
                   maxLength={ maxLength || 255 }
                   value={ value }
                   style={ style }
                   autoFocus={ autoFocus }
                   onFocus={ onFocus }
                   disabled={ disabled }
                   onKeyPress={ onEnter }
                   onChange={ (value) => onChange && onChange(value, field) }
                   className={ className || "form-control" }
                   placeholder={ placeholder } />
         </FormGroup>
      );
   }
}

InputFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   type: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   help: PropTypes.string,
   errorText: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default InputFormGroup;