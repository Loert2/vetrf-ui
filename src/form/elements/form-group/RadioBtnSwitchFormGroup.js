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
         disabled,
         id
      } = this.props;
      return (
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            <div>
               <RadioBtn id={ itemTrue.id || (id && `${ id }_true`) }
                         name={ name }
                         value="true"
                         onChange={ () => onChange && onChange(true, field) }
                         className={ itemTrue.className || "ace form-control" }
                         text={ itemTrue.text || "Да" }
                         checked={ value === true }
                         disabled={ disabled } />
            </div>
            <div>
               <RadioBtn id={ itemFalse.id || (id && `${ id }_false`) }
                         name={ name }
                         value="false"
                         onChange={ () => onChange && onChange(false, field) }
                         className={ itemFalse.className || "ace form-control" }
                         text={ itemFalse.text || "Нет" }
                         checked={ value === false }
                         disabled={ disabled } />
            </div>
         </FormGroup>
      );
   }

}

RadioBtnSwitchFormGroup.propTypes = {
   itemTrue: PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   }),
   itemFalse: PropTypes.shape({
      id: PropTypes.string,
      className: PropTypes.string,
      text: PropTypes.string
   }),
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