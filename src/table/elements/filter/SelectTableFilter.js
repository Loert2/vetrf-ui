import PropTypes from 'prop-types';
import React, { Component } from 'react';
import isEmpty from 'lodash/isEmpty'

export default class SelectTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
   }

   filter(event){
      let filter;
      const { onChange, name } = this.props;
      if (name){
         event.persist();
         filter = { [event.target.name]: event.target.value };
      } else {
         filter = event;
      }
      onChange(filter);
   };

   render () {
      const {
         id,
         name,
         style,
         className,
         valuesSelect,
         multiple,
         optionStartText,
         disabled,
         titleText
      } = this.props;

      let selectOptionList = [ <option disabled> Выберите { optionStartText || 'статус' } </option> ];
      if (isEmpty(valuesSelect)) {
         // valuesSelect.forEach( (item) => {
         //    const newValue = item.value;
         //    selectOptionList += <option value={ newValue }> { newValue } </option>
         // });
          for (let i = 0; i < valuesSelect.length; i++){
              const newValue = valuesSelect[{i}].value;
              selectOptionList += <option value={ newValue }> { newValue } </option>
          }
      }
      return (
      <div>
         <select name={ name }
                 disabled={ disabled }
                 multiple={ multiple || false }
                 style={ style }
                 onChange={ this.filter }
                 className={ className || "input-filter form-control" }
                 id={ id }
                 title={ titleText || "Отфильтравать по статусу" }>
             { selectOptionList }
         </select>
      </div>
      );
   }
}

SelectTableFilter.propTypes = {
   valuesSelect: PropTypes.arrayOf(PropTypes.string),
   name: PropTypes.string,
   className: PropTypes.string,
   style: PropTypes.object,
   onChange: PropTypes.func,
   multiple: PropTypes.bool,
   optionStartText: PropTypes.string
};

