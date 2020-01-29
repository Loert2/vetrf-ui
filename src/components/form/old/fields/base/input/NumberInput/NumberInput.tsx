import PropTypes from 'prop-types';
import React, { Component } from 'react';

import Input from '../Input/Input';

const FLOAT_REGEXP_1 = /^\$?\d+.(\d{3})*(,\d*)$/; //Numbers like: 1.123,56
const FLOAT_REGEXP_2 = /^\$?\d+,(\d{3})*(\.\d*)$/; //Numbers like: 1,123.56
const FLOAT_REGEXP_3 = /^\$?\d+(\.\d*)?$/; //Numbers like: 1123.56
const FLOAT_REGEXP_4 = /^\$?\d+(,\d*)?$/; //Numbers like: 1123,56

const NUMBER_REGEXP = /[^0-9]/g;

const onlyFloatFilter = (value, oldValid = '') => {
   if (!value) {
      return '';
   }
   if (FLOAT_REGEXP_1.test(value)) {
      return value.replace('.', '').replace(',', '.');
   } else if (FLOAT_REGEXP_2.test(value)) {
      return value.replace(',', '');
   } else if (FLOAT_REGEXP_3.test(value)) {
      return value;
   } else if (FLOAT_REGEXP_4.test(value)) {
      return value.replace(',', '.');
   }
   return oldValid;
};

const onlyNumbersFilter = (value, oldValid = '') => {
   if (!value) {
      return '';
   }
   return value ? value.replace(NUMBER_REGEXP, '') : oldValid;
};

/**
 * Компонет-обертка над input для чисел
 * если есть name, то в onChange передается сам event, иначе только его value
 * */
// TODO: This is old way. Rewrite it!
// @Deprecated
class NumberInput extends Component<any> {
   state = {
      validValue: ''
   };

   constructor(props, context) {
      super(props, context);
      this.state = {
         validValue: props.value || ''
      };

      this.getOnChangeHandler = this.getOnChangeHandler.bind(this);
      this.setValidValue = this.setValidValue.bind(this);
   }

   setValidValue(value) {
      this.setState({ validValue: value });
   }

   getOnChangeHandler() {
      const { onChange, float } = this.props;
      const filter = float ? onlyFloatFilter : onlyNumbersFilter;

      return (value) => {
         const val = filter(value, this.state.validValue);
         this.setValidValue(val);
         onChange && onChange(val);
      }
   }

   render() {
      const {
         id,
         name,
         maxLength,
         value,
         style,
         autoFocus,
         onFocus,
         disabled,
         onEnter,
         className,
         placeholder
      } = this.props;
      return (
         <Input
            type="text"
            id={id}
            name={name}
            maxLength={maxLength || 255}
            value={value || ''}
            style={style}
            autoFocus={autoFocus}
            onFocus={onFocus}
            disabled={disabled || ''}
            onKeyPress={onEnter}
            onChange={this.getOnChangeHandler()}
            className={className}
            placeholder={placeholder}
         />
      );
   }
}

(NumberInput as any).propTypes = {
   value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   float: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default NumberInput;
