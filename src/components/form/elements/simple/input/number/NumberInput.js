import PropTypes from 'prop-types';
import React, { Component } from 'react';

import { onlyNumbersFilter, onlyFloatFilter } from '../filters/inputFilters';
import Input from '../Input';

/**
 * Компонет-обертка над input для чисел
 * если есть name, то в onChange передается сам event, иначе только его value
 * */
class NumberInput extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = {
         validValue: props.value || ""
      };

      this.getOnChangeHandler = this.getOnChangeHandler.bind(this);
      this.setValidValue = this.setValidValue.bind(this);
   }

   setValidValue(value){
      this.setState({ validValue: value });
   }

   getOnChangeHandler() {
      const { name, onChange, float } = this.props;
      const filter = float ? onlyFloatFilter : onlyNumbersFilter;
      if (name) {
         return (e) => {
            e.target.value = filter(e.target.value, this.state.validValue);
            this.setValidValue(e.target.value);
            onChange && onChange(e);
         };
      } else {
         return (value) =>  {
            const val = filter(value, this.state.validValue);
            this.setValidValue(val);
            onChange && onChange(val);
         }
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
         <Input type="text"
                id={ id }
                name={ name }
                maxLength={ maxLength || 255 }
                value={ value || "" }
                style={ style }
                autoFocus={ autoFocus }
                onFocus={ onFocus }
                disabled={ disabled || "" }
                onKeyPress={ onEnter }
                onChange={ this.getOnChangeHandler() }
                className={ className }
                placeholder={ placeholder } />
      )
   }
}

NumberInput.propTypes = {
   value: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number
   ]),
   name: PropTypes.string,
   id: PropTypes.string,
   placeholder: PropTypes.string,
   maxLength: PropTypes.number,
   style: PropTypes.object,
   autoFocus: PropTypes.bool,
   float: PropTypes.bool,
   onFocus: PropTypes.func,
   onEnter: PropTypes.func,
   disabled: PropTypes.oneOfType([
      PropTypes.bool,
      PropTypes.string
   ]),
   onChange: PropTypes.func,
   className: PropTypes.string
};

export default NumberInput;