import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

import FormGroup from './FormGroup';
import RadioBtn from '../simple/RadioBtn';
import uniqueId from 'lodash/uniqueId';

import validate from '../../utils/validate-utils';

class RadioBtnFormGroup extends PureComponent {
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
         options,
         value, //выбранное значение
         name,
         onChange,
         errorText,
         field
      } = this.props;
      const radioBtnGroup = options.map(
         (item) =>
            <div key={ uniqueId() } >
               <RadioBtn id={ item.id }
                         name={ name }
                         value={ item.value }
                         onChange={ (value) => onChange && onChange(value, field) }
                         className={ item.className }
                         text={ item.text }
                         checked={ value === item.value }
                         disabled={ item.disabled } />
            </div>
      );
      return (
         <FormGroup labelText={ labelText }
                    require={ require }
                    help={ help }
                    additionalBlock={ additionalBlock }
                    hasError={ this.state.hasError }
                    errorText={ errorText } >
            { radioBtnGroup }
         </FormGroup>
      );
   }

}

RadioBtnFormGroup.propTypes = {
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
   help: PropTypes.node,
   labelText: PropTypes.string,
   errorText: PropTypes.node,
   onChange: PropTypes.func,
   customValidate: PropTypes.func,
   errorHandler: PropTypes.func,
   additionalBlock: PropTypes.node,
   showError: PropTypes.bool,
   require: PropTypes.bool
};

export default RadioBtnFormGroup;