import PropTypes from 'prop-types';
import React, { Component } from 'react';
import SimpleSelect from '../../../../form/elements/simple/select/simple/SimpleSelect';

class SelectTableFilter extends Component {
   constructor(props, context) {
      super(props, context);
      this.filter = this.filter.bind(this);
   }

   filter(value) {
      const { onChange } = this.props;
      if (onChange && (value || value === '')) {
         onChange(value);
      }
   }

   render() {
      const { id, className, optionList, idType, valueType, placeholder } = this.props;

      return (
         <SimpleSelect
            className={className || 'input-filter form-control'}
            placeholder={placeholder || 'Выберите статус из списка...'}
            options={optionList}
            idType={idType}
            valueType={valueType}
            onChange={this.filter}
            id={id}
         />
      );
   }
}

SelectTableFilter.propTypes = {
   optionList: PropTypes.arrayOf(
      PropTypes.shape({
         idType: PropTypes.string,
         valueType: PropTypes.string
      })
   ),
   id: PropTypes.string,
   className: PropTypes.string,
   placeholder: PropTypes.string,
   onChange: PropTypes.func
};

export default SelectTableFilter;
