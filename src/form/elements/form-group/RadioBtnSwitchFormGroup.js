import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import RadioBtn from '../simple/RadioBtn';
import uniqueId from 'lodash/uniqueId';

import validate from '../../utils/validate-utils';

class RadioBtnSwitchFormGroup extends PureComponent {
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
         additionalBlock,
         labelText,
         require,
         help,
         itemTrue,
         itemFalse,
         value, //выбранное значение
         name,
         onChange,
         errorText,
         field
      } = this.props;
      return (
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <RadioBtn id={ itemTrue.id }
                      name={ name }
                      value={ itemTrue.value }
                      onChange={ (value) => onChange && onChange(value, field) }
                      className={ itemTrue.className }
                      text={ itemTrue.text }
                      checked={ value === itemTrue.value }
                      disabled={ itemTrue.disabled } />
            <RadioBtn id={ itemFalse.id }
                      name={ name }
                      value={ itemFalse.value }
                      onChange={ (value) => onChange && onChange(value, field) }
                      className={ itemFalse.className }
                      text={ itemFalse.text }
                      checked={ value === itemFalse.value }
                      disabled={ itemFalse.disabled } />
         </FormGroup>
      );
   }

}

RadioBtnSwitchFormGroup.propTypes = {
   options: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string,
      value: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ]),
      disabled: PropTypes.oneOfType([
         PropTypes.bool,
         PropTypes.string
      ])
   })),
   name: PropTypes.string,
   field: PropTypes.string,
   value: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   help: PropTypes.string,
   labelText: PropTypes.string,
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   additionalBlock: PropTypes.node,
   showError: PropTypes.bool,
   require: PropTypes.bool
};

RadioBtnSwitchFormGroup.defaultProps = {};

export default RadioBtnSwitchFormGroup;