import React from 'react';
import Select from 'react-select';
/**
 * Компонент-обертка над Select из react-select: https://github.com/JedWatson/react-select
 * */
export default (props) => (
   <Select.Async
      {...props}
      id={props.id}
      multi={props.multi}
      valueKey={props.valueKey || 'id'}
      labelKey={props.labelKey || 'name'}
      value={props.value}
      ignoreCase={props.ignoreCase || true}
      searchPromptText={
         props.searchPromptText || 'Для начала поиска введите ещё 2 символа'
      }
      loadingPlaceholder={props.loadingPlaceholder || 'Загрузка...'}
      loadOptions={props.loadOptions}
      cache={props.cache || false}
   />
);
