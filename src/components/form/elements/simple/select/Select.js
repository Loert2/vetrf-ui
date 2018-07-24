import React from 'react';
import Select from 'react-select';
/**
* Компонент-обертка над Select из react-select: https://github.com/JedWatson/react-select
* */
export default (props) => (
   <Select { ...props }
           noResultsText="не найдено"
           placeholder={ props.placeholder || "" }
           style={ props.style }
           valueKey={ props.valueKey || "id" }
           labelKey={ props.labelKey || "name" }/>
);