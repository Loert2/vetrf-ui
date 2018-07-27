import PropTypes from 'prop-types';
import React, { Component } from 'react';
import uniqueId from 'lodash/uniqueId';
/**
 * Компонент-обертка для простого select, не требует внешних зависимостей
 * */
class SimpleSelect extends Component {
   constructor(props, context) {
      super(props, context);
      this.state = { value: this.props.value };
      this.handleChange = this.handleChange.bind(this);
   }

   handleChange(event) {
      this.setState({ value: event.target.value });
      this.props.onChange && this.props.onChange(event.target.value);
   }

   render() {
      const {
         className,
         id,
         placeholder,
         notClearableOptions,
         options,
         idType,
         valueType
      } = this.props;

      return (
         <select
            className={className}
            id={id}
            onChange={this.handleChange}
            value={this.state.value}
            placeholder={placeholder || 'Выберите из списка...'}>
            {!notClearableOptions && <option />}
            {options &&
               options.map((option, index) => (
                  <option key={uniqueId()} value={option[idType || 'id']}>
                     {option[valueType || 'name']}
                  </option>
               ))}
         </select>
      );
   }
}

SimpleSelect.propTypes = {
   idType: PropTypes.string,
   valueType: PropTypes.string,
   className: PropTypes.string,
   id: PropTypes.string,
   onChange: PropTypes.func,
   value: PropTypes.object,
   placeholder: PropTypes.string,
   notClearableOptions: PropTypes.bool,
   options: PropTypes.arrayOf(PropTypes.object)
};

export default SimpleSelect;
