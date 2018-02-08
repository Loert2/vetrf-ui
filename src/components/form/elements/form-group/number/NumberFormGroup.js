import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import NumberInput from '../../simple/input/number/NumberInput';
import FormGroup from '../container/form-group/FormGroup';

import validate from '../../../utils/validate-utils';

class NumberFormGroup extends PureComponent {
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
         autoFocus,
         onFocus,
         disabled,
         onEnter,
         onChange,
         className,
         placeholder,
         float,
         field
      } = this.props;
      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <NumberInput name={ name }
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
                         placeholder={ placeholder }
                         float={ float } />
         </FormGroup>
      );
   }
}

NumberFormGroup.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   field: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   placeholder: PropTypes.string,
   help: PropTypes.node,
   errorText: PropTypes.node,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   float: PropTypes.bool,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default NumberFormGroup;