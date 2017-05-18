import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import RadioBtn from '../simple/RadioBtn';

import validate from '../../utils/validate-utils';

/**
* Компонент-переключатель из двух радио-кнопок - true или false, по умолчанию не выбрано ничего.
* */
class RadioBtnSwitchFormGroup extends PureComponent {
   constructor(props) {
      super(props);
      this.state = {
         hasError: false
      };
   }

   componentWillReceiveProps(nextProps) {
      const hasError = validate(nextProps, () => nextProps.require && nextProps.value !== undefined, this.state.hasError);
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
         field,
         disabled
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
                      value="true"
                      onChange={ () => onChange && onChange(true, field) }
                      className={ itemTrue.className }
                      text={ itemTrue.text }
                      checked={ value === true }
                      disabled={ disabled } />
            <RadioBtn id={ itemFalse.id }
                      name={ name }
                      value="false"
                      onChange={ (value) => onChange && onChange(false, field) }
                      className={ itemFalse.className }
                      text={ itemFalse.text }
                      checked={ value === false }
                      disabled={ disabled } />
         </FormGroup>
      );
   }

}

RadioBtnSwitchFormGroup.propTypes = {
   itemTrue: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   })),
   itemFalse: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   })),
   name: PropTypes.string,
   field: PropTypes.string,
   value:  PropTypes.bool,
   help: PropTypes.string,
   labelText: PropTypes.string,
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   additionalBlock: PropTypes.node,
   showError: PropTypes.bool,
   disabled: PropTypes.bool,
   require: PropTypes.bool
};

RadioBtnSwitchFormGroup.defaultProps = {
   itemTrue: {}, itemFalse: {}
};

export default RadioBtnSwitchFormGroup;