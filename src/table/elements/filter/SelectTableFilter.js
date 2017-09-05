import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SimpleSelect from "../../../form/elements/simple/select/SimpleSelect";

class SelectTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
   }

   filter (value) {
      const { onChange } = this.props;
      if(onChange && value !== undefined && value !== null){
         onChange(value);
      }
      return null;
   };

   render () {
      const {
         id,
         className,
         optionList,
         idType,
         valueType
      } = this.props;

      return (
         <div>
            <SimpleSelect className={ className || "input-filter form-control" }
                          placeholder={ "Выберите статус из списка..." }
                          notClearableOptions={ true }
                          options={ optionList }
                          idType={ idType || "id" }
                          valueType={ valueType || "name" }
                          onChange={ this.filter }
                          value={ {} }
                          id={ id } />
         </div>
      );
   }
}

SelectTableFilter.propTypes = {
   optionList: PropTypes.arrayOf(
      PropTypes.shape({
         idType: PropTypes.string,
         valueType: PropTypes.string
      })),
   id: PropTypes.string,
   className: PropTypes.string,
   onChange: PropTypes.func,
};

export default SelectTableFilter;