import PropTypes from 'prop-types';
import React, { PureComponent } from 'react';

import Checkbox from '../../simple/checkbox/Checkbox';
import FormGroup from '../container/form-group/FormGroup'

import validate from '../../../utils/validate-utils';

/**
* Одиночный checkbox
* */
class CheckboxFormGroup extends PureComponent {
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
         style,
         disabled,
         onEnter,
         onChange,
         className,
         field
      } = this.props;
      return(
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <Checkbox name={ name }
                      id={ id }
                      value={ value }
                      style={ style }
                      disabled={ disabled }
                      onKeyPress={ onEnter }
                      onChange={ (value) => onChange && onChange(value, field) }
                      className={ className || "form-control" } />
         </FormGroup>
      );
   }
}

CheckboxFormGroup.propTypes = {
   value: PropTypes.string,
   field: PropTypes.string,
   name: PropTypes.string,
   id: PropTypes.string,
   labelText: PropTypes.string,
   errorText: PropTypes.node,
   help: PropTypes.node,
   style: PropTypes.object,
   require: PropTypes.bool,
   showError: PropTypes.bool,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   additionalBlock: PropTypes.node,
   className: PropTypes.string
};

export default CheckboxFormGroup;