import React from 'react';
import Select from 'react-select';
/**
 * Компонент-обертка над Select из react-select: https://github.com/JedWatson/react-select
 * // TODO: ОБНОВИТЬ ДО ПОСЛЕДНЕЙ ВЕРСИИ, МЫ ЗАСТРЯЛИ НА 1.3.0
 * */
// TODO: This is old way. Rewrite it!
// @Deprecated
export default (props) => (
   <Select
      {...props}
      noResultsText="не найдено"
      placeholder={props.placeholder || ''}
      style={props.style}
      valueKey={props.valueKey || 'id'}
      labelKey={props.labelKey || 'name'}
      disabled={props.disabled}
   />
);
